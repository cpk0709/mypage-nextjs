import { NextApiRequest, NextApiResponse } from 'next';
import client from '@/libs/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await client.user.create({
    data: {
      email: 'test456@gmail.com',
      name: 'test2',
    },
  });
  res.status(200).json({ message: 'ok' });
}
