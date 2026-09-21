"use client";

import React from "react";
import { ShieldCheck, FileCheck, Award, Briefcase, ExternalLink } from "lucide-react";

export const GovernmentContractingSection: React.FC = () => {
  const capabilities = [
    {
      title: "Public Infrastructure & Facilities Management",
      desc: "Full-lifecycle operations, facilities maintenance, space optimization, and municipal public works support.",
    },
    {
      title: "Procurement & Supply Chain Operations",
      desc: "Vetted procurement channels, emergency materials management, and multi-tier supplier compliance logistics.",
    },
    {
      title: "Program Management & Staff Augmentation",
      desc: "Direct administrative, technical, and operational staffing support for civilian agencies and municipal authorities.",
    },
    {
      title: "Compliance, Quality Control & Auditing",
      desc: "Rigorous adherence to FAR (Federal Acquisition Regulation), OSHA, and state governmental reporting mandates.",
    },
  ];

  return (
    <section id="government-contracting" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow-institutional">Public Sector Division</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0e1726] tracking-tight">
            Government Contracting & Infrastructure Solutions
          </h2>
          <div className="w-16 h-0.5 bg-[#b59357]" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
            JUBOH Government Solutions provides institutional prime and subcontractor capabilities to federal, state, municipal, and educational institutions with verified past performance, strict compliance adherence, and operational execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Capabilities Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded bg-[#FAF8F5] border border-slate-200 flex items-center justify-center text-[#b59357] mb-5">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#0e1726] mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Verified Capability
                </div>
              </div>
            ))}
          </div>

          {/* Operational Dossier Box (4 cols) */}
          <div className="lg:col-span-4 bg-[#0e1726] text-white p-8 sm:p-10 flex flex-col justify-between border border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-[#b59357] text-xs font-bold uppercase tracking-widest mb-4">
                <Award className="w-4 h-4" />
                <span>Contracting Profile</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Procurement Readiness
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Active registration across federal and municipal SAM.gov directories with established bonding capacity and certified vendor compliance.
              </p>

              <div className="space-y-3 text-xs border-t border-slate-800 pt-5">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Entity Type:</span>
                  <span className="font-semibold text-white">Privately Held Corporate Enterprise</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Key Industry NAICS:</span>
                  <span className="font-semibold text-slate-200">236220, 541611, 561210, 531390</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Jurisdiction:</span>
                  <span className="font-semibold text-slate-200">State of Georgia & Federal Municipalities</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800">
              <a
                href="#contact"
                className="w-full block py-3 bg-[#b59357] text-[#0e1726] text-center font-bold text-xs uppercase tracking-wider hover:bg-[#c9a769] transition-colors"
              >
                Request Contracting Capabilities Statement
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
