import {
  Calendar,
  Activity,
  Sparkles,
  MessageCircle,
  Stethoscope,
  Users,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Period Tracking",
    desc: "Log periods, ovulation, fertile days and symptoms with effortless precision.",
    tint: "bg-rose/25 text-primary",
  },
  {
    icon: Activity,
    title: "Cycle Stage Insights",
    desc: "Understand menstrual, follicular, ovulation and luteal phases as they happen.",
    tint: "bg-peach/40 text-plum",
  },
  {
    icon: Sparkles,
    title: "Smart Predictions",
    desc: "AI-powered forecasts and gentle reminders that learn your unique rhythm.",
    tint: "bg-lavender text-plum",
  },
  {
    icon: MessageCircle,
    title: "Chat with Kungwi",
    desc: "Privately talk with experienced Kungwi mentors for cultural & relationship guidance.",
    tint: "bg-rose/30 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Expert Consultation",
    desc: "Book verified gynecologists, nutritionists and wellness specialists.",
    tint: "bg-peach/40 text-plum",
  },
  {
    icon: Users,
    title: "Women Community",
    desc: "A warm, safe circle for honest conversations and shared experiences.",
    tint: "bg-lavender text-plum",
  },
  {
    icon: HeartPulse,
    title: "Mood & Wellness",
    desc: "Track moods, cramps, sleep and energy to see what your body is telling you.",
    tint: "bg-rose/25 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security",
    desc: "End-to-end encrypted. Your health story stays only with you.",
    tint: "bg-peach/40 text-plum",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Everything you need
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            A complete care toolkit, <span className="text-gradient italic">designed softly.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Eight thoughtful tools that work together — so you feel informed,
            supported and never alone on your cycle journey.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-3xl bg-card p-6 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 border border-border/50"
            >
              <span
                className={`grid place-items-center h-12 w-12 rounded-2xl ${f.tint} group-hover:scale-110 transition`}
              >
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
