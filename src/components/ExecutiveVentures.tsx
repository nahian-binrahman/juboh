"use client";

import React, { useState } from "react";
import { Mic, UserCheck, BookOpen, GraduationCap, ArrowUpRight, Sparkles, CreditCard } from "lucide-react";

interface ExecutiveVenturesProps {
  onOpenBooking: (programName?: string) => void;
}

export const ExecutiveVentures: React.FC<ExecutiveVenturesProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<string>("all");

  const offerings = [
    {
      id: "jalen-keynote",
      category: "speaking",
      title: "Jalen Uboh — Keynote Presentation",
      speaker: "Jalen Uboh (Chairman)",
      price: "$100,000.00",
      description:
        "High-voltage keynote address on institutional capital, scale architecture, and resilient generational leadership for global corporate conventions.",
      badge: "Flagship Keynote",
      icon: Mic,
    },
    {
      id: "jalen-coaching",
      category: "coaching",
      title: "1-on-1 Executive Coaching with Jalen Uboh",
      speaker: "Jalen Uboh (Chairman)",
      price: "$10,000.00 – $100,000.00",
      description:
        "Exclusive private advisory sessions designed for founders, family office principals, and enterprise executives scaling multi-million dollar portfolios.",
      badge: "Private Retainer",
      icon: UserCheck,
    },
    {
      id: "anika-keynote",
      category: "speaking",
      title: "Keynote Presentation with Anika Uboh",
      speaker: "Anika Carter-Uboh (President)",
      price: "$20,000.00",
      description:
        "Transformative keynote focusing on philanthropic impact, women executive leadership, and community equity architectures.",
      badge: "Executive Keynote",
      icon: Mic,
    },
    {
      id: "anika-coaching",
      category: "coaching",
      title: "Coaching Sessions with Anika Uboh",
      speaker: "Anika Carter-Uboh (President)",
      price: "$8,000.00 – $80,000.00",
      description:
        "Strategic personal mastery, leadership positioning, and non-profit governance guidance for female executives and philanthropists.",
      badge: "High-Impact Advisory",
      icon: UserCheck,
    },
    {
      id: "finance-workshop",
      category: "workshops",
      title: "Finance Essentials Workshop",
      speaker: "JUBOH Faculty",
      price: "$5,000.00",
      originalPrice: "$10,000.00",
      description:
        "Comprehensive capital allocation, treasury management, and cash-flow sequencing strategies for growing organizations.",
      badge: "50% Executive Grant",
      icon: GraduationCap,
    },
    {
      id: "leadership-workshop",
      category: "workshops",
      title: "Leadership Essential Workshop",
      speaker: "JUBOH Faculty",
      price: "$5,000.00",
      originalPrice: "$10,000.00",
      description:
        "Institutional leadership development, organizational culture alignment, and ethical command structures.",
      badge: "50% Executive Grant",
      icon: GraduationCap,
    },
    {
      id: "marketing-workshop",
      category: "workshops",
      title: "Marketing Essentials Workshop",
      speaker: "JUBOH Faculty",
      price: "$5,000.00",
      originalPrice: "$10,000.00",
      description:
        "High-ticket authority positioning, global brand expansion, and multi-channel client acquisition systems.",
      badge: "50% Executive Grant",
      icon: GraduationCap,
    },
    {
      id: "operations-workshop",
      category: "workshops",
      title: "Operations Essentials Workshop",
      speaker: "JUBOH Faculty",
      price: "$5,000.00",
      originalPrice: "$10,000.00",
      description:
        "Standard operating procedure optimization, governance risk mitigation, and executive team delegation models.",
      badge: "Masterclass",
      icon: GraduationCap,
    },
    {
      id: "women-mentorship",
      category: "mentorship",
      title: "Pathway to Success & Women of Wealth",
      speaker: "Anika Carter-Uboh",
      price: "Inquire for Cohort",
      description:
        "A premier mentorship accelerator empowering female entrepreneurs with financial literacy, wealth networks, and enterprise tools.",
      badge: "Mentorship Cohort",
      icon: Sparkles,
    },
    {
      id: "make-it-happen-book",
      category: "books",
      title: "Make It Happen E-Book",
      speaker: "Written by Jalen Uboh",
      price: "$29.99",
      description:
        "Actionable blueprint for overcoming business stagnation, executing visionary goals, and building compounding wealth.",
      badge: "Instant Digital Release",
      icon: BookOpen,
    },
    {
      id: "pay-invoice",
      category: "billing",
      title: "VIP Retainer & Corporate Invoicing",
      speaker: "JUBOH Treasury",
      price: "Custom Retainer",
      description:
        "Secure payment portal and wire settlement for corporate engagements, advisory retainers, and foundation sponsorships.",
      badge: "Corporate Portal",
      icon: CreditCard,
    },
  ];

  const filteredOfferings =
    filter === "all"
      ? offerings
      : offerings.filter((item) => item.category === filter);

  return (
    <section id="ventures" className="py-24 relative bg-[#0b131c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a265] font-semibold block mb-2">
            Executive Programs & Store
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-serif">
            JUBOH Ventures & Masterclasses
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-3">
            Directly access private advisory with Jalen & Anika Uboh, intensive executive workshops, and foundational business curricula.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {[
            { id: "all", label: "All Offerings" },
            { id: "speaking", label: "Keynotes & Speaking" },
            { id: "coaching", label: "1-on-1 Coaching" },
            { id: "workshops", label: "Essential Workshops" },
            { id: "mentorship", label: "Mentorship" },
            { id: "books", label: "Publications" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                filter === tab.id
                  ? "bg-[#c5a265] text-[#0a1017] shadow-[0_0_15px_rgba(197,162,101,0.4)]"
                  : "bg-[#14202d] text-slate-300 hover:text-white border border-[#c5a265]/20 hover:border-[#c5a265]/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOfferings.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl p-7 bg-[#121c27] border border-[#c5a265]/25 hover:border-[#dfca9f]/70 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#c5a265]/15 text-[#edd6a6] border border-[#c5a265]/30">
                      {item.badge}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#182635] flex items-center justify-center text-[#edd6a6] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#edd6a6] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#c5a265] font-medium mb-3">
                    {item.speaker}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c5a265]/15 flex items-center justify-between">
                  <div>
                    {item.originalPrice && (
                      <span className="text-xs text-slate-500 line-through mr-2">
                        {item.originalPrice}
                      </span>
                    )}
                    <span className="text-base font-serif font-bold text-[#dfca9f]">
                      {item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(item.title)}
                    className="px-4 py-2 rounded-lg bg-[#192737] hover:bg-[#c5a265] text-[#edd6a6] hover:text-[#091017] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    <span>Reserve</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
