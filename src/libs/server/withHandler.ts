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
  fn: (
    req: NextApiRequest,
    res: NextApiResponse,
  ) => Promise<NextApiResponse<unknown> | undefined | void>,
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(405).end();
    }

    try {
      await fn(req, res);
    } catch (error) {
      logger.log(error);

      return res.status(500).json({ error });
    }
  };
}
