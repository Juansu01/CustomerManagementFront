import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { HeaderSimple } from '@/components/SimpleHeader/HeaderSimple';
import { AuthContext } from '@/components/Context/Context';
import { useContext } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const authContext = useContext(AuthContext);
  return (
    <MantineProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <Head>
          <title>Manejo De Clientes</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <HeaderSimple />
        <Component {...pageProps} />
      </AuthContext.Provider>
    </MantineProvider>
  );
}
