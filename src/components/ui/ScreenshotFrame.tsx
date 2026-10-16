import { useId } from 'react';

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  className?: string;
  dark?: boolean;
  priority?: boolean;
}

export function ScreenshotFrame({ src, alt, className = '', dark = false, priority = false }: ScreenshotFrameProps) {
  const id = useId();

  return (
    <div
      className={`relative overflow-hidden rounded-xl border ${dark ? 'border-border-deep/60' : 'border-border'} shadow-2xl shadow-black/10 ${className}`}
    >
      <div className={`flex items-center gap-1.5 border-b px-4 py-2.5 ${dark ? 'border-white/10 bg-[#1F1F1C]' : 'border-border bg-[#E8E6E0]'}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className={`ml-2 text-[10px] font-medium ${dark ? 'text-white/40' : 'text-ink-mute'}`}>
          {alt.includes('—') ? alt.split('—')[0] : 'Application'}
        </span>
      </div>
      <div className={`relative ${dark ? 'bg-[#1A1A18]' : 'bg-white'}`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-auto object-cover block"
        />
      </div>
    </div>
  );
}
