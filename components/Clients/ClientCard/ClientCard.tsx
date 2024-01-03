import { Avatar, Text, Group, Paper, Center, Modal, Button } from '@mantine/core';
import { IconPhoneCall, IconAt, IconHome, IconId } from '@tabler/icons-react';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import classes from './UserInfoIcons.module.css';
import { ClientResponse } from '@/utils/api/types/clients-res';
import { NewManagementForm } from '../Management/NewManagementForm';
import useAuth from '@/components/hooks/useAuth';

export function ClientCard({
  client,
  userOwnsClient,
  onNewManagement,
}: {
  client: ClientResponse;
  userOwnsClient: boolean;
  onNewManagement: () => void;
}) {
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);
  const router = useRouter();
  const { isReady } = router;
  const { role } = useAuth();

  useEffect(() => {
    if (!isReady) return;
  }, [isReady]);

  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Group wrap="nowrap">
        <Avatar
          size={94}
          src={
            'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png'
          }
          radius={40}
        />
        <div>
          <Text fz="lg" fw={500} className={classes.name}>
            {`${client.firstName} ${client.lastName}`}
          </Text>

          {(userOwnsClient || role === 'master') && (
            <Group wrap="nowrap" gap={10} mt={3}>
              <IconAt stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {client.email}
              </Text>
            </Group>
          )}

          {(userOwnsClient || role === 'master') && (
            <Group wrap="nowrap" gap={10} mt={5}>
              <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {client.phone}
              </Text>
            </Group>
          )}

          {(userOwnsClient || role === 'master') && (
            <Group wrap="nowrap" gap={10} mt={5}>
              <IconHome stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {`${client.city} - ${client.address}`}
              </Text>
            </Group>
          )}

          {(userOwnsClient || role === 'master') && (
            <Group wrap="nowrap" gap={10} mt={5}>
              <IconId stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {client.identification}
              </Text>
            </Group>
          )}
        </div>
      </Group>
      <Center pt={5}>
        {userOwnsClient && role !== 'master' && (
          <Button color="blue" onClick={() => setSlowTransitionOpened(true)}>
            Agregar Gestion
          </Button>
        )}
        {!userOwnsClient && (
          <Text fz="lg" fw={500} className={classes.name}>
            No puedes agregar gestiones a este cliente
          </Text>
        )}
      </Center>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        transitionProps={{ transition: 'rotate-left' }}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <NewManagementForm closeModal={setSlowTransitionOpened} onNewManagement={onNewManagement} />
      </Modal>
    </Paper>
  );
}
