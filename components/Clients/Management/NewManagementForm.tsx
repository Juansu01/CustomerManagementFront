import { Button, Group, Box, Title, Select } from '@mantine/core';
import { UseFormReturnType, useForm } from '@mantine/form';
import { Dispatch, SetStateAction, use, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DateInput } from '@mantine/dates';
import 'dayjs/locale/es-mx';

import { ClearableInput } from '../NewClient/ClearableInput';
import { newManagementInitialValues } from './newManagementFields';
import useAuth from '@/components/hooks/useAuth';
import { backendService } from '@/utils/api/backend.service';

export function NewManagementForm({
  closeModal,
  onNewManagement,
}: {
  closeModal: Dispatch<SetStateAction<boolean>>;
  onNewManagement: (slug: string) => void;
}) {
  const { accessToken } = useAuth();
  let slug = '';

  useEffect(() => {
    slug = router.query.slug as string;
  }, []);

  const form = useForm({
    initialValues: newManagementInitialValues,
    validate: {
      nextContact: (value) => (value ? null : 'Fecha requerida'),
    },
  });
  const router = useRouter();

  const handleSubmit = async (values: typeof newManagementInitialValues) => {
    const { slug } = router.query;
    const dateToIso = new Date(values.nextContact).toISOString();
    const requestBody = {
      contactType: values.contactType,
      customerStatus: values.customerStatus,
      observations: values.observations,
      nextContact: dateToIso.split('T')[0],
    };

    const response = await backendService.addClientManagement(
      accessToken!,
      slug as string,
      requestBody
    );

    if (response) {
      closeModal(false);
      onNewManagement(slug as string);
    }
    toast.error('No se pudo crear gestion', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Box maw={340} mx="auto">
      <Title order={2}>Agregar gestion</Title>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        {/* <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        /> */}

        <Select
          pt={5}
          label="Tipo de contacto"
          placeholder="Selecciona un tipo de contacto"
          name="contactType"
          data={['Evento', 'Página web', 'Visita de campo', 'Tienda']}
          {...form.getInputProps('contactType')}
        />

        <Select
          pt={5}
          label="Estado del cliente"
          placeholder="Selecciona un estado"
          name="customerStatus"
          data={[
            'Pendiente primer contacto',
            'Primera llamada',
            'Segunda llamada',
            'Tercera llamada',
            'Agendar nuevamente',
            'Cliente desiste',
            'Producto facturado',
            'Pertenece a otro asesor',
          ]}
          {...form.getInputProps('customerStatus')}
        />
        <ClearableInput
          withAsterisk={false}
          label={'Observaciones'}
          placeHolder={'Escribe tus observaciones'}
          inputName={'observations'}
          form={form as unknown as UseFormReturnType<Record<string, string>>}
        />

        <DateInput
          required
          valueFormat="YYYY-MM-DD"
          locale="es-mx"
          pt={5}
          label="Fecha proximo contacto"
          placeholder="Date input"
          name="nextContact"
          {...form.getInputProps('nextContact')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Agregar</Button>
        </Group>
      </form>
      <ToastContainer />
    </Box>
  );
}
