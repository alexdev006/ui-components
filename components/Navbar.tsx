"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ToggleDarkModeButton } from "./ToggleDarkModeButton";
import { NavbarDrawer } from "./NavbarDrawer";
import { Navlink } from "@/shared/interface";

const navLinks: Navlink[] = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="border border-b-2 p-2 flex items-center justify-between">
      <div className="block sm:hidden">
        <NavbarDrawer navLinks={navLinks} />
      </div>
      <div className="">Logo</div>
      <div className="hidden sm:block">
        <nav>
          {navLinks.map(({ label, href }: Navlink) => (
            <Link
              href={href}
              key={label}
              className={`mx-2 ${
                pathname === href
                  ? "font-bold underline underline-offset-8 decoration-indigo-500 decoration-4"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="">
        <ToggleDarkModeButton />
      </div>
    </div>
  );
}
