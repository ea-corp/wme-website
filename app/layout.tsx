import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./(landing)/_components/navbar";
import Footer from "./(landing)/_components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WME - Workflow Made Easy",
  description: "Optimize your business workflows with Workflow Made Easy's expert services, specializing in implementing and enhancing Monday.com solutions tailored to your organization's needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <div className="mt-24"></div>
        <main className="flex-grow">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
