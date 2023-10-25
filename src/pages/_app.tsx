import '@/styles/globals.css';

import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import Head from '@/components/common/Head';
import { globalStyles } from '@/styles/reset';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Head />
      <Component {...pageProps} />
    </>
  );
}
