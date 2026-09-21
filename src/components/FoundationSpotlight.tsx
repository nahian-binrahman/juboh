"use client";

import React from "react";
import { Heart, Sparkles, BookOpen, Users, CheckCircle2 } from "lucide-react";

export const FoundationSpotlight: React.FC = () => {
  const scriptureCards = [
    {
      citation: "PROVERBS 13:22",
      principle: "The Generational Principle",
      verse:
        "“A good man leaveth an inheritance to his children's children: and the wealth of the sinner is laid up for the just.”",
      explanation:
        "Establishes long-term vision, demanding that stewardship spans multiple generations rather than short-term consumption.",
    },
    {
      citation: "1 TIMOTHY 5:8",
      principle: "The Responsibility Principle",
      verse:
        "“But if any provide not for his own, and specially for those of his own house, he hath denied the faith, and is worse than an infidel.”",
      explanation:
        "Defines material and financial family care as an active, urgent expression of authentic spiritual faith.",
    },
    {
      citation: "PROVERBS 22:6",
      principle: "The Foundation Principle",
      verse:
        "“Train up a child in the way he should go: and when he is old, he will not depart from it.”",
      explanation:
        "Prioritizes early development and continuous guidance to install permanent moral and operational values.",
    },
  ];

  const initiatives = [
    {
      title: "Economic & Community Development",
      description: "Incubating sustainable micro-economies and equipping underserved entrepreneurs with capital access.",
    },
    {
      title: "Educational & Skill-Building",
      description: "Workforce readiness, youth financial literacy programs, and vocational executive training.",
    },
    {
      title: "Women Empowerment",
      description: "Mentorship, wealth networks, and enterprise tools via the Women of Wealth initiative.",
    },
    {
      title: "Social Equity & Justice",
      description: "Advocating for structural equity and long-term socio-economic resilience in global communities.",
    },
  ];

  return (
    <section id="foundation" className="py-24 relative bg-[#091119] subtle-topography border-t border-[#c5a265]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Foundation Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a265]/35 bg-[#121c27] mb-4">
            <Heart className="w-3.5 h-3.5 text-[#edd6a6]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#dfca9f]">
              501(c)(3) Global Non-Profit Arm • Est. 2015
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-serif">
            The JUBOH Family Foundation
          </h2>
          <p className="text-[#c5a265] text-base sm:text-lg font-serif italic mt-2">
            “Excellence in Everything” — Anchored in the spirit of Ubuntu
          </p>
        </div>

        {/* Leadership & Ubuntu Narrative Card */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#13202e] via-[#0f1924] to-[#0c131a] border border-[#c5a265]/40 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Leadership Couple Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-[#c5a265]/40 shadow-xl max-w-sm w-full group">
                <img
                  src="/jalen-anika.png"
                  alt="Mr. Jalen Uboh & Mrs. Anika Carter-Uboh"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091119] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0f1924]/90 backdrop-blur-md border border-[#c5a265]/30 text-center">
                  <div className="text-xs font-bold text-white font-serif">
                    Jalen Uboh & Anika Carter-Uboh
                  </div>
                  <div className="text-[10px] text-[#dfca9f] uppercase tracking-wider font-semibold">
                    Chairman & President
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative & Ubuntu */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#dfca9f] font-bold block mb-1">
                  Our Founder & Our President
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Empowering Communities Through Universal Connection
                </h3>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The JUBOH Family Foundation was founded by <strong className="text-white">Mr. Jalen Uboh</strong> as the philanthropic arm of his global enterprises in 2015. Today, this 501(c)(3) mission is managed day-to-day by <strong className="text-white">Mrs. Anika Carter-Uboh</strong>, where she serves as President & Executive Director overseeing humanitarian reach across the globe.
              </p>

              <div className="p-5 rounded-2xl bg-[#0a1118]/80 border-l-4 border-[#c5a265] space-y-1.5">
                <span className="text-xs font-bold text-[#dfca9f] uppercase tracking-wider block">
                  The Guiding Light: Ubuntu
                </span>
                <p className="text-xs sm:text-sm italic text-slate-200">
                  “I Am Because We Are.” The South African philosophy speaking to compassion, humanity, and the universal bond that connects all humankind. Wealth is recognized as a sacred instrument for service.
                </p>
              </div>

              {/* Initiatives Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {initiatives.map((item) => (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl bg-[#172534]/60 border border-[#c5a265]/20 hover:border-[#c5a265]/50 transition-all"
                  >
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#edd6a6] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Scriptural Anchors */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a265] font-semibold block mb-1">
              Biblical Foundations
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              Scriptural Anchors for Generational Provision
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scriptureCards.map((card) => (
              <div
                key={card.citation}
                className="rounded-2xl overflow-hidden border border-[#c5a265]/30 bg-[#121c27] flex flex-col justify-between shadow-xl group hover:border-[#dfca9f]/60 transition-all"
              >
                <div className="luxury-card-cap px-6 py-3 flex items-center justify-between font-bold text-xs uppercase tracking-widest text-[#0a1017]">
                  <span>{card.citation}</span>
                  <BookOpen className="w-4 h-4 text-[#0a1017]" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#dfca9f] mb-3">
                      {card.principle}
                    </h4>
                    <p className="text-xs italic text-slate-200 leading-relaxed mb-4">
                      {card.verse}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.explanation}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#c5a265]/15 text-[10px] uppercase tracking-wider text-[#c5a265]">
                    Scriptural Mandate
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
