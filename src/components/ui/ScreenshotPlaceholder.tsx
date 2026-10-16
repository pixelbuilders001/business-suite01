import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame';

interface PlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
  dark?: boolean;
}

export function ScreenshotPlaceholder({ label, className = '', dark = false }: PlaceholderProps) {
  return (
    <ScreenshotFrame
      src="/01-retail-command-center.jpg"
      alt={label}
      className={className}
      dark={dark}
    />
  );
}
