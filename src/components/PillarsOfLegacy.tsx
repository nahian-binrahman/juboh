"use client";

import React from "react";
import { Landmark, ShieldCheck, HeartHandshake } from "lucide-react";

export const PillarsOfLegacy: React.FC = () => {
  const pillars = [
    {
      category: "MATERIAL ASSETS",
      subtitle: "Financial Stewardship",
      leadText:
        "Passing down tangible, structured economic tools to accelerate family stability.",
      bodyText:
        "Real estate equity, clean business entities, active equity portfolios, and liquid family emergency funds to prevent wealth vulnerabilities.",
      icon: Landmark,
      badgeNumber: "01",
    },
    {
      category: "MORAL VALUES",
      subtitle: "Character Infrastructure",
      leadText:
        "Cultivating consistent operational principles and high ethical accountability.",
      bodyText:
        "Uncompromising personal integrity, strong professional work ethic, strategic resilience, and an institutional culture of continuous personal development.",
      icon: ShieldCheck,
      badgeNumber: "02",
    },
    {
      category: "SPIRITUAL ROOTS",
      subtitle: "Covenant Foundation",
      leadText:
        "Imparting solid faith architectures to govern decisions and resource utilization.",
      bodyText:
        "Active spiritual principles, scriptural literacy, regular fellowship, and a foundational worldview that positions wealth as a tool for impact and service.",
      icon: HeartHandshake,
      badgeNumber: "03",
    },
  ];

  return (
    <section id="pillars" className="py-16 sm:py-24 relative bg-[#0a1119] subtle-topography">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a265] font-semibold block mb-2">
            Pillars Of Legacy
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif">
            The Holistic Scope of Inheritance
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#c5a265] to-transparent mx-auto mt-4" />
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.category}
                className="rounded-2xl overflow-hidden border border-[#c5a265]/30 bg-[#121c27]/90 shadow-2xl transition-all duration-300 hover:border-[#dfca9f]/60 hover:-translate-y-1 group flex flex-col"
              >
                {/* Gold Cap Header */}
                <div className="luxury-card-cap px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between font-bold text-xs sm:text-sm tracking-wider">
                  <span className="text-[#0d1520] uppercase font-sans font-extrabold tracking-widest">
                    {pillar.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-serif opacity-75">{pillar.badgeNumber}</span>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0d1520]" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#dfca9f] mb-2.5 group-hover:text-white transition-colors">
                      {pillar.subtitle}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed mb-3">
                      {pillar.leadText}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.bodyText}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#c5a265]/15 flex items-center justify-between text-[10px] sm:text-[11px] text-[#c5a265] font-semibold uppercase tracking-wider">
                    <span>Generational Stewardship</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a265]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
