import { ArrowRight, Calendar, Heart, MessageCircle, Sparkles, Moon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-hero">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-rose/40 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-lavender/50 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-peach/40 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-plum shadow-soft">
              <Sparkles className="h-3.5 w-3.5" />
              Smart wellness for every woman
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              Understand Your Cycle.
              <br />
              <span className="text-gradient italic font-display">Empower</span> Your Health.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              LOVA is your intelligent companion for menstrual health — tracking,
              insights, expert care, and a sisterhood of support. All in one
              soft, private space made just for you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#download"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta text-primary-foreground px-7 py-3.5 font-medium shadow-glow hover:scale-[1.02] transition"
              >
                Download App
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#community"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium text-foreground hover:bg-card transition"
              >
                Join Community
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[
                  "oklch(0.85 0.1 20)",
                  "oklch(0.82 0.09 305)",
                  "oklch(0.88 0.1 50)",
                  "oklch(0.8 0.1 10)",
                ].map((c, i) => (
                  <span
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span>
                <strong className="text-foreground">10k+</strong> women trust LOVA
              </span>
            </div>
          </div>

          {/* Floating UI mockups */}
          <div className="relative h-[560px] lg:h-[640px] animate-fade-up [animation-delay:120ms]">
            <PhoneMock />

            {/* Floating cards */}
            <FloatCard className="absolute top-4 -left-2 sm:left-6 animate-float">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-9 w-9 rounded-xl bg-rose/30 text-primary">
                  <Calendar className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Next period
                  </p>
                  <p className="text-sm font-semibold">In 6 days</p>
                </div>
              </div>
            </FloatCard>

            <FloatCard className="absolute top-40 -right-2 sm:-right-4 animate-float-slow [animation-delay:-2s]">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                Mood today
              </p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌷</span>
                <div>
                  <p className="text-sm font-semibold">Calm & creative</p>
                  <p className="text-xs text-muted-foreground">Follicular phase</p>
                </div>
              </div>
            </FloatCard>

            <FloatCard className="absolute bottom-24 -left-4 sm:left-0 animate-float [animation-delay:-4s]">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-9 w-9 rounded-xl bg-lavender text-plum">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Kungwi Amina</p>
                  <p className="text-xs text-muted-foreground">"I'm here, dear."</p>
                </div>
              </div>
            </FloatCard>

            <FloatCard className="absolute bottom-4 right-4 animate-float-slow [animation-delay:-7s]">
              <div className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-plum" />
                <p className="text-xs font-medium">Ovulation in 11 days</p>
              </div>
            </FloatCard>
          </div>
        </div>
      </div>

    </section>
  );
}
// push
function FloatCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass rounded-2xl px-4 py-3 shadow-soft min-w-[180px] ${className}`}>
      {children}
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto h-full w-[280px] sm:w-[320px]">
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-white to-rose/30 shadow-glow border border-white/60 overflow-hidden">
        <div className="absolute inset-0 p-6 flex flex-col">
          {/* phone notch */}
          <div className="mx-auto h-5 w-24 rounded-full bg-foreground/10 mb-4" />

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Good morning
              </p>
              <p className="font-display text-lg">Hi, Angel 🌸</p>
            </div>
            <span className="grid place-items-center h-9 w-9 rounded-full bg-gradient-cta text-white">
              <Heart className="h-4 w-4 fill-current" />
            </span>
          </div>

          {/* cycle ring */}
          <div className="relative mx-auto my-2 h-48 w-48">
            <div className="absolute inset-0 rounded-full bg-gradient-soft animate-spin-slow opacity-60" />
            <div className="absolute inset-3 rounded-full bg-white shadow-soft flex flex-col items-center justify-center">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Day 12 · Follicular
              </p>
              <p className="font-display text-4xl mt-1">High</p>
              <p className="text-xs text-muted-foreground">fertility window</p>
              <p className="mt-2 text-[10px] text-primary font-medium">Ovulation in 3 days</p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {[
              { label: "Energy", value: "82%", color: "bg-peach/50" },
              { label: "Mood", value: "Calm", color: "bg-lavender/60" },
              { label: "Sleep", value: "7.4h", color: "bg-rose/30" },
            ].map((s) => (
              <div key={s.label} className={`rounded-xl ${s.color} px-2 py-2`}>
                <p className="text-[9px] uppercase tracking-wider text-plum/70">{s.label}</p>
                <p className="text-xs font-semibold mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-2xl bg-white shadow-soft p-3 flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-lavender grid place-items-center text-xs">
              💬
            </span>
            <div className="flex-1">
              <p className="text-[10px] font-semibold">Kungwi tip</p>
              <p className="text-[10px] text-muted-foreground leading-tight">
                Hydrate well today — your body loves it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
