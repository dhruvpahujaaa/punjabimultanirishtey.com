import { Button } from "@/components/ui/button";
import { Crown, Gift } from "lucide-react";

const plans = [
  {
    name: "Introductory",
    price: "FREE",
    priceNote: "No charge",
    matches: "5 Matches",
    featured: false,
    free: true,
    tag: null,
  },
  {
    name: "Premium",
    price: "₹499",
    priceNote: "One-time payment",
    matches: "20 Matches",
    featured: true,
    free: false,
    tag: "Most Popular",
  },
  {
    name: "Elite",
    price: "₹999",
    priceNote: "One-time payment",
    matches: "100 Matches",
    featured: false,
    free: false,
    tag: "Best Value",
  },
];

const MembershipPlans = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-subtle" id="plans">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Membership Plans
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-muted-foreground">
            Choose the plan that fits your family's needs.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-xl p-8 text-center shadow-warm transition-all hover:shadow-warm-lg hover:-translate-y-1 border ${plan.featured
                  ? "border-gold ring-2 ring-gold/20 scale-105"
                  : "border-border/50"
                }`}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  <Crown className="w-3 h-3" /> {plan.tag}
                </div>
              )}
              {plan.free && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  <Gift className="w-3 h-3" /> Free
                </div>
              )}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2 mt-2">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-foreground mb-1 font-heading">
                {plan.price}
              </p>
              <p className="text-xs text-muted-foreground mb-1">{plan.priceNote}</p>
              <p className="text-sm font-semibold text-primary mb-6">{plan.matches}</p>
              <Button
                className="w-full"
                variant={plan.featured ? "default" : plan.free ? "outline" : "outline"}
              >
                {plan.free ? "Start Free" : "Unlock Matches"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
