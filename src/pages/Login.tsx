import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import loginImage from "@/assets/login-wedding.png";

const Login = () => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* Left Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src={loginImage} alt="Wedding" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute bottom-12 left-12 right-12">
          <h2 className="font-heading text-4xl font-bold text-card mb-3">
            Your Perfect Match Awaits
          </h2>
          <p className="text-card/80 text-lg">Trusted by thousands of Punjabi & Multani families.</p>
        </div>
      </div>

      {/* Right Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <Link to="/" className="font-heading text-2xl font-bold text-foreground mb-8 block">
            Punjabi<span className="text-primary">Multani</span>Rishtey
          </Link>

          <div className="bg-card rounded-xl shadow-warm-lg p-8 border border-border/50">
            <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-sm text-muted-foreground mb-8">Login to access your matches.</p>

            {step === "phone" ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">Mobile / Email</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter mobile number or email"
                    className="mt-1.5"
                  />
                </div>
                <Button className="w-full" onClick={() => setStep("otp")}>
                  Send OTP
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">OTP sent to <span className="font-medium text-foreground">{phone}</span></p>
                <div>
                  <Label htmlFor="otp" className="text-sm font-medium text-foreground">Enter OTP</Label>
                  <Input id="otp" placeholder="6-digit OTP" className="mt-1.5" />
                </div>
                <Button className="w-full">Login</Button>
                <button onClick={() => setStep("phone")} className="text-sm text-primary hover:underline w-full text-center">
                  Change number
                </button>
              </div>
            )}

            <p className="text-center text-sm text-muted-foreground mt-6">
              New user?{" "}
              <Link to="/register" className="text-primary font-medium hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
