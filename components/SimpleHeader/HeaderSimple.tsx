import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSimple.module.css';

import useAuth from '../hooks/useAuth';

const links = [
  { link: '/', label: 'Inicio' },
  { link: '/clientes', label: 'Mis Clientes' },
  { link: '/agenda', label: 'Agenda' },
  { link: '/buscar-clientes', label: 'Buscar Clientes' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { isLogged, role } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const { isReady } = router;
  let localRole = '';

  useEffect(() => {
    if (!isReady) return;
    localRole = localStorage.getItem('role')!;

    console.log(role);
    setActive(pathname);
  }, [isReady]);

  const loggetInItems = links.map((link) => (
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

  const loggetOutItems = (
    <a
      key={links[0].label}
      href={links[0].link}
      className={classes.link}
      data-active={active === links[0].link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(links[0].link);
        try {
          router.push(links[0].link);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {links[0].label}
    </a>
  );

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={5} visibleFrom="xs">
          {isLogged ? loggetInItems : loggetOutItems}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
