import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { getDictionary } from "@/lib/dictionaries";
import { locales } from "@/lib/i18n-config";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "WME - WME Solutions",
  description: "Optimize your business workflows with WME Solutions' expert services, specializing in implementing and enhancing Monday.com solutions tailored to your organization's needs.",
};

interface PageProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: PageProps) {

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="mt-20"></div>
        <main className="flex-grow">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}