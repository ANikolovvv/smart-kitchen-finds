import GeneralLayout from "@/layouts/GeneralLayout";
import "../../public/styles/NextUi.css";

import AppProvider from "@/context/AppProvider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const layout = Component || ((page: any) => page);
  const AnyComponent = Component as any;

  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      <NextUIProvider>
        <AppProvider>
          <GeneralLayout><AnyComponent {...pageProps} /></GeneralLayout>
        </AppProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
