// lib/config.ts
export const locales = ["en", "fr"];
function detectLocale() {
  if (typeof window !== "undefined") {
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("fr")) return "fr";
  }
  return "en";
}

export const defaultLocale = detectLocale();
