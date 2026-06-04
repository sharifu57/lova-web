import { Star } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const items = [
  {
    img: t1,
    name: "Zawadi · 27",
    text:
      "For the first time I actually understand my mood swings. LOVA explained my luteal phase and everything clicked.",
  },
  {
    img: t2,
    name: "Layla · 31",
    text:
      "The Kungwi chat changed something in me. Felt like calling an aunt who always knows what to say.",
  },
  {
    img: t3,
    name: "Mariam · 24",
    text:
      "Predictions are scary accurate. My cramps are softer now that I prep for them — I feel cared for.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Loved by women everywhere
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Stories from the <span className="text-gradient italic">LOVA circle.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className={`rounded-3xl bg-card shadow-card border border-border/50 p-8 ${
                i === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed font-display italic text-foreground">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span className="text-sm font-medium">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
