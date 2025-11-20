"use client";

import { Link } from "@heroui/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";

export const Header = () => {
  const navItems = [
    { name: "PRODUCT", href: "#product" },
    { name: "WORK", href: "#projects" },
    { name: "EXPERIENCE", href: "#experiences" },
    { name: "CONTACT", href: "#footer" },
  ];

  return (
    <Navbar
      maxWidth="xl"
      className="bg-deep-space/80 backdrop-blur-md border-b border-white/5 h-20 fixed top-0 z-50"
      isBordered
    >
      <NavbarBrand>
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-tech-blue" />
          <div className="flex flex-col">
            <p className="font-black text-white tracking-tighter text-xl leading-none">
              IVAN ESPINOZA
            </p>
          </div>
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              href={item.href}
              className="text-sm font-mono text-gray-400 hover:text-tech-cyan transition-colors tracking-wider relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-tech-cyan group-hover:w-full transition-all duration-300" />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
