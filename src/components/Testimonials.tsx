import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our daughter found her perfect match within 3 weeks. The verification process gave us complete peace of mind.",
    name: "Sharma Family",
    location: "Ludhiana, Punjab",
  },
  {
    quote: "As a Multani family, it was important to find someone who understands our culture. This platform delivered beyond expectations.",
    name: "Kapoor Family",
    location: "Delhi NCR",
  },
  {
    quote: "The personal touch and curated matches made all the difference. Truly a family-first service.",
    name: "Arora Family",
    location: "Amritsar, Punjab",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Happy Families
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-8 shadow-warm border border-border/50">
              <Quote className="w-8 h-8 text-gold/40 mb-4" />
              <blockquote className="font-heading text-lg italic text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
