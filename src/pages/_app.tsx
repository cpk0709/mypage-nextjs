import "@/styles/globals.css";

import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "@/components/common/Head";
import { globalStyles } from "@/styles/reset";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Head />
      <Component {...pageProps} />
    </Provider>
  );
}
