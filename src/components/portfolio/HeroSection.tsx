import { useState } from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

// ORCID iD logo (brand green), sized via className.
function OrcidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#A6CE39" d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z" />
      <g fill="#FFF">
        <path d="M86.3 186.2H70.9V79.1h15.4v107.1z" />
        <path d="M108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7 0-21.5-13.7-39.7-43.7-39.7h-23.7v79.4z" />
        <path d="M88.7 56.8c0 5.5-4.5 10.1-10.1 10.1-5.6 0-10.1-4.6-10.1-10.1 0-5.6 4.5-10.1 10.1-10.1 5.6 0 10.1 4.6 10.1 10.1z" />
      </g>
    </svg>
  );
}

const links = [
  { icon: Mail, href: "mailto:fakih-hamid@proton.me", label: "Email" },
  { icon: FileText, href: "/cv.pdf", label: "CV", external: true },
  { icon: OrcidIcon, href: "https://orcid.org/0009-0008-2951-989X", label: "ORCID", external: true },
  { icon: Github, href: "https://github.com/Fakih-Hamid", label: "GitHub", external: true },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fakih-hamid/", label: "LinkedIn", external: true },
];

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col-reverse md:flex-row md:items-start gap-10 animate-fade-in">
          {/* Bio */}
          <div className="flex-1">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Fakih Hamid
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              M2 student, M.Eng. in Information Science
            </p>
            <p className="text-muted-foreground">
              Laboratory for Cyber Resilience,{" "}
              <a
                href="https://www.naist.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                NAIST
              </a>
            </p>

            <div className="mt-6 space-y-4 prose-measure text-[15px] leading-relaxed text-foreground/90">
              <p>
                I am a Master&rsquo;s degree student in Information Science at the Nara Institute
                of Science and Technology (NAIST), in the Laboratory for Cyber Resilience. Under
                the guidance of Professor{" "}
                <a
                  href="https://openalex.org/works?include_xpac=true&page=1&filter=authorships.author.id:a5084740320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Youki Kadobayashi
                </a>{" "}
                and Assistant Professor{" "}
                <a
                  href="https://scholar.google.fr/citations?user=bjWP3dAAAAAJ&hl=fr&oi=sra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Yuzo Taenaka
                </a>
                , my research investigates the impact of contextualization on cyber hygiene and
                privacy awareness outcomes among non-IT graduate students, comparing contextualized
                and generic interventions through a randomized, privacy-preserving experimental
                platform with local LLM inference and behavioral instrumentation.
              </p>
              <p>
                Before this, I completed a research internship at NAIST and a B.Sc. in Computer
                Science. My other research interests include penetration testing, network
                security, game security (particularly cheat detection), and AI security.
              </p>
            </div>

            {/* Links */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Portrait (falls back to a monogram until the photo is added) */}
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-border bg-secondary overflow-hidden flex items-center justify-center">
              {imgError ? (
                <span className="font-serif text-4xl md:text-5xl font-medium text-foreground/70">
                  FH
                </span>
              ) : (
                <img
                  src="/profile.jpg"
                  alt="Fakih Hamid"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "40% 18%" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
