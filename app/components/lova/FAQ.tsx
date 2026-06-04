"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How accurate are LOVA's predictions?",
    a: "LOVA's AI learns from your unique cycle data and typically reaches over 95% accuracy within three months of consistent logging.",
  },
  {
    q: "Is my data private?",
    a: "Yes. All your health data is end-to-end encrypted, stored securely, and never sold. You own and control it completely.",
  },
  {
    q: "Can I chat anonymously?",
    a: "Absolutely. You can join community spaces and message Kungwi mentors anonymously — your identity stays yours.",
  },
  {
    q: "How do experts work?",
    a: "All experts are verified gynecologists, nutritionists and wellness specialists. Book a session and chat or video call securely in-app.",
  },
  {
    q: "Is the app free?",
    a: "LOVA is free to download with all core tracking, insights and community access. Expert consultations and premium features are optional.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Good questions
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Everything you might <span className="text-gradient italic">wonder.</span>
          </h2>
        </div>

        <ul className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className={`rounded-3xl border border-border/60 transition-all ${isOpen ? "bg-card shadow-card" : "bg-card/40"
                  }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-6 text-left p-6"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="text-lg font-medium">{f.q}</span>
                  <span
                    className={`grid place-items-center h-9 w-9 rounded-full bg-rose/25 text-primary transition ${isOpen ? "rotate-45" : ""
                      }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
