import { useState, useEffect } from 'react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

import { HeaderSimple } from '@/components/SimpleHeader/HeaderSimple';
import { AuthContext } from '@/components/Context/Context';
import { backendService } from '@/utils/api/backend.service';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [isLogged, setIsLogged] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [role, setRole] = useState('');
  const [identification, setIdentification] = useState('');
  const router = useRouter();
  const { isReady } = router;

  useEffect(() => {
    if (!isReady) return;

    const token = localStorage.getItem('accessToken');
    const fetchUserInfo = async (token: string) => {
      const userInformation = await backendService.getUserInfo(token);

      if (userInformation.isError) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('identification');
        localStorage.removeItem('role');
        router.push('/');
        return;
      }

      setIsLogged(true);
      setAccessToken(token);
      setIdentification(userInformation.userInfo?.identification || '');
      setRole(userInformation.userInfo?.role || '');
    };
    if (token) {
      fetchUserInfo(token);
    }
  }, [isReady]);

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
