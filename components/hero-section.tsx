"use client";

import { Mail, Phone, MapPin, Download, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            IT Engineer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Clevelan Meyers
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Cape Town, South Africa
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant="default"
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="mailto:clevelanmeyers@gmail.com">
              <Coffee className="w-4 h-4" />
              {"Let's grab a coffee"}
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="#contact">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </Button>
        </div>

        <blockquote className="border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
          <p className="text-muted-foreground italic text-lg">
            {'"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."'}
          </p>
          <footer className="text-sm text-muted-foreground/70 mt-2">
            — Mark Caine
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
