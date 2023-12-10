import { SimpleGrid, Container, Stack, Paper } from '@mantine/core';
import { useRouter } from 'next/router';

import { ClientCard } from '@/components/Clients/ClientCard/ClientCard';
import { Management } from '@/components/Clients/Management/Management';

const getChild = (height: number) => {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <h1>User card </h1>
    </Paper>
  );
};
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export default function Subgrid() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, xs: 2 }}>
        <Stack>
          <ClientCard clientId={slug as string} />
        </Stack>
        <Stack>
          {/* {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))}
          {getChild(getSubHeight(3, px(theme.spacing.md) as number))} */}
          <Management />
          <Management />
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
