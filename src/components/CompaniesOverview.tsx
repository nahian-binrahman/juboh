"use client";

import React from "react";
import { Building2, TrendingUp, ShieldCheck, GraduationCap, Heart, ArrowUpRight } from "lucide-react";

export const CompaniesOverview: React.FC = () => {
  const companies = [
    {
      id: "real-estate",
      title: "JUBOH Real Estate Development",
      category: "Development & Asset Management",
      description:
        "Direct investment, master-planned developments, commercial acquisitions, and multi-family residential communities built for lasting community value.",
      focus: "Acquisitions • Ground-Up Construction • Asset Repositioning",
      link: "#real-estate",
      icon: Building2,
    },
    {
      id: "advisory",
      title: "JUBOH Capital & Advisory",
      category: "Strategic Advisory & Capital Markets",
      description:
        "Providing corporate growth strategy, capital structuring, equity/debt advisory, and institutional transaction counsel for mid-market enterprises.",
      focus: "Capital Structuring • M&A Advisory • Institutional Partnerships",
      link: "#advisory",
      icon: TrendingUp,
    },
    {
      id: "government",
      title: "JUBOH Government Solutions",
      category: "Public Sector & Infrastructure",
      description:
        "Contracting, procurement management, and operational logistics for federal, state, municipal, and educational institutions with verified past performance.",
      focus: "Federal Logistics • Municipal Procurement • Compliance",
      link: "#government-contracting",
      icon: ShieldCheck,
    },
    {
      id: "foundation",
      title: "The JUBOH Family Foundation",
      category: "Philanthropy & Social Impact",
      description:
        "A private 501(c)(3) charitable endowment advancing economic mobility, minority entrepreneurship, youth educational initiatives, and Ubuntu community equity.",
      focus: "Endowments • Workforce Initiatives • Social Equity",
      link: "#foundation",
      icon: Heart,
    },
  ];

  return (
    <section id="companies" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow-institutional">Operating Entities</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0e1726] tracking-tight">
            A Diversified Operating Enterprise
          </h2>
          <div className="w-16 h-0.5 bg-[#b59357]" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
            Organized across four institutional operating divisions, JUBOH Companies International combines operational discipline, private capital, and civic purpose to build enduring assets.
          </p>
        </div>

        {/* Operating Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company) => {
            const Icon = company.icon;
            return (
              <div
                key={company.id}
                className="bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#b59357]">
                      {company.category}
                    </span>
                    <div className="w-9 h-9 rounded bg-[#FAF8F5] border border-slate-200 flex items-center justify-center text-[#0e1726]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#0e1726] mb-3">
                    {company.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {company.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="text-slate-500 font-medium text-[11px]">
                    {company.focus}
                  </span>
                  <a
                    href={company.link}
                    className="font-bold text-[#0e1726] hover:text-[#b59357] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Capabilities</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
