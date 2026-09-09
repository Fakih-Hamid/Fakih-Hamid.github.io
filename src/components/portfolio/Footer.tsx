import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:fakih-hamid@proton.me", label: "Email" },
  { icon: Github, href: "https://github.com/Fakih-Hamid", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fakih-hamid/", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fakih Hamid
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
