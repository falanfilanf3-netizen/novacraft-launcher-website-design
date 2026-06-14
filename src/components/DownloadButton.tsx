import { useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { DOWNLOAD, HAS_FILE } from "@/lib/download";

type Variant = "primary" | "ghost" | "glass";
type Size = "lg" | "md" | "sm";

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

const sizes: Record<Size, string> = {
  lg: "h-12 px-6 text-sm",
  md: "h-10 px-5 text-xs",
  sm: "h-9 px-4 text-xs",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-nova text-white shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 hover:-translate-y-0.5",
  ghost: "border border-white/15 text-warm-300 hover:bg-white/5 hover:text-white",
  glass: "glass-subtle text-white hover:bg-white/10",
};

export default function DownloadButton({
  variant = "primary",
  size = "lg",
  className,
  label = "NovaCraft'ı İndir",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
}) {
  const [soon, setSoon] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const handleClick = () => {
    if (HAS_FILE) return;
    setSoon(false);
    window.clearTimeout(timer.current);
    window.setTimeout(() => setSoon(true), 10);
    timer.current = window.setTimeout(() => setSoon(false), 3600);
  };

  const inner = (
    <span className="flex items-center gap-2.5">
      <DownloadIcon className="h-4 w-4" />
      <span className="font-medium">{label}</span>
    </span>
  );

  const cls = cn(
    "group relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-[0.97]",
    sizes[size],
    variants[variant],
    className
  );

  if (HAS_FILE) {
    return (
      <a
        href={DOWNLOAD.url}
        download
        className={cls}
        aria-label={`${label} — ${DOWNLOAD.platforms}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <span className="relative inline-flex">
      {soon && (
        <span
          role="status"
          className="absolute -top-2 left-1/2 z-20 w-max max-w-[280px] -translate-x-1/2 -translate-y-full"
        >
          <span className="glass-subtle flex items-start gap-2 rounded-xl px-3.5 py-2.5 text-xs text-white shadow-2xl">
            <span className="text-base leading-none">🚀</span>
            <span className="leading-relaxed text-warm-300">
              Kurulum dosyası çok yakında burada olacak. Haber vereceğiz.
            </span>
          </span>
          <span className="mx-auto block h-2 w-2 -translate-y-[5px] rotate-45 border-b border-r border-white/10 bg-white/[0.03]" />
        </span>
      )}
      <button
        type="button"
        onClick={handleClick}
        className={cls}
        aria-label={label}
      >
        {inner}
      </button>
    </span>
  );
}
