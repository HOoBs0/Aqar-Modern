"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ProjectsSection } from "@/components/projects-section";
import { BenefitsSection } from "@/components/benefits-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  return (
    <main dir="rtl" className="site-shell">
      <SiteHeader />
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <SiteFooter />
    </main>
  );
}
