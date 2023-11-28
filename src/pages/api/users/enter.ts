import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end();

    return;
  }

  // eslint-disable-next-line no-console
  console.log(req.body.email);
  res.status(200).end();
}
