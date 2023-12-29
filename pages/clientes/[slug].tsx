import { SimpleGrid, Container, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
  const { isLogged } = useAuth();
  const { slug } = router.query;
  const { isReady } = router;

  const fetchClient = async () => {
    const response = await backendService.getClient(
      localStorage.getItem('accessToken')!,
      slug as string
    );
    if (response) {
      const identification = localStorage.getItem('identification')!;
      setClient(response);
      setManagements(response.managements);
      setUserOwnsClient(identification === response.user.identification);
    }
  };

  useEffect(() => {
    if (!isReady) {
      console.log('Is logged', isLogged);
      return;
    }
    const token = localStorage.getItem('accessToken');
    if (!token) router.push('/');
    console.log('Is logged', isLogged);
    fetchClient();
  }, [isReady]);

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, xs: 2 }}>
        <Stack>
          {isReady && (
            <ClientCard
              userOwnsClient={userOwnsClient}
              client={client}
              onNewManagement={fetchClient}
            />
          )}
        </Stack>
        <Stack>
          {/* {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))} */}
          {managements.map((management, index) => {
            return <Management key={index} management={management} />;
          })}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
