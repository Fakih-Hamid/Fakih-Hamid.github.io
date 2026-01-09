import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/fakih-hamid/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Fakih-Hamid", label: "GitHub" },
  { icon: Mail, href: "mailto:fakih-hamid@proton.me", label: "Email" },
];

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Cybersecurity Researcher";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative flex items-center md:items-start justify-center overflow-hidden py-12 md:py-20 md:pt-32 pb-24 md:pb-32">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-8 md:pt-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-block mb-3 md:mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> whoami
            </span>
          </div>

          {/* Name with glitch effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-foreground">Hi, I'm </span>
            <span 
              className="glitch text-gradient neon-text"
              data-text="Hamid"
            >
              Hamid
            </span>
          </h1>

          {/* Typing effect subtitle */}
          <div className="h-12 mb-10 md:mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="font-mono text-xl md:text-2xl text-muted-foreground">
              <span className="text-primary">{">"}</span>{" "}
              {displayText}
              <span className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"}`}>▋</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 md:mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          I am a master's student and research assistant at the Cyber-Resilience Laboratory at NAIST, Japan. My research focuses on privacy-preserving and user-centered approaches to cybersecurity education and digital resilience, with an emphasis on real-world applicability and culturally informed design.

          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-14 md:mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-md overflow-hidden transition-all hover:shadow-[0_0_30px_hsl(168_100%_50%/0.5)]"
            >
              <span className="relative z-10">{"<"} View Projects {"/>"}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border border-primary text-primary font-mono font-semibold rounded-md transition-all hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(168_100%_50%/0.3)]"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-20 md:mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all hover:shadow-[0_0_20px_hsl(168_100%_50%/0.3)]"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <button onClick={() => scrollToSection("projects")} className="flex flex-col items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
          <span className="font-mono text-xs leading-tight">scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}