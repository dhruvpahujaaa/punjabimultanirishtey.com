import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToWhyChooseUs = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("why");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12" id="contact">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              Punjabi<span className="text-primary">Multani</span>Rishtey
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trusted matrimonial matchmaking for Punjabi, Multani &amp; Jhangi families worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="/"
                onClick={scrollToTop}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Home
              </a>
              <Link
                to="/about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/why-choose-us"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Why Choose Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Account</h4>
            <div className="space-y-2">
              <Link
                to="/login"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Free Registration
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Contact Us</h4>
            <p className="text-sm text-muted-foreground">support@punjabimultanirishtey.com</p>
            <p className="text-sm text-muted-foreground mt-1">+91 98765 43210</p>
          </div>
        </div>
        <div className="gold-divider mt-10 mb-6" />
        <p className="text-center text-xs text-muted-foreground">
          © 2026 PunjabiMultaniRishtey.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
