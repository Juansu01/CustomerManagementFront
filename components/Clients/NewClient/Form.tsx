import { Button, Group, Box, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ClearableInput } from './ClearableInput';
import { newClientFields, newClientInitialValues } from './newClientFields';
import { Dispatch, SetStateAction } from 'react';

export function NewClientForm({ closeModal }: { closeModal: Dispatch<SetStateAction<boolean>> }) {
  const form = useForm({
    initialValues: newClientInitialValues,
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo invalido'),
    },
  });

  const handleSubmit = (values: Record<string, string>) => {
    console.log(values);
    closeModal(false);
  };

  return (
    <Box maw={340} mx="auto">
      <Title order={2}>Agregar cliente</Title>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        {/* <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        /> */}

        {newClientFields.map((field) => {
          return (
            <ClearableInput
              key={field.label}
              withAsterisk={field.required ?? false}
              label={field.label}
              placeHolder={field.placeholder}
              inputName={field.name}
              form={form}
            />
          );
        })}

        <Group justify="flex-end" mt="md">
          <Button color={'red'} type="button" onClick={form.reset}>
            Limpiar
          </Button>
          <Button type="submit">Crear</Button>
        </Group>
      </form>
    </Box>
  );
}
