import { Title, Center, Container } from '@mantine/core';
import { ClientSearch } from '@/components/Clients/Search/ClientSearch';

export default function ClientesSearchHome() {
  return (
    <>
      <Center pb={'sm'}>
        <Title>Busqueda de clientes</Title>
      </Center>
      <Container>
        {' '}
        <ClientSearch />
      </Container>
    </>
  );
}
