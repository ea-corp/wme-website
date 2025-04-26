// pages/portfolio.tsx
import { getDictionary } from "@/lib/dictionaries";
import Portfolio from "./_components/PortfolioClient";

interface PageProps {
  params: { lang: string };
}

export default async function PortfolioPage({ params }: PageProps) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return <Portfolio dict={dict} />;
}
