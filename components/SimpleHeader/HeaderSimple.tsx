import { useState, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSimple.module.css';

import { AuthContext } from '../Context/Context';

const links = [
  { link: '/', label: 'Inicio' },
  { link: '/clientes', label: 'Mis Clientes' },
  { link: '/agenda', label: 'Agenda' },
  { link: '/buscar-clientes', label: 'Buscar Clientes' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const router = useRouter();
  const pathname = usePathname();
  const { isLogged } = useContext(AuthContext);
  let items = null;

  if (isLogged) {
    items = links.map((link) => (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={pathname === link.link || undefined}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
          try {
            router.push(link.link);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {link.label}
      </a>
    ));
  } else {
    const link = links[0];
    items = (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
          try {
            router.push(link.link);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {link.label}
      </a>
    );
  }
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
