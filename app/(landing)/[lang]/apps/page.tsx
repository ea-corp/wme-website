// pages/apps.tsx
import { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import AppsPageClient from "./_components/AppsPageClient";

interface PageProps {
  params: { lang: string };
}

export const metadata: Metadata = {
  title: "Apps - WME Solutions",
  description:
    "Explore our collection of powerful monday.com add-ons designed to enhance your workflow. Discover how these innovative tools can streamline your processes, boost productivity, and unlock new possibilities for your team. Elevate your monday.com experience with our curated selection of apps tailored to meet your unique needs.",
};

export default async function AppsPage({ params }: PageProps) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return <AppsPageClient dict={dict} />;
}
