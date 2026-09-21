"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSiteData } from "@/context/SiteDataContext";
import {
  Palette,
  Type,
  Menu,
  Building2,
  FolderKanban,
  Users,
  Image as ImageIcon,
  ShieldCheck,
  Newspaper,
  Save,
  RotateCcw,
  ExternalLink,
  Lock,
  LogOut,
  Plus,
  Trash2,
  Edit3,
  Check,
  Download,
  Upload,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function AdminDashboardPage() {
  const {
    siteData,
    isLoaded,
    updateBrand,
    updateColors,
    updateHero,
    updateCredibility,
    updateNavigation,
    updateEnterpriseMenu,
    updateCompanies,
    updateRealEstate,
    updateProjects,
    updateLeadership,
    updateNews,
    addMediaItem,
    deleteMediaItem,
    resetToDefaults,
    exportJson,
    importJson,
  } = useSiteData();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  // Active Tab State
  const [activeTab, setActiveTab] = useState<
    | "colors"
    | "text"
    | "menus"
    | "companies"
    | "realestate"
    | "projects"
    | "leadership"
    | "media"
    | "advisory"
    | "news"
    | "backup"
  >("colors");

  // Save Toast Notification
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    // Check session authentication
    const authStatus = sessionStorage.getItem("juboh_admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "adminx11") {
      setIsAuthenticated(true);
      sessionStorage.setItem("juboh_admin_authenticated", "true");
      setAuthError("");
    } else {
      setAuthError("Invalid credentials. Please verify your administrator password.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("juboh_admin_authenticated");
    setPasswordInput("");
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#070c14] flex items-center justify-center text-[#b59357]">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-2 border-[#b59357] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xs uppercase tracking-[0.2em]">Loading Institutional CMS...</p>
        </div>
      </div>
    );
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070c14] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#0e1726] border border-slate-800 rounded-sm p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8e7340] via-[#b59357] to-[#dfca9f]"></div>

          <div className="text-center space-y-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#131f31] border border-[#b59357]/40 flex items-center justify-center mx-auto text-[#b59357]">
              <Lock className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#b59357] font-semibold block">
              JUBOH Companies International
            </span>
            <h1 className="text-2xl font-serif font-bold text-white tracking-tight">
              Executive CMS Portal
            </h1>
            <p className="text-xs text-slate-400 font-light">
              Enter the master administrator key to manage typography, colors, cards, photos, and menus.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.16em] text-slate-300 font-medium mb-2">
                Administrator Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 bg-[#070c14] border border-slate-700 text-white rounded-sm text-sm focus:outline-none focus:border-[#b59357] transition-colors"
                autoFocus
              />
              {authError && (
                <p className="text-xs text-rose-400 mt-2 font-medium">{authError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#b59357] text-[#0e1726] font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[#c9a769] transition-all shadow-md active:scale-98"
            >
              Access Dashboard
            </button>

            <div className="pt-4 text-center border-t border-slate-800">
              <Link
                href="/"
                className="text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Return to Public Site</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070c14] text-slate-200 flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#131f31] border border-[#b59357] text-white px-5 py-3 rounded shadow-2xl flex items-center gap-2.5 animate-bounce">
          <Check className="w-4 h-4 text-[#b59357]" />
          <span className="text-xs tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Top Bar */}
      <header className="bg-[#0e1726] border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="border-l-[3px] border-[#b59357] pl-3 py-0.5">
              <span className="font-serif text-xl font-bold tracking-wider text-white block leading-none">
                JUBOH
              </span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#b59357] font-semibold block mt-0.5">
                Executive CMS
              </span>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-[10px] font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Sync Active
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <Link
              href="/"
              target="_blank"
              className="px-3 py-2 bg-[#131f31] border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-medium rounded-sm flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#b59357]" />
              <span className="hidden md:inline">View Public Site</span>
            </Link>

            <button
              onClick={() => {
                triggerToast("All changes saved and synchronized to live site!");
              }}
              className="px-4 py-2 bg-[#b59357] text-[#0e1726] hover:bg-[#c9a769] text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-1.5 shadow transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Publish</span>
            </button>

            <button
              onClick={() => {
                if (confirm("Reset all customizations back to factory defaults?")) {
                  resetToDefaults();
                  triggerToast("Restored institutional factory defaults!");
                }
              }}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
              title="Reset to default"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-2 text-slate-400 hover:text-rose-400 text-xs font-medium flex items-center gap-1 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Nav */}
        <aside className="lg:col-span-3 bg-[#0e1726] border border-slate-800 rounded-sm p-3 sticky top-20">
          <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400 px-3 py-2">
            Content Modules
          </div>
          <nav className="space-y-1 text-xs">
            <button
              onClick={() => setActiveTab("colors")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "colors"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <Palette className="w-4 h-4 shrink-0" />
              <span>Colors & Theme</span>
            </button>

            <button
              onClick={() => setActiveTab("text")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "text"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <Type className="w-4 h-4 shrink-0" />
              <span>Hero & Headlines</span>
            </button>

            <button
              onClick={() => setActiveTab("menus")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "menus"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <Menu className="w-4 h-4 shrink-0" />
              <span>Navigation & Menus</span>
            </button>

            <button
              onClick={() => setActiveTab("companies")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "companies"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <Building2 className="w-4 h-4 shrink-0" />
              <span>Operating Divisions (Cards)</span>
            </button>

            <button
              onClick={() => setActiveTab("realestate")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "realestate"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <Building2 className="w-4 h-4 shrink-0" />
              <span>Real Estate Holdings</span>
            </button>

            <button
              onClick={() => setActiveTab("projects")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "projects"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <FolderKanban className="w-4 h-4 shrink-0" />
              <span>Case Studies & Projects</span>
            </button>

            <button
              onClick={() => setActiveTab("leadership")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "leadership"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span>Leadership & Bios</span>
            </button>

            <button
              onClick={() => setActiveTab("media")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "media"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <ImageIcon className="w-4 h-4 shrink-0" />
              <span>Media & Photos Library</span>
            </button>

            <button
              onClick={() => setActiveTab("advisory")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "advisory"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Advisory & Government</span>
            </button>

            <button
              onClick={() => setActiveTab("news")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "news"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <Newspaper className="w-4 h-4 shrink-0" />
              <span>News & Press</span>
            </button>

            <div className="pt-3 border-t border-slate-800 my-2"></div>

            <button
              onClick={() => setActiveTab("backup")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all text-left ${
                activeTab === "backup"
                  ? "bg-[#b59357] text-[#0e1726] font-bold"
                  : "text-slate-300 hover:bg-[#131f31] hover:text-white"
              }`}
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Backup & Raw JSON</span>
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-9 bg-[#0e1726] border border-slate-800 rounded-sm p-6 sm:p-8">
          {/* TAB 1: COLORS */}
          {activeTab === "colors" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-serif font-bold text-white">Color Palette & Styling</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Adjust corporate brand colors. Modifications immediately inject into live CSS variables across the entire site.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-[#131f31] p-4 border border-slate-800 rounded">
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Primary Institutional Navy
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={siteData.colors.primaryNavy}
                      onChange={(e) => updateColors({ primaryNavy: e.target.value })}
                      className="w-10 h-10 rounded border border-slate-700 cursor-pointer bg-transparent"
                    />
                    <input
                      type="text"
                      value={siteData.colors.primaryNavy}
                      onChange={(e) => updateColors({ primaryNavy: e.target.value })}
                      className="flex-1 px-3 py-2 bg-[#070c14] border border-slate-700 text-white rounded text-xs font-mono"
                    />
                  </div>
                </div>

                <div className="bg-[#131f31] p-4 border border-slate-800 rounded">
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Muted Brass / Gold Accent
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={siteData.colors.mutedGold}
                      onChange={(e) => updateColors({ mutedGold: e.target.value })}
                      className="w-10 h-10 rounded border border-slate-700 cursor-pointer bg-transparent"
                    />
                    <input
                      type="text"
                      value={siteData.colors.mutedGold}
                      onChange={(e) => updateColors({ mutedGold: e.target.value })}
                      className="flex-1 px-3 py-2 bg-[#070c14] border border-slate-700 text-white rounded text-xs font-mono"
                    />
                  </div>
                </div>

                <div className="bg-[#131f31] p-4 border border-slate-800 rounded">
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Gold Hover Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={siteData.colors.goldHover}
                      onChange={(e) => updateColors({ goldHover: e.target.value })}
                      className="w-10 h-10 rounded border border-slate-700 cursor-pointer bg-transparent"
                    />
                    <input
                      type="text"
                      value={siteData.colors.goldHover}
                      onChange={(e) => updateColors({ goldHover: e.target.value })}
                      className="flex-1 px-3 py-2 bg-[#070c14] border border-slate-700 text-white rounded text-xs font-mono"
                    />
                  </div>
                </div>

                <div className="bg-[#131f31] p-4 border border-slate-800 rounded">
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Warm Ivory Background
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={siteData.colors.warmIvory}
                      onChange={(e) => updateColors({ warmIvory: e.target.value })}
                      className="w-10 h-10 rounded border border-slate-700 cursor-pointer bg-transparent"
                    />
                    <input
                      type="text"
                      value={siteData.colors.warmIvory}
                      onChange={(e) => updateColors({ warmIvory: e.target.value })}
                      className="flex-1 px-3 py-2 bg-[#070c14] border border-slate-700 text-white rounded text-xs font-mono"
                    />
                  </div>
                </div>

                <div className="bg-[#131f31] p-4 border border-slate-800 rounded">
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Dark Surface / Header Bar
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={siteData.colors.surfaceDark}
                      onChange={(e) => updateColors({ surfaceDark: e.target.value })}
                      className="w-10 h-10 rounded border border-slate-700 cursor-pointer bg-transparent"
                    />
                    <input
                      type="text"
                      value={siteData.colors.surfaceDark}
                      onChange={(e) => updateColors({ surfaceDark: e.target.value })}
                      className="flex-1 px-3 py-2 bg-[#070c14] border border-slate-700 text-white rounded text-xs font-mono"
                    />
                  </div>
                </div>

                <div className="bg-[#131f31] p-4 border border-slate-800 rounded">
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Secondary Card Dark Navy
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={siteData.colors.secondaryNavy}
                      onChange={(e) => updateColors({ secondaryNavy: e.target.value })}
                      className="w-10 h-10 rounded border border-slate-700 cursor-pointer bg-transparent"
                    />
                    <input
                      type="text"
                      value={siteData.colors.secondaryNavy}
                      onChange={(e) => updateColors({ secondaryNavy: e.target.value })}
                      className="flex-1 px-3 py-2 bg-[#070c14] border border-slate-700 text-white rounded text-xs font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Color Presets */}
              <div className="pt-6 border-t border-slate-800">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                  Institutional Palettes
                </span>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() =>
                      updateColors({
                        primaryNavy: "#0e1726",
                        secondaryNavy: "#131f31",
                        surfaceDark: "#070c14",
                        warmIvory: "#FAF8F5",
                        mutedGold: "#b59357",
                        goldHover: "#c9a769",
                      })
                    }
                    className="px-4 py-2 bg-[#131f31] hover:border-[#b59357] border border-slate-700 rounded text-xs text-slate-200"
                  >
                    Classic Hines Institutional (Default)
                  </button>
                  <button
                    onClick={() =>
                      updateColors({
                        primaryNavy: "#0a192f",
                        secondaryNavy: "#112240",
                        surfaceDark: "#020c1b",
                        warmIvory: "#f8f9fa",
                        mutedGold: "#c5a059",
                        goldHover: "#d8b472",
                      })
                    }
                    className="px-4 py-2 bg-[#131f31] hover:border-[#b59357] border border-slate-700 rounded text-xs text-slate-200"
                  >
                    Deep Sapphire & Gold
                  </button>
                  <button
                    onClick={() =>
                      updateColors({
                        primaryNavy: "#1a1e24",
                        secondaryNavy: "#232830",
                        surfaceDark: "#101216",
                        warmIvory: "#fbfaf8",
                        mutedGold: "#a3824c",
                        goldHover: "#b8975f",
                      })
                    }
                    className="px-4 py-2 bg-[#131f31] hover:border-[#b59357] border border-slate-700 rounded text-xs text-slate-200"
                  >
                    Related Companies Charcoal & Bronze
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TEXT & HEADLINES */}
          {activeTab === "text" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-serif font-bold text-white">Hero & Brand Typography</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Edit main headlines, subtexts, and credibility metrics displayed across the primary hero interface.
                </p>
              </div>

              {/* Brand Basics */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider text-[#b59357] font-semibold">
                  Brand Identity
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Company Name</label>
                    <input
                      type="text"
                      value={siteData.brand.name}
                      onChange={(e) => updateBrand({ name: e.target.value })}
                      className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Tagline</label>
                    <input
                      type="text"
                      value={siteData.brand.tagline}
                      onChange={(e) => updateBrand({ tagline: e.target.value })}
                      className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Established Year</label>
                    <input
                      type="text"
                      value={siteData.brand.established}
                      onChange={(e) => updateBrand({ established: e.target.value })}
                      className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Atlanta Headquarters Address</label>
                    <input
                      type="text"
                      value={siteData.brand.address}
                      onChange={(e) => updateBrand({ address: e.target.value })}
                      className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Corporate Phone</label>
                    <input
                      type="text"
                      value={siteData.brand.phone}
                      onChange={(e) => updateBrand({ phone: e.target.value })}
                      className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Hero Copy */}
              <div className="space-y-4 pt-6 border-t border-slate-800">
                <h3 className="text-xs uppercase tracking-wider text-[#b59357] font-semibold">
                  Hero Section Text
                </h3>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Top Eyebrow Text</label>
                  <input
                    type="text"
                    value={siteData.hero.eyebrow}
                    onChange={(e) => updateHero({ eyebrow: e.target.value })}
                    className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Main H1 Headline</label>
                  <input
                    type="text"
                    value={siteData.hero.headline}
                    onChange={(e) => updateHero({ headline: e.target.value })}
                    className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-sm text-white font-serif font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Executive Summary Description</label>
                  <textarea
                    rows={3}
                    value={siteData.hero.description}
                    onChange={(e) => updateHero({ description: e.target.value })}
                    className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-xs text-white leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Primary CTA Button Label</label>
                    <input
                      type="text"
                      value={siteData.hero.ctaPrimaryText}
                      onChange={(e) => updateHero({ ctaPrimaryText: e.target.value })}
                      className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Secondary CTA Button Label</label>
                    <input
                      type="text"
                      value={siteData.hero.ctaSecondaryText}
                      onChange={(e) => updateHero({ ctaSecondaryText: e.target.value })}
                      className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Credibility Metrics Bar */}
              <div className="space-y-4 pt-6 border-t border-slate-800">
                <h3 className="text-xs uppercase tracking-wider text-[#b59357] font-semibold">
                  Credibility Statistics Bar (4 Columns)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {siteData.credibility.map((stat, idx) => (
                    <div key={stat.id} className="p-4 bg-[#131f31] border border-slate-800 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] uppercase font-bold text-[#b59357]">
                          Metric #{idx + 1}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => {
                            const updated = [...siteData.credibility];
                            updated[idx].value = e.target.value;
                            updateCredibility(updated);
                          }}
                          placeholder="Stat (e.g. $150M+)"
                          className="w-full px-3 py-1.5 bg-[#070c14] border border-slate-700 rounded text-sm font-serif font-bold text-white"
                        />
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => {
                            const updated = [...siteData.credibility];
                            updated[idx].label = e.target.value;
                            updateCredibility(updated);
                          }}
                          placeholder="Label (e.g. Portfolio & Scope)"
                          className="w-full px-3 py-1.5 bg-[#070c14] border border-slate-700 rounded text-xs text-[#b59357] font-semibold uppercase"
                        />
                        <input
                          type="text"
                          value={stat.description}
                          onChange={(e) => {
                            const updated = [...siteData.credibility];
                            updated[idx].description = e.target.value;
                            updateCredibility(updated);
                          }}
                          placeholder="Subtitle description..."
                          className="w-full px-3 py-1.5 bg-[#070c14] border border-slate-700 rounded text-xs text-slate-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MENUS & NAVIGATION */}
          {activeTab === "menus" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-serif font-bold text-white">Navigation Menus</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Manage top dispatch links, primary header menu items, and the Enterprises dropdown.
                </p>
              </div>

              {/* Main Menu Links */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs uppercase tracking-wider text-[#b59357] font-semibold">
                    Primary Header Navigation Links
                  </h3>
                  <button
                    onClick={() => {
                      const newNav = [
                        ...siteData.navigation,
                        {
                          id: `nav-${Date.now()}`,
                          label: "New Link",
                          href: "#",
                        },
                      ];
                      updateNavigation(newNav);
                    }}
                    className="px-3 py-1.5 bg-[#131f31] border border-[#b59357]/60 hover:bg-[#b59357] hover:text-[#0e1726] text-xs rounded flex items-center gap-1 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Link</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {siteData.navigation.map((item, idx) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 bg-[#131f31] p-3 border border-slate-800 rounded"
                    >
                      <span className="text-xs text-slate-500 w-6 font-mono">#{idx + 1}</span>
                      <input
                        type="text"
                        value={item.label}
                        onChange={(e) => {
                          const updated = [...siteData.navigation];
                          updated[idx].label = e.target.value;
                          updateNavigation(updated);
                        }}
                        className="flex-1 px-3 py-1.5 bg-[#070c14] border border-slate-700 rounded text-xs text-white"
                        placeholder="Label"
                      />
                      <input
                        type="text"
                        value={item.href}
                        onChange={(e) => {
                          const updated = [...siteData.navigation];
                          updated[idx].href = e.target.value;
                          updateNavigation(updated);
                        }}
                        className="w-48 px-3 py-1.5 bg-[#070c14] border border-slate-700 rounded text-xs text-slate-300 font-mono"
                        placeholder="Anchor (#about)"
                      />
                      <button
                        onClick={() => {
                          const updated = siteData.navigation.filter((_, i) => i !== idx);
                          updateNavigation(updated);
                        }}
                        className="p-1.5 text-slate-500 hover:text-rose-400 rounded transition-colors"
                        title="Delete link"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprises Dropdown Sub-Items */}
              <div className="space-y-4 pt-6 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs uppercase tracking-wider text-[#b59357] font-semibold">
                    "Enterprises" Dropdown Sub-Items
                  </h3>
                  <button
                    onClick={() => {
                      const newMenu = [
                        ...siteData.enterpriseMenu,
                        {
                          id: `ent-${Date.now()}`,
                          title: "New Division",
                          tagline: "Division specialty description",
                          href: "#",
                        },
                      ];
                      updateEnterpriseMenu(newMenu);
                    }}
                    className="px-3 py-1.5 bg-[#131f31] border border-[#b59357]/60 hover:bg-[#b59357] hover:text-[#0e1726] text-xs rounded flex items-center gap-1 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Sub-Item</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {siteData.enterpriseMenu.map((item, idx) => (
                    <div
                      key={item.id}
                      className="bg-[#131f31] p-3.5 border border-slate-800 rounded space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => {
                            const updated = [...siteData.enterpriseMenu];
                            updated[idx].title = e.target.value;
                            updateEnterpriseMenu(updated);
                          }}
                          className="font-serif font-bold text-sm text-white bg-[#070c14] border border-slate-700 px-3 py-1 rounded w-72"
                          placeholder="Title"
                        />
                        <button
                          onClick={() => {
                            const updated = siteData.enterpriseMenu.filter((_, i) => i !== idx);
                            updateEnterpriseMenu(updated);
                          }}
                          className="p-1.5 text-slate-500 hover:text-rose-400 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={item.tagline}
                          onChange={(e) => {
                            const updated = [...siteData.enterpriseMenu];
                            updated[idx].tagline = e.target.value;
                            updateEnterpriseMenu(updated);
                          }}
                          className="px-3 py-1.5 bg-[#070c14] border border-slate-700 rounded text-xs text-slate-300"
                          placeholder="Tagline..."
                        />
                        <input
                          type="text"
                          value={item.href}
                          onChange={(e) => {
                            const updated = [...siteData.enterpriseMenu];
                            updated[idx].href = e.target.value;
                            updateEnterpriseMenu(updated);
                          }}
                          className="px-3 py-1.5 bg-[#070c14] border border-slate-700 rounded text-xs text-[#b59357] font-mono"
                          placeholder="Link Anchor (#real-estate)"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: OPERATING DIVISIONS (COMPANIES) */}
          {activeTab === "companies" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-serif font-bold text-white">Operating Division Cards</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage the 4 primary enterprise operating pillars displayed on the homepage.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newComp = [
                      ...siteData.companies,
                      {
                        id: `comp-${Date.now()}`,
                        sectorBadge: "Strategic Sector",
                        title: "New JUBOH Division",
                        description: "Institutional division operations and core capabilities description.",
                        subHighlights: "Core Pillar 1 • Core Pillar 2 • Core Pillar 3",
                        linkText: "View Capabilities",
                        linkHref: "#",
                        iconName: "building",
                      },
                    ];
                    updateCompanies(newComp);
                  }}
                  className="px-3.5 py-2 bg-[#b59357] text-[#0e1726] hover:bg-[#c9a769] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Division</span>
                </button>
              </div>

              <div className="space-y-4">
                {siteData.companies.map((comp, idx) => (
                  <div
                    key={comp.id}
                    className="bg-[#131f31] border border-slate-800 rounded p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <input
                        type="text"
                        value={comp.sectorBadge}
                        onChange={(e) => {
                          const updated = [...siteData.companies];
                          updated[idx].sectorBadge = e.target.value;
                          updateCompanies(updated);
                        }}
                        className="px-2.5 py-1 bg-[#070c14] border border-slate-700 text-[#b59357] rounded text-[10px] uppercase font-bold tracking-wider w-64"
                        placeholder="Sector Badge"
                      />
                      <button
                        onClick={() => {
                          const updated = siteData.companies.filter((_, i) => i !== idx);
                          updateCompanies(updated);
                        }}
                        className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                        title="Delete Card"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={comp.title}
                      onChange={(e) => {
                        const updated = [...siteData.companies];
                        updated[idx].title = e.target.value;
                        updateCompanies(updated);
                      }}
                      className="w-full px-3 py-1.5 bg-[#070c14] border border-slate-700 text-white rounded text-base font-serif font-bold"
                      placeholder="Division Title"
                    />

                    <textarea
                      rows={2}
                      value={comp.description}
                      onChange={(e) => {
                        const updated = [...siteData.companies];
                        updated[idx].description = e.target.value;
                        updateCompanies(updated);
                      }}
                      className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 text-slate-300 rounded text-xs"
                      placeholder="Description..."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <input
                        type="text"
                        value={comp.subHighlights}
                        onChange={(e) => {
                          const updated = [...siteData.companies];
                          updated[idx].subHighlights = e.target.value;
                          updateCompanies(updated);
                        }}
                        className="px-3 py-1.5 bg-[#070c14] border border-slate-700 text-slate-400 rounded text-xs"
                        placeholder="Sub-highlights bullet line"
                      />
                      <input
                        type="text"
                        value={comp.linkHref}
                        onChange={(e) => {
                          const updated = [...siteData.companies];
                          updated[idx].linkHref = e.target.value;
                          updateCompanies(updated);
                        }}
                        className="px-3 py-1.5 bg-[#070c14] border border-slate-700 text-[#b59357] rounded text-xs font-mono"
                        placeholder="Link Anchor (#real-estate)"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: REAL ESTATE HOLDINGS */}
          {activeTab === "realestate" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-serif font-bold text-white">Real Estate Holdings (Cards)</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Add, edit, or remove commercial and residential real estate portfolio assets.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newRE = [
                      ...siteData.realEstate,
                      {
                        id: `re-${Date.now()}`,
                        location: "Atlanta, GA",
                        title: "New Development Holding",
                        category: "Class-A Asset",
                        role: "Lead Developer",
                        scope: "Strategic Asset Expansion",
                        status: "In Development",
                      },
                    ];
                    updateRealEstate(newRE);
                  }}
                  className="px-3.5 py-2 bg-[#b59357] text-[#0e1726] hover:bg-[#c9a769] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Property</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteData.realEstate.map((item, idx) => (
                  <div
                    key={item.id}
                    className="bg-[#131f31] border border-slate-800 rounded p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={item.location}
                        onChange={(e) => {
                          const updated = [...siteData.realEstate];
                          updated[idx].location = e.target.value;
                          updateRealEstate(updated);
                        }}
                        className="text-xs text-slate-400 bg-[#070c14] px-2 py-0.5 rounded border border-slate-700 w-44"
                        placeholder="Location"
                      />
                      <button
                        onClick={() => {
                          const updated = siteData.realEstate.filter((_, i) => i !== idx);
                          updateRealEstate(updated);
                        }}
                        className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        const updated = [...siteData.realEstate];
                        updated[idx].title = e.target.value;
                        updateRealEstate(updated);
                      }}
                      className="w-full px-2.5 py-1.5 bg-[#070c14] border border-slate-700 text-white rounded text-sm font-serif font-bold"
                      placeholder="Property Title"
                    />

                    <input
                      type="text"
                      value={item.category}
                      onChange={(e) => {
                        const updated = [...siteData.realEstate];
                        updated[idx].category = e.target.value;
                        updateRealEstate(updated);
                      }}
                      className="w-full px-2.5 py-1 bg-[#070c14] border border-slate-700 text-[#b59357] rounded text-[11px] font-semibold uppercase"
                      placeholder="Category"
                    />

                    <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block">Role</span>
                        <input
                          type="text"
                          value={item.role}
                          onChange={(e) => {
                            const updated = [...siteData.realEstate];
                            updated[idx].role = e.target.value;
                            updateRealEstate(updated);
                          }}
                          className="w-full px-2 py-1 bg-[#070c14] border border-slate-700 rounded text-slate-300 text-xs"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block">Scope</span>
                        <input
                          type="text"
                          value={item.scope}
                          onChange={(e) => {
                            const updated = [...siteData.realEstate];
                            updated[idx].scope = e.target.value;
                            updateRealEstate(updated);
                          }}
                          className="w-full px-2 py-1 bg-[#070c14] border border-slate-700 rounded text-slate-300 text-xs"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block">Status</span>
                        <input
                          type="text"
                          value={item.status}
                          onChange={(e) => {
                            const updated = [...siteData.realEstate];
                            updated[idx].status = e.target.value;
                            updateRealEstate(updated);
                          }}
                          className="w-full px-2 py-1 bg-[#070c14] border border-slate-700 rounded text-emerald-400 text-xs font-semibold"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: PROJECTS & CASE STUDIES */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-serif font-bold text-white">Case Studies & Past Performance</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage the representative project case studies showcased to institutional investors.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const nextNum = (siteData.projects.length + 1).toString().padStart(2, "0");
                    const newProj = [
                      ...siteData.projects,
                      {
                        id: `proj-${Date.now()}`,
                        number: nextNum,
                        category: "Strategic Case Study",
                        title: "New Representative Project",
                        location: "Atlanta, GA",
                        description: "Project execution details, delivery, and institutional impact.",
                        role: "Lead Sponsor / Prime Advisor",
                        status: "Operational",
                        completion: "Completed",
                      },
                    ];
                    updateProjects(newProj);
                  }}
                  className="px-3.5 py-2 bg-[#b59357] text-[#0e1726] hover:bg-[#c9a769] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Case Study</span>
                </button>
              </div>

              <div className="space-y-4">
                {siteData.projects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="bg-[#131f31] border border-slate-800 rounded p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={proj.number}
                          onChange={(e) => {
                            const updated = [...siteData.projects];
                            updated[idx].number = e.target.value;
                            updateProjects(updated);
                          }}
                          className="w-12 px-2 py-1 bg-[#070c14] border border-slate-700 text-[#b59357] font-mono font-bold rounded text-xs"
                          placeholder="01"
                        />
                        <input
                          type="text"
                          value={proj.category}
                          onChange={(e) => {
                            const updated = [...siteData.projects];
                            updated[idx].category = e.target.value;
                            updateProjects(updated);
                          }}
                          className="px-2 py-1 bg-[#070c14] border border-slate-700 text-slate-400 rounded text-xs w-64"
                          placeholder="Category"
                        />
                      </div>
                      <button
                        onClick={() => {
                          const updated = siteData.projects.filter((_, i) => i !== idx);
                          updateProjects(updated);
                        }}
                        className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => {
                          const updated = [...siteData.projects];
                          updated[idx].title = e.target.value;
                          updateProjects(updated);
                        }}
                        className="px-3 py-1.5 bg-[#070c14] border border-slate-700 text-white rounded text-sm font-serif font-bold"
                        placeholder="Project Title"
                      />
                      <input
                        type="text"
                        value={proj.location}
                        onChange={(e) => {
                          const updated = [...siteData.projects];
                          updated[idx].location = e.target.value;
                          updateProjects(updated);
                        }}
                        className="px-3 py-1.5 bg-[#070c14] border border-slate-700 text-slate-300 rounded text-xs"
                        placeholder="Location"
                      />
                    </div>

                    <textarea
                      rows={2}
                      value={proj.description}
                      onChange={(e) => {
                        const updated = [...siteData.projects];
                        updated[idx].description = e.target.value;
                        updateProjects(updated);
                      }}
                      className="w-full px-3 py-1.5 bg-[#070c14] border border-slate-700 text-slate-300 rounded text-xs"
                      placeholder="Project description and metrics..."
                    />

                    <div className="grid grid-cols-3 gap-3 text-xs pt-2 border-t border-slate-800">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block">JUBOH Role</span>
                        <input
                          type="text"
                          value={proj.role}
                          onChange={(e) => {
                            const updated = [...siteData.projects];
                            updated[idx].role = e.target.value;
                            updateProjects(updated);
                          }}
                          className="w-full px-2 py-1 bg-[#070c14] border border-slate-700 rounded text-slate-300 text-xs"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block">Status</span>
                        <input
                          type="text"
                          value={proj.status}
                          onChange={(e) => {
                            const updated = [...siteData.projects];
                            updated[idx].status = e.target.value;
                            updateProjects(updated);
                          }}
                          className="w-full px-2 py-1 bg-[#070c14] border border-slate-700 rounded text-emerald-400 text-xs"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block">Delivery</span>
                        <input
                          type="text"
                          value={proj.completion}
                          onChange={(e) => {
                            const updated = [...siteData.projects];
                            updated[idx].completion = e.target.value;
                            updateProjects(updated);
                          }}
                          className="w-full px-2 py-1 bg-[#070c14] border border-slate-700 rounded text-slate-300 text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: LEADERSHIP */}
          {activeTab === "leadership" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-serif font-bold text-white">Executive Leadership & Bios</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage executive profiles for Jalen Uboh, Anika Carter-Uboh, and leadership board members.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newLead = [
                      ...siteData.leadership,
                      {
                        id: `lead-${Date.now()}`,
                        name: "Executive Officer",
                        role: "Managing Principal",
                        entity: "JUBOH Companies International",
                        bio: "Executive background and leadership experience.",
                        portraitUrl: "/jalen-uboh.jpg",
                      },
                    ];
                    updateLeadership(newLead);
                  }}
                  className="px-3.5 py-2 bg-[#b59357] text-[#0e1726] hover:bg-[#c9a769] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Executive</span>
                </button>
              </div>

              <div className="space-y-6">
                {siteData.leadership.map((lead, idx) => (
                  <div
                    key={lead.id}
                    className="bg-[#131f31] border border-slate-800 rounded p-6 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={lead.portraitUrl}
                          alt={lead.name}
                          className="w-16 h-20 object-cover rounded border border-slate-700 bg-slate-900"
                        />
                        <div>
                          <input
                            type="text"
                            value={lead.name}
                            onChange={(e) => {
                              const updated = [...siteData.leadership];
                              updated[idx].name = e.target.value;
                              updateLeadership(updated);
                            }}
                            className="font-serif font-bold text-lg text-white bg-[#070c14] border border-slate-700 px-2 py-1 rounded"
                            placeholder="Full Name"
                          />
                          <input
                            type="text"
                            value={lead.role}
                            onChange={(e) => {
                              const updated = [...siteData.leadership];
                              updated[idx].role = e.target.value;
                              updateLeadership(updated);
                            }}
                            className="text-xs text-[#b59357] uppercase tracking-wider font-semibold block mt-1 bg-[#070c14] border border-slate-700 px-2 py-0.5 rounded w-64"
                            placeholder="Executive Title"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          const updated = siteData.leadership.filter((_, i) => i !== idx);
                          updateLeadership(updated);
                        }}
                        className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] text-slate-500 uppercase mb-1">Entity / Branch</label>
                        <input
                          type="text"
                          value={lead.entity}
                          onChange={(e) => {
                            const updated = [...siteData.leadership];
                            updated[idx].entity = e.target.value;
                            updateLeadership(updated);
                          }}
                          className="w-full px-2 py-1 bg-[#070c14] border border-slate-700 rounded text-xs text-slate-300"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-500 uppercase mb-1">Portrait Image URL</label>
                        <input
                          type="text"
                          value={lead.portraitUrl}
                          onChange={(e) => {
                            const updated = [...siteData.leadership];
                            updated[idx].portraitUrl = e.target.value;
                            updateLeadership(updated);
                          }}
                          className="w-full px-2 py-1 bg-[#070c14] border border-slate-700 rounded text-xs text-slate-300 font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-500 uppercase mb-1">Executive Bio</label>
                      <textarea
                        rows={3}
                        value={lead.bio}
                        onChange={(e) => {
                          const updated = [...siteData.leadership];
                          updated[idx].bio = e.target.value;
                          updateLeadership(updated);
                        }}
                        className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 rounded text-xs text-slate-300 leading-relaxed"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: MEDIA & PHOTOS LIBRARY */}
          {activeTab === "media" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-serif font-bold text-white">Media & Photo Manager</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Upload new photography, manage image URLs, or apply photos to Hero or Executive sections.
                  </p>
                </div>
              </div>

              {/* Upload or Add Image URL */}
              <div className="p-5 bg-[#131f31] border border-slate-800 rounded space-y-4">
                <span className="text-xs uppercase tracking-wider text-[#b59357] font-semibold block">
                  Add New Photo
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-5">
                    <input
                      type="text"
                      id="newMediaTitle"
                      placeholder="Photo Title (e.g. Official Jalen Uboh Portrait)"
                      className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 text-xs text-white rounded"
                    />
                  </div>
                  <div className="sm:col-span-5">
                    <input
                      type="text"
                      id="newMediaUrl"
                      placeholder="Image URL (or upload below)"
                      className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 text-xs text-white rounded font-mono"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      onClick={() => {
                        const titleEl = document.getElementById("newMediaTitle") as HTMLInputElement;
                        const urlEl = document.getElementById("newMediaUrl") as HTMLInputElement;
                        if (urlEl?.value) {
                          addMediaItem({
                            title: titleEl.value || "Untitled Photo",
                            url: urlEl.value,
                            category: "general",
                            alt: titleEl.value || "Photo",
                          });
                          titleEl.value = "";
                          urlEl.value = "";
                          triggerToast("Photo added to media gallery!");
                        }
                      }}
                      className="w-full py-2 bg-[#b59357] text-[#0e1726] font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c9a769] transition-all"
                    >
                      Add Photo
                    </button>
                  </div>
                </div>

                {/* Local File Upload */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-3">
                  <label className="cursor-pointer px-4 py-2 bg-[#070c14] border border-slate-700 hover:border-slate-500 rounded text-xs text-slate-300 flex items-center gap-2">
                    <Upload className="w-3.5 h-3.5 text-[#b59357]" />
                    <span>Upload Image from Computer</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (uploadEvent) => {
                            const result = uploadEvent.target?.result as string;
                            if (result) {
                              addMediaItem({
                                title: file.name,
                                url: result,
                                category: "general",
                                alt: file.name,
                              });
                              triggerToast(`Uploaded ${file.name}!`);
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  <span className="text-[11px] text-slate-500">
                    Supports JPG, PNG, WEBP.
                  </span>
                </div>
              </div>

              {/* Photo Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {siteData.mediaLibrary.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#131f31] border border-slate-800 rounded overflow-hidden flex flex-col justify-between"
                  >
                    <div className="aspect-[4/3] bg-[#070c14] relative overflow-hidden group">
                      <img
                        src={item.url}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button
                        onClick={() => deleteMediaItem(item.id)}
                        className="absolute top-2 right-2 p-1.5 bg-rose-900/80 hover:bg-rose-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Delete photo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="p-3.5 space-y-2">
                      <span className="text-xs font-serif font-bold text-white block truncate">
                        {item.title}
                      </span>
                      <p className="text-[10px] text-slate-400 font-mono truncate">{item.url}</p>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
                        <button
                          onClick={() => {
                            updateHero({ portraitUrl: item.url });
                            triggerToast("Applied as Hero Portrait!");
                          }}
                          className="flex-1 py-1.5 bg-[#070c14] hover:bg-[#b59357] hover:text-[#0e1726] border border-slate-700 text-[10px] uppercase font-bold tracking-wider rounded transition-all"
                        >
                          Set as Hero
                        </button>
                        <button
                          onClick={() => {
                            const updated = [...siteData.leadership];
                            if (updated[0]) {
                              updated[0].portraitUrl = item.url;
                              updateLeadership(updated);
                              triggerToast("Applied to Chairman Jalen Uboh bio!");
                            }
                          }}
                          className="flex-1 py-1.5 bg-[#070c14] hover:bg-[#b59357] hover:text-[#0e1726] border border-slate-700 text-[10px] uppercase font-bold tracking-wider rounded transition-all"
                        >
                          Set as Leader
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: ADVISORY & GOVERNMENT */}
          {activeTab === "advisory" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-serif font-bold text-white">Advisory & Government Capabilities</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Manage capital practice areas, SAM.gov verified capabilities, and NAICS codes.
                </p>
              </div>

              {/* Government NAICS */}
              <div className="p-4 bg-[#131f31] border border-slate-800 rounded space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#b59357] font-semibold">
                  Registered Government NAICS Codes
                </label>
                <input
                  type="text"
                  value={siteData.governmentNaics}
                  onChange={(e) => {
                    useSiteData();
                  }}
                  className="w-full px-3 py-2 bg-[#070c14] border border-slate-700 text-white rounded text-xs font-mono"
                />
              </div>

              {/* Advisory Practices List */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider text-[#b59357] font-semibold">
                  Capital Advisory Practice Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {siteData.advisoryPractices.map((adv, idx) => (
                    <div key={adv.id} className="p-4 bg-[#131f31] border border-slate-800 rounded space-y-2">
                      <input
                        type="text"
                        value={adv.title}
                        onChange={(e) => {
                          const updated = [...siteData.advisoryPractices];
                          updated[idx].title = e.target.value;
                        }}
                        className="w-full px-2 py-1 bg-[#070c14] border border-slate-700 text-white font-serif font-bold text-sm rounded"
                      />
                      <textarea
                        rows={2}
                        value={adv.description}
                        onChange={(e) => {
                          const updated = [...siteData.advisoryPractices];
                          updated[idx].description = e.target.value;
                        }}
                        className="w-full px-2 py-1 bg-[#070c14] border border-slate-700 text-slate-300 text-xs rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: NEWS & PRESS */}
          {activeTab === "news" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-serif font-bold text-white">News & Press Releases</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Publish press items, corporate announcements, and civic milestones.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newNews = [
                      ...siteData.news,
                      {
                        id: `news-${Date.now()}`,
                        date: "Current Date",
                        source: "Press Announcement",
                        title: "New Corporate Press Release",
                        excerpt: "Press summary and announcement details.",
                        link: "#",
                      },
                    ];
                    updateNews(newNews);
                  }}
                  className="px-3.5 py-2 bg-[#b59357] text-[#0e1726] hover:bg-[#c9a769] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Article</span>
                </button>
              </div>

              <div className="space-y-4">
                {siteData.news.map((item, idx) => (
                  <div key={item.id} className="p-4 bg-[#131f31] border border-slate-800 rounded space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={item.date}
                          onChange={(e) => {
                            const updated = [...siteData.news];
                            updated[idx].date = e.target.value;
                            updateNews(updated);
                          }}
                          className="px-2 py-1 bg-[#070c14] border border-slate-700 text-[#b59357] rounded text-xs w-32"
                        />
                        <input
                          type="text"
                          value={item.source}
                          onChange={(e) => {
                            const updated = [...siteData.news];
                            updated[idx].source = e.target.value;
                            updateNews(updated);
                          }}
                          className="px-2 py-1 bg-[#070c14] border border-slate-700 text-slate-400 rounded text-xs w-48"
                        />
                      </div>
                      <button
                        onClick={() => {
                          const updated = siteData.news.filter((_, i) => i !== idx);
                          updateNews(updated);
                        }}
                        className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        const updated = [...siteData.news];
                        updated[idx].title = e.target.value;
                        updateNews(updated);
                      }}
                      className="w-full px-3 py-1.5 bg-[#070c14] border border-slate-700 text-white rounded text-sm font-serif font-bold"
                    />

                    <textarea
                      rows={2}
                      value={item.excerpt}
                      onChange={(e) => {
                        const updated = [...siteData.news];
                        updated[idx].excerpt = e.target.value;
                        updateNews(updated);
                      }}
                      className="w-full px-3 py-1.5 bg-[#070c14] border border-slate-700 text-slate-300 rounded text-xs"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 11: BACKUP & RAW JSON */}
          {activeTab === "backup" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-serif font-bold text-white">Backup, Export & Raw JSON Data</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Export complete configuration as a JSON file or restore a previous snapshot.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    const blob = new Blob([exportJson()], { type: "application/json" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `juboh-site-data-${Date.now()}.json`;
                    a.click();
                    URL.revokeObjectURL(url);
                    triggerToast("Downloaded JSON backup file!");
                  }}
                  className="px-4 py-2 bg-[#b59357] text-[#0e1726] hover:bg-[#c9a769] text-xs font-bold uppercase tracking-wider rounded flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Backup JSON</span>
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(exportJson());
                    triggerToast("Copied JSON configuration to clipboard!");
                  }}
                  className="px-4 py-2 bg-[#131f31] border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-medium rounded flex items-center gap-2"
                >
                  <span>Copy JSON to Clipboard</span>
                </button>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#b59357] font-semibold mb-2">
                  Live JSON Configuration
                </label>
                <textarea
                  rows={14}
                  value={exportJson()}
                  readOnly
                  className="w-full p-4 bg-[#070c14] border border-slate-800 text-slate-300 font-mono text-xs rounded leading-relaxed focus:outline-none"
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
