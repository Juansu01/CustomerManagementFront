import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { HeaderSimple } from '@/components/SimpleHeader/HeaderSimple';
import { AuthContext } from '@/components/Context/Context';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isLogged, setIsLogged] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [role, setRole] = useState('');
  const [identification, setIdentification] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLogged(true);
      setAccessToken(token);
      setIdentification(localStorage.getItem('identification')!);
    }
  }, []);

  return (
    <MantineProvider theme={theme}>
      <AuthContext.Provider
        value={{
          isLogged,
          role,
          setIsLogged,
          accessToken,
          setAccessToken,
          setRole,
          identification,
          setIdentification,
        }}
      >
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
