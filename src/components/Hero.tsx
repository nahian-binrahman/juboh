"use client";

import React from "react";
import { ArrowRight, Play, Award, TrendingUp } from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";

export const Hero: React.FC = () => {
  const { siteData } = useSiteData();
  const hero = siteData.hero;

  return (
    <section className="relative bg-[#070b14] text-white pt-[100px] sm:pt-[115px] pb-8 sm:pb-6 border-b border-slate-800/80 overflow-hidden min-h-[calc(100vh-60px)] lg:h-[calc(100vh)] flex items-center">
      {/* Background Corporate City Skyline (Balanced Opacity Presentation) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/corporate-skyline.jpg"
          alt="Corporate City Skyline"
          className="w-full h-full object-cover object-center sm:object-[center_25%] opacity-45 sm:opacity-55 filter contrast-120 saturate-115 brightness-85"
        />
        {/* Balanced luxury darkening only where needed for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/45 to-[#070b14]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/85 via-[#070b14]/40 to-transparent" />
      </div>

      {/* Ambient background lighting */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute -bottom-10 left-10 w-[350px] h-[350px] bg-blue-900/20 rounded-full blur-[90px] pointer-events-none z-[1]" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Brand, Headline, Copy, Action Button */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-3 sm:space-y-3.5 order-1">
            {/* Brand Header */}
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#b59357]" />
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.22em] text-white">
                  JALEN UBOH
                </span>
              </div>
              <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.16em] text-[#b59357] font-medium block pl-6">
                {hero.founderTitle}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3.5xl xl:text-4xl font-serif text-white tracking-tight leading-[1.12] drop-shadow-md">
              Building an{" "}
              <span className="text-[#b59357] italic font-serif">Exceptional Future</span>,
              <br /> Together.
            </h1>

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#111927]/90 border border-slate-700/80 w-fit backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b59357] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b59357]" />
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium tracking-wide">
                {hero.eyebrow}
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="max-w-lg text-xs sm:text-[13px] text-slate-200/90 font-light leading-relaxed drop-shadow-sm">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={hero.ctaPrimaryLink}
                className="px-6 py-3.5 bg-[#b59357] hover:bg-[#c9a769] text-[#070b14] font-bold text-xs uppercase tracking-[0.2em] transition-all rounded-xs shadow-lg shadow-[#b59357]/25 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{hero.ctaPrimaryText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={hero.ctaSecondaryLink}
                className="px-5 py-3.5 border border-slate-700/90 hover:border-[#b59357] bg-[#0c1422]/60 backdrop-blur-sm text-white hover:text-[#b59357] font-semibold text-xs uppercase tracking-[0.16em] transition-all rounded-xs active:scale-95 text-center"
              >
                {hero.ctaSecondaryText}
              </a>
            </div>

            {/* Sector Tickers - Clean Luxury Cards on Mobile & Desktop */}
            <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-400">
              {hero.sectors.map((sec) => (
                <div key={sec.number} className="group bg-[#0c1422]/70 backdrop-blur-sm border border-slate-800/80 p-2 sm:p-2.5 rounded-xs hover:border-[#b59357]/50 transition-colors">
                  <span className="text-[#b59357] block text-[9px] uppercase font-mono tracking-wider">
                    Sector {sec.number}
                  </span>
                  <span className="text-slate-200 font-medium text-[11px] group-hover:text-white transition-colors">
                    {sec.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Stack - Mobile-Tuned & Desktop-Elevated */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-end h-[340px] sm:h-[440px] lg:h-[490px] xl:h-[530px] order-2 mt-2 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[540px] h-full flex items-end justify-center">
              
              {/* Layer 1: Gallery Cards Wall in Dark Background */}
              <div className="absolute top-0 inset-x-0 flex justify-between gap-2.5 sm:gap-3.5 px-2 h-[84%] pointer-events-none opacity-50 sm:opacity-60">
                {/* Background Card 1 */}
                <div className="flex-1 rounded-sm border border-slate-700/70 bg-[#0e1624] overflow-hidden relative shadow-2xl transform -rotate-3 -translate-y-2 sm:-translate-y-3">
                  <img
                    src="/jalen-anika.png"
                    alt="Leadership"
                    className="w-full h-full object-cover filter grayscale contrast-125 opacity-45"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/50 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[7px] sm:text-[8px] font-mono uppercase tracking-widest text-slate-300">
                    Foundation
                  </span>
                </div>

                {/* Background Card 2 */}
                <div className="flex-1 rounded-sm border border-[#b59357]/40 bg-[#0e1624] overflow-hidden relative shadow-2xl transform -translate-y-4 sm:-translate-y-5 scale-105">
                  <img
                    src="/jalen-uboh.jpg"
                    alt="Chairman"
                    className="w-full h-full object-cover filter grayscale contrast-125 opacity-45"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/50 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[7px] sm:text-[8px] font-mono uppercase tracking-widest text-[#b59357]">
                    Advisory
                  </span>
                </div>

                {/* Background Card 3 */}
                <div className="flex-1 rounded-sm border border-amber-600/40 bg-[#0e1624] overflow-hidden relative shadow-2xl transform rotate-3 -translate-y-2 sm:-translate-y-3">
                  <img
                    src="/jalen-uboh.jpg"
                    alt="Enterprise"
                    className="w-full h-full object-cover filter grayscale contrast-125 opacity-45"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/50 to-transparent" />
                  <span className="absolute bottom-2 right-2 text-[7px] sm:text-[8px] font-mono uppercase tracking-widest text-slate-300">
                    Capital
                  </span>
                </div>
              </div>

              {/* Layer 2: Main Subject Portrait */}
              <div className="relative z-10 w-[84%] sm:w-[82%] xl:w-[85%] h-[98%] flex items-end transform -translate-y-1 sm:-translate-y-4">
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={hero.portraitUrl}
                    alt={hero.founderName}
                    className="w-full h-full object-cover object-top filter grayscale-[5%] drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
                  />
                  {/* Seamless Bottom Gradient Fade into Dark Base */}
                  <div className="absolute inset-x-0 bottom-0 h-32 sm:h-36 bg-gradient-to-t from-[#070b14] via-[#070b14]/85 to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-10 sm:w-14 bg-gradient-to-r from-[#070b14]/60 to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-10 sm:w-14 bg-gradient-to-l from-[#070b14]/60 to-transparent" />

                  {/* Name badge */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-right bg-[#070b14]/85 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm border border-slate-700/70 backdrop-blur-md">
                    <span className="text-[11px] sm:text-[12px] font-serif font-bold text-white block uppercase tracking-wider">
                      {hero.founderName}
                    </span>
                    <span className="text-[7.5px] sm:text-[8.5px] uppercase tracking-widest text-[#b59357] block font-mono">
                      Chairman
                    </span>
                  </div>
                </div>
              </div>

              {/* Layer 3: Floating Blurred Glass Depth Badges (Scaled for Mobile) */}
              {/* Floating Pill Left */}
              <div className="absolute top-[18%] sm:top-[22%] -left-2 sm:-left-6 z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/[0.09] border border-white/25 backdrop-blur-md shadow-2xl flex items-center gap-2 sm:gap-2.5 transform -rotate-6 pointer-events-none scale-90 sm:scale-100">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#b59357]/20 border border-[#b59357]/40 flex items-center justify-center text-[#b59357]">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#b59357]" />
                </div>
                <div>
                  <span className="text-[7.5px] sm:text-[8.5px] uppercase tracking-wider text-slate-300 block font-mono">Portfolio</span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-white">$150M+ Scope</span>
                </div>
              </div>

              {/* Floating Pill Right */}
              <div className="absolute top-[28%] sm:top-[32%] -right-2 sm:-right-6 z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/[0.09] border border-white/25 backdrop-blur-md shadow-2xl flex items-center gap-2 sm:gap-2.5 transform rotate-6 pointer-events-none scale-90 sm:scale-100">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[#b59357]">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div>
                  <span className="text-[7.5px] sm:text-[8.5px] uppercase tracking-wider text-slate-300 block font-mono">Track Record</span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-white">Est. 2015</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



