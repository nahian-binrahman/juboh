"use client";

import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";

export const PressSection: React.FC = () => {
  const { siteData } = useSiteData();
  const newsItems = siteData.news || [];

  return (
    <section id="news" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <span className="eyebrow-institutional">Institutional Dispatches</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0e1726] tracking-tight">
              News, Press & Corporate Insights
            </h2>
            <div className="w-16 h-0.5 bg-[#b59357]" />
          </div>
          <div>
            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.16em] font-bold text-[#0e1726] hover:text-[#b59357] transition-colors flex items-center gap-1.5"
            >
              <span>Media & Press Office</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-slate-200/80 p-8 flex flex-col justify-between hover:border-[#b59357] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-3 border-b border-slate-100">
                  <span className="font-semibold text-[#b59357] uppercase tracking-wider">
                    {item.source}
                  </span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#0e1726] leading-snug">
                  {item.title}
                </h3>
                {item.excerpt && (
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.excerpt}
                  </p>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>{item.source}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#b59357]" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
