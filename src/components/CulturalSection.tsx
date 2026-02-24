import marriageImage from "@/assets/pexels-thevisionaryvows-33006935.jpg";

const CulturalSection = () => {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${marriageImage})` }}
      />
      <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[2px]" />

      <div className="container relative z-20 max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Rooted in Punjabi Traditions
        </h2>
        <div className="gold-divider w-24 mx-auto mt-4 mb-10 h-1 bg-primary rounded-full" />

        <div className="space-y-6 text-white/90 text-base md:text-lg lg:text-xl leading-relaxed font-medium drop-shadow-md">
          <p>
            In Punjabi families, marriage is not just the union of two souls — it is the coming together of two families,
            bound by shared values, trust, and lifelong commitment. From the joyous <em className="text-primary font-bold not-italic">Roka</em> ceremony
            to the vibrant <em className="text-primary font-bold not-italic">Mehndi</em> celebrations and the sacred <em className="text-primary font-bold not-italic">Anand Karaj</em>,
            every tradition reflects the warmth and togetherness that defines our culture.
          </p>
          <p>
            Whether your family is rooted in Punjab or part of the global Punjabi and Multani diaspora,
            we understand the importance of finding a match that respects your heritage, values your traditions,
            and celebrates the beauty of our shared identity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CulturalSection;
