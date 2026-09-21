"use client";

import React from "react";
import { SiteDataProvider } from "@/context/SiteDataContext";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <SiteDataProvider>{children}</SiteDataProvider>;
}
