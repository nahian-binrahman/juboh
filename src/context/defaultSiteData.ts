export interface BrandConfig {
  name: string;
  tagline: string;
  established: string;
  address: string;
  phone: string;
  phoneRaw: string;
  email: string;
  portalLinkText: string;
  portalLinkHref: string;
}

export interface ColorConfig {
  primaryNavy: string;
  secondaryNavy: string;
  surfaceDark: string;
  warmIvory: string;
  surfaceLight: string;
  mutedGold: string;
  goldHover: string;
  textDark: string;
  textLight: string;
  borderDark: string;
  borderLight: string;
}

export interface HeroConfig {
  eyebrow: string;
  subtitle: string;
  headline: string;
  description: string;
  portraitUrl: string;
  portraitAlt: string;
  founderName: string;
  founderTitle: string;
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  sectors: { number: string; title: string }[];
}

export interface CredibilityMetric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface EnterpriseSubItem {
  id: string;
  title: string;
  tagline: string;
  href: string;
}

export interface CompanyCard {
  id: string;
  sectorBadge: string;
  title: string;
  description: string;
  subHighlights: string;
  linkText: string;
  linkHref: string;
  iconName: string;
}

export interface RealEstateCard {
  id: string;
  location: string;
  title: string;
  category: string;
  role: string;
  scope: string;
  status: string;
}

export interface ProjectCard {
  id: string;
  number: string;
  category: string;
  title: string;
  location: string;
  description: string;
  role: string;
  status: string;
  completion: string;
}

export interface AdvisoryPractice {
  id: string;
  title: string;
  description: string;
}

export interface GovernmentCapability {
  id: string;
  title: string;
  description: string;
}

export interface LeaderCard {
  id: string;
  name: string;
  role: string;
  entity: string;
  bio: string;
  portraitUrl: string;
}

export interface FoundationInitiative {
  id: string;
  title: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  date: string;
  source: string;
  title: string;
  excerpt: string;
  link: string;
}

export interface MediaPhoto {
  id: string;
  title: string;
  url: string;
  category: "hero" | "leadership" | "projects" | "general";
  alt: string;
}

export interface SiteData {
  brand: BrandConfig;
  colors: ColorConfig;
  hero: HeroConfig;
  credibility: CredibilityMetric[];
  navigation: MenuItem[];
  enterpriseMenu: EnterpriseSubItem[];
  companies: CompanyCard[];
  realEstate: RealEstateCard[];
  projects: ProjectCard[];
  advisoryPractices: AdvisoryPractice[];
  advisoryClients: string[];
  governmentCapabilities: GovernmentCapability[];
  governmentNaics: string;
  leadership: LeaderCard[];
  foundationInitiatives: FoundationInitiative[];
  foundationPhilosophy: {
    title: string;
    quote: string;
    description: string;
  };
  news: NewsArticle[];
  mediaLibrary: MediaPhoto[];
}

