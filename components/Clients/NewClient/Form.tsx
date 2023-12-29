import { Button, Group, Box, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ClearableInput } from './ClearableInput';
import { newClientFields, newClientInitialValues } from './newClientFields';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ClientPayload } from '@/utils/client.service';
import useAuth from '@/components/hooks/useAuth';
import { backendService } from '@/utils/api/backend.service';

export function NewClientForm({ closeModal }: { closeModal: Dispatch<SetStateAction<boolean>> }) {
  const { accessToken } = useAuth();
  const form = useForm({
    initialValues: newClientInitialValues,
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo invalido'),
    },
  });
  const router = useRouter();

  const handleSubmit = async (values: ClientPayload) => {
    const response = await backendService.createClient(accessToken!, {
      ...values,
      identification: values.cedula,
    });

    if (response) {
      closeModal(false);
      router.push(`/clientes/${response.identification}`);
    }
    toast.error('No se pudo guardar cliente', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Box maw={340} mx="auto">
      <Title order={2}>Agregar cliente</Title>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values as unknown as ClientPayload))}>
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
      <ToastContainer />
    </Box>
  );
}
