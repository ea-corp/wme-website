// pages/world-map.tsx
import { getDictionary } from "@/lib/dictionaries";
import WorldMapClient from "./components/WorldMapClient";

interface PageProps {
  params: { lang: string };
}

export default async function WorldMapPage({ params }: PageProps) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return <WorldMapClient dict={dict} />;
}
