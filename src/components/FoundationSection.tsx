"use client";

import React from "react";
import { Heart, Globe2, BookOpen, Users, ArrowUpRight } from "lucide-react";

export const FoundationSection: React.FC = () => {
  const pillars = [
    {
      title: "Economic Empowerment & Entrepreneurship",
      description: "Providing capital readiness grants, operational mentorship, and micro-economic incubation to historically underserved small business owners.",
      icon: Users,
    },
    {
      title: "Youth Literacy & Educational Readiness",
      description: "Investing in scholastic excellence, digital literacy curricula, and higher education scholarships for promising community scholars.",
      icon: BookOpen,
    },
    {
      title: "Community Stabilization & Health",
      description: "Partnering with regional food banks, family resource centers, and civic agencies to provide crisis support and sustainable neighborhood infrastructure.",
      icon: Heart,
    },
  ];

  return (
    <section id="foundation" className="py-24 sm:py-32 bg-[#101b2b] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead-in */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#b59357]/40 bg-[#142236] text-[10px] uppercase tracking-[0.2em] font-bold text-[#b59357]">
            <Heart className="w-3 h-3" />
            <span>501(c)(3) Global Non-Profit Organization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            The JUBOH Family Foundation
          </h2>
          <div className="w-16 h-0.5 bg-[#b59357]" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
            Established in 2015 by Jalen Uboh as the philanthropic core of the enterprise, the Foundation is governed by the South African principle of <strong className="text-white">Ubuntu</strong> — “I Am Because We Are.”
          </p>
        </div>

        {/* Narrative & Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Ubuntu Declaration (5 cols) */}
          <div className="lg:col-span-5 bg-[#142337] border border-slate-700/80 p-8 sm:p-10 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#b59357] block">
              Core Philanthropic Creed
            </span>
            <blockquote className="text-lg sm:text-xl font-serif italic text-slate-100 leading-snug">
              “We believe that every individual holds a profound purpose to elevate another. Ubuntu reminds us that our collective prosperity is inextricably bound to the elevation of our communities.”
            </blockquote>
            <div className="pt-4 border-t border-slate-700 text-xs text-slate-400 space-y-1">
              <span className="text-white font-bold block">Mrs. Anika Carter-Uboh</span>
              <span>President & Executive Director, The JUBOH Family Foundation</span>
            </div>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b59357] hover:text-white transition-colors"
              >
                <span>Partner with the Foundation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: 3 Programmatic Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#121e30] border border-slate-800 p-6 sm:p-8 flex items-start gap-6 hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-[#18283e] flex items-center justify-center text-[#b59357] shrink-0 mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
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
