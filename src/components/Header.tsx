import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "Why Choose Us", to: "/#why" },
  { label: "Contact Us", to: "/#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-gold/30">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-tight">
          Punjabi<span className="text-primary">Multani</span>Rishtey
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/50"
            >
              {item.label}
            </Link>
          ))}
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
