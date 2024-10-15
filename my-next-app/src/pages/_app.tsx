import { NextUIProvider } from "@nextui-org/react";
import "../../public/styles/NextUi.css";
import type { AppProps } from "next/app";
import React from "react";
import AppProvider from "@/context/AppProvider";
import NavigationBar from "@/layouts/NavigationBar";

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <NextUIProvider>
      <AppProvider>
        <NavigationBar />
        <main className="bg-orange-400 text-gray-800 flex h-screen w-full">
          <AnyComponent {...pageProps} />
        </main>
      </AppProvider>
    </NextUIProvider>
  );
}
