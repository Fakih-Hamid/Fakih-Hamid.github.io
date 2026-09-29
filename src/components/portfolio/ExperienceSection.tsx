import { ExternalLink } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  orgUrl?: string;
  period: string;
  description: string[];
}

const experience: TimelineItem[] = [
  {
    type: "work",
    title: "Research & Teaching Assistant",
    organization: "Nara Institute of Science and Technology (NAIST)",
    orgUrl: "https://www.naist.jp/",
    period: "Apr 2025 – Present",
    description: [
      "Designed and built a bilingual cybersecurity awareness platform for non-IT graduate students in Japan, built around hands-on work with real security tools.",
      "Ran it as a randomized experiment comparing two complete intervention packages, with automated condition-parity checks and server-side behavioral instrumentation.",
      "Kept the study privacy-preserving by design: no directly identifying data, and an AI guide served by a local model.",
      "Built and deployed a second, team-based platform for a one-day incident-investigation workshop: teams investigate a simulated software supply-chain compromise through OSINT, attacker infrastructure (RDAP, DNS, manifests), and host forensics mapped to MITRE ATT&CK, closing with an incident report.",
      "Supported course delivery as a Teaching Assistant.",
    ],
  },
  {
    type: "work",
    title: "Research Intern",
    organization: "Nara Institute of Science and Technology (NAIST)",
    orgUrl: "https://www.naist.jp/",
    period: "May 2024 – Mar 2025",
    description: [
      "Built early prototypes and conducted a literature review on cybersecurity awareness.",
    ],
  },
];

const education: TimelineItem[] = [
  {
    type: "education",
    title: "M.Eng. in Information Science",
    organization: "Nara Institute of Science and Technology (NAIST)",
    orgUrl: "https://www.naist.jp/",
    period: "Apr 2025 – Present",
    description: [
      "Research focus on cybersecurity, Laboratory for Cyber Resilience",
    ],
  },
];

function Entry({ item }: { item: TimelineItem }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 py-4 border-t border-border first:border-t-0">
      <div className="text-sm text-muted-foreground sm:pt-0.5">{item.period}</div>
      <div>
        <h4 className="font-medium text-foreground">{item.title}</h4>
        {item.orgUrl ? (
          <a
            href={item.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {item.organization}
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <p className="text-sm text-muted-foreground">{item.organization}</p>
        )}
        <ul className="mt-2 space-y-1 text-[15px] leading-relaxed text-foreground/85 prose-measure">
          {item.description.map((d, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-muted-foreground select-none">&middot;</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
          Experience
        </h2>
        <div className="mt-5">
          {experience.map((item) => (
            <Entry key={item.title + item.period} item={item} />
          ))}
        </div>

        <h2 className="mt-12 font-serif text-2xl md:text-3xl font-semibold text-foreground">
          Education
        </h2>
        <div className="mt-5">
          {education.map((item) => (
            <Entry key={item.title + item.period} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
