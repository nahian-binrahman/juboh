"use client";

import React from "react";
import { Phone, Mail, ArrowUpRight, Send } from "lucide-react";

export const MobileFloatingBar: React.FC = () => {
  return (
    <aside aria-label="Mobile Actions" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#0a111a]/95 backdrop-blur-xl border-t border-slate-700/80 shadow-[0_-8px_30px_rgba(0,0,0,0.85)]">
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        {/* Direct Call to Corporate Switchboard */}
        <a
          href="tel:8887268264"
          className="p-3 bg-[#131f31] border border-slate-700 text-[#b59357] active:scale-95 transition-transform flex items-center justify-center shrink-0 rounded-sm"
          aria-label="Call Atlanta Corporate Headquarters"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Primary Inquire CTA Button for Mobile */}
        <a
          href="#contact"
          className="flex-1 py-3 px-4 rounded-sm font-bold text-xs uppercase tracking-[0.2em] bg-[#b59357] text-[#0a111a] shadow-[0_0_20px_rgba(181,147,87,0.3)] active:scale-98 transition-all flex items-center justify-center gap-2"
        >
          <span>Inquire Now</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
