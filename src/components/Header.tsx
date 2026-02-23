import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      // Already on homepage — smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleWhyChooseUs = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById("why");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("why");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-gold/30">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a
          href="/"
          onClick={handleHome}
          className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-tight cursor-pointer"
        >
          Punjabi<span className="text-primary">Multani</span>Rishtey
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/"
            onClick={handleHome}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Home
          </a>
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </Link>
          <a
            href="/#why"
            onClick={handleWhyChooseUs}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Why Choose Us
          </a>
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-sm font-medium">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="text-sm font-semibold">
              Free Registration
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-card border-t border-border px-6 pb-6 pt-2 animate-fade-in">
          <a
            href="/"
            onClick={handleHome}
            className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/50 cursor-pointer"
          >
            Home
          </a>
          <Link
            to="/about"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/50"
          >
            About Us
          </Link>
          <a
            href="/#why"
            onClick={handleWhyChooseUs}
            className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/50 cursor-pointer"
          >
            Why Choose Us
          </a>
          <div className="flex flex-col gap-3 mt-4">
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
            <Link to="/register" onClick={() => setMobileOpen(false)}>
              <Button className="w-full">Free Registration</Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
