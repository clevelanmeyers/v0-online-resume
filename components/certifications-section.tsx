import { Award, GraduationCap, BookOpen } from "lucide-react";

const certifications = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
  },
  {
    name: "CompTIA Network+ (N+)",
    issuer: "CompTIA",
  },
  {
    name: "IT Essentials",
    issuer: "Cisco NETACAD",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
  },
  {
    name: "Junior Cybersecurity Analyst",
    issuer: "Cisco",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          Education & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>

            <div className="p-6 border border-border rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    National IT Diploma
                  </h4>
                  <p className="text-primary font-medium">Currently Studying</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Focus: Information Technology, Systems Administration,
                    Network Infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 border border-border rounded-lg flex items-center gap-4 hover:border-primary/50 transition-colors"
                >
                  <div className="p-2 bg-secondary rounded-lg">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
