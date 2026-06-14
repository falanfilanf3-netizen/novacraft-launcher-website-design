import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/*  Logo                                                               */
/* ------------------------------------------------------------------ */

export function Logo({
  className,
  textClassName,
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative">
        <svg viewBox="0 0 100 100" className="h-8 w-8" aria-hidden>
          <defs>
            <linearGradient id="lg-top" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#a855f7" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="lg-side" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#d67dff" />
              <stop offset="1" stopColor="#a845e6" />
            </linearGradient>
          </defs>
          <polygon points="50,12 86,30 50,48 14,30" fill="url(#lg-top)" />
          <polygon points="86,30 86,68 50,86 50,48" fill="url(#lg-side)" />
          <polygon points="14,30 14,68 50,86 50,48" fill="#4c1d95" />
        </svg>
      </span>
      <span
        className={cn(
          "text-xl font-semibold tracking-tight text-white",
          textClassName
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        Nova<span className="text-nova">Craft</span>
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Yerleşim yardımcıları                                               */
/* ------------------------------------------------------------------ */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-nova-300 backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}

// Badge takma adı
export const Eyebrow = Badge;

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[2.7rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed text-warm-500 sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Scroll'da görünme (reveal) kancası                                  */
/* ------------------------------------------------------------------ */

export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
}) {
  const { ref, inView } = useInView();
  return (
    <Tag
      ref={ref as never}
      style={{
        transitionDelay: `${delay}ms`,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        opacity: inView ? 1 : 0,
      }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        className
      )}
    >
      {children}
    </Tag>
  );
}
