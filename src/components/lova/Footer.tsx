import { Heart, Instagram, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-soft/40 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-cta text-primary-foreground shadow-glow">
                <Heart className="h-4 w-4 fill-current" />
              </span>
              <span className="font-display text-xl">LOVA</span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Empowering women everywhere to understand, track and celebrate
              their bodies — softly, privately, beautifully.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center gap-2 rounded-full bg-card p-1.5 shadow-soft border border-border/60 max-w-sm"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="grid place-items-center h-10 w-10 rounded-full bg-gradient-cta text-primary-foreground hover:scale-105 transition">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-2">
            {[
              { title: "Product", links: ["Features", "Cycle", "Community", "Experts"] },
              { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
              { title: "Legal", links: ["Privacy Policy", "Terms", "Cookies", "GDPR"] },
            ].map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LOVA Health. Made with love, for women.
          </p>
          <div className="flex items-center gap-3 text-muted-foreground">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center h-9 w-9 rounded-full bg-card border border-border/60 hover:text-primary hover:border-primary/30 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
