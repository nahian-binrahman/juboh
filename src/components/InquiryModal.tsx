"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Shield, ArrowUpRight } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  programTitle?: string;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  programTitle,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl p-8 bg-[#111a24] border border-[#c5a265] shadow-[0_0_50px_rgba(197,162,101,0.25)] text-white">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white bg-[#192737] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-[#dfca9f] mx-auto" />
            <h3 className="text-xl font-bold">Priority Registration Confirmed</h3>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              Our executive desk will reach out immediately to coordinate schedule availability and confidential intake.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#c5a265]">
              <Shield className="w-3.5 h-3.5" />
              <span>VIP Executive Concierge</span>
            </div>
            <h3 className="text-2xl font-bold font-serif mb-2">
              Reserve Your Engagement
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Inquiring for:{" "}
              <strong className="text-[#dfca9f]">
                {programTitle || "Executive VIP Consultation"}
              </strong>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a1017] border border-[#c5a265]/30 text-white text-xs focus:outline-none focus:border-[#dfca9f]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1">
                  Direct Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a1017] border border-[#c5a265]/30 text-white text-xs focus:outline-none focus:border-[#dfca9f]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1">
                  Direct Telephone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a1017] border border-[#c5a265]/30 text-white text-xs focus:outline-none focus:border-[#dfca9f]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 rounded-xl font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-[#c5a265] via-[#dfca9f] to-[#b08a4b] text-[#091017] hover:shadow-[0_0_20px_rgba(223,202,159,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm VIP Concierge Request</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
