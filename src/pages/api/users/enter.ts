import { NextApiRequest, NextApiResponse } from 'next';

import withHandler from '@/libs/server/withHandler';

function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('success', req.body.email);
  res.status(200).end();
}

export default withHandler('POST', handler);
