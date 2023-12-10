import { Table, Text, Anchor } from '@mantine/core';

import { clients } from '@/dummy_data/clients';

export function ClientTable() {
  const rows = clients.map((client) => (
    <Table.Tr key={client.cc}>
      <Table.Td>
        <Text fz="sm" fw={500}>
          {`${client.firstName} ${client.lastName}`}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm" fw={100}>
          {client.cc}
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
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
