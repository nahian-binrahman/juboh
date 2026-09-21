"use client";

import React from "react";
import { ArrowRight, MapPin, CheckCircle2, Building, Layers } from "lucide-react";

export const RealEstateSection: React.FC = () => {
  const developments = [
    {
      name: "The Parkwood Executive Corridor",
      location: "Atlanta, Georgia",
      assetType: "Commercial Office & Corporate HQ",
      role: "Sponsor & Master Developer",
      scope: "Class-A Office Assets, Multi-Tenant Campus",
      status: "Operational / Core Holding",
    },
    {
      name: "Piedmont Urban Residential",
      location: "Metro Atlanta Submarket",
      assetType: "Multi-Family Residential",
      role: "Lead Developer & Equity Partner",
      scope: "180+ Luxury Multi-Family Units, Ground-Floor Retail",
      status: "In Development / Site Infrastructure",
    },
    {
      name: "Summit Logistics & Commerce Center",
      location: "Southeast Regional Hub",
      assetType: "Industrial Logistics & Distribution",
      role: "Co-Developer & Capital Advisor",
      scope: "240,000 SF Strategic Distribution Facility",
      status: "Completed / Stabilized",
    },
  ];

  return (
    <section id="real-estate" className="py-24 sm:py-32 bg-white border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead-in */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="eyebrow-institutional">Real Estate Development</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#0e1726] tracking-tight">
              Creating Enduring Physical Assets
            </h2>
            <div className="w-16 h-0.5 bg-[#b59357]" />
            <p className="text-slate-700 text-base sm:text-lg max-w-3xl leading-relaxed pt-2">
              JUBOH Real Estate Development originates, designs, and builds high-performance commercial, multi-family, and logistics properties. We focus on strategic geographic nodes across the Southeastern United States with resilient demographic fundamentals.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-bold text-[#0e1726] hover:text-[#b59357] transition-colors pb-1 border-b border-[#0e1726] hover:border-[#b59357]"
            >
              <span>View Full Development Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Selected Developments Table / Cards (Factual, Focussed, per PDF Page 9) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {developments.map((dev) => (
            <div
              key={dev.name}
              className="border border-slate-200 p-8 bg-[#FAF8F5] flex flex-col justify-between hover:border-[#b59357] transition-colors"
            >
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#b59357]" />
                    <span>{dev.location}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0e1726] leading-snug">
                    {dev.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[#b59357] font-semibold block mt-1">
                    {dev.assetType}
                  </span>
                </div>

                <div className="space-y-2 text-xs border-t border-slate-200/80 pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Role:</span>
                    <span className="font-semibold text-slate-800 text-right">{dev.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Scope:</span>
                    <span className="font-semibold text-slate-800 text-right">{dev.scope}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="font-semibold text-emerald-800 text-right">{dev.status}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                <span>Institutional Asset</span>
                <span className="w-2 h-2 rounded-full bg-[#b59357]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
