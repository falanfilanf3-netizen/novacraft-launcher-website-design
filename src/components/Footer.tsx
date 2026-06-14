import { Container, Reveal, Logo } from "@/components/ui";
import DownloadButton from "@/components/DownloadButton";

const links = [
  { label: "Özellikler", href: "#features" },
  { label: "Nasıl Çalışır", href: "#showcase" },
  { label: "SSS", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-900/50">
      {/* Son çağrı */}
      <Container className="py-20 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur lg:p-16">
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-nova-600/10 blur-2xl" />
            <div className="relative max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-wider text-nova-300">
                Hazır olduğunda
              </span>
              <h2 className="mt-4 text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                Minecraft, ama launcher sana savaş açmıyor
              </h2>
              <p className="mt-5 text-base text-warm-400">
                NovaCraft'ı al, daha az kurulum, daha çok oyun keyfi.
              </p>
              <div className="mt-8">
                <DownloadButton size="lg" variant="primary" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Alt bilgi */}
      <div className="border-t border-white/10 py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <Logo />
            <div className="flex flex-wrap gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-warm-400 transition hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-xs text-warm-600">
              © {new Date().getFullYear()} NovaCraft. MIT lisansı ile açık kaynak.
            </p>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-warm-600">
              Bu bir topluluk projesidir. Mojang veya Microsoft ile bağlantılı değildir.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
