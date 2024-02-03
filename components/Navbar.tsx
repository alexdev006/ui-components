"use client";
import Link from "next/link";

import { ToggleDarkModeButton } from "./ToggleDarkModeButton";
import { usePathname } from "next/navigation";

interface Navlink {
  label: string;
  href: string;
}

const navLinks: Navlink[] = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="border border-b-2 p-2 flex items-center justify-between">
      <div className="">Logo</div>
      <div className="">
        <nav>
          {navLinks.map(({ label, href }: Navlink) => (
            <Link
              href={href}
              key={label}
              className={`mx-2 ${
                pathname === href
                  ? "font-semibold underline underline-offset-8 decoration-indigo-500 decoration-4"
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
