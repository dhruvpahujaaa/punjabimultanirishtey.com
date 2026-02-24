import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Star, Award, Handshake } from "lucide-react";
import aboutHeroImg from "@/assets/aboutus_image.jpg";
import patternBg from "@/assets/elegant_neutral_wallpaper_design_background_1506.jpg";

const values = [
    {
        icon: Shield,
        title: "Trust & Integrity",
        desc: "Every piece of information is verified. We never compromise on authenticity.",
    },
    {
        icon: Heart,
        title: "Family-First Approach",
        desc: "We understand that marriage is a union of families, not just individuals.",
    },
    {
        icon: Users,
        title: "Community Roots",
        desc: "Deep expertise in Punjabi, Multani, Jhangi, Arora & Khatri communities.",
    },
    {
        icon: Star,
        title: "Quality Over Quantity",
        desc: "Curated, hand-picked matches — never an overwhelming list of irrelevant profiles.",
    },
    {
        icon: Award,
        title: "Proven Track Record",
        desc: "Hundreds of successful marriages since our founding. Real families, real results.",
    },
    {
        icon: Handshake,
        title: "Lifelong Commitment",
        desc: "Our relationship with your family doesn't end at the match — we celebrate with you.",
    },
];

const team = [
    {
        name: "Mr. Vipul Pahuja",
        role: "Founder & Director",
        desc:
            "With over 35 years of experience in community matchmaking, Mr. Vipul Pahuja established PunjabiMultaniRishtey.com with a singular vision — to bring trust, dignity, and authenticity back to matrimonial matchmaking for Punjabi and Multani families worldwide.",
        initials: "VP",
    },
    {
        name: "Mr. Dhruv Pahuja",
        role: "Co-Founder & Head of Verification",
        desc:
            "A pillar of the organization, Mr. Dhruv Pahuja personally oversees the verification process for every profile. His meticulous attention to detail and deep empathy for families ensures only genuine, compatible profiles reach our members.",
        initials: "DP",
    },
    {
        name: "Mr. Nikhil Pahuja",
        role: "Director – Operations & Technology",
        desc:
            "Mr. Nikhil Pahuja brings a decade of technology and operations expertise to the platform, ensuring a seamless, secure experience for every family. He drives our commitment to continuous improvement and modern, dignified matchmaking.",
        initials: "NP",
    },
];

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                        style={{ backgroundImage: `url(${aboutHeroImg})` }}
                    />
                    <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[1px]" />

                    <div className="container relative z-20 max-w-4xl text-center">
                        <span className="inline-block text-xs font-bold text-primary bg-primary/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-5 tracking-wide uppercase border border-primary/30">
                            Our Story
                        </span>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Rooted in Culture.<br />
                            <span className="text-primary">Built on Trust.</span>
                        </h1>
                        <div className="gold-divider w-24 mx-auto mb-8 h-1 bg-primary rounded-full" />
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
                            PunjabiMultaniRishtey.com was founded with a heartfelt mission — to provide
                            Punjabi, Multani, and Jhangi families with a dignified, verified, and deeply
                            personal matchmaking experience. We are not just a platform; we are a trusted
                            family for thousands of families across India and the world.
                        </p>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="py-20 md:py-24 bg-background">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Our Mission
                                </h2>
                                <div className="gold-divider w-20 mb-6" />
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Our mission is to make the sacred journey of finding a life partner as
                                    meaningful, secure, and fulfilling as the marriage itself. We believe every
                                    family deserves verified profiles, real compatibility, and a process rooted
                                    in the values they hold dear.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    We serve families from the Punjabi, Multani, Jhangi, Arora, and Khatri
                                    communities — both within India and across the global diaspora in the UK,
                                    Canada, USA, Australia, and beyond.
                                </p>
                                <Link to="/register">
                                    <Button size="lg" className="font-semibold">
                                        Join Our Community
                                    </Button>
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { number: "2,000+", label: "Verified Profiles" },
                                    { number: "500+", label: "Successful Marriages" },
                                    { number: "10+", label: "Years of Service" },
                                    { number: "15+", label: "Cities Covered" },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="bg-card border border-border/50 rounded-xl p-6 text-center shadow-warm hover:shadow-warm-lg transition-all"
                                    >
                                        <p className="font-heading text-3xl font-bold text-primary mb-1">
                                            {stat.number}
                                        </p>
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meet the Team / Directors */}
                <section className="py-20 md:py-24 relative overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 bg-repeat opacity-30 pointer-events-none"
                        style={{
                            backgroundImage: `url(${patternBg})`,
                            backgroundSize: '300px',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                        }}
                    />
                    <div className="container relative z-10">
                        <div className="text-center mb-14">
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                Meet Our Directors
                            </h2>
                            <div className="gold-divider w-24 mx-auto mt-4" />
                            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                                The people behind PunjabiMultaniRishtey.com — dedicated to your family's happiness.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {team.map((member) => (
                                <div
                                    key={member.name}
                                    className="bg-card border border-border/50 rounded-xl p-8 shadow-warm hover:shadow-warm-lg transition-all text-center"
                                >
                                    {/* Avatar */}
                                    <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5 border-2 border-primary/30">
                                        <span className="font-heading text-2xl font-bold text-primary">
                                            {member.initials}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs font-bold text-primary uppercase tracking-wide mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {member.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-20 md:py-24 bg-background">
                    <div className="container">
                        <div className="text-center mb-14">
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                What We Stand For
                            </h2>
                            <div className="gold-divider w-24 mx-auto mt-4" />
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {values.map((v) => (
                                <div
                                    key={v.title}
                                    className="bg-card rounded-xl p-8 shadow-warm hover:shadow-warm-lg transition-all border border-border/50 hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                                        <v.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                                        {v.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 md:py-24 bg-peach-gradient text-center">
                    <div className="container max-w-2xl">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                            Ready to Begin Your Journey?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg mb-8">
                            Join thousands of families who trust PunjabiMultaniRishtey.com for their most
                            important life decision.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/register">
                                <Button size="lg" variant="secondary" className="font-semibold px-8">
                                    Start Free Registration
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default About;
