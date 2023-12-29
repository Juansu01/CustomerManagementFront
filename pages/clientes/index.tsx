import { Title, Center, Box } from '@mantine/core';
import { useEffect } from 'react';
import router from 'next/router';

import { ClientTable } from '../../components/Clients/ClientTable/ClientTable';
import { NewClientModal } from '@/components/Clients/NewClient/Modal';

export default function ClientesHome() {
  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) router.push('/');
  }, []);
  return (
    <>
      <Center>
        <Title pb={'sm'}>Manejo de Clientes</Title>
      </Center>
      <Center>
        <Box bg={'gray.1'}>
          <ClientTable />
        </Box>
      </Center>
      <Center>
        <NewClientModal />
      </Center>
    </>
  );
}
