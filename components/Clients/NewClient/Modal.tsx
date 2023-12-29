import { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';
import { NewClientForm } from './Form';

export function NewClientModal() {
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        transitionProps={{ transition: 'rotate-left' }}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <NewClientForm closeModal={setSlowTransitionOpened} />
      </Modal>

      <Group pt={'sm'} justify="center">
        <Button onClick={() => setSlowTransitionOpened(true)} variant="default">
          Agregar cliente
        </Button>
      </Group>
    </>
  );
}
