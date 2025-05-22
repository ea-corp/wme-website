// pages/apps.tsx
import { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import AppsPageClient from "./_components/AppsPageClient";

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  return {
    title: dict.appsPage.metaTitle || "Bienvenue sur notre site",
    description: dict.appsPage.metaDescription || "Explorez notre plateforme multilingue avec une navigation fluide.",
  };
}

export default async function AppsPage({ params }: PageProps) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return <AppsPageClient dict={dict} />;
}
