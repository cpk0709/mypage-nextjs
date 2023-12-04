/* eslint-disable @typescript-eslint/no-misused-promises */
import { NextApiRequest, NextApiResponse } from 'next';

import withHandler, { ResponseType } from '@/libs/server/withHandler';
import client from '@/libs/server/client';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { email, phone } = req.body;
  const user = phone ? { phone: Number(phone) } : email ? { email } : undefined;

  if (!user) {
    return res.status(400).json({ ok: false });
  }

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
  res.json({ ok: true });
}

export default withHandler('POST', handler);
