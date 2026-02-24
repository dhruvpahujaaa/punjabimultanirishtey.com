import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    ShieldCheck, Users, Ban, ListChecks, Building2, UserCheck,
    PhoneCall, Star, Heart, Clock, Globe, Award
} from "lucide-react";
import whyChooseBg from "@/assets/Why_Choose_image.jpg";
import patternBg from "@/assets/elegant_neutral_wallpaper_design_background_1506.jpg";

const features = [
    {
        icon: ShieldCheck,
        title: "Authenticated Bio Data",
        desc: "Every profile is thoroughly verified with real government-issued documents. No fake or duplicate profiles — ever.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Users,
        title: "Dedicated Verification Team",
        desc: "Our trained team personally calls and verifies each candidate before their profile goes live on the platform.",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        icon: Ban,
        title: "Zero Junk Profiles",
        desc: "Strict multi-step screening ensures that only genuine, serious profiles reach our verified members.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: ListChecks,
        title: "10–15 Curated Matches",
        desc: "We hand-pick matches based on deep compatibility — community, values, education, and family background.",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        icon: Building2,
        title: "Community-Based Matching",
        desc: "Focused expertise in Punjabi, Multani, Jhangi, Arora & Khatri sub-communities for the most relevant results.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: UserCheck,
        title: "Genuine & Verified Members",
        desc: "Real people with real intentions for marriage. Every member has passed our rigorous verification process.",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        icon: PhoneCall,
        title: "24-48 Hour Phone Verification",
        desc: "Our team contacts every registrant within 24-48 hours to confirm identity and details personally.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Globe,
        title: "Global Diaspora Coverage",
        desc: "We connect families across India, UK, Canada, USA, Australia, and beyond — wherever Punjabi families are.",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        icon: Heart,
        title: "Family-First Philosophy",
        desc: "We treat every match as a union of two families, not just two individuals. Your family's trust is our priority.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Clock,
        title: "Fast & Efficient Process",
        desc: "From registration to receiving your first curated matches — our streamlined process takes as little as 48 hours.",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        icon: Star,
        title: "Horoscope Matching",
        desc: "For families who value kundli compatibility, we offer professional horoscope matching as part of our service.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Award,
        title: "Proven Track Record",
        desc: "With 500+ successful marriages since foundation, our results speak louder than any promise.",
        color: "text-accent",
        bg: "bg-accent/10",
    },
];

const stats = [
    { number: "2,000+", label: "Verified Profiles" },
    { number: "500+", label: "Successful Marriages" },
    { number: "10+", label: "Years of Service" },
    { number: "98%", label: "Satisfaction Rate" },
];

const WhyChooseUsPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="py-20 md:py-28 relative overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 bg-repeat opacity-40"
                        style={{ backgroundImage: `url(${patternBg})`, backgroundSize: '300px' }}
                    />
                    <div className="container relative z-10 max-w-4xl text-center">
                        <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-5 tracking-wide uppercase">
                            Why Us
                        </span>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            Why Choose <br />
                            <span className="text-primary">PunjabiMultaniRishtey.com?</span>
                        </h1>
                        <div className="gold-divider w-24 mx-auto mb-8" />
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            We are not just another matrimonial platform. We are a trusted family for thousands
                            of Punjabi and Multani families worldwide — built on verification, values, and a
                            deep understanding of your culture.
                        </p>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-14 bg-background border-y border-border">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((s) => (
                                <div key={s.label} className="text-center">
                                    <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                                        {s.number}
                                    </p>
                                    <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 md:py-28 bg-background">
                    <div className="container">
                        <div className="text-center mb-14">
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                What Sets Us Apart
                            </h2>
                            <div className="gold-divider w-24 mx-auto mt-4" />
                            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                                Every feature is designed with one goal — finding you a match your entire family can trust.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {features.map((f) => (
                                <div
                                    key={f.title}
                                    className="bg-card rounded-xl p-8 shadow-warm hover:shadow-warm-lg transition-all border border-border/50 hover:-translate-y-1 group"
                                >
                                    <div className={`w-12 h-12 rounded-lg ${f.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                        <f.icon className={`w-6 h-6 ${f.color}`} />
                                    </div>
                                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                                        {f.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial Highlight */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                        style={{ backgroundImage: `url(${whyChooseBg})` }}
                    />
                    <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[2px]" />

                    <div className="container relative z-20 max-w-3xl text-center">
                        <div className="gold-divider w-24 mx-auto mb-10 h-1 bg-primary rounded-full" />
                        <blockquote className="font-heading text-2xl md:text-4xl italic text-white leading-relaxed mb-6 drop-shadow-lg">
                            "Our family found the most compatible match within 2 weeks.
                            The verification gave us complete peace of mind."
                        </blockquote>
                        <p className="font-semibold text-primary text-lg">Kapoor Family</p>
                        <p className="text-sm text-white/80">Chandigarh, Punjab</p>
                        <div className="gold-divider w-24 mx-auto mt-10 h-1 bg-primary rounded-full" />
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 md:py-24 bg-peach-gradient text-center">
                    <div className="container max-w-2xl">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                            Experience the Difference Today
                        </h2>
                        <p className="text-primary-foreground/80 text-lg mb-8">
                            Join thousands of verified Punjabi & Multani families who found their perfect match.
                        </p>
                        <Link to="/register">
                            <Button size="lg" variant="secondary" className="font-semibold px-10">
                                Start Free Registration
                            </Button>
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default WhyChooseUsPage;
