import { Mail, Phone, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Clevelan Meyers. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:clevelanmeyers@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="tel:+27697172704"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
