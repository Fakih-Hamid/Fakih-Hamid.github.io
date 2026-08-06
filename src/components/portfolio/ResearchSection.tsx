const interests = [
  "Human-centered cybersecurity",
  "Privacy and cyber hygiene awareness",
  "AI-assisted Framework",
  "Penetration testing",
  "Network security",
  "Game security, particularly cheat detection",
  "AI security",
  "Malware Analysis",
];

interface Work {
  title: string;
  venue: string;
  authors: string;
  note?: string;
  href?: string;
}

// Honest early-career listing. Update these entries as the work progresses;
// only move an entry to a peer-reviewed venue once it is actually accepted.
const inProgress: Work[] = [
  {
    title:
      "A Culturally-Responsive, AI-Assisted Framework for Cyber Hygiene and Privacy Awareness",
    authors: "H. Fakih",
    venue: "Master's thesis, NAIST, in progress",
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-16 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
          Research
        </h2>

        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Interests
          </h3>
          <ul className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2 text-[15px] text-foreground/90">
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Publications / work in progress */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Publications &amp; work in progress
          </h3>

          <ol className="mt-5 space-y-5">
            {inProgress.map((w) => (
              <li key={w.title} className="flex gap-3 text-[15px]">
                <span className="text-muted-foreground select-none">&bull;</span>
                <div>
                  <p className="text-foreground">
                    {w.href ? (
                      <a
                        href={w.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                      >
                        {w.title}
                      </a>
                    ) : (
                      w.title
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {w.authors} &middot; <span className="italic">{w.venue}</span>
                    {w.note ? ` (${w.note})` : ""}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
