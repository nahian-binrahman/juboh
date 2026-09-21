"use client";

import React from "react";
import { GraduationCap, Users, BookOpen, ArrowUpRight } from "lucide-react";

export const ExecutiveEducationGateway: React.FC = () => {
  const tracks = [
    {
      title: "Corporate Governance & Executive Leadership",
      audience: "C-Suite Officers & Board Directors",
      overview: "Institutional leadership development, operational systems alignment, and command structure optimization.",
    },
    {
      title: "Capital Strategy & Treasury Workshops",
      audience: "Founders & Financial Executives",
      overview: "Intensive training on balance sheet capitalization, debt restructuring, and corporate liquidity management.",
    },
    {
      title: "Private Executive Advisory & Keynotes",
      audience: "Conventions, Summits & Leadership Retreats",
      overview: "Keynote addresses and bespoke advisory sessions led by Jalen Uboh and Anika Carter-Uboh.",
    },
  ];

  return (
    <section id="executive-education" className="py-24 sm:py-32 bg-[#0e1726] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="eyebrow-institutional">Executive Development</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              JUBOH Executive Academy
            </h2>
            <div className="w-16 h-0.5 bg-[#b59357]" />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl pt-2">
              The commercial education division of JUBOH provides high-impact corporate executive workshops, leadership symposia, and private advisory for enterprise founders and organizational leaders seeking institutional scale.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#b59357] text-[#0e1726] font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#c9a769] transition-colors"
            >
              <span>Inquire for Academy Syllabus</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Professional Academy Gateway Cards (No e-commerce carts / crossed-out pricing, per PDF Page 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="p-8 bg-[#131f31] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#b59357] block">
                  {track.audience}
                </span>
                <h3 className="text-xl font-serif font-bold text-white leading-snug">
                  {track.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {track.overview}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Executive Curriculum</span>
                <span className="text-[#b59357] font-semibold">Institutional Level</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
