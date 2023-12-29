import { Avatar, Badge, Table, Group, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

import useAuth from '../hooks/useAuth';
import { AgendaResponse } from '@/utils/api/types/agenda-res';
import { backendService } from '@/utils/api/backend.service';
import { useRouter } from 'next/router';

export function AsesorAgenda() {
  const { accessToken } = useAuth();
  const [agenda, setAgenda] = useState<AgendaResponse[]>([]);
  const router = useRouter();

  const checkExpired = (date: string): boolean => {
    if (!date) return true;
    const today = new Date();
    const expirationDate = new Date(date);
    return today < expirationDate;
  };

  useEffect(() => {
    const fetchAgenda = async () => {
      let response;
      if (!accessToken) {
        response = await backendService.getUserAgenda(localStorage.getItem('accessToken')!);
      } else {
        response = await backendService.getUserAgenda(accessToken);
      }

      if (response) {
        setAgenda(response);
      }
    };

    fetchAgenda();
  }, []);

  const rows = agenda.map((client) => (
    <Table.Tr key={client.identification}>
      <Table.Td>
        <Group
          gap="sm"
          styles={{ root: { cursor: 'pointer' } }}
          onClick={() => router.push(`/clientes/${client.identification}`)}
        >
          <Avatar
            size={40}
            src={
              'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png'
            }
            radius={40}
          />
          <div>
            <Text fz="sm" fw={500}>
              {`${client.firstName} ${client.lastName}`}
            </Text>
            <Text fz="xs" c="dimmed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              {client.phone}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>{client.product}</Table.Td>
      <Table.Td>
        {client.managements[client.managements.length - 1].nextContact ??
          'Primer contacto pendiente'}
      </Table.Td>
      <Table.Td>
        {checkExpired(client.managements[client.managements.length - 1].nextContact) ? (
          <Badge fullWidth variant="light">
            Al dia
          </Badge>
        ) : (
          <Badge color="gray" fullWidth variant="light">
            Vencido
          </Badge>
        )}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Cliente</Table.Th>
            <Table.Th>Producto Interes</Table.Th>
            <Table.Th>Fecha Ultima Gestion</Table.Th>
            <Table.Th>Estado</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
