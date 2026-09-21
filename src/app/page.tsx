"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CredibilityBar } from "@/components/CredibilityBar";
import { CompaniesOverview } from "@/components/CompaniesOverview";
import { RealEstateSection } from "@/components/RealEstateSection";
import { CapitalAdvisorySection } from "@/components/CapitalAdvisorySection";
import { GovernmentContractingSection } from "@/components/GovernmentContractingSection";
import { SelectedProjects } from "@/components/SelectedProjects";
import { ExecutiveEducationGateway } from "@/components/ExecutiveEducationGateway";
import { LeadershipSection } from "@/components/LeadershipSection";
import { FoundationSection } from "@/components/FoundationSection";
import { PressSection } from "@/components/PressSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MobileFloatingBar } from "@/components/MobileFloatingBar";
import { ScrollEffects } from "@/components/ScrollEffects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#191c22] selection:bg-[#b59357] selection:text-[#0e1726] pb-20 lg:pb-0">
      {/* Scroll Effects Observer */}
      <ScrollEffects />

      {/* Primary Navigation & Top Dispatch Bar */}
      <Navbar />

      {/* 01. Hero Section */}
      <Hero />

      {/* 02. Credibility Bar */}
      <div className="scroll-reveal">
        <CredibilityBar />
      </div>

      {/* Corporate Operating Overview */}
      <div className="scroll-reveal">
        <CompaniesOverview />
      </div>

      {/* 03. Real Estate Development */}
      <div className="scroll-reveal">
        <RealEstateSection />
      </div>

      {/* 04. Business Strategy & Capital Advisory */}
      <div className="scroll-reveal">
        <CapitalAdvisorySection />
      </div>

      {/* 05. Government Contracting */}
      <div className="scroll-reveal">
        <GovernmentContractingSection />
      </div>

      {/* 06. Selected Projects / Case Studies */}
      <div className="scroll-reveal">
        <SelectedProjects />
      </div>

      {/* 07. Executive Education Gateway */}
      <div className="scroll-reveal">
        <ExecutiveEducationGateway />
      </div>

      {/* 08. Leadership */}
      <div className="scroll-reveal">
        <LeadershipSection />
      </div>

      {/* 09. Foundation / Community Impact */}
      <div className="scroll-reveal">
        <FoundationSection />
      </div>

      {/* 10. Press / Recognition / News */}
      <div className="scroll-reveal">
        <PressSection />
      </div>

      {/* 11. Contact & Corporate Headquarters */}
      <div className="scroll-reveal">
        <ContactSection />
      </div>

      {/* 11. Footer */}
      <Footer />

      {/* Mobile Floating Inquire CTA Dock */}
      <MobileFloatingBar />
    </main>
  );
}
