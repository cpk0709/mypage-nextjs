import '@/styles/globals.css';

import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import Head from '@/components/common/Head';
import { globalStyles } from '@/styles/reset';
import { createStore } from 'redux';
import counter from '@/reducers';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  const store = createStore(counter);
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Head />
      <Component {...pageProps} value={store.getState()} onIncrement={() => store.dispatch({type:'INCREMENT'})} onDecrement={() => store.dispatch({type:'DECREMENT'})}/>
    </Provider>
  );
}
