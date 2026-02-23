import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              Punjabi<span className="text-primary">Multani</span>Rishtey
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trusted matrimonial matchmaking for Punjabi, Multani & Jhangi families worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About Us", "Login", "Register"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Contact</h4>
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
