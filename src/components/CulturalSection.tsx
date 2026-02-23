const CulturalSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Rooted in Punjabi Traditions
        </h2>
        <div className="gold-divider w-24 mx-auto mt-4 mb-10" />
        <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
          <p>
            In Punjabi families, marriage is not just the union of two souls — it is the coming together of two families, 
            bound by shared values, trust, and lifelong commitment. From the joyous <em className="text-foreground font-medium">Roka</em> ceremony 
            to the vibrant <em className="text-foreground font-medium">Mehndi</em> celebrations and the sacred <em className="text-foreground font-medium">Anand Karaj</em>, 
            every tradition reflects the warmth and togetherness that defines our culture.
          </p>
          <p>
            Whether your family is rooted in Punjab or part of the global Punjabi and Multani diaspora, 
            we understand the importance of finding a match that respects your heritage, values your traditions, 
            and celebrates the beauty of our shared identity.
          </p>
        </div>
        <div className="mt-12 flex justify-center gap-8">
          {["🪔", "🎉", "💍"].map((emoji, i) => (
            <span key={i} className="text-4xl md:text-5xl opacity-60">{emoji}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalSection;
