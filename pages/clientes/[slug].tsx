import { SimpleGrid, Container, Stack, ScrollArea } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';

import { ClientCard } from '@/components/Clients/ClientCard/ClientCard';
import { Management } from '@/components/Clients/Management/Management';
import { ClientResponse } from '@/utils/api/types/clients-res';
import { backendService } from '@/utils/api/backend.service';
import { ManagementResponse } from '@/utils/api/types/management-res';
import useAuth from '@/components/hooks/useAuth';

export default function Subgrid() {
  const router = useRouter();
  const [client, setClient] = useState<ClientResponse>({} as ClientResponse);
  const [managements, setManagements] = useState<ManagementResponse[]>([]);
  const [userOwnsClient, setUserOwnsClient] = useState(false);
  const { identification, role } = useAuth();
  const { slug } = router.query;
  const { isReady } = router;
  const [isMaster, setIsMaster] = useState(false);
  const fetchClient = useCallback(async () => {
    const response = await backendService.getClient(
      localStorage.getItem('accessToken')!,
      slug as string
    );
    if (response) {
      setClient(response);
      setManagements(response.managements);
      setUserOwnsClient(identification === response.user.identification);
      setIsMaster(role === 'master');
    }
  }, [role, identification, slug, userOwnsClient]);

  useEffect(() => {
    if (!isReady) return;

    const token = localStorage.getItem('accessToken');
    if (!token) router.push('/');

    fetchClient();
  }, [isReady, slug]);

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, xs: 2 }}>
        <Stack>
          <ClientCard
            userOwnsClient={userOwnsClient}
            client={client}
            onNewManagement={fetchClient}
          />
        </Stack>
        <Stack>
          <ScrollArea h={600}>
            {(userOwnsClient || isMaster) &&
              managements.map((management, index) => {
                return <Management key={index} management={management} />;
              })}
          </ScrollArea>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
