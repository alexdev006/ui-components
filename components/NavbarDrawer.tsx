"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Navlink } from "@/shared/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarDrawerProps {
  navLinks: Navlink[];
}

export function NavbarDrawer({ navLinks }: NavbarDrawerProps) {
  const pathname = usePathname();
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-3/4 flex flex-col">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerClose asChild>
              <Button variant="outline" size="icon">
                <X />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <nav className="flex flex-col">
              {navLinks.map(({ label, href }: Navlink) => (
                <DrawerTrigger asChild key={label}>
                  <Link
                    href={href}
                    className={`my-2 text-xl ${
                      pathname === href
                        ? "font-bold underline underline-offset-8 decoration-indigo-500 decoration-4 "
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </DrawerTrigger>
              ))}
            </nav>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
