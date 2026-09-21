"use client";

import React from "react";
import { MapPin, Clock, Building2, ExternalLink } from "lucide-react";

export const GlobalPresence: React.FC = () => {
  const offices = [
    {
      city: "Atlanta",
      role: "Global Headquarters",
      address: "1000 Parkwood Circle SE, Atlanta, GA 30339",
      timezone: "EDT (UTC-4)",
      active: true,
    },
    {
      city: "Tokyo",
      role: "Asia-Pacific Regional Hub",
      address: "Marunouchi Business District, Chiyoda-ku",
      timezone: "JST (UTC+9)",
      active: false,
    },
    {
      city: "London",
      role: "EMEA Operations",
      address: "Mayfair Corporate Center, London W1J",
      timezone: "BST (UTC+1)",
      active: false,
    },
    {
      city: "New York City",
      role: "Capital Markets Liaison",
      address: "One Rockefeller Plaza, New York, NY",
      timezone: "EDT (UTC-4)",
      active: false,
    },
    {
      city: "Dallas",
      role: "Southwest Advisory Center",
      address: "Uptown Financial Center, Dallas, TX",
      timezone: "CDT (UTC-5)",
      active: false,
    },
    {
      city: "Los Angeles",
      role: "West Coast & Media Studio",
      address: "Century City Plaza, Los Angeles, CA",
      timezone: "PDT (UTC-7)",
      active: false,
    },
  ];

  return (
    <section id="offices" className="py-20 relative bg-[#0c141d] border-y border-[#c5a265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a265] font-semibold block mb-3">
            Worldwide Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Global Offices
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Serving corporate entities, families, and philanthropic partners across major international commercial hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div
              key={office.city}
              className={`p-6 rounded-2xl transition-all duration-300 relative group overflow-hidden ${
                office.active
                  ? "bg-gradient-to-b from-[#162433] to-[#0f1924] border-2 border-[#c5a265]/60 shadow-[0_0_30px_rgba(197,162,101,0.15)]"
                  : "bg-[#111b26]/70 border border-[#c5a265]/20 hover:border-[#c5a265]/50 hover:bg-[#152230]"
              }`}
            >
              {office.active && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#c5a265] to-[#dfca9f] text-[#0a1017] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl">
                  Global HQ
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c5a265]/15 border border-[#c5a265]/30 flex items-center justify-center text-[#edd6a6] group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#edd6a6] transition-colors">
                    {office.city}
                  </h3>
                  <span className="text-xs text-[#c5a265] font-medium">{office.role}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#edd6a6] shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4 text-[#c5a265] shrink-0" />
                  <span>Timezone: {office.timezone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
