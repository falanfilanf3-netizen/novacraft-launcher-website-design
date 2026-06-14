import { Container, Reveal, Section, SectionHeading } from "@/components/ui";

const steps = [
  {
    n: "01",
    title: "İndir ve çalıştır",
    desc: "Kurulum dosyasını al ve başlat. Java kurulumu, yapılandırma dosyası yok — sadece yükle ve hazırsın.",
  },
  {
    n: "02",
    title: "Maceralı seç",
    desc: "İstediğin sürümü seç veya bir modpaketi içe aktar. Ortamı otomatik olarak biz ayarlıyoruz.",
  },
  {
    n: "03",
    title: "Oyna'ya bas",
    desc: "Bu kadar. Gerçekten. Gerisini biz hallederiz, sen de inşa etmeye geri dön.",
  },
];

export default function Showcase() {
  return (
    <Section id="showcase" className="bg-charcoal-900/30">
      <Container>
        <SectionHeading
          eyebrow="Nasıl çalışır"
          title={
            <>
              Oyuna <span className="text-nova">üç adımda</span>
            </>
          }
          subtitle="Bunu, denediğin diğer launcher'ların tam tersi olacak şekilde tasarladık."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur transition hover:border-white/20">
                <div className="inline-block rounded-full bg-nova-600/20 px-3 py-1 text-xs font-medium text-nova-300">
                  {s.n}
                </div>
                <h3 className="mt-4 text-xl font-medium text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-500">{s.desc}</p>
                {i < steps.length - 1 && (
                  <span className="absolute -right-4 top-1/2 hidden text-2xl text-white/10 md:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Launcher ekran görüntüsü */}
        <Reveal delay={120} className="mt-20">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-nova-600/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-charcoal-800">
              {/* CSS ile oluşturulmuş Minecraft konsepti */}
              <div
                aria-hidden
                className="h-full w-full"
                style={{
                  backgroundImage: `
                    radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.4) 0%, transparent 50%),
                    radial-gradient(ellipse at 70% 80%, rgba(168,85,247,0.3) 0%, transparent 45%),
                    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                  `,
                  backgroundSize: "300px 300px, 250px 250px, 32px 32px, 32px 32px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
