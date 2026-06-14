import { Container, Badge, Reveal, useInView } from "@/components/ui";
import DownloadButton from "@/components/DownloadButton";

export default function Hero() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Yumuşak fon gradyanı */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.12)_0%,transparent_65%)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Metin bloğu - hafif kaydırılmış */}
          <div className="lg:pr-8">
            <Reveal>
              <Badge>✦ Minecraft için daha iyi bir yol</Badge>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-8 max-w-lg text-balance text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-[3.2rem]">
                Hep{" "}
                <span className="text-nova">olmasını dilediğimiz</span>{" "}
                launcher'ı yaptık.
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-warm-500 sm:text-lg">
                Artık Java kurulumlarıyla uğraşmak ya da mod peşinde koşmak yok.
                NovaCraft sıkıcı işleri halleder, sen de oyuna atlarsın — ister 
                inşa et, ister keşfet, ister modla.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <DownloadButton size="lg" variant="primary" />
                <a
                  href="#features"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Neler var?
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </Reveal>

            {/* El yazısı tarzı imza */}
            <Reveal delay={260}>
              <p className="mt-12 text-sm text-warm-600">
                Bu oyunu seven insanlar tarafından, özenle hazırlandı.
              </p>
            </Reveal>
          </div>

          {/* Görsel alan */}
          <Reveal delay={100} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-charcoal-800">
              {/* Özel doku: yumuşak ızgaralar */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 30%, rgba(168,85,247,0.12) 0%, transparent 40%),
                    radial-gradient(circle at 80% 70%, rgba(214,125,255,0.08) 0%, transparent 35%),
                    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                  `,
                  backgroundSize: "200px 200px, 200px 200px, 24px 24px, 24px 24px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent" />
              
              {/* Launcher ön izlemesi - elle yerleştirildi */}
              <div className="absolute -bottom-6 -right-6 w-64 rotate-2 rounded-xl border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="ml-auto text-[10px] font-medium text-nova-300">
                    NovaCraft
                  </span>
                </div>
                <div className="mt-2 space-y-2 px-1 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                    <div className="flex-1">
                      <div className="h-2.5 w-20 rounded bg-white/20" />
                      <div className="mt-1 h-2 w-12 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="h-2 w-full rounded bg-white/10" />
                  <div className="h-2 w-5/6 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* İstatistikler - katı bir ızgara değil, organik */}
        <div
          ref={ref}
          className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-8 border-t border-white/10 pt-10"
        >
          <div className="text-center">
            <span className="text-3xl font-semibold text-white sm:text-4xl">
              {inView ? "1,2M+" : "—"}
            </span>
            <span className="block text-xs uppercase tracking-wider text-nova-300">
              İndirme
            </span>
          </div>
          <div className="text-center">
            <span className="text-3xl font-semibold text-white sm:text-4xl">
              {inView ? "250K+" : "—"}
            </span>
            <span className="block text-xs uppercase tracking-wider text-nova-300">
              Aktif kullanıcı
            </span>
          </div>
          <div className="text-center">
            <span className="text-3xl font-semibold text-white sm:text-4xl">
              {inView ? "60+" : "—"}
            </span>
            <span className="block text-xs uppercase tracking-wider text-nova-300">
              MC sürümü
            </span>
          </div>
          <div className="text-center">
            <span className="text-3xl font-semibold text-white sm:text-4xl">
              {inView ? "4sn" : "—"}
            </span>
            <span className="block text-xs uppercase tracking-wider text-nova-300">
              Açılış süresi
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
