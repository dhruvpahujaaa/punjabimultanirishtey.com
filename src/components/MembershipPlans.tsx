import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

const plans = [
  { name: "Introductory", price: "₹99", matches: "5 Matches", featured: false },
  { name: "Standard", price: "₹199", matches: "10 Matches", featured: false },
  { name: "Premium", price: "₹299", matches: "20 Matches", featured: true },
  { name: "Elite", price: "₹499", matches: "50 Matches", featured: false },
];

const MembershipPlans = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-subtle">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Membership Plans
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-muted-foreground">Choose the plan that fits your family's needs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-xl p-8 text-center shadow-warm transition-shadow hover:shadow-warm-lg border ${
                plan.featured ? "border-gold ring-2 ring-gold/20" : "border-border/50"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  <Crown className="w-3 h-3" /> Popular
                </div>
              )}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
              <p className="text-3xl font-bold text-foreground mb-1 font-heading">{plan.price}</p>
              <p className="text-sm text-muted-foreground mb-6">{plan.matches}</p>
              <Button
                className="w-full"
                variant={plan.featured ? "default" : "outline"}
              >
                Unlock Matches
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
