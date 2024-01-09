/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import withHandler from '@/libs/server/withHandler';
import { logger } from '@/utils/logger';
import client from '@/libs/server/client';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

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
  logger.log('token:', token);

  if (!exists) {
    return res.status(404).end();
  }

  logger.log('exists:', exists);
  req.session.user = {
    id: exists.userId,
  };
  await req.session.save();
  res.status(200).json({ ok: true });
}

export default withIronSessionApiRoute(withHandler('POST', handler), {
  cookieName: 'carrotsession',
  password: 'sdkjn38n2ikfdnfoi_dsinfj328fsnfksajnkepgnkdfjngjks',
});
