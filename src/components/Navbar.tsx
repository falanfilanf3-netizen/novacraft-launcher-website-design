import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Container, Logo } from "@/components/ui";
import DownloadButton from "@/components/DownloadButton";

const links = [
  { label: "Özellikler", href: "#features" },
  { label: "Nasıl Çalışır", href: "#showcase" },
  { label: "SSS", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-charcoal-950/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between sm:h-20">
          <a href="#top" className="shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-warm-400 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <DownloadButton size="sm" variant="ghost" className="hidden sm:inline-flex" />
            <button
              type="button"
              aria-label="Menüyü aç/kapat"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </Container>

        {/* mobil menü */}
        <div
          className={cn(
            "overflow-hidden border-t border-white/10 bg-charcoal-950/95 backdrop-blur-xl transition-all duration-300 md:hidden",
            open ? "max-h-96" : "max-h-0 border-transparent"
          )}
        >
          <Container className="flex flex-col gap-2 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-3 text-sm font-medium text-warm-300 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <DownloadButton size="md" variant="ghost" className="mt-2 w-full" />
          </Container>
        </div>
      </div>
    </header>
  );
}
