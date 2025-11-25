"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Presale", href: "#presale" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#554f37]/30 bg-[#eecf94]/90 text-[#0a1116] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span>Octowarden Coin</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#0a1116]/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#0a1116]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#presale"
            className="hidden rounded-full bg-[#d6a757] px-5 py-2 text-sm font-semibold text-[#0a1116] shadow-lg shadow-[#d6a757]/40 transition hover:bg-[#ca9944] md:inline-flex"
          >
            Join Presale
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#554f37]/40 text-xs font-semibold md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            MENU
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#554f37]/30 bg-[#ebcb90] md:hidden">
          <nav className="flex flex-col px-4 py-4 text-sm font-medium text-[#0a1116]/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 transition hover:bg-white/40 hover:text-[#0a1116]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#presale"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#d6a757] px-4 py-2 text-center font-semibold text-[#0a1116]"
            >
              Join Presale
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
