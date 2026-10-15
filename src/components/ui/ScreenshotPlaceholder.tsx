import { useId } from 'react';

interface PlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
  dark?: boolean;
}

export function ScreenshotPlaceholder({ label, sublabel, className = '', dark = false }: PlaceholderProps) {
  const id = useId();
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-xl border ${dark ? 'border-white/10 bg-[#1A1A18]' : 'border-border bg-white'} ${className}`}
      role="img"
      aria-label={`${label} — placeholder. Replace with the actual product screenshot.`}
      aria-describedby={`${id}-desc`}
    >
      <div className={`flex items-center gap-1.5 border-b px-4 py-2.5 w-full ${dark ? 'border-white/10 bg-[#1F1F1C]' : 'border-border bg-[#E8E6E0]'}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className={`flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 ${dark ? 'text-white/50' : 'text-ink-mute'}`}>
        <div className={`h-12 w-12 rounded-lg border-2 border-dashed ${dark ? 'border-white/15' : 'border-border'}`} />
        <p className="text-sm font-semibold">{label}</p>
        {sublabel && <p className="text-xs opacity-70">{sublabel}</p>}
        <p id={`${id}-desc`} className="text-[11px] opacity-50 max-w-xs text-center">
          Replace this placeholder with the real product screenshot.
        </p>
      </div>
    </div>
  );
}
