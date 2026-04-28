import { User, MapPin, Globe, Clock } from "lucide-react";

const personalDetails = [
  { label: "Nationality", value: "South African" },
  { label: "Availability", value: "Calender Month" },
  { label: "Location", value: "Cape Town" },
  { label: "Languages", value: "English (Fluent)" },
];

const competencies = [
  "Active Directory Administration",
  "Windows Server Maintenance & Congfiguration",
  "Virtualization (Proxmox & VMware)",
  "Network Infrastructure",
  "System Reliabilty & Optimization",
  "ITSM / Ticketing Systems",
  "Technical Documentation & Training",
  "IT Security Best Practices",
  "Strategic Problem Solving"
];

export function SummarySection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          Professional Summary
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Travellab Group has benefited from my role as an IT Support Engineer since 2021, where I contribute to IT asset management, virtualisation, and preventive maintenance. My work involves addressing diverse technical challenges and supporting the organisation's IT infrastructure to ensure system optimization and reliability.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Skilled in Active Directory administration, server maintenance,
              and virtualization. Holds CompTIA A+ and N+ certifications with
              ongoing studies toward a National IT Diploma. Recognized for
              exceptional problem-solving abilities and delivering measurable
              improvements in system reliability and user satisfaction.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Personal Details
              </h3>
              <dl className="space-y-3">
                {personalDetails.map((detail) => (
                  <div key={detail.label} className="flex justify-between">
                    <dt className="text-muted-foreground">{detail.label}:</dt>
                    <dd className="text-foreground font-medium">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {competencies.map((competency) => (
              <span
                key={competency}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
