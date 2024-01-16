/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '@/libs/server/withHandler';
import { logger } from '@/utils/logger';
import client from '@/libs/server/client';
import { withApiSession } from '@/libs/server/withSession';

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

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    include: {
      user: true,
    },
  });
  // logger.log('token:', token);

  if (!exists) {
    return res.status(404).end();
  }

  // logger.log('exists:', exists);
  req.session.user = {
    id: exists.userId,
  };
  await req.session.save();
  res.status(200).json({ ok: true });
}

export default withApiSession(withHandler('POST', handler));
