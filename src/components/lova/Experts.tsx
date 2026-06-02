import { Star, MessageCircle, BadgeCheck } from "lucide-react";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";
import expert1 from "@/assets/expert-1.jpg";
import expert2 from "@/assets/expert-2.jpg";

type Person = {
  name: string;
  role: string;
  specialty: string;
  rating: number;
  available: string;
  img: string;
};

const kungwi: Person[] = [
  {
    name: "Kungwi Amina",
    role: "Cultural Mentor",
    specialty: "Relationships · Womanhood",
    rating: 4.9,
    available: "Available now",
    img: mentor1,
  },
  {
    name: "Kungwi Halima",
    role: "Cultural Mentor",
    specialty: "Marriage · Motherhood",
    rating: 5.0,
    available: "Today · 4pm",
    img: mentor2,
  },
];

const experts: Person[] = [
  {
    name: "Dr. Sara Mwangi",
    role: "Gynecologist",
    specialty: "Hormonal health · PCOS",
    rating: 4.9,
    available: "Available now",
    img: expert1,
  },
  {
    name: "Dr. Leila Ahmed",
    role: "Reproductive Health",
    specialty: "Fertility · Wellness",
    rating: 4.8,
    available: "Today · 6pm",
    img: expert2,
  },
];

export function Experts() {
  return (
    <section id="experts" className="relative py-24 sm:py-32 bg-gradient-soft/30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Care, by real people
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Mentors & experts, <span className="text-gradient italic">on call.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From cultural wisdom to medical expertise — talk to women who
            understand, in a tap.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          <PeopleRow title="Verified Kungwi Mentors" people={kungwi} accent="bg-peach/40 text-plum" />
          <PeopleRow title="Health Experts" people={experts} accent="bg-lavender text-plum" />
        </div>
      </div>
    </section>
  );
}

function PeopleRow({
  title,
  people,
  accent,
}: {
  title: string;
  people: Person[];
  accent: string;
}) {
  return (
    <div>
      <h3 className="text-2xl mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-5">
        {people.map((p) => (
          <article
            key={p.name}
            className="group rounded-3xl bg-card shadow-card border border-border/50 overflow-hidden hover:shadow-glow transition flex flex-col sm:flex-row"
          >
            <div className="relative sm:w-44 h-48 sm:h-auto shrink-0 overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] uppercase tracking-widest rounded-full px-2.5 py-1 ${accent}`}>
                  {p.role}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  {p.rating}
                </span>
              </div>
              <h4 className="mt-3 text-xl flex items-center gap-1.5">
                {p.name}
                <BadgeCheck className="h-4 w-4 text-primary" />
              </h4>
              <p className="text-sm text-muted-foreground">{p.specialty}</p>
              <p className="mt-2 text-xs text-primary font-medium">● {p.available}</p>
              <button className="mt-auto pt-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm hover:opacity-90 transition">
                  <MessageCircle className="h-4 w-4" /> Chat
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
