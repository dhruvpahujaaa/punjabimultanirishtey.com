import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, GraduationCap, User, Ruler } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockProfiles = [
  { id: 1, name: "Priya A.", age: 26, height: "5'4\"", community: "Arora", education: "MBA", location: "Ludhiana", bio: "Family-oriented, loves Punjabi traditions and cooking." },
  { id: 2, name: "Simran K.", age: 24, height: "5'3\"", community: "Khatri", education: "B.Tech", location: "Delhi", bio: "Ambitious and creative. Values family above all." },
  { id: 3, name: "Rajveer S.", age: 28, height: "5'10\"", community: "Multani", education: "CA", location: "Amritsar", bio: "Hardworking professional with strong cultural values." },
  { id: 4, name: "Gurpreet M.", age: 27, height: "5'6\"", community: "Jhangi", education: "MBBS", location: "Chandigarh", bio: "Doctor by profession, traditional at heart." },
  { id: 5, name: "Anmol K.", age: 25, height: "5'5\"", community: "Arora", education: "M.Sc", location: "Jalandhar", bio: "Simple, caring and deeply rooted in family values." },
  { id: 6, name: "Harleen S.", age: 29, height: "5'7\"", community: "Khatri", education: "LLB", location: "Mumbai", bio: "Advocate with a passion for social service and culture." },
];

const Profiles = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-10 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Verified Profiles</h1>
            <p className="text-muted-foreground mt-2">Browse curated matches from our verified community.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter sidebar */}
            <aside className={`lg:w-72 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="bg-card rounded-xl shadow-warm p-6 border border-border/50 space-y-5 sticky top-24">
                <h3 className="font-heading text-lg font-semibold text-foreground">Filters</h3>
                <div>
                  <Label className="text-xs">Age Range</Label>
                  <div className="flex gap-2 mt-1">
                    <Input placeholder="Min" type="number" className="text-sm" />
                    <Input placeholder="Max" type="number" className="text-sm" />
                  </div>
                </div>
                <div>
                  <Label className="text-xs">Height</Label>
                  <div className="flex gap-2 mt-1">
                    <Input placeholder="Min" className="text-sm" />
                    <Input placeholder="Max" className="text-sm" />
                  </div>
                </div>
                <div>
                  <Label className="text-xs">Community</Label>
                  <Select>
                    <SelectTrigger className="mt-1 text-sm"><SelectValue placeholder="All" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="arora">Arora</SelectItem>
                      <SelectItem value="khatri">Khatri</SelectItem>
                      <SelectItem value="multani">Multani</SelectItem>
                      <SelectItem value="jhangi">Jhangi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs">Location</Label>
                  <Input placeholder="City" className="mt-1 text-sm" />
                </div>
                <div>
                  <Label className="text-xs">Income</Label>
                  <Select>
                    <SelectTrigger className="mt-1 text-sm"><SelectValue placeholder="Any" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="5-10">₹5-10 LPA</SelectItem>
                      <SelectItem value="10-20">₹10-20 LPA</SelectItem>
                      <SelectItem value="20+">₹20+ LPA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full" size="sm">Apply Filters</Button>
              </div>
            </aside>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden text-sm text-primary font-medium mb-2"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            {/* Profile grid */}
            <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProfiles.map((p) => (
                <div key={p.id} className="bg-card rounded-xl shadow-warm border border-border/50 overflow-hidden hover:shadow-warm-lg transition-shadow">
                  {/* Avatar placeholder */}
                  <div className="h-48 bg-secondary flex items-center justify-center">
                    <User className="w-16 h-16 text-muted-foreground/40" />
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{p.name}, {p.age}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Ruler className="w-3 h-3" />{p.height}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{p.community}</span>
                      <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />{p.education}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{p.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.bio}</p>
                    <Button className="w-full" size="sm">View Full Profile</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profiles;
