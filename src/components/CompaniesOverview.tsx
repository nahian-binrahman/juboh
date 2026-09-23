"use client";

import React from "react";
import { Building2, TrendingUp, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";

export const CompaniesOverview: React.FC = () => {
  const { siteData } = useSiteData();
  const companies = siteData.companies || [];

  const getIcon = (iconName: string, idx: number) => {
    if (iconName === "building" || idx === 0) return Building2;
    if (iconName === "trending-up" || idx === 1) return TrendingUp;
    if (iconName === "shield" || idx === 2) return ShieldCheck;
    return Heart;
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#e5dfd5] scroll-mt-24 relative">
      <span id="companies" className="absolute -top-24 opacity-0 pointer-events-none" />
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
          {companies.map((company, idx) => {
            const Icon = getIcon(company.iconName, idx);
            return (
              <div
                key={company.id}
                className="bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#b59357]">
                      {company.sectorBadge}
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
                    {company.subHighlights}
                  </span>
                  <a
                    href={company.linkHref}
                    className="font-bold text-[#0e1726] hover:text-[#b59357] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>{company.linkText || "View Capabilities"}</span>
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
