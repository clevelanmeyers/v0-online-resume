"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    period: "2021 – Present",
    title: "IT Support Technician",
    company: "Travellab Group",
    location: "Cape Town",
    responsibilities: [
      "Serve as the primary point of contact for 200+ end-users, resolving ITSM-logged incidents and service requests via phone, remote access, and on-site visits.",
      "Diagnose and remediate hardware, software, and network faults, consistently meeting SLA targets and minimizing user downtime.",
      "Administer user accounts, permissions, and group policies in Active Directory; manage DHCP and DNS to ensure network reliability.",
      "Monitor and maintain Windows Server environments, applying OS updates, patches, and security definitions to reduce vulnerability exposure.",
      "Deploy and support virtual machines using Proxmox and VMware, contributing to infrastructure resilience and test-environment provisioning.",
      "Author and maintain technical documentation — including SOPs, troubleshooting guides, and knowledge-based articles — for both end-users and the IT team.",
      "Manage IT asset lifecycle: maintain the stock and inventory register, coordinate hardware procurement, and oversee equipment disposal.",
      "Evaluate and pilot emerging technologies to assess fit for the organization's IT roadmap.",
    ],
  },
];

const timeline = [
  { year: "2021", label: "Present", active: true },
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          Professional Experience
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex items-center gap-4 mb-8">
                  <div
                    className={cn(
                      "w-3 h-3 rounded-full",
                      item.active ? "bg-primary" : "bg-muted-foreground/30"
                    )}
                  />
                  <div>
                    <p className="text-foreground font-semibold">{item.year}</p>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                  </div>
                </div>
              ))}
              <div className="absolute left-1.5 top-3 w-px h-[calc(100%-24px)] bg-border -translate-x-1/2" />
            </div>
          </div>

          {/* Experience Cards */}
          <div className="md:col-span-3 space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                {expandedIndex === index && (
                  <div className="px-6 pb-6">
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-muted-foreground flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
