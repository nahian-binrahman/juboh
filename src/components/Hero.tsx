"use client";

import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0e1726] text-white pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-slate-800">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Editorial Content (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 scroll-reveal">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 sm:w-8 h-px bg-[#b59357]" />
              <span className="eyebrow-institutional text-[10px] sm:text-xs">
                Established 2015 • Privately Held Enterprise
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-slate-300 font-semibold block">
                JUBOH Companies International
              </span>
              <h1 className="text-3xl sm:text-5xl xl:text-6.5xl font-serif text-white tracking-tight leading-[1.12]">
                Building an Exceptional Future, Together.
              </h1>
            </div>

            {/* Mobile-Only Portrait Placement (Between headline and description) */}
            <div className="lg:hidden my-6">
              <div className="relative border border-slate-700/80 bg-[#131f31] p-2 rounded-sm shadow-xl max-w-xs mx-auto">
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                  <img
                    src="/jalen-uboh.jpg"
                    alt="Mr. Jalen Uboh — Chairman & Founder"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09101a]/95 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left p-3 bg-[#0e1726]/90 border border-slate-700/80">
                    <span className="text-sm font-serif font-bold text-white block">
                      Jalen Uboh
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.16em] text-[#b59357] block mt-0.5 font-semibold">
                      Founder & Chairman • JUBOH
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300 font-light leading-relaxed">
              Advancing real estate development, business strategy, government contracting, strategic investments, executive education, and community impact across the United States and select international markets.
            </p>

            {/* Two CTAs Only (Per PDF Specification) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#companies"
                className="px-7 py-3.5 sm:py-4 bg-[#b59357] text-[#0e1726] hover:bg-[#c9a769] font-bold text-xs uppercase tracking-[0.2em] transition-all text-center rounded-sm shadow-md active:scale-98"
              >
                Explore Our Companies
              </a>
              <a
                href="#projects"
                className="px-7 py-3.5 sm:py-4 border border-slate-600 hover:border-slate-300 text-white font-medium text-xs uppercase tracking-[0.2em] transition-all text-center rounded-sm active:scale-98"
              >
                View Our Work
              </a>
            </div>

            {/* Operating Disciplines Ticker */}
            <div className="pt-6 sm:pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-xs text-slate-400">
              <div>
                <span className="text-slate-500 block text-[9px] sm:text-[10px] uppercase tracking-wider">Sector 01</span>
                <span className="text-slate-200 font-semibold text-xs">Real Estate</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9px] sm:text-[10px] uppercase tracking-wider">Sector 02</span>
                <span className="text-slate-200 font-semibold text-xs">Capital Advisory</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9px] sm:text-[10px] uppercase tracking-wider">Sector 03</span>
                <span className="text-slate-200 font-semibold text-xs">Public Contracting</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9px] sm:text-[10px] uppercase tracking-wider">Sector 04</span>
                <span className="text-slate-200 font-semibold text-xs">Philanthropy</span>
              </div>
            </div>
          </div>

          {/* Desktop Portrait (5 cols - hidden on mobile to avoid duplication) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end scroll-reveal">
            <div className="relative w-full max-w-md">
              <div className="relative border border-slate-700/80 bg-[#131f31] p-3 rounded-sm shadow-2xl">
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                  <img
                    src="/jalen-uboh.jpg"
                    alt="Mr. Jalen Uboh — Chairman & Founder"
                    className="w-full h-full object-cover object-top filter grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09101a]/95 via-[#09101a]/20 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-left p-4 bg-[#0e1726]/95 border border-slate-700/80 backdrop-blur-sm">
                    <span className="text-base font-serif font-bold text-white block">
                      Jalen Uboh
                    </span>
                    <span className="text-[10.5px] uppercase tracking-[0.18em] text-[#b59357] block mt-0.5 font-semibold">
                      Founder & Chairman • JUBOH Companies International
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
