"use client";

export default function SimulatorSlider({
  label,
  value,
  onChange,
  min = 1,
  max = 10,
  step = 1,
  unit,
  color,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  color?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-neutral-900 dark:text-white">{label}</span>
        <span className={`font-mono text-xs font-semibold ${color ?? "text-primary"}`}>
          {value}
          {unit ?? ""}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-primary"
      />
    </div>
  );
}
