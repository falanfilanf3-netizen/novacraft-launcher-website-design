import { Container, Reveal, Section, SectionHeading } from "@/components/ui";

const features: {
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: "M13 2 4 14h7l-1 8 9-12h-7z",
    title: "Hızlı ve güvenilir indirme",
    desc: "Minecraft'ın açılmasını beklemekten hepimiz bıktık. Eşzamanlı indirme sistemimiz sayesinde saniyeler içinde oyuna giriyorsunuz.",
  },
  {
    icon: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568a2.402 2.402 0 0 1 0 3.408l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.5 2.5 0 1 0-3.214 3.214c.446.166.855.497.925.968a.98.98 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-3.41 0l-1.568-1.568a1.03 1.03 0 0 0-.877-.29c-.493.074-.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525a2.402 2.402 0 0 1 3.408 0l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
    title: "Mod desteği, tertemiz çalışır",
    desc: "Fabric, Forge, Quilt, NeoForge — tek tıkla kurulum. Mod yükleyicilerin peşinde koşmaktan kurtulun.",
  },
  {
    icon: "M10 2v2M14 2v2M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4ZM6 2v2",
    title: "Java mı? Halloldu.",
    desc: "Her Minecraft sürümü için doğru Java'yı biz kuruyoruz. Bir daha Java hatası görmeyeceksiniz.",
  },
  {
    icon: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.52-4.48-9-10-9Z",
    title: "Sana özel temalar",
    desc: "Özenle hazırlanmış temalar arasından seç ya da kendi temanı oluştur. Launcher'ı gerçekten senin yap.",
  },
  {
    icon: "M12 2 3 7l9 5 9-5-9-5ZM3 7v10l9 5 9-5V7M3 12l9 5 9-5",
    title: "Her sürüm, her zaman",
    desc: "En yeni snapshot'lardan klasiklere kadar — hiç terlemeden aralarında geçiş yap.",
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3.5-9.5 2 2 4-4",
    title: "Şeffaf ve açık kaynak",
    desc: "Açık kaynak kodluyuz çünkü bilgisayarında ne çalıştığını bilmeyi hak ediyorsun. Takipçi yok, reklam yok.",
  },
];

function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-nova-400"
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}

export default function Features() {
  return (
    <Section id="features">
      <Container>
        <SectionHeading
          eyebrow="Ne yaptık"
          title={
            <>
              Oyun sevgisiyle, oyuncular için
            </>
          }
          subtitle="NovaCraft'ı yaptık çünkü launcher'larla uğraşmaktan sıkılmıştık. Oyun oynamak varken."
          align="left"
        />

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group relative">
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition group-hover:border-white/20">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <Icon d={f.icon} />
                  </div>
                  <h3 className="text-lg font-medium text-white">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-500">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Açık kaynak çağrısı */}
        <Reveal delay={120} className="mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur lg:p-10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-nova-600/10 blur-2xl" />
            <div className="relative max-w-3xl">
              <h3 className="text-2xl font-medium text-white sm:text-3xl">
                %100 ücretsiz. %100 açık kaynak.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-warm-500">
                NovaCraft'ı kendimiz için yaptık — ve senin de burada olmana 
                çok sevindik. Windows, macOS ve Linux'ta çalışır, reklam içermez 
                ve sana saygı duyar. Başka bir şey değil.
              </p>
              <a
                href="#top"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-nova-300 transition hover:text-nova-200"
              >
                Kodları incele
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
