import { Paper, TextInput, PasswordInput, Button, Title, Group } from '@mantine/core';
import classes from './AuthenticationWithImage.module.css';
import { MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
import { useForm } from '@mantine/form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useAuth from '../hooks/useAuth';

export function AuthenticationImage() {
  const router = useRouter();
  const { setAuth, setIsLogged, isLogged } = useAuth();

  const logInForm = useForm({
    initialValues: {
      identification: '',
      password: '',
    },
    validate: {
      identification: (value) => (value.length > 0 ? null : 'Cedula requerida'),
      password: (value) => (value.length > 0 ? null : 'Contrasena requerida'),
    },
  });

  const logInHandler = async (identification: string, password: string) => {
    const succeeded = await setAuth(identification, password);

    if (succeeded) {
      setIsLogged(true);
      router.push('/agenda');
      return;
    }
    toast.error('Ocurrio un error! Intenta de nuevo', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const logOutHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('role');
    setIsLogged(false);
    router.push('/');
  };

  let formContent = null;

  if (isLogged) {
    formContent = (
      <>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Cerrar sesion
        </Title>
        <Button fullWidth mt="xl" size="md" onClick={logOutHandler}>
          Salir
        </Button>
      </>
    );
  } else {
    formContent = (
      <>
        <form
          onSubmit={logInForm.onSubmit((values) =>
            logInHandler(values.identification, values.password)
          )}
        >
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Ingresa a tu cuenta
          </Title>

          <TextInput
            label="Cedula"
            placeholder="1002121302"
            size="md"
            withAsterisk
            {...logInForm.getInputProps('identification')}
          />
          <PasswordInput
            label="Contrasena"
            placeholder="Tu contrasena"
            mt="md"
            size="md"
            withAsterisk
            {...logInForm.getInputProps('password')}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Entrar</Button>
          </Group>
        </form>
      </>
    );
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        {formContent}
      </Paper>
      <ToastContainer />
    </div>
  );
}
