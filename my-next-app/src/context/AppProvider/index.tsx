import Head from "next/head";
import { DefaultSeo } from "next-seo";
import React, { FC, memo, ReactNode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

type Props = {
  children: ReactNode;
};

const AppProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" type="image/png" />
        <link
          href="/apple-touch-icon.ico"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link color="#365DC7" href="/" rel="icon" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color"></meta>
        <meta charSet="utf-8" />
      </Head>
      <DefaultSeo description="SmartifyTech" title="SmartifyTech" />
      <SkeletonTheme baseColor="#EEEEEE" highlightColor="white">
        {children}
      </SkeletonTheme>
    </>
  );
};

export default memo(AppProvider);
