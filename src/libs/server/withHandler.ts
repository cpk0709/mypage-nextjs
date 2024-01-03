import { logger } from '@/utils/logger';
import { NextApiRequest, NextApiResponse } from 'next';
// import { getIronSession } from 'iron-session';
export interface ResponseType {
  ok: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function withHandler(
  method: 'GET' | 'POST' | 'DELETE',
  fn: (req: NextApiRequest, res: NextApiResponse) => void,
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(405).end();
    }

    // const session = getIronSession(req, res, {
    //   password: 'sdkjfnskdnfksnfkjsnf389hjr89283hsjknfjksnfwn',
    //   cookieName: 'test-cookieName',
    // });
    // console.log('iron session :::', session);

    try {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await fn(req, res);
    } catch (error) {
      logger.log(error);

      return res.status(500).json({ error });
    }
  };
}
