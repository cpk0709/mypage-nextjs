/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextApiRequest, NextApiResponse } from 'next';

import withHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';
import twilio from 'twilio';
import { logger } from '@/utils/logger';
import { createSmtpTransport } from '@/libs/server/email';
const AWS = require('aws-sdk');
const region = 'ap-northeast-2';

const ssm = new AWS.SSM({ region });

async function getParameter(name: string): Promise<string> {
  const params = {
    Name: name,
    WithDecryption: true,
  };

  try {
    const response = await ssm.getParameter(params).promise();

    return response.Parameter.Value;
  } catch (error) {
    logger.log('Error in getParameter:', error);

    throw error;
  }
}

// const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { email, phone } = req.body;
  const user = phone ? { phone: Number(phone) } : email ? { email } : undefined;

  if (!user) {
    return res.status(400).json({ ok: false });
  }

  // AWS SSM으로부터 환경변수를 불러옵니다.
  const twilioSid = await getParameter('my_blog_env_twilio_sid');
  const twilioToken = await getParameter('my_blog_env_twilio_token');
  const twilioMsid = await getParameter('my_blog_env_twilio_msid');
  const myPhone = await getParameter('my_blog_env_my_phone');
  const emailId = await getParameter('my_blog_env_email_id');

  const twilioClient = twilio(twilioSid, twilioToken);

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
      // messagingServiceSid: process.env.TWILIO_MSID,
      // to: process.env.MY_PHONE!,
      messagingServiceSid: twilioMsid,
      to: myPhone,
      body: `Your login token is ${payload}`,
    });
    logger.log('message :::', message);
  }

  if (email) {
    const mailOptions = {
      // from: process.env.EMAIL_ID,
      from: emailId,
      to: email,
      subject: 'Nomad Carrot Authentication Email',
      text: `Authentication Code : ${payload}`,
    };

    try {
      // const result = await smtptTransport.sendMail(mailOptions);
      const smtpTransport = await createSmtpTransport();
      const result = await smtpTransport.sendMail(mailOptions);
      smtpTransport.close();
    } catch (error) {
      logger.log(error);
    }

    // smtptTransport.close();
  }

  res.json({ ok: true });
}

export default withHandler('POST', handler);
