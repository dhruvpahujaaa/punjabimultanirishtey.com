import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import loginImage from "@/assets/login-wedding.png";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpToastId, setOtpToastId] = useState<string | number | null>(null);

  const handleSendOtp = () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Generate a random 6-digit OTP
    const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(mockOtp);
    setStep("otp");

    // Show OTP in top-right toast and save the ID
    const id = toast.success(`Your OTP is: ${mockOtp}`, {
      description: "Use this OTP to complete your login.",
      duration: 30000,
      position: "top-right",
    });
    setOtpToastId(id);
  };

  const handleLogin = () => {
    if (otp === generatedOtp) {
      // Dismiss the OTP toast immediately
      if (otpToastId) toast.dismiss(otpToastId);
      login(phone);
      toast.success("Login successful! Welcome back.", {
        position: "top-right",
      });
      setTimeout(() => navigate("/profiles"), 1000);
    } else {
      toast.error("Incorrect OTP. Please try again.", {
        position: "top-right",
      });
    }
  };

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
          <p className="text-card/80 text-lg">Trusted by thousands of Punjabi &amp; Multani families.</p>
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
            <p className="text-sm text-muted-foreground mb-8">Login via your registered mobile number.</p>

            {step === "phone" ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Mobile Number
                  </Label>
                  <div className="flex mt-1.5">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                      +91
                    </span>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      placeholder="Enter 10-digit mobile number"
                      className="rounded-l-none"
                      maxLength={10}
                    />
                  </div>
                </div>
                <Button className="w-full" onClick={handleSendOtp}>
                  Send OTP
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3">
                  <p className="text-sm text-muted-foreground">
                    OTP sent for{" "}
                    <span className="font-semibold text-foreground">+91 {phone}</span>
                  </p>
                  <p className="text-xs text-primary mt-1">
                    ℹ️ Check the notification at the top-right of your screen for the OTP.
                  </p>
                </div>
                <div>
                  <Label htmlFor="otp" className="text-sm font-medium text-foreground">
                    Enter OTP
                  </Label>
                  <Input
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="6-digit OTP"
                    className="mt-1.5 tracking-widest text-center text-lg font-bold"
                    maxLength={6}
                  />
                </div>
                <Button className="w-full" onClick={handleLogin}>
                  Login
                </Button>
                <div className="flex items-center justify-between text-sm">
                  <button
                    onClick={() => { setStep("phone"); setOtp(""); setGeneratedOtp(""); }}
                    className="text-primary hover:underline"
                  >
                    ← Change number
                  </button>
                  <button
                    onClick={handleSendOtp}
                    className="text-muted-foreground hover:text-foreground hover:underline"
                  >
                    Resend OTP
                  </button>
                </div>
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
