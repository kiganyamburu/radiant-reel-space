import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient background as signature moment */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[780px] rounded-full blur-3xl opacity-50 bg-gradient-to-br from-primary/15 via-accent/20 to-transparent" />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div className="space-y-6 animate-enter">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs border border-border bg-card/60 backdrop-blur-sm">
            React + Three.js • Smooth animations
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            3D Interactive Portfolio
          </h1>
          <p className="text-muted-foreground text-lg max-w-prose">
            Showcasing modern web experiences with real-time 3D, thoughtful motion, and a refined design system. Built with React, Three.js, and Tailwind.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero">
              View Projects
              <ArrowRight className="ml-1" />
            </Button>
            <Button variant="soft">
              <Mail className="mr-1" /> Contact
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            Scroll to explore • <a href="#projects" className="story-link">Learn more</a>
          </div>
        </div>
        <div className="animate-scale-in">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
