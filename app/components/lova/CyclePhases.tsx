"use client";
import { useState } from "react";
import { Droplet, Flower2, Sun, Moon } from "lucide-react";

const phases = [
  {
    key: "menstrual",
    name: "Menstrual",
    days: "Day 1–5",
    icon: Droplet,
    color: "oklch(0.78 0.14 15)",
    bg: "bg-rose/25",
    mood: "Reflective, restful",
    body: "Lining sheds, hormones at their lowest",
    energy: "Low — honor rest",
    tip: "Warm baths, iron-rich foods, gentle stretching.",
  },
  {
    key: "follicular",
    name: "Follicular",
    days: "Day 6–13",
    icon: Flower2,
    color: "oklch(0.82 0.1 50)",
    bg: "bg-peach/40",
    mood: "Optimistic, creative",
    body: "Estrogen rises, energy returns",
    energy: "Rising — begin new things",
    tip: "Start projects, strength training, social plans.",
  },
  {
    key: "ovulation",
    name: "Ovulation",
    days: "Day 14–16",
    icon: Sun,
    color: "oklch(0.78 0.16 30)",
    bg: "bg-gradient-soft",
    mood: "Radiant, magnetic",
    body: "Egg released, peak fertility",
    energy: "Highest — speak, present, connect",
    tip: "Hydrate, light exercise, eat colorful greens.",
  },
  {
    key: "luteal",
    name: "Luteal",
    days: "Day 17–28",
    icon: Moon,
    color: "oklch(0.7 0.09 305)",
    bg: "bg-lavender",
    mood: "Inward, intuitive",
    body: "Progesterone rises, then falls",
    energy: "Slowing — nest and nurture",
    tip: "Magnesium, journaling, earlier nights.",
  },
];

export function CyclePhases() {
  const [active, setActive] = useState(2);
  const phase = phases[active];

  return (
    <section id="cycle" className="relative py-24 sm:py-32 bg-gradient-soft/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Know your phases
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Your body has a <span className="text-gradient italic">rhythm.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Tap a phase to learn how to honor your hormones, mood and energy
            across the month.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Circle */}
          <div className="relative mx-auto h-[380px] w-[380px] sm:h-[460px] sm:w-[460px]">
            <div className="absolute inset-0 rounded-full bg-gradient-hero shadow-glow" />
            <div className="absolute inset-8 rounded-full bg-card shadow-soft" />

            {phases.map((p, i) => {
              const angle = (i / phases.length) * 2 * Math.PI - Math.PI / 2;
              const r = 45;
              const x = 50 + Math.cos(angle) * r;
              const y = 50 + Math.sin(angle) * r;
              return (
                <button
                  key={p.key}
                  onClick={() => setActive(i)}
                  className={`absolute h-20 w-20 sm:h-24 sm:w-24 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center text-xs font-medium transition-all ${active === i
                    ? "scale-110 shadow-glow ring-4 ring-white"
                    : "opacity-80 hover:scale-105"
                    } ${p.bg}`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <p.icon className="h-5 w-5" style={{ color: p.color }} />
                  <span className="mt-1 text-[11px] text-plum">{p.name}</span>
                </button>
              );
            })}

            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {phase.days}
                </p>
                <p className="font-display text-3xl mt-1">{phase.name}</p>
              </div>
            </div>
          </div>

          {/* Info card */}
          <div className="rounded-3xl bg-card shadow-card p-8 sm:p-10 border border-border/50 animate-fade-up" key={phase.key}>
            <div className="flex items-center gap-3">
              <span
                className={`grid place-items-center h-12 w-12 rounded-2xl ${phase.bg}`}
              >
                <phase.icon className="h-5 w-5" style={{ color: phase.color }} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Phase
                </p>
                <h3 className="text-2xl">{phase.name}</h3>
              </div>
            </div>

            <dl className="mt-8 space-y-5">
              {[
                ["Mood", phase.mood],
                ["Body", phase.body],
                ["Energy", phase.energy],
                ["Wellness tip", phase.tip],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-3 gap-4 pb-5 border-b border-border/60 last:border-0 last:pb-0">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="col-span-2 text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
