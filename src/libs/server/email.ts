import { logger } from '@/utils/logger';
import nodemailer from 'nodemailer';

// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
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
// const smtptTransport = nodemailer.createTransport({
//   service: 'Naver',
//   host: 'smtp.naver.com',
//   port: 587,
//   auth: {
//     user: process.env.EMAIL_ID,
//     pass: process.env.EMAIL_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

async function createSmtpTransport() {
  try {
    const emailId = await getParameter('my_blog_env_email_id');
    const emailPassword = await getParameter('my_blog_env_email_password');

    return nodemailer.createTransport({
      service: 'Naver',
      host: 'smtp.naver.com',
      port: 587,
      auth: {
        user: emailId,
        pass: emailPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  } catch (error) {
    logger.log('Error in createSmtpTransport:', error);

    throw error;
  }
}

export { createSmtpTransport };
