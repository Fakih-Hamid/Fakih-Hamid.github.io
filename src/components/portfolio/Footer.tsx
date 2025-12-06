import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Fakih-Hamid", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fakih-hamid/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:fakih-hamid@proton.me", label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Branding */}
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="text-primary">{"<"}</span>
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive animate-pulse" />
            <span>by Fakih Hamid</span>
            <span className="text-primary">{"/>"}</span>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Right - Copyright */}
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}