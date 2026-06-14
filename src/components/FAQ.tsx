import { useState } from "react";
import { Container, Reveal, Section, SectionHeading } from "@/components/ui";
import { cn } from "@/utils/cn";

const faqs = [
  {
    q: "Gerçekten ücretsiz mi?",
    a: "Evet, tamamen ücretsiz. Bunu Minecraft'ı sevdiğimiz için yapıyoruz, senden para kazanmak için değil. Reklam yok, ücretli katman yok, gizli maliyet yok.",
  },
  {
    q: "Kullanması güvenli mi?",
    a: "Mojang'ın resmi kimlik doğrulamasını kullanıyoruz, bu yüzden Microsoft hesabın güvende. Mojang veya Microsoft ile bağlantılı değiliz ama kurallarına uyuyoruz.",
  },
  {
    q: "Mevcut dünyalarıma zarar verir mi?",
    a: "Hiç vermez. Resmi launcher ile aynı klasörleri kullanıyoruz, bu yüzden kayıtların, kaynak paketlerin ve modların olduğu gibi kalır.",
  },
  {
    q: "Java kurmam gerekiyor mu?",
    a: "Gerekmiyor. Java'yı biz yönetiyoruz. Her sürüm için ihtiyacı olan Java sürümünü otomatik olarak kuruyoruz.",
  },
  {
    q: "Modlarımı kullanabilir miyim?",
    a: "Kesinlikle. Fabric, Forge, Quilt veya NeoForge modlarını tek tıkla kur. İstersen modpaket bulmana da yardımcı oluruz.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-charcoal-900/30">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Sorular"
          title={
            <>
              Cevaplarımız var
            </>
          }
          subtitle="Aklına takılan bir şey olursa bize yaz. Bot değil, gerçek insanlarız."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-white">{f.q}</span>
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full text-white transition-transform duration-300",
                      open === i && "rotate-45 bg-nova-600/20"
                    )}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-warm-400">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
