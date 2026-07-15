import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "clevelanmeyers@gmail.com",
    href: "mailto:clevelanmeyers@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "069 717 2704",
    href: "tel:+27697172704",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Belhar, Cape Town",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {"Let's Connect"}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {"I'm always open to discussing new opportunities, tech projects, or ways to help your organization optimize its IT infrastructure. Feel free to reach out!"}
            </p>

            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:clevelanmeyers@gmail.com">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 border border-border rounded-lg"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
