import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload, Phone, CheckCircle2, User, Home, Eye, Heart, MapPin, Briefcase, GraduationCap } from "lucide-react";

const steps = ["Personal Details", "Family Details", "Preferences"];

const heightOptions = Array.from({ length: 37 }, (_, i) => {
  const totalInches = 48 + i; // starting from 4ft (48 inches) to 7ft (84 inches)
  const ft = Math.floor(totalInches / 12);
  const inch = totalInches % 12;
  return `${ft} ft ${inch} in`;
});

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Details
    phone: "",
    sex: "",
    maritalStatus: "",
    age: "",
    dob: "",
    birthHour: "",
    birthMin: "",
    birthAmPm: "",
    placeOfBirth: "",
    manglikStatus: "",
    height: "",
    weight: "",
    dietary: "",
    complexion: "",
    education: "",
    income: "",
    jobDescription: "",
    smoking: "",
    drinking: "",
    religious: "",
    interests: [] as string[],
    otherInterests: "",
    // Family Details
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    siblings: "",
    residence: "",
    familyType: "",
    familyIncome: "",
    houseType: "",
    contactNo: "",
    // Preferences
    prefMaritalStatus: [] as string[],
    prefManglik: [] as string[],
    prefAgeMin: "",
    prefAgeMax: "",
    prefHeightMin: "",
    prefHeightMax: "",
    prefEducation: "",
    prefWorking: "",
    prefComplexion: "",
    prefDietary: "",
    prefDrinking: "",
    prefSmoking: "",
    prefFamilyStatus: "",
    prefFamilyType: "",
    prefRelocate: "",
    prefResidence: [] as string[],
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  const handlePrefToggle = (field: "prefMaritalStatus" | "prefManglik" | "prefResidence", value: string) => {
    setFormData(prev => {
      const arr = prev[field] as string[];
      const newArr = arr.includes(value)
        ? arr.filter(i => i !== value)
        : [...arr, value];
      return { ...prev, [field]: newArr };
    });
  };

  const handleSendOtp = () => {
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(mockOtp);
    setIsOtpSent(true);
    toast.success(`Your OTP is: ${mockOtp}`, {
      description: "Use this OTP to verify your phone number.",
      duration: 30000,
      position: "top-right",
    });
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setIsVerified(true);
      toast.success("Phone number verified successfully!");
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  const validateStep = (step: number) => {
    if (step === 0) {
      const required = ["sex", "maritalStatus", "age", "dob", "birthHour", "birthMin", "birthAmPm", "placeOfBirth", "manglikStatus", "height", "weight", "dietary", "complexion", "education", "income", "jobDescription", "smoking", "drinking", "religious"];
      for (const field of required) {
        if (!formData[field as keyof typeof formData]) {
          toast.error(`Please fill out ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
          return false;
        }
      }
      if (formData.interests.length === 0) {
        toast.error("Please select at least one interest");
        return false;
      }
      if (!isVerified) {
        toast.error("Please verify your phone number first");
        return false;
      }
    } else if (step === 1) {
      const required = ["fatherName", "fatherOccupation", "motherName", "motherOccupation", "siblings", "residence", "familyType", "familyIncome", "houseType", "contactNo"];
      for (const field of required) {
        if (!formData[field as keyof typeof formData]) {
          toast.error(`Please fill out ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
          return false;
        }
      }
    } else if (step === 2) {
      const required = ["prefAgeMin", "prefAgeMax", "prefHeightMin", "prefHeightMax", "prefEducation", "prefWorking", "prefComplexion", "prefDietary", "prefDrinking", "prefSmoking", "prefFamilyStatus", "prefFamilyType", "prefRelocate"];
      for (const field of required) {
        if (!formData[field as keyof typeof formData]) {
          toast.error(`Please fill out ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
          return false;
        }
      }
      if (formData.prefMaritalStatus.length === 0) {
        toast.error("Please select preferred marital status");
        return false;
      }
      if (formData.prefManglik.length === 0) {
        toast.error("Please select preferred manglik status");
        return false;
      }
      if (formData.prefResidence.length === 0) {
        toast.error("Please select preferred residence");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep === steps.length - 1) {
        setIsPreviewing(true);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (isPreviewing) {
      setIsPreviewing(false);
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 0));
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-3xl">
          {!isPreviewing && (
            <>
              <div className="text-center mb-10">
                <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Create Your Profile</h1>
                <p className="text-muted-foreground mt-3 text-lg">Join our trusted community of Punjabi & Multani families.</p>
              </div>

              {/* Step Indicators */}
              <div className="flex items-center justify-center gap-2 mb-12">
                {steps.map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full text-sm font-bold flex items-center justify-center transition-all ${i < currentStep
                        ? "bg-green-500 text-white"
                        : i === currentStep
                          ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                          : "bg-white text-muted-foreground border-2 border-slate-200"
                        }`}
                    >
                      {i < currentStep ? <CheckCircle2 className="w-6 h-6" /> : i + 1}
                    </div>
                    <span className={`hidden sm:inline text-sm font-semibold ${i === currentStep ? "text-primary" : "text-muted-foreground"}`}>
                      {s}
                    </span>
                    {i < steps.length - 1 && <div className={`w-8 md:w-12 h-[2px] ${i < currentStep ? "bg-green-500" : "bg-slate-200"}`} />}
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
            {isPreviewing ? (
              <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500">
                <div className="text-center border-b border-slate-100 pb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground">Profile Preview</h2>
                  <p className="text-muted-foreground">Please review your details before final submission.</p>
                </div>

                {/* Personal Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-primary border-b border-primary/10 pb-2">
                    <User className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Personal Details</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Phone</p><p className="font-medium">{formData.phone}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Sex</p><p className="font-medium capitalize">{formData.sex}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Marital Status</p><p className="font-medium capitalize">{formData.maritalStatus.replace(/-/g, ' ')}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Age</p><p className="font-medium">{formData.age} Years</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Date of Birth</p><p className="font-medium">{formData.dob}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Birth Time</p><p className="font-medium">{formData.birthHour}:{formData.birthMin} {formData.birthAmPm.toUpperCase()}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Birth Place</p><p className="font-medium">{formData.placeOfBirth}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Manglik Status</p><p className="font-medium capitalize">{formData.manglikStatus}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Height</p><p className="font-medium">{formData.height}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Weight</p><p className="font-medium">{formData.weight} kg</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Dietary</p><p className="font-medium capitalize">{formData.dietary}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Complexion</p><p className="font-medium capitalize">{formData.complexion.replace(/-/g, ' ')}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Education</p><p className="font-medium capitalize">{formData.education.replace(/-/g, ' ')}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Annual Income</p><p className="font-medium">{formData.income} Lakhs</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Smoking Habits</p><p className="font-medium capitalize">{formData.smoking}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Drinking Habits</p><p className="font-medium capitalize">{formData.drinking}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Religious</p><p className="font-medium capitalize">{formData.religious}</p></div>
                  </div>
                  <div><p className="text-xs text-muted-foreground uppercase font-bold mb-1">Job / Work Description</p><p className="font-medium text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">{formData.jobDescription}</p></div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold mb-2">Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.interests.map(i => <span key={i} className="bg-slate-100 px-3 py-1 rounded-full text-sm font-medium">{i}</span>)}
                      {formData.otherInterests && <span className="bg-slate-100 px-3 py-1 rounded-full text-sm font-medium">{formData.otherInterests}</span>}
                    </div>
                  </div>
                </div>

                {/* Family Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-primary border-b border-primary/10 pb-2">
                    <Home className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Family Details</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Father's Name</p><p className="font-medium">{formData.fatherName}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Father's Occupation</p><p className="font-medium capitalize">{formData.fatherOccupation.replace(/-/g, ' ')}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Mother's Name</p><p className="font-medium">{formData.motherName}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Mother's Occupation</p><p className="font-medium">{formData.motherOccupation}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Siblings (Behn-Bhai)</p><p className="font-medium">{formData.siblings}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Residence</p><p className="font-medium">{formData.residence}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Family Type</p><p className="font-medium capitalize">{formData.familyType}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Family Annual Income</p><p className="font-medium">{formData.familyIncome}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Type of House</p><p className="font-medium capitalize">{formData.houseType}</p></div>
                    <div><p className="text-xs text-muted-foreground uppercase font-bold">Contact No</p><p className="font-medium">{formData.contactNo}</p></div>
                  </div>
                </div>

                {/* Preferences Section */}
                <div className="space-y-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 text-primary border-b border-primary/10 pb-2">
                    <Heart className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Partner Preferences</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                    {([
                      ["Age Range", `${formData.prefAgeMin} – ${formData.prefAgeMax} Yrs`],
                      ["Height Range", `${formData.prefHeightMin} – ${formData.prefHeightMax}`],
                      ["Min Education", formData.prefEducation.replace(/-/g, ' ')],
                      ["Should be Working", formData.prefWorking],
                      ["Complexion", formData.prefComplexion],
                      ["Dietary", formData.prefDietary],
                      ["Drinking Habits", formData.prefDrinking],
                      ["Smoking Habits", formData.prefSmoking],
                      ["Family Status", formData.prefFamilyStatus.replace(/-/g, ' ')],
                      ["Family Type", formData.prefFamilyType],
                      ["Willing to Relocate", formData.prefRelocate],
                    ] as [string, string][]).map(([label, value]) => (
                      <div key={label} className="flex justify-between border-b border-slate-200 py-2">
                        <span className="text-sm text-muted-foreground font-bold uppercase shrink-0">{label}</span>
                        <span className="font-medium capitalize text-right ml-4">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold mb-2">Preferred Marital Status</p>
                    <div className="flex flex-wrap gap-2">{formData.prefMaritalStatus.map(s => <span key={s} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">{s}</span>)}</div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold mb-2">Preferred Manglik Status</p>
                    <div className="flex flex-wrap gap-2">{formData.prefManglik.map(m => <span key={m} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">{m}</span>)}</div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold mb-2">Preferred Residence Cities</p>
                    <div className="flex flex-wrap gap-2">{formData.prefResidence.map(c => <span key={c} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">{c}</span>)}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Button variant="outline" className="flex-1 h-14 font-bold border-2" onClick={() => setIsPreviewing(false)}>← Back to Edit</Button>
                  <Button className="flex-1 h-14 font-bold text-lg" onClick={() => {
                    toast.success("Profile saved and submitted successfully!");
                    navigate("/profiles");
                  }}>Submit and Save Profile</Button>
                </div>
              </div>
            ) : (
              <>
                {/* Section 1: Personal Details */}
                {currentStep === 0 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="border-b border-slate-100 pb-4">
                      <h2 className="font-heading text-2xl font-bold text-foreground">Section 1: Personal Details</h2>
                      <p className="text-sm text-muted-foreground">This information helps us build your basic profile.</p>
                    </div>

                    {/* Phone & OTP Section */}
                    <div className="space-y-4 p-6 bg-slate-50/50 rounded-xl border border-slate-100">
                      <Label className="text-base font-bold">Mobile Number *</Label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                          <Input
                            className="pl-10 h-12"
                            placeholder="Enter 10-digit number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                            disabled={isVerified}
                          />
                        </div>
                        {!isVerified && (
                          <Button
                            className="h-12 px-6"
                            onClick={handleSendOtp}
                            disabled={isOtpSent && !isVerified}
                          >
                            {isOtpSent ? "Resend" : "Send OTP"}
                          </Button>
                        )}
                      </div>

                      {isOtpSent && !isVerified && (
                        <div className="space-y-3 pt-2">
                          <Label>Enter OTP *</Label>
                          <div className="flex gap-2">
                            <Input
                              className="h-12 text-center text-xl font-bold tracking-widest"
                              maxLength={6}
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                            />
                            <Button className="h-12 bg-green-600 hover:bg-green-700" onClick={handleVerifyOtp}>Verify</Button>
                          </div>
                        </div>
                      )}

                      {isVerified && (
                        <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 p-3 rounded-lg border border-green-100 mt-2">
                          <CheckCircle2 className="w-5 h-5" /> Phone Verified
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="font-bold">Sex *</Label>
                        <RadioGroup value={formData.sex} onValueChange={(v) => handleInputChange("sex", v)} className="flex gap-6 mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male" className="font-medium cursor-pointer">Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female" className="font-medium cursor-pointer">Female</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Marital Status *</Label>
                        <Select value={formData.maritalStatus} onValueChange={(v) => handleInputChange("maritalStatus", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Select Status" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="never-married">Never Married</SelectItem>
                            <SelectItem value="divorced">Divorced</SelectItem>
                            <SelectItem value="widow">Widow/Widower</SelectItem>
                            <SelectItem value="awaiting-divorce">Awaiting Divorce</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Age *</Label>
                        <Input type="number" placeholder="Enter age" value={formData.age} onChange={(e) => handleInputChange("age", e.target.value)} className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Date of Birth *</Label>
                        <Input type="date" value={formData.dob} onChange={(e) => handleInputChange("dob", e.target.value)} className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Time of Birth *</Label>
                        <div className="flex gap-2 items-center">
                          <Input
                            type="number"
                            placeholder="Hr"
                            min={1}
                            max={12}
                            value={formData.birthHour}
                            onChange={(e) => handleInputChange("birthHour", e.target.value)}
                            className="h-12 flex-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          <span className="text-muted-foreground font-bold text-lg">:</span>
                          <Input
                            type="number"
                            placeholder="Min"
                            min={0}
                            max={59}
                            value={formData.birthMin}
                            onChange={(e) => handleInputChange("birthMin", e.target.value)}
                            className="h-12 flex-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          <Select value={formData.birthAmPm} onValueChange={(v) => handleInputChange("birthAmPm", v)}>
                            <SelectTrigger className="h-12 flex-1"><SelectValue placeholder="AM/PM" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="am">AM</SelectItem>
                              <SelectItem value="pm">PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Place of Birth *</Label>
                        <Input placeholder="City, State" value={formData.placeOfBirth} onChange={(e) => handleInputChange("placeOfBirth", e.target.value)} className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Manglik Status *</Label>
                        <Select value={formData.manglikStatus} onValueChange={(v) => handleInputChange("manglikStatus", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Manglik / Non-Manglik" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="non-manglik">Non-Manglik</SelectItem>
                            <SelectItem value="manglik">Manglik</SelectItem>
                            <SelectItem value="anshik">Anshik Manglik</SelectItem>
                            <SelectItem value="dont-know">Don't Know</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Height *</Label>
                        <Select value={formData.height} onValueChange={(v) => handleInputChange("height", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Select Height" /></SelectTrigger>
                          <SelectContent>
                            {heightOptions.map(h => (
                              <SelectItem key={h} value={h}>{h}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Weight (kg) *</Label>
                        <Input type="number" placeholder="Enter weight" value={formData.weight} onChange={(e) => handleInputChange("weight", e.target.value)} className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Dietary *</Label>
                        <Select value={formData.dietary} onValueChange={(v) => handleInputChange("dietary", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Select Diet" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="veg">Vegetarian</SelectItem>
                            <SelectItem value="non-veg">Non-Vegetarian</SelectItem>
                            <SelectItem value="eggetarian">Eggetarian</SelectItem>
                            <SelectItem value="vegan">Vegan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Complexion *</Label>
                        <Select value={formData.complexion} onValueChange={(v) => handleInputChange("complexion", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Select Complexion" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="very-fair">Very Fair</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                            <SelectItem value="wheatish">Wheatish</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Education *</Label>
                        <Select value={formData.education} onValueChange={(v) => handleInputChange("education", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Highest Education" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">Higher Secondary (12th)</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="post-graduate">Post Graduate</SelectItem>
                            <SelectItem value="professional">Professional Degree</SelectItem>
                            <SelectItem value="doctorate">Doctorate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Income (Per Annum) *</Label>
                        <Select value={formData.income} onValueChange={(v) => handleInputChange("income", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Income Range" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<5">Less than 5 Lakhs</SelectItem>
                            <SelectItem value="5-10">5 - 10 Lakhs</SelectItem>
                            <SelectItem value="10-20">10 - 20 Lakhs</SelectItem>
                            <SelectItem value="20-50">20 - 50 Lakhs</SelectItem>
                            <SelectItem value="50+">Above 50 Lakhs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="font-bold">Job / Work Description *</Label>
                      <Textarea placeholder="Describe your current role and occupation" value={formData.jobDescription} onChange={(e) => handleInputChange("jobDescription", e.target.value)} className="min-h-[100px]" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="font-bold">Smoking Habits *</Label>
                        <RadioGroup value={formData.smoking} onValueChange={(v) => handleInputChange("smoking", v)} className="flex gap-4 mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="smoke-no" />
                            <Label htmlFor="smoke-no" className="font-medium">No</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="smoke-yes" />
                            <Label htmlFor="smoke-yes" className="font-medium">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="occasionally" id="smoke-occ" />
                            <Label htmlFor="smoke-occ" className="font-medium">Occasionally</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Drinking Habits *</Label>
                        <RadioGroup value={formData.drinking} onValueChange={(v) => handleInputChange("drinking", v)} className="flex gap-4 mt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="drink-no" />
                            <Label htmlFor="drink-no" className="font-medium">No</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="drink-yes" />
                            <Label htmlFor="drink-yes" className="font-medium">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="occasionally" id="drink-occ" />
                            <Label htmlFor="drink-occ" className="font-medium">Occasionally</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label className="font-bold text-lg">Religious Beliefs *</Label>
                      <RadioGroup value={formData.religious} onValueChange={(v) => handleInputChange("religious", v)} className="flex gap-8">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="rel-yes" />
                          <Label htmlFor="rel-yes" className="text-base font-medium">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="rel-no" />
                          <Label htmlFor="rel-no" className="text-base font-medium">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="atheist" id="rel-ath" />
                          <Label htmlFor="rel-ath" className="text-base font-medium">Atheist</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <Label className="font-bold text-lg">Interests *</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Movies", "Gyming", "Travelling", "Reading", "Relaxing", "Shopping", "Binge watching", "Clubbing", "Cooking"].map((interest) => (
                          <label key={interest} htmlFor={interest} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                            <Checkbox
                              id={interest}
                              checked={formData.interests.includes(interest)}
                              onCheckedChange={() => handleInterestToggle(interest)}
                              className="group-hover:border-primary transition-colors"
                            />
                            <span className="font-medium cursor-pointer">{interest}</span>
                          </label>
                        ))}
                      </div>
                      <div className="pt-2">
                        <Input placeholder="Other interests..." value={formData.otherInterests} onChange={(e) => handleInputChange("otherInterests", e.target.value)} className="h-10" />
                      </div>
                    </div>

                    <div className="space-y-4 p-8 bg-primary/5 rounded-2xl border-2 border-dashed border-primary/20 text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm mb-4">
                        <Upload className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg">Add Profile Photo *</h3>
                      <p className="text-sm text-muted-foreground">Upload 1 supported file. Max 10 MB. High quality photos get more matches.</p>
                      <Button variant="outline" className="mt-2 border-primary text-primary hover:bg-primary/10">Browse Files</Button>
                    </div>
                  </div>
                )}

                {/* Section 2: Family Details */}
                {currentStep === 1 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="border-b border-slate-100 pb-4">
                      <h2 className="font-heading text-2xl font-bold text-foreground">Section 2: Family Information</h2>
                      <p className="text-sm text-muted-foreground">Family details are crucial for traditional matching.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="font-bold">Father's Name *</Label>
                        <Input placeholder="Full name" value={formData.fatherName} onChange={(e) => handleInputChange("fatherName", e.target.value)} className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Father's Occupation *</Label>
                        <Select value={formData.fatherOccupation} onValueChange={(v) => handleInputChange("fatherOccupation", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Select Occupation" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="govt">Government Job</SelectItem>
                            <SelectItem value="retired-govt">Retired from Government Job</SelectItem>
                            <SelectItem value="private">Private Job</SelectItem>
                            <SelectItem value="retired-private">Retired from Private Job</SelectItem>
                            <SelectItem value="business">Businessman</SelectItem>
                            <SelectItem value="shop">Shop Owner</SelectItem>
                            <SelectItem value="none">None of the above</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Mother's Name *</Label>
                        <Input placeholder="Full name" value={formData.motherName} onChange={(e) => handleInputChange("motherName", e.target.value)} className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Mother's Occupation *</Label>
                        <Input placeholder="Occupation" value={formData.motherOccupation} onChange={(e) => handleInputChange("motherOccupation", e.target.value)} className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Siblings (Behn-Bhai) *</Label>
                        <Input type="number" placeholder="Count" value={formData.siblings} onChange={(e) => handleInputChange("siblings", e.target.value)} className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Residence *</Label>
                        <Input placeholder="City, Area" value={formData.residence} onChange={(e) => handleInputChange("residence", e.target.value)} className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Family Type *</Label>
                        <Select value={formData.familyType} onValueChange={(v) => handleInputChange("familyType", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Select Type" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="joint">Joint (8-10 members)</SelectItem>
                            <SelectItem value="small">Small (4-6 members)</SelectItem>
                            <SelectItem value="nuclear">Nuclear (2-4 members)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Family Annual Income *</Label>
                        <Input placeholder="₹ Total income" value={formData.familyIncome} onChange={(e) => handleInputChange("familyIncome", e.target.value)} className="h-12" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Type of House *</Label>
                        <Select value={formData.houseType} onValueChange={(v) => handleInputChange("houseType", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="House Type" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="own">Own House</SelectItem>
                            <SelectItem value="floor">Independent Floor</SelectItem>
                            <SelectItem value="flat">Flat / Apartment</SelectItem>
                            <SelectItem value="rented">Rented</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Contact No *</Label>
                        <Input placeholder="Emergency Contact No" value={formData.contactNo} onChange={(e) => handleInputChange("contactNo", e.target.value)} className="h-12" />
                      </div>
                    </div>

                    <div className="space-y-4 p-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm mb-4">
                        <Upload className="w-8 h-8 text-slate-400" />
                      </div>
                      <h3 className="font-bold text-lg">Upload Family Document/Profile</h3>
                      <p className="text-sm text-muted-foreground">Upload 1 supported file. Max 10 MB.</p>
                      <Button variant="outline" className="mt-2">Browse Files</Button>
                    </div>
                  </div>
                )}

                {/* Section 3: Preferences */}
                {currentStep === 2 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="border-b border-slate-100 pb-4">
                      <h2 className="font-heading text-2xl font-bold text-foreground">Section 3: Preferences</h2>
                      <p className="text-sm text-muted-foreground">Required to match your profile with the best profile available.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Label className="font-bold text-lg">Marital Status Preferences *</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {["Never Married", "Divorced", "Widow"].map((status) => (
                            <label key={status} htmlFor={`pref-${status}`} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                              <Checkbox
                                id={`pref-${status}`}
                                checked={formData.prefMaritalStatus.includes(status)}
                                onCheckedChange={() => handlePrefToggle("prefMaritalStatus", status)}
                                className="group-hover:border-primary transition-colors"
                              />
                              <span className="font-medium cursor-pointer">{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label className="font-bold text-lg">Manglik Status Preference *</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {["Manglik", "Non-Manglik", "Anshik Manglik"].map((m) => (
                            <label key={m} htmlFor={`pref-${m}`} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                              <Checkbox
                                id={`pref-${m}`}
                                checked={formData.prefManglik.includes(m)}
                                onCheckedChange={() => handlePrefToggle("prefManglik", m)}
                                className="group-hover:border-primary transition-colors"
                              />
                              <span className="font-medium cursor-pointer">{m}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <Label className="font-bold">Preferred Age Range *</Label>
                          <div className="flex items-center gap-3">
                            <Input type="number" placeholder="Min" value={formData.prefAgeMin} onChange={(e) => handleInputChange("prefAgeMin", e.target.value)} className="h-12" />
                            <span className="font-bold text-slate-300">to</span>
                            <Input type="number" placeholder="Max" value={formData.prefAgeMax} onChange={(e) => handleInputChange("prefAgeMax", e.target.value)} className="h-12" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="font-bold">Preferred Height Range *</Label>
                          <div className="flex items-center gap-3">
                            <Select value={formData.prefHeightMin} onValueChange={(v) => handleInputChange("prefHeightMin", v)}>
                              <SelectTrigger className="h-12 flex-1"><SelectValue placeholder="Min" /></SelectTrigger>
                              <SelectContent>
                                {heightOptions.map(h => (
                                  <SelectItem key={h} value={h}>{h}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <span className="font-bold text-slate-300">to</span>
                            <Select value={formData.prefHeightMax} onValueChange={(v) => handleInputChange("prefHeightMax", v)}>
                              <SelectTrigger className="h-12 flex-1"><SelectValue placeholder="Max" /></SelectTrigger>
                              <SelectContent>
                                {heightOptions.map(h => (
                                  <SelectItem key={h} value={h}>{h}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-bold">Minimum Education should be *</Label>
                        <Select value={formData.prefEducation} onValueChange={(v) => handleInputChange("prefEducation", v)}>
                          <SelectTrigger className="h-12"><SelectValue placeholder="Education level" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">Higher Secondary (12th Pass)</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="post-graduate">Post Graduate</SelectItem>
                            <SelectItem value="professional">Professional Degree</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-4">
                        <Label className="font-bold text-lg">Should be working? *</Label>
                        <RadioGroup value={formData.prefWorking} onValueChange={(v) => handleInputChange("prefWorking", v)} className="flex gap-8">
                          {["Yes", "No", "Doesn't matter"].map((opt) => (
                            <div key={opt} className="flex items-center space-x-2">
                              <RadioGroupItem value={opt.toLowerCase()} id={`working-${opt}`} />
                              <Label htmlFor={`working-${opt}`} className="font-medium">{opt}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-4">
                        <Label className="font-bold text-lg">Complexion Preference *</Label>
                        <RadioGroup value={formData.prefComplexion} onValueChange={(v) => handleInputChange("prefComplexion", v)} className="flex flex-wrap gap-8">
                          {["Very Fair", "Fair", "Wheatish", "Doesn't matter"].map((opt) => (
                            <div key={opt} className="flex items-center space-x-2">
                              <RadioGroupItem value={opt.toLowerCase()} id={`complex-${opt}`} />
                              <Label htmlFor={`complex-${opt}`} className="font-medium">{opt}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-4">
                        <Label className="font-bold text-lg">Dietary Preference *</Label>
                        <RadioGroup value={formData.prefDietary} onValueChange={(v) => handleInputChange("prefDietary", v)} className="flex flex-wrap gap-8">
                          {["Vegetarian", "Non vegetarian", "Eggetarian", "Vegan", "Non Veg (Occasionally)"].map((opt) => (
                            <div key={opt} className="flex items-center space-x-2">
                              <RadioGroupItem value={opt.toLowerCase()} id={`diet-pref-${opt}`} />
                              <Label htmlFor={`diet-pref-${opt}`} className="font-medium">{opt}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 pt-4">
                        <div className="space-y-4">
                          <Label className="font-bold text-lg">Drinking Habits *</Label>
                          <RadioGroup value={formData.prefDrinking} onValueChange={(v) => handleInputChange("prefDrinking", v)} className="space-y-3">
                            {["No", "Yes", "Occasionally", "Doesn't matter"].map((opt) => (
                              <div key={opt} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt.toLowerCase()} id={`drink-pref-${opt}`} />
                                <Label htmlFor={`drink-pref-${opt}`} className="font-medium">{opt}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                        <div className="space-y-4">
                          <Label className="font-bold text-lg">Smoking Habits *</Label>
                          <RadioGroup value={formData.prefSmoking} onValueChange={(v) => handleInputChange("prefSmoking", v)} className="space-y-3">
                            {["No", "Yes", "Occasionally", "Doesn't matter"].map((opt) => (
                              <div key={opt} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt.toLowerCase()} id={`smoke-pref-${opt}`} />
                                <Label htmlFor={`smoke-pref-${opt}`} className="font-medium">{opt}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      </div>

                      <div className="space-y-4 pt-4">
                        <Label className="font-bold text-lg">Family Status Preference *</Label>
                        <RadioGroup value={formData.prefFamilyStatus} onValueChange={(v) => handleInputChange("prefFamilyStatus", v)} className="space-y-3">
                          <label htmlFor="fs-1" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                            <RadioGroupItem value="lower-middle" id="fs-1" className="group-hover:border-primary transition-colors" />
                            <span className="cursor-pointer">Lower Middle Class (Family Income less than 10 lakhs)</span>
                          </label>
                          <label htmlFor="fs-2" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                            <RadioGroupItem value="middle" id="fs-2" className="group-hover:border-primary transition-colors" />
                            <span className="cursor-pointer">Middle Class (Family Income from 10 - 20 lakhs)</span>
                          </label>
                          <label htmlFor="fs-3" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                            <RadioGroupItem value="upper-middle" id="fs-3" className="group-hover:border-primary transition-colors" />
                            <span className="cursor-pointer">Upper Middle Class (Family Income from 20 lakhs to 50 lakhs)</span>
                          </label>
                          <label htmlFor="fs-4" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                            <RadioGroupItem value="elite" id="fs-4" className="group-hover:border-primary transition-colors" />
                            <span className="cursor-pointer">Elite (Family business/ income more than 1 Crore)</span>
                          </label>
                          <label htmlFor="fs-5" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                            <RadioGroupItem value="any" id="fs-5" className="group-hover:border-primary transition-colors" />
                            <span className="cursor-pointer">Doesn't Matter</span>
                          </label>
                        </RadioGroup>
                      </div>

                      <div className="space-y-4 pt-4">
                        <Label className="font-bold text-lg">Family Type Preference *</Label>
                        <RadioGroup value={formData.prefFamilyType} onValueChange={(v) => handleInputChange("prefFamilyType", v)} className="space-y-3">
                          <label htmlFor="ft-1" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                            <RadioGroupItem value="nuclear" id="ft-1" className="group-hover:border-primary transition-colors" />
                            <span className="cursor-pointer">Nuclear Family (2-4 Family Members)</span>
                          </label>
                          <label htmlFor="ft-2" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                            <RadioGroupItem value="joint" id="ft-2" className="group-hover:border-primary transition-colors" />
                            <span className="cursor-pointer">Joint Family (4-8 Family Members)</span>
                          </label>
                          <label htmlFor="ft-3" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                            <RadioGroupItem value="large" id="ft-3" className="group-hover:border-primary transition-colors" />
                            <span className="cursor-pointer">Large Family (8-12 Family Member)</span>
                          </label>
                          <label htmlFor="ft-4" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                            <RadioGroupItem value="any" id="ft-4" className="group-hover:border-primary transition-colors" />
                            <span className="cursor-pointer">Doesn't matter</span>
                          </label>
                        </RadioGroup>
                      </div>

                      <div className="space-y-4">
                        <Label className="font-bold text-lg">Willing to relocate after marriage? *</Label>
                        <RadioGroup value={formData.prefRelocate} onValueChange={(v) => handleInputChange("prefRelocate", v)} className="flex gap-8">
                          {["Yes", "No", "Maybe"].map((opt) => (
                            <div key={opt} className="flex items-center space-x-2">
                              <RadioGroupItem value={opt.toLowerCase()} id={`reloc-${opt}`} />
                              <Label htmlFor={`reloc-${opt}`} className="font-medium">{opt}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-4">
                        <Label className="font-bold text-lg">Preferred Residence *</Label>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                          {["Gurgaon", "New Delhi", "Noida", "Faridabad", "Gaziabad", "Doesn't matter"].map((city) => (
                            <label key={city} htmlFor={`city-${city}`} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                              <Checkbox
                                id={`city-${city}`}
                                checked={formData.prefResidence.includes(city)}
                                onCheckedChange={() => handlePrefToggle("prefResidence", city)}
                                className="group-hover:border-primary transition-colors"
                              />
                              <span className="font-medium cursor-pointer">{city}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-8 border-t border-slate-100">
                  <Button
                    variant="outline"
                    className="h-12 px-8 font-bold border-2"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                  >
                    Previous
                  </Button>
                  <Button className="h-12 px-10 font-bold" onClick={nextStep}>
                    {currentStep < steps.length - 1 ? "Next Step" : "Preview Profile"}
                  </Button>
                </div>
              </>
            )}
          </div>

          {!isPreviewing && (
            <p className="text-center text-slate-500 mt-8 font-medium">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-bold hover:underline ml-1">Login here</Link>
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
