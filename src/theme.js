// Design tokens — your reusable design system
// Import this in every component: import { V, tools } from '../theme'

export const V = {
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
};

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