import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserX, ArrowRight } from "lucide-react";
import loginImage from "@/assets/login-wedding.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex">
        {/* Left Image */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <img src={loginImage} alt="Wedding" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/30" />
          <div className="absolute bottom-12 left-12 right-12">
            <h2 className="font-heading text-4xl font-bold text-card mb-3">
              Your Perfect Match Awaits
            </h2>
            <p className="text-card/80 text-lg">Trusted by thousands of Punjabi &amp; Multani families.</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
          <div className="w-full max-w-md text-center">
            <Link to="/" className="font-heading text-2xl font-bold text-foreground mb-8 block">
              Punjabi<span className="text-primary">Multani</span>Rishtey
            </Link>

            <div className="bg-card rounded-2xl shadow-warm-lg p-10 border border-border/50 space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary/20">
                <UserX className="w-10 h-10 text-primary" />
              </div>

              <div className="space-y-2">
                <h1 className="font-heading text-2xl font-bold text-foreground">You are not logged in</h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                  It looks like you don't have an account yet. Please register to find your perfect match within our trusted Punjabi &amp; Multani community.
                </p>
              </div>

              <Link to="/register" className="block">
                <Button className="w-full h-12 text-base font-bold gap-2">
                  Register Now <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <span className="text-primary font-medium cursor-not-allowed opacity-60">Login coming soon</span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
