
"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
  <header
  style={{
    backdropFilter: "blur(20px) saturate(150%)",
    WebkitBackdropFilter: "blur(20px) saturate(150%)",
  }}
  className="fixed inset-x-0 top-0 z-50  border-white/20 bg-white/30 dark:border-white/10 dark:bg-neutral-900/10">
      <nav className="mx-auto flex min-h-14 w-full max-w-175 items-center justify-between gap-2 px-5 max-[360px]:px-2">
        {/* Logo and navigation */}
        <div className="flex min-w-0 flex-1 items-center">

          <div className="flex min-w-0 items-center gap-0.5 overflow-x-auto sm:gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`shrink-0 rounded-md px-1.5 py-2 text-[13px] font-medium transition-colors max-[360px]:px-1 sm:px-2 sm:text-xs md:text-sm ${
                           pathname === href
                           ? "text-neutral-950 dark:text-white"
                           : "text-neutral-600 dark:text-neutral-400"
                         }`}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
