"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  SiteData,
  defaultSiteData,
  BrandConfig,
  ColorConfig,
  HeroConfig,
  CredibilityMetric,
  MenuItem,
  EnterpriseSubItem,
  CompanyCard,
  RealEstateCard,
  ProjectCard,
  LeaderCard,
  NewsArticle,
  MediaPhoto,
} from "./defaultSiteData";

interface SiteDataContextType {
  siteData: SiteData;
  isLoaded: boolean;
  updateBrand: (brand: Partial<BrandConfig>) => void;
  updateColors: (colors: Partial<ColorConfig>) => void;
  updateHero: (hero: Partial<HeroConfig>) => void;
  updateCredibility: (credibility: CredibilityMetric[]) => void;
  updateNavigation: (navigation: MenuItem[]) => void;
  updateEnterpriseMenu: (enterpriseMenu: EnterpriseSubItem[]) => void;
  updateCompanies: (companies: CompanyCard[]) => void;
  updateRealEstate: (realEstate: RealEstateCard[]) => void;
  updateProjects: (projects: ProjectCard[]) => void;
  updateLeadership: (leadership: LeaderCard[]) => void;
  updateNews: (news: NewsArticle[]) => void;
  updateMediaLibrary: (mediaLibrary: MediaPhoto[]) => void;
  addMediaItem: (item: Omit<MediaPhoto, "id">) => void;
  deleteMediaItem: (id: string) => void;
  setFullSiteData: (data: SiteData) => void;
  resetToDefaults: () => void;
  exportJson: () => string;
  importJson: (jsonString: string) => boolean;
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

const STORAGE_KEY = "juboh_site_data_v1";

export const SiteDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteData>(defaultSiteData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from Server API on mount (fallback to localStorage/defaults)
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/site-data", { cache: "no-store" });
        if (res.ok) {
          const serverData = await res.json();
          if (serverData && typeof serverData === "object") {
            setSiteData((prev) => ({
              ...prev,
              ...serverData,
              brand: { ...prev.brand, ...(serverData.brand || {}) },
              colors: { ...prev.colors, ...(serverData.colors || {}) },
              hero: { ...prev.hero, ...(serverData.hero || {}) },
            }));
            localStorage.setItem(STORAGE_KEY, JSON.stringify(serverData));
            setIsLoaded(true);
            return;
          }
        }
      } catch (err) {
        console.warn("Could not fetch server site data, trying localStorage:", err);
      }

      // Fallback to localStorage
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          setSiteData((prev) => ({
            ...prev,
            ...parsed,
            brand: { ...prev.brand, ...(parsed.brand || {}) },
            colors: { ...prev.colors, ...(parsed.colors || {}) },
            hero: { ...prev.hero, ...(parsed.hero || {}) },
          }));
        }
      } catch (e) {
        console.warn("Failed to load custom site data from localStorage:", e);
      } finally {
        setIsLoaded(true);
      }
    }

    loadData();
  }, []);

  // Save changes to server API, localStorage & inject CSS variables
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));

      // Asynchronously sync to server JSON file
      fetch("/api/site-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(siteData),
      }).catch((err) => console.error("Server sync error:", err));

      // Inject CSS variables for colors
      const root = document.documentElement;
      if (siteData.colors) {
        root.style.setProperty("--color-navy", siteData.colors.primaryNavy);
        root.style.setProperty("--color-navy-dark", siteData.colors.surfaceDark);
        root.style.setProperty("--color-gold", siteData.colors.mutedGold);
        root.style.setProperty("--color-gold-hover", siteData.colors.goldHover);
        root.style.setProperty("--color-ivory", siteData.colors.warmIvory);
      }
    } catch (e) {
      console.error("Failed to persist site data:", e);
    }
  }, [siteData, isLoaded]);

  const updateBrand = (brandUpdate: Partial<BrandConfig>) => {
    setSiteData((prev) => ({
      ...prev,
      brand: { ...prev.brand, ...brandUpdate },
    }));
  };

  const updateColors = (colorsUpdate: Partial<ColorConfig>) => {
    setSiteData((prev) => ({
      ...prev,
      colors: { ...prev.colors, ...colorsUpdate },
    }));
  };

  const updateHero = (heroUpdate: Partial<HeroConfig>) => {
    setSiteData((prev) => ({
      ...prev,
      hero: { ...prev.hero, ...heroUpdate },
    }));
  };

  const updateCredibility = (credibility: CredibilityMetric[]) => {
    setSiteData((prev) => ({ ...prev, credibility }));
  };

  const updateNavigation = (navigation: MenuItem[]) => {
    setSiteData((prev) => ({ ...prev, navigation }));
  };

  const updateEnterpriseMenu = (enterpriseMenu: EnterpriseSubItem[]) => {
    setSiteData((prev) => ({ ...prev, enterpriseMenu }));
  };

  const updateCompanies = (companies: CompanyCard[]) => {
    setSiteData((prev) => ({ ...prev, companies }));
  };

  const updateRealEstate = (realEstate: RealEstateCard[]) => {
    setSiteData((prev) => ({ ...prev, realEstate }));
  };

  const updateProjects = (projects: ProjectCard[]) => {
    setSiteData((prev) => ({ ...prev, projects }));
  };

  const updateLeadership = (leadership: LeaderCard[]) => {
    setSiteData((prev) => ({ ...prev, leadership }));
  };

  const updateNews = (news: NewsArticle[]) => {
    setSiteData((prev) => ({ ...prev, news }));
  };

  const updateMediaLibrary = (mediaLibrary: MediaPhoto[]) => {
    setSiteData((prev) => ({ ...prev, mediaLibrary }));
  };

  const addMediaItem = (item: Omit<MediaPhoto, "id">) => {
    const newItem: MediaPhoto = {
      ...item,
      id: `media-${Date.now()}`,
    };
    setSiteData((prev) => ({
      ...prev,
      mediaLibrary: [newItem, ...prev.mediaLibrary],
    }));
  };

  const deleteMediaItem = (id: string) => {
    setSiteData((prev) => ({
      ...prev,
      mediaLibrary: prev.mediaLibrary.filter((m) => m.id !== id),
    }));
  };

  const setFullSiteData = (data: SiteData) => {
    setSiteData(data);
  };

  const resetToDefaults = () => {
    setSiteData(defaultSiteData);
    localStorage.removeItem(STORAGE_KEY);
  };

  const exportJson = () => {
    return JSON.stringify(siteData, null, 2);
  };

  const importJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && parsed.brand && parsed.hero) {
        setSiteData(parsed);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  return (
    <SiteDataContext.Provider
      value={{
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
        updateMediaLibrary,
        addMediaItem,
        deleteMediaItem,
        setFullSiteData,
        resetToDefaults,
        exportJson,
        importJson,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error("useSiteData must be used within a SiteDataProvider");
  }
  return context;
};
