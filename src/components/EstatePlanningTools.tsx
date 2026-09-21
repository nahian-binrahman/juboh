"use client";

import React from "react";
import { Scroll, Umbrella, Building, ArrowRight } from "lucide-react";

export const EstatePlanningTools: React.FC = () => {
  const tools = [
    {
      num: "01",
      title: "WILLS & TRUSTS",
      desc: "Establishes bulletproof asset distribution, minimizes heavy probate court friction, protects minor children, and structures continuous oversight via Revocable or Irrevocable Trusts to manage how wealth is accessed.",
      icon: Scroll,
    },
    {
      num: "02",
      title: "LIFE INSURANCE ARCHITECTURES",
      desc: "Acts as an immediate, tax-advantaged capital injection upon a loss. Creates liquid funds to clear outstanding family liabilities, fund structural estate taxes, and capitalize custom multi-generational family trusts instantly.",
      icon: Umbrella,
    },
    {
      num: "03",
      title: "LEGAL ENTITY SHIELDS",
      desc: "Isolates operational business liabilities from personal family assets. Utilizing corporate frameworks like LLCs, Family Limited Partnerships (FLPs), and holding companies ensures lawsuits cannot dissolve core family wealth.",
      icon: Building,
    },
  ];

  return (
    <section id="estate-planning" className="py-16 sm:py-24 relative bg-[#0e1620] subtle-topography">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a265] font-semibold block mb-2">
            Estate Planning & Asset Protection Tools
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif">
            Preserving Wealth Across Generations
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto mt-3">
            Protecting principal capital against estate taxes, probate dissipation, and legal exposures through institutional structuring.
          </p>
        </div>

        {/* Stepped Timeline Roadmap linking the cards */}
        <div className="relative">
          {/* Connecting Gold Stepped Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#c5a265]/20 via-[#c5a265] to-[#c5a265]/20 -translate-y-12 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.title}
                  className="rounded-2xl p-6 sm:p-8 bg-[#fbf8f3] text-[#1b2635] shadow-2xl border border-[#c5a265]/40 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(197,162,101,0.2)] hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Number and Icon Header */}
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#c5a265]/30">
                      <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl font-serif font-extrabold text-[#b08a4b]">
                          {tool.num}.
                        </span>
                        <h3 className="text-xs sm:text-sm md:text-base font-extrabold text-[#111a24] tracking-wider uppercase">
                          {tool.title}
                        </h3>
                      </div>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#c5a265]/15 flex items-center justify-center text-[#b08a4b] shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#8c6b32]">
                    <span className="uppercase tracking-wider text-[10px] sm:text-xs">Institutional Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
