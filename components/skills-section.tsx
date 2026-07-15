import { Server, Monitor, Network, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Systems Administration",
    icon: Server,
    skills: [
      "Active Directory Domain Services",
      "DHCP & DNS Configuration",
      "Windows OS – Client & Server",
      "Group Policy Management",
      "File Server & Shared Folder Permissions",
      "Microsoft Exchange & Microsoft 365",
      "Google Workspace",
    ],
  },
  {
    title: "Virtualization & Infrastructure",
    icon: Monitor,
    skills: [
      "Virtualization (Proxmox VE & VMware)",
      "Lab / Test Environment Design",
      "VM Provisioning & Management",
      "Hardware & Software Configuration",
      "IT Asset Management (Snipe-IT)",
      "ITSM / Ticketing Systems",
    ],
  },
  {
    title: "Web Hosting & Databases",
    icon: Database,
    skills: [
      "IIS Web Server Administration",
      "PHP (FastCGI) Configuration",
      "MariaDB / MySQL Administration",
      "Composer Dependency Management",
      "Self-Hosted Web App Deployment",
      "Server Stack Maintenance & Updates",
    ],
  },
  {
    title: "Network & Security",
    icon: Network,
    skills: [
      "Network Cabling & Infrastructure",
      "IT Security Best Practices",
      "User Permissions & Access Control",
      "Remote Support & Troubleshooting",
      "Technical Documentation",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          Technical Expertise
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
