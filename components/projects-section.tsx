import { Server, Boxes } from "lucide-react";

const projects = [
  {
    title: "Self-Hosted IT Asset Management System",
    subtitle: "Snipe-IT on Windows Server",
    icon: Boxes,
    tags: ["IIS", "PHP (FastCGI)", "MariaDB", "Composer"],
    highlights: [
      "Deployed and configured a self-hosted instance of Snipe-IT on Windows Server to centralize tracking of IT hardware and software assets across the organization.",
      "Built the underlying server stack — IIS (with CGI enabled), PHP (FastCGI), and MariaDB — and used Composer to install application dependencies.",
      "Configured the IIS site and PHP handler mappings, and managed ongoing hosting, updates, and maintenance of the platform.",
      "Structured asset categories, custom fields, and user permissions to align the system with existing IT asset lifecycle and inventory processes.",
      "Replaced manual spreadsheet-based tracking with a searchable, auditable asset register, improving visibility into hardware location, status, and assignment history.",
    ],
  },
  {
    title: "Virtualized Windows Server Test Environment",
    subtitle: "Proxmox VE Lab",
    icon: Server,
    tags: ["Proxmox VE", "Active Directory", "DHCP & DNS", "Group Policy"],
    highlights: [
      "Built a self-contained test/lab environment on Proxmox VE to trial infrastructure changes and Windows Server configurations before deploying to production.",
      "Provisioned and configured a virtual Domain Controller, setting up Active Directory Domain Services along with DHCP and DNS to support domain-joined clients.",
      "Deployed a virtual File Server and configured shared folders and permissions integrated with Active Directory security groups.",
      "Joined two virtual workstations to the domain to validate Group Policy, authentication, and file-share access in a realistic multi-machine setup.",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-3">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Hands-on infrastructure builds where I designed, deployed, and maintained real-world IT systems.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="border border-border rounded-lg p-6 bg-card flex flex-col hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground text-sm flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
