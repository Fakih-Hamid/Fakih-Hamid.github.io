import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const navItems = [
  { label: "About", href: "about" },
  { label: "Research", href: "research" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isMobileMenuOpen
          ? "bg-background border-b border-border"
          : isScrolled
          ? "bg-background/90 backdrop-blur-sm border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-4xl px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("about")}
            className="font-serif text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            Fakih Hamid
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline underline-offset-2"
            >
              CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-sm text-primary hover:underline underline-offset-2"
              >
                CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
