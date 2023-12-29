import { Title, Center, Box } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { AsesorAgenda } from '@/components/Agenda/Agenda';

export default function AgendaHome() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) router.push('/');
  }, []);

  return (
    <>
      <Center>
        <Title>Tu Agenda</Title>
      </Center>
      <Center pt={'sm'}>
        <Box bg={'gray.1'}>
          <AsesorAgenda />
        </Box>
      </Center>
    </>
  );
}
