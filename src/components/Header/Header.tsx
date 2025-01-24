import { Navbar, NavbarContent, NavbarItem } from '@heroui/react';
import Link from 'next/link';

export const Header = () => {
  return (
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4 m-auto" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#hero">
            Sobre mí
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#experiences">
            Experiencia
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
