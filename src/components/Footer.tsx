"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#09101a] text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/70">
          
          {/* Column 1: Brand & Positioning (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="border-l-2 border-[#b59357] pl-3">
              <span className="font-serif text-xl font-bold tracking-wider text-white block">
                JUBOH
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#b59357] font-semibold block mt-0.5">
                Companies International
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Building an Exceptional Future, Together. A privately held enterprise advancing real estate development, capital strategy, public infrastructure, and philanthropic initiatives.
            </p>
            <div className="pt-2 text-[11px] text-slate-500">
              Atlanta Corporate Campus • 1000 Parkwood Circle SE, Suite 900, Atlanta, GA 30339
            </div>
          </div>

          {/* Column 2: Operating Divisions (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-white font-bold uppercase tracking-[0.16em] text-[11px] block mb-3">
              Operating Entities
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#real-estate" className="hover:text-white transition-colors">Real Estate Development</a></li>
              <li><a href="#advisory" className="hover:text-white transition-colors">Capital & Strategy Advisory</a></li>
              <li><a href="#government-contracting" className="hover:text-white transition-colors">Government Solutions</a></li>
              <li><a href="#executive-education" className="hover:text-white transition-colors">Executive Academy</a></li>
              <li><a href="#foundation" className="hover:text-white transition-colors">The JUBOH Family Foundation</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate & Governance (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-white font-bold uppercase tracking-[0.16em] text-[11px] block mb-3">
              Governance
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#leadership" className="hover:text-white transition-colors">Executive Leadership</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">Press Bureau</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Client Portal</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Compliance & Ethics</a></li>
            </ul>
          </div>

          {/* Column 4: Market Network (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-white font-bold uppercase tracking-[0.16em] text-[11px] block mb-3">
              Markets
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atlanta (HQ)<br />
              New York<br />
              London<br />
              Dallas<br />
              Los Angeles<br />
              Tokyo
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} JUBOH Companies International. All Rights Reserved. Privately Held.
          </div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-slate-300 transition-colors">Legal Terms</a>
            <span className="text-slate-700">•</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span className="text-slate-700">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#b59357] transition-colors font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
