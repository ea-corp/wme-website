// pages/world-map.tsx
import { getDictionary } from "@/lib/dictionaries";
import WorldMapClient from "./components/WorldMapClient";

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  return {
    title: dict.ourTeam.metaTitle || "Bienvenue sur notre site",
    description: dict.ourTeam.metaDescription || "Explorez notre plateforme multilingue avec une navigation fluide.",
  };
}

export default async function WorldMapPage({ params }: PageProps) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return <WorldMapClient dict={dict} />;
}
