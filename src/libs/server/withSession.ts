import { withIronSessionApiRoute } from 'iron-session/next';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: 'carrotsession',
  password: process.env.COOKIE_PASSWORD!,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
