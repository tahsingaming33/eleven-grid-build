import { cn } from "@/lib/utils";

const PRESETS: Record<string, string> = {
  sunset:
    "radial-gradient(ellipse at 20% 80%, #f4a261 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, #e07a5f 0%, transparent 55%), radial-gradient(ellipse at 60% 60%, #b56576 0%, transparent 60%), linear-gradient(135deg, #6d597a, #355070)",
  ocean:
    "radial-gradient(ellipse at 30% 30%, #5a9ec9 0%, transparent 55%), radial-gradient(ellipse at 70% 70%, #e9c46a 0%, transparent 55%), linear-gradient(135deg, #264653, #2a9d8f)",
  forest:
    "radial-gradient(ellipse at 25% 75%, #6b8e23 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, #c9d6a5 0%, transparent 50%), linear-gradient(135deg, #1b3a2b, #3a5a40)",
  ember:
    "radial-gradient(ellipse at 30% 30%, #f6bd60 0%, transparent 55%), radial-gradient(ellipse at 70% 70%, #c44536 0%, transparent 55%), linear-gradient(135deg, #2b1b17, #6f1d1b)",
  dusk:
    "radial-gradient(ellipse at 20% 30%, #a594f9 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, #f4978e 0%, transparent 55%), linear-gradient(135deg, #1a1a2e, #16213e)",
};

export type NoisePreset = keyof typeof PRESETS;

export function NoiseGradient({
  preset = "sunset",
  className,
  grain = 0.45,
}: {
  preset?: NoisePreset;
  className?: string;
  grain?: number;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: PRESETS[preset] }}
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-overlay"
        style={{
          opacity: grain,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}