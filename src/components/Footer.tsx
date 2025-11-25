import Link from "next/link";

const footerLinks = [
  { label: "Presale", href: "#presale" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#554f37]/40 bg-[#0a1116] text-[#eecf94]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold">Octowarden Coin</p>
            <p className="text-sm text-[#eecf94]/70">
              Forged by builders obsessed with resilience.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-[#eecf94]/70">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#eecf94]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[#eecf94]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Octowarden Coin.</p>
        </div>
      </div>
    </footer>
  );
}
