"use client";

import React from "react";
import { MapPin, ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";

export const SelectedProjects: React.FC = () => {
  const projects = [
    {
      title: "Parkwood Circle Corporate Campus",
      location: "Atlanta, GA (Cumberland Submarket)",
      sector: "Commercial Headquarters & Executive Suites",
      role: "Lead Developer & Operating Partner",
      scope: "Strategic multi-tenant commercial office asset with corporate conference amenities and modern infrastructure.",
      status: "Active / Stabilized",
      year: "2018 – Present",
    },
    {
      title: "Southern Logistics Distribution Hub",
      location: "Georgia Regional Transport Corridor",
      sector: "Industrial Logistics & Freight Transfer",
      role: "Sponsor & Co-Developer",
      scope: "Regional supply chain warehouse and freight distribution staging facility serving interstate freight corridors.",
      status: "Completed / Leased",
      year: "2021 – 2023",
    },
    {
      title: "Civic Transit-Oriented Mixed-Use",
      location: "Metropolitan Atlanta",
      sector: "Mixed-Use Residential & Ground Retail",
      role: "Capital Advisor & Equity Structurer",
      scope: "Underwriting and municipal syndication for mixed-income housing, ground-floor retail, and community plazas.",
      status: "Pre-Development / Permitting",
      year: "2024 – 2026",
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow-institutional">Case Studies & Past Performance</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0e1726] tracking-tight">
            Selected Work & Realized Projects
          </h2>
          <div className="w-16 h-0.5 bg-[#b59357]" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
            A representative sampling of development, advisory, and infrastructure projects delivered across corporate, civic, and institutional engagements.
          </p>
        </div>

        {/* Case Studies Table / Editorial Cards */}
        <div className="space-y-8">
          {projects.map((proj, idx) => (
            <div
              key={proj.title}
              className="border border-slate-200 bg-[#FAF8F5] p-8 sm:p-10 hover:border-[#b59357] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Project Identity & Location (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#b59357]">
                      0{idx + 1}.
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                      {proj.sector}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0e1726] leading-tight">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#b59357]" />
                    <span>{proj.location}</span>
                  </div>
                </div>

                {/* Right: Architectural Case Facts (7 cols) */}
                <div className="lg:col-span-7 space-y-4 lg:border-l lg:border-slate-200 lg:pl-8">
                  <p className="text-slate-700 text-sm leading-relaxed font-normal">
                    {proj.scope}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">JUBOH Role:</span>
                      <span className="font-semibold text-slate-800">{proj.role}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Project Status:</span>
                      <span className="font-semibold text-emerald-800">{proj.status}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Timeline:</span>
                      <span className="font-semibold text-slate-800">{proj.year}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
