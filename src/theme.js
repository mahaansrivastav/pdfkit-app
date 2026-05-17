// Design tokens — your reusable design system
// Import this in every component: import { V, getTheme, tools } from '../theme'

export const darkTheme = {
  bgPage:     "#0B0F1A",
  bgCard:     "#141929",
  bgCardH:    "#1A2035",
  bgInput:    "#0F1422",
  bgBadge:    "#1E2640",
  border:     "#1E2640",
  borderL:    "#252D4A",
  textP:      "#FFFFFF",
  textS:      "#8892A4",
  textM:      "#4B5563",
  accent:     "#6366F1",
  accentH:    "#4F52D4",
  accentSoft: "#1E1F4A",
  accentText: "#818CF8",
  navBg:      "rgba(11,15,26,0.92)",
  footerBg:   "#080B14",
};

export const lightTheme = {
  bgPage:     "#FFFFFF",
  bgCard:     "#F8F7F4",
  bgCardH:    "#F0EFE9",
  bgInput:    "#FFFFFF",
  bgBadge:    "#E8E7E3",
  border:     "#E5E4E0",
  borderL:    "#D8D7D3",
  textP:      "#1A1917",
  textS:      "#57534E",
  textM:      "#78716C",
  accent:     "#6366F1",
  accentH:    "#4F52D4",
  accentSoft: "#EEF2FF",
  accentText: "#4F46E5",
  navBg:      "rgba(255,255,255,0.92)",
  footerBg:   "#F8F7F4",
};

// Get current theme based on mode
export const getTheme = (isDark) => isDark ? darkTheme : lightTheme;

// For backwards compatibility, export V as dark theme (will be replaced by dynamic usage)
export const V = darkTheme;

export const tools = [
  {
    id: "merge",
    label: "Merge PDFs",
    emoji: "⊕",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.15)",
    desc: "Combine multiple PDFs into one document instantly.",
    multi: true,
  },
  {
    id: "remove",
    label: "Remove Pages",
    emoji: "✂",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.15)",
    desc: "Delete specific pages from your PDF.",
    multi: false,
  },
  {
    id: "password",
    label: "Add Password",
    emoji: "🔒",
    color: "#10B981",
    bg: "rgba(16,185,129,0.15)",
    desc: "Protect your PDF with a secure password.",
    multi: false,
  },
  {
    id: "ocr",
    label: "OCR Extract",
    emoji: "◎",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.15)",
    desc: "Extract text from scanned PDFs.",
    multi: false,
  },
];