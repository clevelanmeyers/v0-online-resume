import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SummarySection } from "@/components/summary-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
