import { Navbar, NavbarContent, NavbarItem } from '@heroui/react';
import Link from 'next/link';

export const Header = () => {
  return (
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4 m-auto" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Experiencia
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Sobre mí
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
