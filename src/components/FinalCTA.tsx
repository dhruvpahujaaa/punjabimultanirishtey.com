import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-peach-gradient">
      <div className="container text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Let's Find the Right Match for Your Family
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Join thousands of verified Punjabi & Multani families who found their perfect match.
        </p>
        <Link to="/register">
          <Button
            size="lg"
            variant="secondary"
            className="text-base font-semibold px-10"
          >
            Register Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
