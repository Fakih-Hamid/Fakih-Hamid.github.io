import { useState } from "react";
import { Mail, Github, Linkedin, Send, Terminal } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactLinks = [
  { icon: Mail, label: "Email", value: "fakih-hamid@proton.me", href: "mailto:fakih-hamid@proton.me" },
  { icon: Github, label: "GitHub", value: "Fakih-Hamid", href: "https://github.com/Fakih-Hamid" },
  { icon: Linkedin, label: "LinkedIn", value: "fakih-hamid", href: "https://www.linkedin.com/in/fakih-hamid/" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formspree.io/f/xrgwprbn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-lg">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left side - Info */}
          <div className="space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Terminal greeting */}
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot bg-destructive" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-muted-foreground text-xs">contact.sh</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-2">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> echo "Let's connect!"
                </p>
                <p className="text-terminal-text">
                  Let's connect!
                </p>
                <p className="text-muted-foreground mt-4">
                  <span className="text-primary">$</span> cat message.txt
                </p>
                <p className="text-foreground leading-relaxed">
                  I welcome collaborations and discussions around AI, 
                  cybersecurity, and system-level security research.
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-card border border-border rounded-lg transition-all hover:border-primary hover:shadow-[0_0_20px_hsl(168_100%_50%/0.15)] opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:shadow-[0_0_15px_hsl(168_100%_50%/0.3)] transition-all">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">{link.label}</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <form 
            onSubmit={handleSubmit}
            className="space-y-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot bg-destructive" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-muted-foreground text-xs">send-message.tsx</span>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block font-mono text-sm text-muted-foreground mb-2">
                    <span className="text-primary">const</span> name =
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_hsl(168_100%_50%/0.2)] transition-all"
                    placeholder='"Your Name"'
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block font-mono text-sm text-muted-foreground mb-2">
                    <span className="text-primary">const</span> email =
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_hsl(168_100%_50%/0.2)] transition-all"
                    placeholder='"your@email.com"'
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block font-mono text-sm text-muted-foreground mb-2">
                    <span className="text-primary">const</span> message =
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_hsl(168_100%_50%/0.2)] transition-all resize-none"
                    placeholder='`Your message here...`'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-md transition-all hover:shadow-[0_0_30px_hsl(168_100%_50%/0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Terminal className="w-5 h-5 animate-pulse" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      sendMessage()
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}