"use client";
import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#cycle", label: "Cycle" },
  { href: "#community", label: "Community" },
  { href: "#experts", label: "Experts" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass shadow-soft" : ""
            }`}
        >
          <a href="#" className="flex items-center gap-2">
            <span className="grid place-items-center h-12 w-12 rounded-xl  overflow-hidden">
              <img src="/assets/lova_logo.png" alt="LOVA Logo" className="object-contain" width={40} height={40} />
            </span>
            <span className="font-display text-lg tracking-tight">LOVA</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#download"
              className="inline-flex items-center rounded-full bg-foreground text-background text-sm px-5 py-2.5 hover:opacity-90 transition"
            >
              Download App
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 shadow-soft animate-fade-up">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full bg-foreground text-background px-5 py-2.5 mt-2"
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
