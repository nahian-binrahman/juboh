"use client";

import React, { useState } from "react";
import { CheckSquare, Briefcase, ChevronRight, Layers, ArrowUpRight } from "lucide-react";

export const FinancialOrder: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      phase: "PHASE 1",
      title: "Liquidity Foundation",
      summary:
        "Establish 3–6 months of liquid emergency reserves to insulate family assets from sudden disruptions.",
      metrics: "Immediate Liquidity Buffer • High-Yield Reserves • Risk Insulation",
    },
    {
      phase: "PHASE 2",
      title: "Debt Elimination",
      summary:
        "Aggressively eradicate toxic, high-interest consumer liabilities to recover wasted cash flow and investment velocity.",
      metrics: "Cash-Flow Recapture • Liability Elimination • Velocity Multipliers",
    },
    {
      phase: "PHASE 3",
      title: "Systematic Investment",
      summary:
        "Automate asset placement into diversified tax-advantaged accounts (401k/IRA) and core index fund architectures.",
      metrics: "Compound Growth Engines • Automated Allocations • Tax-Advantaged Growth",
    },
    {
      phase: "PHASE 4",
      title: "Legacy Optimization",
      summary:
        "Deploy advanced legal structures, explicit trust allocations, and strategic asset protections to pass down wealth cleanly.",
      metrics: "Dynasty Trust Architecture • Multi-Generational Transfer • Tax Mitigation",
    },
  ];

  return (
    <section id="blueprint" className="py-24 relative bg-[#091017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a265] font-semibold block mb-2">
            Financial Order Of Operations
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-serif">
            The Strategic Blueprint for Capital Deployment
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-3">
            A disciplined mathematical progression engineered to systematically eliminate downside risk and build dynastic longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Executive Strategy Card (Honoring the left illustration card on Slide 4) */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-gradient-to-br from-[#f8f5ee] via-[#ecdcb9] to-[#d6bc8b] text-[#111a24] shadow-2xl border border-[#c5a265] flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#111a24] text-[#dfca9f] flex items-center justify-center mb-6 shadow-md">
                <Briefcase className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8c6b32] block mb-2">
                Capital Stewardship
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d1620] mb-4">
                Operational Framework
              </h3>
              <p className="text-sm text-slate-800 leading-relaxed">
                Adhering to strict chronological asset sequencing guarantees that no family balance sheet is over-leveraged while building multi-generational equity.
              </p>
            </div>

            <div className="pt-6 border-t border-[#c5a265]/40 flex items-center justify-between text-xs font-bold text-[#0d1620] uppercase tracking-wider">
              <span>Verified Deployment Flow</span>
              <CheckSquare className="w-5 h-5 text-[#8c6b32]" />
            </div>
          </div>

          {/* 4 Sequential Phase Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {phases.map((item, idx) => (
              <div
                key={item.phase}
                onClick={() => setActivePhase(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  activePhase === idx
                    ? "bg-[#162433] border-[#c5a265] shadow-[0_0_25px_rgba(197,162,101,0.2)] transform -translate-y-1"
                    : "bg-[#101822]/80 border-[#c5a265]/20 hover:border-[#c5a265]/50 hover:bg-[#131f2c]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#dfca9f]">
                    {item.phase}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${activePhase === idx ? "bg-[#c5a265] shadow-[0_0_10px_#c5a265]" : "bg-slate-700"}`} />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div className="text-[11px] text-[#edd6a6] font-medium pt-3 border-t border-[#c5a265]/15">
                  {item.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
