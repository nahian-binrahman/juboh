"use client";

import React from "react";
import { ArrowRight, CheckCircle2, TrendingUp, PieChart, Landmark } from "lucide-react";

export const CapitalAdvisorySection: React.FC = () => {
  const practiceAreas = [
    {
      title: "Capital Strategy & Debt Syndication",
      description:
        "Advising sponsors, family offices, and developers on senior debt placement, mezzanine financing, private equity joint ventures, and tax-efficient capitalization structures.",
    },
    {
      title: "Real Estate Development Advisory",
      description:
        "Providing comprehensive pre-development underwriting, zoning and municipal approvals counsel, financial feasibility modeling, and construction capitalization oversight.",
    },
    {
      title: "Corporate Growth & Restructuring",
      description:
        "Guiding mid-market enterprise owners through strategic acquisitions, corporate reorganizations, balance-sheet recapitalizations, and executive succession planning.",
    },
    {
      title: "Institutional Partnerships & Co-Investment",
      description:
        "Connecting regional developers and operators with institutional capital partners, regional banks, CDFIs, and municipal development authorities for major civic initiatives.",
    },
  ];

  const clientTypes = [
    "Commercial Developers & General Contractors",
    "Family Offices & Ultra-High-Net-Worth Principals",
    "Mid-Market Operating Companies ($10M–$100M+)",
    "Municipal & Public-Sector Development Authorities",
    "Churches & Non-Profit Institutional Landholders",
  ];

  return (
    <section id="advisory" className="py-24 sm:py-32 bg-[#0e1726] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Practice Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="eyebrow-institutional">Capital Markets & Strategy</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Institutional Advisory & Capital Strategy
            </h2>
            <div className="w-16 h-0.5 bg-[#b59357]" />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
              JUBOH Capital & Advisory acts as an independent advisory firm for operating enterprises, family offices, and real estate developers navigating complex capitalization, M&A transactions, and institutional partnerships.
            </p>

            {/* Client Types Box (Per PDF Page 9 specification) */}
            <div className="p-6 bg-[#131f31] border border-slate-700/80 rounded-sm mt-8 space-y-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#b59357] block">
                Representative Client Engagements
              </span>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {clientTypes.map((client) => (
                  <li key={client} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b59357] shrink-0 mt-0.5" />
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: 4 Practice Areas Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {practiceAreas.map((area) => (
              <div
                key={area.title}
                className="p-8 bg-[#121c2c] border border-slate-800 hover:border-[#b59357]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-3 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-[11px] uppercase tracking-wider text-[#b59357] font-semibold">
                  <span>Advisory Practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
