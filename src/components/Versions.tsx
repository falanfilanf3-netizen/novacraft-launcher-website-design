import { Container, Reveal, Section, SectionHeading } from "@/components/ui";

const loaders = [
  { name: "Fabric", note: "Hafif ve hızlı" },
  { name: "Forge", note: "Klasik mod yükleyici" },
  { name: "Quilt", note: "Fabric ile uyumlu" },
  { name: "NeoForge", note: "Modern Forge" },
];

export default function Versions() {
  return (
    <Section id="versions">
      <Container>
        <SectionHeading
          eyebrow="Uyumluluk"
          title={
            <>
              Ne oynarsan oyna, <span className="text-nova">biz destekliyoruz</span>
            </>
          }
          subtitle="En yeni sürümlerden özlediğin eski yapılara kadar — yanındayız."
          align="center"
        />

        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {loaders.map((l) => (
              <span
                key={l.name}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-warm-300"
              >
                {l.name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur lg:p-12">
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-nova-600/10 blur-2xl" />
            <div className="relative max-w-3xl">
              <h3 className="text-2xl font-medium text-white sm:text-3xl">
                Nerede oynuyorsan orada çalışır
              </h3>
              <p className="mt-4 text-base leading-relaxed text-warm-500">
                Windows, macOS (Intel ve Apple Silicon) ve Linux. Kayıtların ve 
                profillerin tüm cihazlarında senkronize olur çünkü inşa ettiğin 
                dünyalar tek bir bilgisayara hapsolmayı hak etmez.
              </p>
              <div className="mt-6 space-y-3 text-sm text-warm-400">
                <p>• Windows 10 veya daha yenisi</p>
                <p>• macOS 11 (Big Sur) veya daha yenisi</p>
                <p>• Çoğu modern Linux dağıtımı</p>
                <p>• En az 4 GB RAM (oldukça verimliyiz)</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
