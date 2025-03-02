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
        {/* Favicon and device icons */}
        <link href="/favicon.ico" rel="icon" type="image/png" />
        <link href="/apple-touch-icon.ico" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/" rel="manifest" />
        
        {/* Basic meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta name="keywords" content="SmartifyTech, AI technology, smart solutions, tech innovation" />
        <meta name="author" content="SmartifyTech" />
        
        {/* Robots meta */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>

      <DefaultSeo
        title="SmartifyTech - Intelligent Solutions for Modern Challenges"
        titleTemplate="%s | SmartifyTech"
        description="SmartifyTech provides cutting-edge AI solutions and smart technology services to transform your business. Discover how our innovative solutions can help you succeed."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.smartifytech.com/',
          siteName: 'SmartifyTech',
          title: 'SmartifyTech - Intelligent Solutions for Modern Challenges',
          description: 'SmartifyTech provides cutting-edge AI solutions and smart technology services to transform your business.',
          images: [
            {
              url: 'https://www.smartifytech.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'SmartifyTech',
            },
          ],
        }}
        twitter={{
          handle: '@smartifytech',
          site: '@smartifytech',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'application-name',
            content: 'SmartifyTech'
          },
          {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'default'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'SmartifyTech'
          },
          {
            name: 'format-detection',
            content: 'telephone=no'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          }
        ]}
      />

      <SkeletonTheme baseColor="#EEEEEE" highlightColor="white">
        {children}
      </SkeletonTheme>
    </>
  );
};

export default memo(AppProvider);
