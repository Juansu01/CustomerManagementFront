import { Center, Table, Text, Title } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { backendService } from '@/utils/api/backend.service';
import { ClientResponse } from '@/utils/api/types/clients-res';

export function ClientTable() {
  const [loading, setIsLoading] = useState(true);
  const [clients, setClients] = useState<ClientResponse[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) router.push('/');

    const fetchClients = async () => {
      const response = await backendService.getUserClients(token!);
      if (response) {
        setClients(response);
      }
      setIsLoading(false);
    };

    fetchClients();
  }, []);

  const rows = clients.map((client) => (
    <Table.Tr key={client.identification}>
      <Table.Td>
        <Text fz="sm" fw={500}>
          {`${client.firstName} ${client.lastName}`}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm" fw={100}>
          {client.identification}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm" fw={100}>
          {client.phone}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm" fw={100}>
          {client.city}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm" fw={100}>
          {client.email}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm" fw={100}>
          {client.product}
        </Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nombre</Table.Th>
            <Table.Th>C.C</Table.Th>
            <Table.Th>Celular</Table.Th>
            <Table.Th>Municipio</Table.Th>
            <Table.Th>Correo Electronico</Table.Th>
            <Table.Th>Producto de interes</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        {!loading && clients.length > 0 && <Table.Tbody>{rows}</Table.Tbody>}
      </Table>
      <Center>
        {loading && <Title pb={'sm'}>Cargando</Title>}
        {!loading && clients.length === 0 && <Title pb={'sm'}>No tienes clientes</Title>}
      </Center>
    </Table.ScrollContainer>
  );
}
