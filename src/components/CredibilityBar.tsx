"use client";

import React from "react";
import { useSiteData } from "@/context/SiteDataContext";

export const CredibilityBar: React.FC = () => {
  const { siteData } = useSiteData();
  const metrics = siteData.credibility || [];

  return (
    <section className="bg-[#FAF8F5] border-b border-[#e5dfd5] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-300/60">
          {metrics.map((item, idx) => (
            <div
              key={item.label}
              className={`pt-6 sm:pt-0 ${idx !== 0 ? "sm:pl-8 lg:pl-10" : ""}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-[#0e1726] tracking-tight mb-1">
                {item.value}
              </div>
              <div className="text-xs uppercase tracking-[0.16em] font-bold text-[#b59357] mb-1">
                {item.label}
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
