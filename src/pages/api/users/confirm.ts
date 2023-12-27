/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
import { NextApiRequest, NextApiResponse } from 'next';

import withHandler, { ResponseType } from '@/libs/server/withHandler';
import { logger } from '@/utils/logger';
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

function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { token } = req.body;
  logger.log('token:', token);
  res.status(200).json({ ok: true });
}

export default withHandler('POST', handler);
