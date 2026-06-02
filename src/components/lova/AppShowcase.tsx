import { BarChart3, Bell, Calendar, MessageSquare, Users, LayoutDashboard } from "lucide-react";

const screens = [
  { title: "Dashboard", icon: LayoutDashboard, accent: "bg-rose/30" },
  { title: "Calendar", icon: Calendar, accent: "bg-peach/40" },
  { title: "Chat", icon: MessageSquare, accent: "bg-lavender" },
  { title: "Community", icon: Users, accent: "bg-rose/25" },
  { title: "Notifications", icon: Bell, accent: "bg-peach/40" },
  { title: "Analytics", icon: BarChart3, accent: "bg-lavender" },
];

export function AppShowcase() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Designed for daily delight
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Beautifully crafted, <span className="text-gradient italic">phone-first.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Every screen in LOVA is built to feel like a warm hug — soft
            colors, calm motion, zero clutter.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screens.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-3xl bg-gradient-hero p-8 shadow-card hover:shadow-glow transition overflow-hidden`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-rose/30 blur-3xl" />
              <span className={`relative grid place-items-center h-12 w-12 rounded-2xl ${s.accent}`}>
                <s.icon className="h-5 w-5 text-plum" />
              </span>
              <h3 className="relative mt-4 text-xl">{s.title}</h3>

              {/* mini mockup */}
              <div className="relative mt-6 rounded-2xl bg-white p-4 shadow-soft border border-white">
                <div className="h-2.5 w-20 rounded-full bg-foreground/10 mb-3" />
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-foreground/5" />
                  <div className="h-2 w-4/5 rounded-full bg-foreground/5" />
                  <div className="h-2 w-2/3 rounded-full bg-foreground/5" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <span className="h-10 rounded-lg bg-rose/30" />
                  <span className="h-10 rounded-lg bg-peach/40" />
                  <span className="h-10 rounded-lg bg-lavender" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
