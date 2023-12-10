import { Title, Center, Box } from '@mantine/core';
import { AsesorAgenda } from '@/components/Agenda/Agenda';

export default function AgendaHome() {
  return (
    <>
      <Center>
        <Title>Tu Agenda</Title>
      </Center>
      <Center pt={'sm'}>
        <Box bg={'gray.1'}>
          <AsesorAgenda />
        </Box>
      </Center>
    </>
  );
}
