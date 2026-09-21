"use client";

import React, { useState } from "react";
import { Building2, Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "Real Estate Development",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        title: "",
        organization: "",
        email: "",
        phone: "",
        inquiryType: "Real Estate Development",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-b border-[#e5dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="eyebrow-institutional">Institutional Engagement</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#0e1726] tracking-tight">
            Contact JUBOH Companies International
          </h2>
          <div className="w-16 h-0.5 bg-[#b59357]" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
            Direct your inquiry to the appropriate operating division, executive office, or foundation bureau. All institutional discussions are held in strict confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Office Information Dossier (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-slate-200 p-8 sm:p-10 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#b59357] block mb-2">
                Executive Headquarters
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#0e1726]">
                Atlanta Corporate Campus
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                JUBOH Companies International
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b59357] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0e1726] block">Physical Location:</strong>
                  1000 Parkwood Circle SE, Suite 900<br />
                  Atlanta, Georgia 30339
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#b59357] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0e1726] block">Hours of Operation:</strong>
                  Monday – Friday: 9:30 AM – 6:30 PM (Eastern Time)<br />
                  <span className="text-slate-500">Closed for U.S. Federal Holidays</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#b59357] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0e1726] block">Telecommunications:</strong>
                  Global Toll-Free: (888) 726-UBOH (8264)<br />
                  Corporate Switchboard: (800) 214-758<br />
                  Regional Liaison: +1 (404) 618-0503
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#b59357] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0e1726] block">Official Inquiries:</strong>
                  <a href="mailto:support@jalenuboh.com" className="text-[#0e1726] hover:text-[#b59357] font-semibold">
                    support@jalenuboh.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 text-[11px] text-slate-500">
              <span className="font-semibold text-slate-700 block mb-1">National Market Representation:</span>
              Atlanta (HQ) • New York • London • Dallas • Los Angeles • Tokyo
            </div>
          </div>

          {/* Right: Institutional Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-[#0e1726] mb-2">
              Submit Institutional Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-8">
              Please provide complete details regarding your organizational context and engagement objective.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#FAF8F5] border border-emerald-300 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-[#0e1726]">Inquiry Formally Registered</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your inquiry has been logged with the appropriate executive office. An officer will respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Richard Davenport"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-slate-300 text-[#0e1726] text-xs focus:outline-none focus:border-[#0e1726]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                      Corporate / Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-slate-300 text-[#0e1726] text-xs focus:outline-none focus:border-[#0e1726]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                      Organization / Entity Name
                    </label>
                    <input
                      type="text"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      placeholder="Company, Agency, or Fund"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-slate-300 text-[#0e1726] text-xs focus:outline-none focus:border-[#0e1726]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                      Division of Interest
                    </label>
                    <select
                      value={form.inquiryType}
                      onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-slate-300 text-[#0e1726] text-xs focus:outline-none focus:border-[#0e1726]"
                    >
                      <option value="Real Estate Development">Real Estate Development & Acquisitions</option>
                      <option value="Capital Strategy & Advisory">Capital Strategy & M&A Advisory</option>
                      <option value="Government Contracting">Government Solutions & Infrastructure</option>
                      <option value="The JUBOH Family Foundation">The JUBOH Family Foundation Partnership</option>
                      <option value="Executive Academy">Executive Education & Corporate Symposia</option>
                      <option value="Media & Press">Corporate Press & Media Office</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                    Scope of Engagement / Purpose of Contact
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Provide a concise description of the proposal, development context, or advisory requirements..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-slate-300 text-[#0e1726] text-xs focus:outline-none focus:border-[#0e1726]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0e1726] text-white hover:bg-[#142136] font-bold text-xs uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Institutional Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
