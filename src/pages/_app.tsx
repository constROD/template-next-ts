import Head from 'next/head';
import React from 'react';
import { theme, GlobalStyle, ThemeProvider } from 'shared/theme';
import '../../styles/globals.css';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Template Next TypeScript</title>

        {/* <!-- Viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* <!--  Primary --> */}
        <meta name="title" content="constROD's Website" />
        <meta name="description" content="constROD's Personal Website" />
        <meta name="application_name" content="constROD's App" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="constROD's Website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="constROD's Website" />
        <meta property="og:url" content="https://constrod.me" />
        <meta property="og:image" content="https://constrod.me/banner.png" />
        <meta property="og:description" content="constROD's Personal Website" />

        {/* <!--  Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="banner_description" />

        {/* <!--  For Analytics --> */}
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@username" />

        {/* <!--  Favicon --> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
