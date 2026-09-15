import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "fakih-hamid@proton.me", href: "mailto:fakih-hamid@proton.me" },
  { icon: Github, label: "GitHub", value: "Fakih-Hamid", href: "https://github.com/Fakih-Hamid" },
  { icon: Linkedin, label: "LinkedIn", value: "fakih-hamid", href: "https://www.linkedin.com/in/fakih-hamid/" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    try {
      await fetch("https://formspree.io/f/xrgwprbn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring transition";

  return (
    <section id="contact" className="py-16 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
          Contact
        </h2>
        <p className="mt-2 text-[15px] text-muted-foreground prose-measure">
          I am open to discussing research and potential collaborations in cybersecurity. For
          research-related inquiries, please contact me by email.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-10">
          {/* Direct links */}
          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[15px]"
              >
                <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground">{link.label}:</span>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {link.value}
                </span>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-muted-foreground mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted-foreground mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-primary">Thank you for reaching out. I will reply soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please email me directly at fakih-hamid@proton.me.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
