import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    setMobileOpen(false);
    setLoggingOut(true);
    // After 1.5s animation, actually log out and go home
    setTimeout(() => {
      logout();
      setLoggingOut(false);
      navigate("/");
    }, 1500);
  };

  const handleHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {/* Logout overlay animation */}
      {loggingOut && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-cream-subtle animate-fade-in">
          <div className="flex flex-col items-center gap-6">
            {/* Spinning gold ring */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border-4 border-gold/20" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <LogOut className="w-7 h-7 text-primary" />
              </div>
            </div>
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-foreground">
                Punjabi<span className="text-primary">Multani</span>Rishtey
              </p>
              <p className="text-sm text-muted-foreground mt-2">Logging you out safely…</p>
            </div>
          </div>
        </div>
      )}

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
            <Link
              to="/why-choose-us"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Why Choose Us
            </Link>
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="text-sm font-medium flex items-center gap-2 border-primary/30 text-primary hover:bg-primary/5"
              >
                <LogOut className="w-4 h-4" /> Logout
              </Button>
            ) : (
              <>
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
              </>
            )}
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
            <Link
              to="/why-choose-us"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/50"
            >
              Why Choose Us
            </Link>
            {isLoggedIn ? (
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full flex items-center gap-2 border-primary/30 text-primary"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 mt-4">
                <Link to="/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/register" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full">Free Registration</Button>
                </Link>
              </div>
            )}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
