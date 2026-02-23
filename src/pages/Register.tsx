import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = ["Basic Info", "Family Info", "Preferences"];

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20 bg-background">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Create Your Profile</h1>
            <p className="text-muted-foreground mt-2">Join verified Punjabi & Multani families.</p>
          </div>

          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentStep(i)}
                  className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center transition-colors ${
                    i <= currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </button>
                <span className="hidden sm:inline text-sm text-muted-foreground">{s}</span>
                {i < steps.length - 1 && <div className="w-8 md:w-16 h-[2px] bg-border" />}
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl shadow-warm-lg p-8 border border-border/50">
            {currentStep === 0 && (
              <div className="space-y-5">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Basic Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name</Label>
                    <Input placeholder="Enter full name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label>Mobile Number</Label>
                    <Input placeholder="+91 XXXXX XXXXX" className="mt-1.5" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="your@email.com" className="mt-1.5" />
                  </div>
                  <div>
                    <Label>Date of Birth</Label>
                    <Input type="date" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label>Gender</Label>
                  <RadioGroup className="flex gap-6 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="font-normal">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="font-normal">Female</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Community</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select community" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="arora">Arora</SelectItem>
                        <SelectItem value="khatri">Khatri</SelectItem>
                        <SelectItem value="multani">Multani</SelectItem>
                        <SelectItem value="jhangi">Jhangi</SelectItem>
                        <SelectItem value="other">Other Punjabi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Education</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select education" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="graduate">Graduate</SelectItem>
                        <SelectItem value="postgraduate">Post Graduate</SelectItem>
                        <SelectItem value="professional">Professional Degree</SelectItem>
                        <SelectItem value="doctorate">Doctorate</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-5">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Family Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Father's Name</Label>
                    <Input placeholder="Father's full name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label>Father's Occupation</Label>
                    <Input placeholder="Occupation" className="mt-1.5" />
                  </div>
                  <div>
                    <Label>Mother's Name</Label>
                    <Input placeholder="Mother's full name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label>Family Type</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="joint">Joint Family</SelectItem>
                        <SelectItem value="nuclear">Nuclear Family</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Annual Income</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select range" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5-10">₹5-10 LPA</SelectItem>
                        <SelectItem value="10-20">₹10-20 LPA</SelectItem>
                        <SelectItem value="20-50">₹20-50 LPA</SelectItem>
                        <SelectItem value="50+">₹50+ LPA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>City</Label>
                    <Input placeholder="Current city" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label>Upload Income / Address Proof</Label>
                  <Input type="file" className="mt-1.5" accept="image/*,.pdf" />
                  <p className="text-xs text-muted-foreground mt-1">For verification purposes only.</p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-5">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Partner Preferences</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Age Range</Label>
                    <div className="flex gap-2 mt-1.5">
                      <Input placeholder="From" type="number" />
                      <Input placeholder="To" type="number" />
                    </div>
                  </div>
                  <div>
                    <Label>Preferred Height</Label>
                    <div className="flex gap-2 mt-1.5">
                      <Input placeholder="Min (ft)" />
                      <Input placeholder="Max (ft)" />
                    </div>
                  </div>
                  <div>
                    <Label>Preferred Community</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Any / Specific" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Punjabi</SelectItem>
                        <SelectItem value="arora">Arora</SelectItem>
                        <SelectItem value="khatri">Khatri</SelectItem>
                        <SelectItem value="multani">Multani</SelectItem>
                        <SelectItem value="jhangi">Jhangi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred Location</Label>
                    <Input placeholder="City / Country" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label>Horoscope Matching</Label>
                  <RadioGroup className="flex gap-6 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="horo-yes" />
                      <Label htmlFor="horo-yes" className="font-normal">Required</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="horo-no" />
                      <Label htmlFor="horo-no" className="font-normal">Not Required</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button onClick={() => setCurrentStep(currentStep + 1)}>
                  Next Step
                </Button>
              ) : (
                <Button>Submit Registration</Button>
              )}
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already registered?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">Login here</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
