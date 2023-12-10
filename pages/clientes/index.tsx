import { Title, Center, Box } from '@mantine/core';

import { ClientTable } from '../../components/Clients/ClientTable/ClientTable';
import { NewClientModal } from '@/components/Clients/NewClient/Modal';

export default function ClientesHome() {
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
