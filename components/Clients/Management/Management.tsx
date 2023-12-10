import { Card, Text, Group, RingProgress } from '@mantine/core';
import { IconNote } from '@tabler/icons-react';

import classes from './CardWithStats.module.css';

const stats = [
  { title: 'Proximo contacto', value: '12/11/2023' },
  { title: 'Estado del cliente', value: 'Agendar nuevamente' },
  { title: 'Tipo de contacto', value: 'Visita de campo' },
];

export function Management() {
  const items = stats.map((stat) => (
    <div key={stat.title}>
      <Text size="xs" color="dimmed">
        {stat.title}
      </Text>
      <Text fw={500} size="sm">
        {stat.value}
      </Text>
    </div>
  ));

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <Card.Section className={classes.footer}>{items}</Card.Section>
    </Card>
  );
}
