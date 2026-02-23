import { Phone, Shield, Sparkles, Handshake } from "lucide-react";

const items = [
  { icon: Phone, text: "24-48 Hr Phone Verification" },
  { icon: Shield, text: "Address & Income Proof Verified" },
  { icon: Sparkles, text: "Horoscope Matched Profiles" },
  { icon: Handshake, text: "Family Compatibility Focused" },
];

const TrustStrip = () => {
  return (
    <section className="bg-card border-y border-border">
      <div className="container py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.text} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
