import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  imageUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Pridwen AI Framework",
    description: "Research-oriented project exploring user-centered approaches to cybersecurity awareness and digital resilience, focusing on privacy, usability, and engagement-oriented security education. Repository is currently private.",
    tech: ["Python", "Flask", "PyTorch", "LLM", "Cybersecurity"],
    githubUrl: "https://github.com/Fakih-Hamid/Pridwen-AI-Framework",
    featured: true,
  },
  
  
  {
    title: "C++ Security Tool",
    description: "Windows-focused anti-cheat demonstrator featuring memory pattern scanning, process integrity monitoring, and real-time detections via modern C++20.",
    tech: ["C++", "Windows API", "GoogleTest"],
    githubUrl: "https://github.com/Fakih-Hamid/Security-tool",
    featured: true,
  },
  {
    title: "Sentinel Security Dashboard",
    description:
      "Interactive security operations dashboard exploring how modern monitoring consoles visualize alerts, signals, and risk indicators, emphasizing real-time handling, anomaly visualization, and resilient architectures.",
    tech: ["React", "TypeScript", "Vite", "Security"],
    githubUrl: "https://github.com/Fakih-Hamid/sentinel-security-dashboard",
  },
  {
    title: "Project AEGIS",
    description: "Offline AI Security Lab - autonomous fuzzer with guided coverage + policy sandbox that blocks data exfiltration.",
    tech: ["Python", "Fuzzing", "Security"],
    githubUrl: "https://github.com/Fakih-Hamid/project-aegis",
  },
  {
    title: "RL-Lab",
    description: "Research-oriented reinforcement learning experiments combining a PPO-based agent with a custom grid-based game environment, focusing on adaptive decision-making and reward design using PyTorch.",
    tech: ["Python", "PyTorch", "Reinforcement Learning"],
    githubUrl: "https://github.com/Fakih-Hamid/Game-RL-Lab",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className={`group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_hsl(168_100%_50%/0.2)] opacity-0 animate-fade-in-up ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-destructive" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-auto font-mono text-xs text-muted-foreground">
          {project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
        </span>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <Folder className="w-10 h-10 text-primary transition-transform group-hover:scale-110" />
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View project"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-lg">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a
            href="https://github.com/Fakih-Hamid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-primary hover:text-accent transition-colors"
          >
            <span>View more on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}