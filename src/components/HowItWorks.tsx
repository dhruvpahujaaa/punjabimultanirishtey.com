import { UserPlus, FileText, PhoneCall, Heart } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Free Registration", desc: "Sign up with OTP-based login in seconds.", step: 1 },
  { icon: FileText, title: "Fill Detailed Profile", desc: "Add your basic, family & preference details.", step: 2 },
  { icon: PhoneCall, title: "Verification Call", desc: "Our team verifies you within 24-48 hours.", step: 3 },
  { icon: Heart, title: "Receive Curated Matches", desc: "Get hand-picked compatible profiles.", step: 4 },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-subtle">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-border" />
              )}
              <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shadow-warm mb-6">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                Step {s.step}
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
