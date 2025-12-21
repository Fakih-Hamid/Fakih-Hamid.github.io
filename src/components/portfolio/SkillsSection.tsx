import { Code2, Database, Shield, Cloud, Cpu, Wrench } from "lucide-react";

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Cpu,
    title: "AI / ML",
    skills: ["PyTorch", "scikit-learn", "Pandas", "TensorFlow", "LLMs"],
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["Wireshark", "Burp Suite", "Nmap", "Metasploit", "Fuzzing"],
  },
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "C++", "C", "C#", "Java", "JavaScript", "TypeScript"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Flask", "Node.js", "SQL", "PostgreSQL", "REST APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud / DevOps",
    skills: ["Docker", "AWS", "Linux", "Git", "CI/CD"],
  },
  {
    icon: Wrench,
    title: "Frontend",
    skills: ["React", "Vue", "HTML", "CSS", "Tailwind"],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = category.icon;
  const isFrontend = category.title === "Frontend";
  const isEmphasized = category.title === "AI / ML" || category.title === "Security";
  
  return (
    <div
      className={`group relative p-6 bg-card border rounded-lg transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_hsl(168_100%_50%/0.15)] opacity-0 animate-fade-in-up ${
        isFrontend ? "border-border/50 opacity-90" : "border-border"
      } ${isEmphasized ? "border-primary/30" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center mb-4 rounded-lg border text-primary transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(168_100%_50%/0.3)] ${
        isFrontend 
          ? "w-10 h-10 bg-primary/5 border-primary/10" 
          : isEmphasized
          ? "w-12 h-12 bg-primary/15 border-primary/30"
          : "w-12 h-12 bg-primary/10 border-primary/20"
      }`}>
        <Icon className={isFrontend ? "w-5 h-5" : "w-6 h-6"} />
      </div>

      {/* Title */}
      <h3 className={`font-bold mb-4 group-hover:text-primary transition-colors ${
        isFrontend ? "text-lg text-muted-foreground" : isEmphasized ? "text-xl text-foreground" : "text-lg text-foreground"
      }`}>
        {category.title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1.5 text-sm font-mono rounded-md border transition-colors group-hover:border-primary/30 group-hover:text-foreground ${
              isFrontend
                ? "text-muted-foreground/70 bg-muted/50 border-border/50"
                : "text-muted-foreground bg-muted border-border"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className={`absolute top-4 right-[-20px] w-20 h-px bg-gradient-to-l from-transparent via-primary/50 to-transparent rotate-45 transition-opacity ${
          isFrontend ? "opacity-0" : "opacity-0 group-hover:opacity-100"
        }`} />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-lg">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Terminal style intro */}
        <div className="terminal max-w-2xl mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="terminal-header">
            <div className="terminal-dot bg-destructive" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="ml-2 text-muted-foreground text-xs">skills.sh</span>
          </div>
          <div className="p-4 font-mono text-sm">
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> cat /etc/skills
            </p>
            <p className="text-terminal-text mt-2">
              // Loading skill modules...
            </p>
            <p className="text-foreground mt-1">
              Found <span className="text-primary">{skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}</span> skills across <span className="text-accent">{skillCategories.length}</span> categories
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}