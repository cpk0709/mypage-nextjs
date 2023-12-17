/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextApiRequest, NextApiResponse } from 'next';

import withHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import twilio from 'twilio';
import { logger } from '@/utils/logger';
// import smtpTransport from 'nodemailer/lib/smtp-transport';
import smtptTransport from '@/libs/server/email';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { email, phone } = req.body;
  const user = phone ? { phone: Number(phone) } : email ? { email } : undefined;

  if (!user) {
    return res.status(400).json({ ok: false });
  }

  const payload = String(Math.floor(100_000 + Math.random() * 900_000));
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}`,
    });
    logger.log('message :::', message);
  }

  if (email) {
    const mailOptions = {
      from: process.env.EMAIL_ID,
      to: email,
      subject: 'Nomad Carrot Authentication Email',
      text: `Authentication Code : ${payload}`,
    };

    try {
      const result = await smtptTransport.sendMail(mailOptions);
    } catch (error) {
      logger.log(error);
    }

    smtptTransport.close();
  }

  res.json({ ok: true });
}

export default withHandler('POST', handler);
