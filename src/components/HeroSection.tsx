import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-wedding.png";

const highlights = [
  "Personally Verified Profiles",
  "80%+ Compatibility Matching",
  "Sub-Community Focus (Arora, Khatri, Multani, Jhangi)",
  "Horoscope Matching Available",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-cream-subtle">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Find Trusted Punjabi & Multani{" "}
              <span className="text-primary">Matrimonial Matches</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Verified profiles. Cultural compatibility. Family-first matchmaking.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="text-base font-semibold px-8">
                  Start Free Registration
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
              <img
                src={heroImage}
                alt="Traditional Punjabi wedding couple"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border-4 border-gold/30 opacity-50" />
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-4 border-primary/20 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
