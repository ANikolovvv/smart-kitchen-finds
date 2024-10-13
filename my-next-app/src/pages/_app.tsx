import { NextUIProvider } from "@nextui-org/react";
import "../../public/styles/NextUi.css";
import type { AppProps } from "next/app";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;
