import { Card, Text, Group } from '@mantine/core';
import { IconNote } from '@tabler/icons-react';
import classes from './CardWithStats.module.css';

import { ManagementResponse } from '@/utils/api/types/management-res';

export function Management({ management }: { management: ManagementResponse }) {
  const items = (
    <>
      <div>
        <Text size="xs" color="dimmed">
          Proximo contacto
        </Text>
        <Text fw={500} size="sm">
          {management.nextContact ?? 'No hay proximo contacto'}
        </Text>
      </div>
      <div>
        <Text size="xs" color="dimmed">
          Estado del cliente
        </Text>
        <Text fw={500} size="sm">
          {management.customerStatus}
        </Text>
      </div>
      <div>
        <Text size="xs" color="dimmed">
          Tipo de contacto
        </Text>
        <Text fw={500} size="sm">
          {management.contactType}
        </Text>
      </div>
    </>
  );

  return (
    <Card withBorder padding="lg" className={classes.card}>
      <Group justify="space-between" mt="sm">
        <Text fz="sm" fw={700} className={classes.title}>
          Observaciones
        </Text>
        <Group gap={5}>
          <Text fz="xs" c="dimmed">
            Gestion
          </Text>
          <IconNote size="1rem" stroke={1} />
        </Group>
      </Group>
      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        {management.observations ?? 'Sin observaciones.'}
      </Text>
      <Card.Section className={classes.footer}>{items}</Card.Section>
    </Card>
  );
}