export const defaultSiteData: SiteData = {
  brand: {
    name: "JUBOH",
    tagline: "Companies International",
    established: "2015",
    address: "1000 Parkwood Circle SE, Atlanta, GA 30339",
    phone: "(888) 726-UBOH",
    phoneRaw: "8887268264",
    email: "inquiries@juboh.com",
    portalLinkText: "Client Portal",
    portalLinkHref: "#contact",
  },
  colors: {
    primaryNavy: "#0e1726",
    secondaryNavy: "#131f31",
    surfaceDark: "#070c14",
    warmIvory: "#FAF8F5",
    surfaceLight: "#ffffff",
    mutedGold: "#b59357",
    goldHover: "#c9a769",
    textDark: "#191c22",
    textLight: "#f8fafc",
    borderDark: "#1e293b",
    borderLight: "#e2e8f0",
  },
  hero: {
    eyebrow: "Established 2015 • Privately Held Enterprise",
    subtitle: "JUBOH Companies International",
    headline: "Building an Exceptional Future, Together.",
    description: "Advancing real estate development, business strategy, government contracting, strategic investments, executive education, and community impact across the United States and select international markets.",
    portraitUrl: "/jalen-uboh-hero.jpg",
    portraitAlt: "Mr. Jalen Uboh — Chairman & Founder",
    founderName: "Jalen Uboh",
    founderTitle: "Founder & Chairman • JUBOH Companies International",
    ctaPrimaryText: "Explore Our Companies",
    ctaPrimaryLink: "#companies",
    ctaSecondaryText: "View Our Work",
    ctaSecondaryLink: "#projects",
    sectors: [
      { number: "01", title: "Real Estate" },
      { number: "02", title: "Capital Advisory" },
      { number: "03", title: "Public Contracting" },
      { number: "04", title: "Philanthropy" },
    ],
  },
  credibility: [
    {
      id: "cred-1",
      value: "2015",
      label: "Year Established",
      description: "Over a decade of enterprise operations",
    },
    {
      id: "cred-2",
      value: "$150M+",
      label: "Portfolio & Scope",
      description: "Real estate and capital advisory projects",
    },
    {
      id: "cred-3",
      value: "National",
      label: "Operating Reach",
      description: "Multi-market footprint & select global hubs",
    },
    {
      id: "cred-4",
      value: "501(c)(3)",
      label: "Community Foundation",
      description: "Endowed humanitarian & education programs",
    },
  ],
  navigation: [
    { id: "nav-about", label: "About", href: "#about" },
    { id: "nav-projects", label: "Case Studies", href: "#projects" },
    { id: "nav-leadership", label: "Leadership", href: "#leadership" },
    { id: "nav-foundation", label: "Foundation", href: "#foundation" },
    { id: "nav-news", label: "News", href: "#news" },
  ],
  enterpriseMenu: [
    {
      id: "ent-re",
      title: "Real Estate Development",
      tagline: "Commercial, Multi-family & Logistics Assets",
      href: "#real-estate",
    },
    {
      id: "ent-advisory",
      title: "Capital & Strategy Advisory",
      tagline: "Capital Structuring, Syndication & M&A",
      href: "#advisory",
    },
    {
      id: "ent-gov",
      title: "Government Solutions",
      tagline: "Infrastructure, Prime Logistics & Compliance",
      href: "#government-contracting",
    },
    {
      id: "ent-academy",
      title: "Executive Academy",
      tagline: "Leadership Development & Corporate Governance",
      href: "#executive-education",
    },
  ],
  companies: [
    {
      id: "comp-re",
      sectorBadge: "Development & Asset Management",
      title: "JUBOH Real Estate Development",
      description: "Direct investment, master-planned developments, commercial acquisitions, and multi-family residential communities built for lasting community value.",
      subHighlights: "Acquisitions • Ground-Up Construction • Asset Repositioning",
      linkText: "View Capabilities",
      linkHref: "#real-estate",
      iconName: "building",
    },
    {
      id: "comp-advisory",
      sectorBadge: "Strategic Advisory & Capital Markets",
      title: "JUBOH Capital & Advisory",
      description: "Providing corporate growth strategy, capital structuring, equity/debt advisory, and institutional transaction counsel for mid-market enterprises.",
      subHighlights: "Capital Structuring • M&A Advisory • Institutional Partnerships",
      linkText: "View Capabilities",
      linkHref: "#advisory",
      iconName: "trending-up",
    },
    {
      id: "comp-gov",
      sectorBadge: "Public Sector & Infrastructure",
      title: "JUBOH Government Solutions",
      description: "Contracting, procurement management, and operational logistics for federal, state, municipal, and educational institutions with verified past performance.",
      subHighlights: "Federal Logistics • Municipal Procurement • Compliance",
      linkText: "View Capabilities",
      linkHref: "#government-contracting",
      iconName: "shield",
    },
    {
      id: "comp-foundation",
      sectorBadge: "Philanthropy & Social Impact",
      title: "The JUBOH Family Foundation",
      description: "A private 501(c)(3) charitable endowment advancing economic mobility, minority entrepreneurship, youth educational initiatives, and Ubuntu community equity.",
      subHighlights: "Endowments • Workforce Initiatives • Social Equity",
      linkText: "View Capabilities",
      linkHref: "#foundation",
      iconName: "heart",
    },
  ],
  realEstate: [
    {
      id: "re-1",
      location: "Atlanta, Georgia",
      title: "The Parkwood Executive Corridor",
      category: "Commercial Office & Corporate HQ",
      role: "Sponsor & Master Developer",
      scope: "Class-A Office Assets, Multi-Tenant Campus",
      status: "Operational / Core Holding",
    },
    {
      id: "re-2",
      location: "Metro Atlanta Submarket",
      title: "Piedmont Urban Residential",
      category: "Multi-Family Residential",
      role: "Lead Developer & Equity Partner",
      scope: "180+ Luxury Multi-Family Units, Ground-Floor Retail",
      status: "In Development / Site Infrastructure",
    },
    {
      id: "re-3",
      location: "Southeast Regional Hub",
      title: "Summit Logistics & Commerce Center",
      category: "Industrial Logistics & Distribution",
      role: "Co-Developer & Capital Advisor",
      scope: "240,000 SF Strategic Distribution Facility",
      status: "Completed / Stabilized",
    },
  ],
  projects: [
    {
      id: "proj-1",
      number: "01",
      category: "Commercial Headquarters & Executive Suites",
      title: "Parkwood Circle Corporate Campus",
      location: "Atlanta, GA (Cumberland Submarket)",
      description: "Strategic multi-tenant commercial office asset with corporate conference amenities and modern infrastructure.",
      role: "Lead Developer & Operating Partner",
      status: "Active Portfolio",
      completion: "Stabilized 2021",
    },
    {
      id: "proj-2",
      number: "02",
      category: "Public Sector Infrastructure Logistics",
      title: "Municipal Agency Support & Facility Readiness",
      location: "Fulton County / Atlanta Metro",
      description: "Comprehensive facilities support, procurement logistics, and maintenance operations for municipal agency operations.",
      role: "Prime Contractor",
      status: "Active Performance",
      completion: "Ongoing Execution",
    },
    {
      id: "proj-3",
      number: "03",
      category: "Capital Structuring & Debt Syndication",
      title: "Mid-Market Enterprise Recapitalization",
      location: "Regional Southeast",
      description: "Arranged structured debt and growth capital syndication for regional commercial contractor to fund corporate expansion.",
      role: "Sole Financial Advisor",
      status: "Completed",
      completion: "Closed Q4 2023",
    },
  ],
  advisoryPractices: [
    {
      id: "adv-1",
      title: "Capital Strategy & Debt Syndication",
      description: "Advising sponsors, family offices, and developers on senior debt placement, mezzanine financing, private equity joint ventures, and tax-efficient capitalization structures.",
    },
    {
      id: "adv-2",
      title: "Real Estate Development Advisory",
      description: "Providing comprehensive pre-development underwriting, zoning and municipal approvals counsel, financial feasibility modeling, and construction capitalization oversight.",
    },
    {
      id: "adv-3",
      title: "Corporate Growth & Restructuring",
      description: "Guiding mid-market enterprise owners through strategic acquisitions, corporate reorganizations, balance-sheet recapitalizations, and executive succession planning.",
    },
    {
      id: "adv-4",
      title: "Institutional Partnerships & Co-Investment",
      description: "Connecting regional developers and operators with institutional capital partners, regional banks, CDFIs, and municipal development authorities for major civic initiatives.",
    },
  ],
  advisoryClients: [
    "Commercial Developers & General Contractors",
    "Family Offices & Ultra-High-Net-Worth Principals",
    "Mid-Market Operating Companies ($10M–$100M+)",
    "Municipal & Public-Sector Development Authorities",
    "Churches & Non-Profit Institutional Landholders",
  ],
  governmentCapabilities: [
    {
      id: "gov-1",
      title: "Public Infrastructure & Facilities Management",
      description: "Full-lifecycle operations, facilities maintenance, space optimization, and municipal public works support.",
    },
    {
      id: "gov-2",
      title: "Procurement & Supply Chain Operations",
      description: "Vetted procurement channels, emergency materials management, and multi-tier supplier compliance logistics.",
    },
    {
      id: "gov-3",
      title: "Program Management & Staff Augmentation",
      description: "Direct administrative, technical, and operational staffing support for civilian agencies and municipal authorities.",
    },
    {
      id: "gov-4",
      title: "Compliance, Quality Control & Auditing",
      description: "Rigorous adherence to FAR (Federal Acquisition Regulation), OSHA, and state governmental reporting mandates.",
    },
  ],
  governmentNaics: "236220, 541611, 561210, 531390",
  leadership: [
    {
      id: "lead-1",
      name: "Jalen Uboh",
      role: "Chairman & Chief Executive Officer",
      entity: "JUBOH Companies International",
      bio: "Over a decade of foundational leadership in commercial real estate development, capital advisory, and diversified enterprise management. Directs strategic vision, investment allocation, and enterprise growth.",
      portraitUrl: "/jalen-uboh.jpg",
    },
    {
      id: "lead-2",
      name: "Anika Carter-Uboh",
      role: "President & Executive Director",
      entity: "The JUBOH Family Foundation",
      bio: "Leads philanthropic strategy, endowment stewardship, and community impact programs. Guides institutional partnerships and educational equity initiatives across designated focus markets.",
      portraitUrl: "/jalen-anika.png",
    },
  ],
  foundationInitiatives: [
    {
      id: "fnd-1",
      title: "Entrepreneurial Capital & Mentorship",
      description: "Providing non-dilutive grant capital, executive mentorship, and business acumen training to underrepresented founders and minority-owned business enterprises.",
    },
    {
      id: "fnd-2",
      title: "Youth STEM & Financial Literacy Programs",
      description: "Equipping young leaders with generational wealth principles, financial literacy curriculum, and technology education through sponsored regional workshops.",
    },
    {
      id: "fnd-3",
      title: "Civic Housing Stability & Community Grants",
      description: "Partnering with civic organizations and local municipal programs to safeguard housing security and stimulate local neighborhood commerce.",
    },
  ],
  foundationPhilosophy: {
    title: "Ubuntu Philosophy",
    quote: "I Am Because We Are",
    description: "The work of JUBOH Companies International is inseparable from the communities in which we invest and build. True enterprise leadership is measured by lasting generational elevation.",
  },
  news: [
    {
      id: "news-1",
      date: "September 2024",
      source: "Corporate Announcement",
      title: "JUBOH Companies Announces Multi-Market Expansion Across the Southeast Corridor",
      excerpt: "Strategic capital deployment into logistics assets, suburban commercial campuses, and municipal advisory partnerships.",
      link: "#",
    },
    {
      id: "news-2",
      date: "July 2024",
      source: "Civic & Community",
      title: "JUBOH Family Foundation Launches Annual Economic Mobility Grant Program",
      excerpt: "Pledging strategic capital to support minority-owned enterprises and young vocational apprentices in Atlanta.",
      link: "#",
    },
    {
      id: "news-3",
      date: "March 2024",
      source: "Real Estate & Capital",
      title: "Commercial Holdings Portfolio Reaches New Milestone in Occupancy & Institutional Valuation",
      excerpt: "Continued operational excellence and tenant retention across prime commercial corridors.",
      link: "#",
    },
  ],
  mediaLibrary: [
    {
      id: "media-1",
      title: "Jalen Uboh Official Portrait",
      url: "/jalen-uboh.jpg",
      category: "hero",
      alt: "Mr. Jalen Uboh — Chairman & Founder",
    },
    {
      id: "media-2",
      title: "Jalen & Anika Executive Leadership",
      url: "/jalen-anika.png",
      category: "leadership",
      alt: "Jalen Uboh and Anika Carter-Uboh",
    },
  ],
};
