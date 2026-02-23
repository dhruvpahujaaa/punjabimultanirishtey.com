import { ShieldCheck, Users, Ban, ListChecks, Building2, UserCheck } from "lucide-react";

const cards = [
  { icon: ShieldCheck, title: "Authenticated Bio Data", desc: "Every profile is thoroughly verified with real documents." },
  { icon: Users, title: "Dedicated Verification Team", desc: "Our team personally calls and verifies each member." },
  { icon: Ban, title: "No Junk Profiles", desc: "Strict screening ensures only genuine profiles." },
  { icon: ListChecks, title: "10–15 Curated Matches", desc: "Hand-picked matches based on deep compatibility." },
  { icon: Building2, title: "Community-Based Matching", desc: "Focused on Punjabi, Multani & Jhangi sub-communities." },
  { icon: UserCheck, title: "Genuine & Verified Members", desc: "Real people with real intentions for marriage." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="why">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why PunjabiMultaniRishtey.com?
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-xl p-8 shadow-warm hover:shadow-warm-lg transition-shadow border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
