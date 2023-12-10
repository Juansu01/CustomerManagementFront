import { Paper, TextInput, PasswordInput, Button, Title, Text, Anchor } from '@mantine/core';
import classes from './AuthenticationWithImage.module.css';
import { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { MouseEventHandler } from 'react';
import { useRouter } from 'next/router';

export function AuthenticationImage() {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const logInHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    authContext.isLogged = true;
    router.push('/agenda');
  };

  const logOutHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    authContext.isLogged = false;
    router.push('/');
  };

  let formContent = null;

  if (authContext.isLogged) {
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
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Ingresa a tu cuenta
        </Title>

        <TextInput label="Cedula" placeholder="1002121302" size="md" />
        <PasswordInput label="Contrasena" placeholder="Tu contrasena" mt="md" size="md" />
        <Button fullWidth mt="xl" size="md" onClick={logInHandler}>
          Ingresar
        </Button>

        <Text ta="center" mt="md">
          No tienes cuenta?{' '}
          <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
            Solicita una
          </Anchor>
        </Text>
      </>
    );
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        {formContent}
      </Paper>
    </div>
  );
}
