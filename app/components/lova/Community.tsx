import { Heart, MessageCircle, Bookmark, Sparkles } from "lucide-react";

const posts = [
  {
    name: "Amani",
    tag: "Anonymous",
    color: "oklch(0.85 0.1 20)",
    time: "2h",
    text:
      "First month using LOVA and it predicted my period to the day. I finally feel like I understand my own body 🌸",
    likes: 248,
    comments: 36,
  },
  {
    name: "Neema",
    tag: "Wellness",
    color: "oklch(0.82 0.09 305)",
    time: "5h",
    text:
      "Sharing my luteal-phase routine: magnesium tea, slow walks, and an early bedtime. What works for you?",
    likes: 412,
    comments: 89,
  },
  {
    name: "Faraja",
    tag: "Support",
    color: "oklch(0.88 0.1 50)",
    time: "1d",
    text:
      "To anyone struggling with painful cramps — you are not weak, you are not dramatic. You deserve gentle care. 💕",
    likes: 1284,
    comments: 212,
  },
];

export function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            The sisterhood
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            A community that <span className="text-gradient italic">listens.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real women, real conversations. Share, ask, or simply read along.
            Always anonymous if you wish, always held with kindness.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Anonymous posting & private circles",
              "Moderated by wellness professionals",
              "Topic spaces: fertility, PCOS, motherhood, mood",
              "Zero ads. Zero judgement.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 grid place-items-center h-6 w-6 rounded-full bg-rose/30 text-primary">
                  <Sparkles className="h-3 w-3" />
                </span>
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-hero rounded-[3rem] -z-10 blur-2xl opacity-60" />
          <div className="space-y-4">
            {posts.map((p, i) => (
              <article
                key={p.name}
                className={`glass rounded-3xl p-6 shadow-soft hover:shadow-glow transition ${
                  i === 1 ? "lg:ml-12" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-10 w-10 rounded-full grid place-items-center text-white font-semibold"
                    style={{ background: p.color }}
                  >
                    {p.name[0]}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">
                      {p.name}{" "}
                      <span className="ml-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                        · {p.tag}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">{p.time} ago</p>
                  </div>
                  <Bookmark className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="mt-4 text-foreground leading-relaxed">{p.text}</p>
                <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Heart className="h-4 w-4 text-primary fill-primary/30" /> {p.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4" /> {p.comments}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
