"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight, Phone, Mail, Shield } from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";

export const Navbar: React.FC = () => {
  const { siteData } = useSiteData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enterprisesDropdownOpen, setEnterprisesDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const enterpriseLinks = siteData.enterpriseMenu || [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Editorial Scroll Progress Bar */}
      <div
        className="h-[2px] bg-gradient-to-r from-[#8e7340] via-[#b59357] to-[#dfca9f] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Corporate Dispatch Bar */}
      <div className="bg-[#070c14] border-b border-slate-800/80 py-2 px-6 sm:px-12 text-[11px] text-slate-400">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-slate-300 tracking-wide font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b59357]" />
              Atlanta Global Headquarters
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400 tracking-wider text-[10px] uppercase">
              {siteData.brand.address}
            </span>
          </div>

          <div className="flex items-center gap-6 font-medium text-[11px]">
            <a
              href={`tel:${siteData.brand.phoneRaw}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-[#b59357] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#b59357]" />
              <span>{siteData.brand.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <Link
              href="/admin"
              className="text-slate-400 hover:text-[#b59357] transition-colors uppercase tracking-wider text-[10px] flex items-center gap-1"
            >
              <Shield className="w-3 h-3 text-[#b59357]" />
              <span>CMS Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a111a]/95 backdrop-blur-md shadow-2xl py-2.5 border-b border-slate-800"
            : "bg-[#0e1726] py-3 border-b border-slate-800/80"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          
          {/* Brand Logo & Descriptor */}
          <Link href="/" className="flex items-center group py-0.5">
            <div className="flex items-center">
              {/* Seamless Dark-Mode High-Clarity Logo */}
              <div
                className={`relative flex items-center transition-all duration-300 ease-out origin-left ${
                  isScrolled ? "h-9 sm:h-10" : "h-11 sm:h-13"
                }`}
              >
                <img
                  src="/juboh-logo-transparent.png"
                  alt="JUBOH Companies"
                  className="h-full w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_14px_rgba(181,147,87,0.25)] group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation with Generous Spacing (Not Compact!) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-11 text-[13px] uppercase tracking-[0.18em] font-medium text-slate-200">
            {siteData.navigation.slice(0, 1).map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hover:text-[#b59357] transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#b59357] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}

            {/* Operating Companies Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setEnterprisesDropdownOpen(true)}
              onMouseLeave={() => setEnterprisesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 hover:text-[#b59357] transition-colors uppercase tracking-[0.18em]"
                onClick={() => setEnterprisesDropdownOpen(!enterprisesDropdownOpen)}
              >
                <span>Enterprises</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${enterprisesDropdownOpen ? "rotate-180 text-[#b59357]" : ""}`} />
              </button>

              {enterprisesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#09101a] border border-slate-700/80 shadow-2xl py-3 px-2 rounded-sm animate-fade-in z-50">
                  <div className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#b59357] font-bold border-b border-slate-800">
                    Operating Divisions
                  </div>
                  {enterpriseLinks.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => setEnterprisesDropdownOpen(false)}
                      className="block px-4 py-3 hover:bg-[#121c2c] transition-colors group/item"
                    >
                      <div className="text-xs font-semibold text-white group-hover/item:text-[#b59357] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-400 normal-case tracking-normal mt-0.5">
                        {item.tagline}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {siteData.navigation.slice(1).map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hover:text-[#b59357] transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#b59357] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Prominent Institutional Inquire CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="px-7 py-3 bg-[#b59357] text-[#0a111a] hover:bg-[#c9a769] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 rounded-sm"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#b59357]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09101a] border-b border-slate-800 px-6 py-6 space-y-4 animate-fade-in">
          <div className="space-y-2 pb-4 border-b border-slate-800">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] text-slate-200 hover:text-[#b59357] py-2"
            >
              About JUBOH
            </a>
            <div className="py-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#b59357] font-bold block mb-2">
                Operating Companies
              </span>
              <div className="pl-3 space-y-2 border-l border-slate-800">
                {enterpriseLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-300 hover:text-[#b59357] py-1"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            {siteData.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-[0.2em] text-slate-200 hover:text-[#b59357] py-2"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] text-[#b59357] font-semibold py-2 flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Executive CMS Portal</span>
            </Link>
          </div>

          {/* Mobile Inquire Button inside drawer */}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block py-3.5 bg-[#b59357] text-[#0a111a] text-center text-xs font-bold uppercase tracking-[0.22em] shadow-lg rounded-sm"
            >
              Inquire With JUBOH
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
