"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export const LeadershipSection: React.FC = () => {
  const leaders = [
    {
      name: "Jalen Uboh",
      title: "Founder & Chairman of the Board",
      organization: "JUBOH Companies International",
      image: "/jalen-uboh.jpg",
      bio: "Mr. Jalen Uboh is an entrepreneur, real estate developer, and capital advisor with more than a decade of operating experience across commercial real estate, corporate strategy, and public-sector contracting. As Chairman, he directs master-planned acquisitions, institutional capital partnerships, and corporate governance across the JUBOH enterprise portfolio.",
      responsibilities: "Capital Allocation • Enterprise Strategy • Real Estate Development",
    },
    {
      name: "Anika Carter-Uboh",
      title: "President & Executive Director",
      organization: "The JUBOH Family Foundation",
      image: "/jalen-anika.png",
      bio: "Mrs. Anika Carter-Uboh serves as President & Executive Director of the JUBOH Family Foundation, leading global philanthropic initiatives, community empowerment programs, and institutional grantmaking. Her executive leadership focuses on youth educational literacy, economic equity, and workforce advancement grounded in the African philosophy of Ubuntu.",
      responsibilities: "Foundation Governance • Humanitarian Initiatives • Community Partnerships",
    },
  ];

  return (
    <section id="leadership" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow-institutional">Executive Governance</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0e1726] tracking-tight">
            Executive Leadership
          </h2>
          <div className="w-16 h-0.5 bg-[#b59357]" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
            Guided by seasoned operating executives dedicated to long-term value creation, disciplined capital management, and civic contribution.
          </p>
        </div>

        {/* Leadership Grid (Per PDF Page 9: Consistent crops, factual bios, track record) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-6">
                  {/* Portrait */}
                  <div className="sm:col-span-5 aspect-[4/5] overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top filter grayscale-[15%]"
                    />
                  </div>
                  
                  {/* Name and Title */}
                  <div className="sm:col-span-7 space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#b59357] block">
                      Executive Profile
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#0e1726]">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-800">
                      {leader.title}
                    </p>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider">
                      {leader.organization}
                    </p>
                    
                    <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-800 block text-[10px] uppercase text-slate-400">
                        Primary Scope:
                      </span>
                      {leader.responsibilities}
                    </div>
                  </div>
                </div>

                {/* Factual Biography */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-100">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0e1726]">
                <span className="uppercase tracking-wider text-[11px]">Corporate Officer</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b59357]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
