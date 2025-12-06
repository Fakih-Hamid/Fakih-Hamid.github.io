import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-primary transition-all group-hover:animate-glow-pulse" />
            <span className="font-mono text-lg font-bold">
              <span className="text-primary">Fakih</span>
              <span className="text-foreground">_</span>
              <span className="text-accent">Hamid</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.replace("#", ""))}
                className="relative font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {"// "}
                </span>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary border border-primary/30 rounded-md hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(168_100%_50%/0.3)] transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border bg-card/50 backdrop-blur-sm rounded-lg animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.href.replace("#", ""));
                    setIsMobileMenuOpen(false);
                  }}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors text-left px-2 py-1 rounded hover:bg-primary/10"
                >
                  <span className="text-primary">{">"} </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}