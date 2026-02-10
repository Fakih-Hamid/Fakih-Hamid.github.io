import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  orgUrl?: string;
  period: string;
  description: string[];
  current?: boolean;
}

const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Research Assistant",
    organization: "Nara Institute of Science and Technology (NAIST)",
    orgUrl: "https://www.naist.jp/",
    period: "April 2025 – Present",
    current: true,
    description: [
      "Contributing to cybersecurity research projects focused on human-centered security and digital resilience",
      "Designing and developing privacy-preserving security systems for research and educational use",
      "Conducting empirical studies on user interaction with security technologies"
    ],
  },
  
  
  {
    type: "education",
    title: "Master of Engineering in Information Science",
    organization: "Nara Institute of Science and Technology (NAIST)",
    orgUrl: "https://www.naist.jp/",
    period: "2024 – Present",
    current: true,
    description: [
      "Master’s program in Information Science with a research focus on cybersecurity",
      "Conducting research at the Cyber-Resilience Laboratory"
    ],
  },
  
  {
    type: "work",
    title: "IT Support Engineer",
    organization: "Groupe Carré d'Or",
    orgUrl: "https://carredor.ci/",
    period: "July 2023 – April 2024",
    description: [
      "Maintained and optimized network and server infrastructure to improve system reliability and uptime",
      "Investigated operational and security issues in ERP environments, including troubleshooting SQL databases to identify and resolve data inconsistencies and system errors",
      "Implemented virtualization solutions using Hyper-V and reinforced firewall and VPN configurations to strengthen network security"
    ],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "International University of Grand-Bassam",
    orgUrl: "https://iugb.edu.ci/",
    period: "September 2020 - May 2023",
    description: [
      "Major in Computer Science ",
      "Member of the IT Club  ",
      "Participated in STEM department activities",
    ],
  },
];

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const Icon = item.type === "work" ? Briefcase : GraduationCap;
  
  return (
    <div
      className="relative pl-8 pb-12 last:pb-0 opacity-0 animate-slide-in-left"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />
      
      {/* Timeline dot */}
      <div className={`absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
        item.current 
          ? "bg-primary border-primary shadow-[0_0_10px_hsl(168_100%_50%/0.5)]" 
          : "bg-background border-border"
      }`} />

      {/* Card */}
      <div className="group bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(168_100%_50%/0.1)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className={`p-2 rounded-lg flex-shrink-0 ${
              item.type === "work" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
            }`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <a
                href={item.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors break-words"
              >
                {item.organization}
                <ExternalLink className="w-3 h-3 flex-shrink-0" />
              </a>
            </div>
          </div>
          
          {/* Period */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-shrink-0">
            {item.current && (
              <span className="px-2 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full animate-glow-pulse w-fit">
                Current
              </span>
            )}
            <span className="font-mono text-xs text-muted-foreground break-words sm:whitespace-nowrap">
              {item.period}
            </span>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2">
          {item.description.map((desc, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1.5 text-xs">▹</span>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-lg">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience & Education
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <TimelineCard key={`${item.title}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}