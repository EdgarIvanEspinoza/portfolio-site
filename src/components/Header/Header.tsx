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
      className="bg-p5-black border-b-[4px] border-p5-red h-20 fixed top-0 z-50 shadow-[0_4px_0_0_rgba(230,0,18,1)]"
      isBordered={false}
    >
      <NavbarBrand>
        <div className="flex items-center gap-2 group cursor-pointer hover-shake">
          <div className="w-4 h-8 bg-p5-red clip-slanted scale-110 group-hover:bg-p5-yellow transition-colors" />
          <div className="flex flex-col">
            <p className="font-anton text-p5-white text-3xl tracking-wide leading-none group-hover:text-p5-yellow transition-colors">
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
              className="text-lg font-anton text-p5-white hover:text-p5-yellow hover:scale-110 hover:-rotate-3 transition-all tracking-wider relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-p5-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-100 origin-left" />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
