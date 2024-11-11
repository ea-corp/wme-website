"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { YouTubeVideo } from "./monday-os-video";

interface Logo {
  src: string;
  alt: string;
}

const logosLine1: Logo[] = [
  { src: "/images/logos/uber-logo.svg", alt: "Uber Logo" },
  { src: "/images/logos/adobe-logo.png", alt: "Adobe Logo" },
  { src: "/images/logos/shell-logo.png", alt: "Shell Logo" },
  {
    src: "/images/logos/schneider-electric-logo.png",
    alt: "Schneider Electric Logo",
  },
  { src: "/images/logos/universal-logo.png", alt: "Universal Logo" },
  { src: "/images/logos/costco-logo.png", alt: "Costco Logo" },
  { src: "/images/logos/ebay-logo.png", alt: "Ebay Logo" },
  {
    src: "/images/logos/general-electric-logo.png",
    alt: "General Electric Logo",
  },
  { src: "/images/logos/apple-logo.png", alt: "Apple Logo" },
  { src: "/images/logos/unilever-logo.png", alt: "Unilever Logo" },
  { src: "/images/logos/abbott-logo.png", alt: "Abbott Logo" },
  { src: "/images/logos/frontier-logo.png", alt: "Frontier Logo" },
  { src: "/images/logos/zippo-logo.png", alt: "Zippo Logo" },
  { src: "/images/logos/ironsource-logo.png", alt: "Iron Source Logo" },
  { src: "/images/logos/aero-mexico-logo.png", alt: "Aero Mexico Logo" },
];

const logosLine2: Logo[] = [
  { src: "/images/logos/wix-logo.png", alt: "Wix Logo" },
  { src: "/images/logos/fox-news-logo.png", alt: "Fox News Logo" },
  { src: "/images/logos/utbrain-logo.png", alt: "Utbrain Logo" },
  { src: "/images/logos/delta-logo.png", alt: "Delta Logo" },
  { src: "/images/logos/ibm-logo.png", alt: "IBM Logo" },
  { src: "/images/logos/wework-logo.png", alt: "Wework Logo" },
  { src: "/images/logos/marriott-logo.png", alt: "Marriott Logo" },
  { src: "/images/logos/corning-logo.png", alt: "Corning Logo" },
  { src: "/images/logos/tesla-logo.png", alt: "Tesla Logo" },
  { src: "/images/logos/paypal-logo.jpeg", alt: "Paypal Logo" },
  { src: "/images/logos/walmart-logo.png", alt: "Walmart Logo" },
  { src: "/images/logos/visa-logo.png", alt: "Visa Logo" },
  { src: "/images/logos/cross-river-logo.jpeg", alt: "Cross River Logo" },
  { src: "/images/logos/bbc-logo.png", alt: "BBC Logo" },
];

export default function OrganizationUsingMonday() {
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);

  const duplicatedLogosLine1: Logo[] = [...logosLine1, ...logosLine1, ...logosLine1];
  const duplicatedLogosLine2: Logo[] = [...logosLine2, ...logosLine2, ...logosLine2];

  const animateScroll = (carouselRef: React.RefObject<HTMLDivElement>) => {
    let scrollAmount = 0;

    const step = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
        carousel.scrollTo({ left: 0, behavior: "auto" });
      } else {
        carousel.scrollTo({ left: scrollAmount, behavior: "auto" });
        scrollAmount += 1;
      }

      requestAnimationFrame(step);
    };

    step();
  };

  useEffect(() => {
    animateScroll(carouselRef1);
    animateScroll(carouselRef2);
  }, []);

  return (
    <div>
      <div className="py-4 px-4 md:px-0">
        <h2 className="text-center text-gray-800 text-2xl md:text-3xl font-semibold mb-8 md:mb-16">
          Join over 152,000 leading organizations that use{" "}
          <br className="hidden md:block" />{" "}
          <a
            href="https://try.monday.com/wme"
            className="text-blue-500"
            target="_blank"
          >
            monday.com
          </a>{" "}
          to run their work
        </h2>

        <div className="hidden md:block">
          {[duplicatedLogosLine1, duplicatedLogosLine2].map((logos, index) => (
            <div
              key={index}
              ref={index === 0 ? carouselRef1 : carouselRef2}
              className="overflow-hidden whitespace-nowrap my-2"
            >
              <div className="flex">
                {logos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="inline-flex justify-center items-center px-4"
                    style={{ minWidth: "200px" }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex items-center justify-center">
          <Image
            src="/images/logos/all-logos.png"
            alt="Mobile Image"
            width={500}
            height={100}
            className="w-full max-w-[500px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-100 py-8 md:py-16 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Monday.com can be used as a work OS <br className="hidden md:block" /> for almost any business.
        </h2>
        <div className="w-full max-w-4xl px-4 md:px-0">
          <YouTubeVideo videoId="vQ2dfgeSJHU" />
        </div>
        <p className="text-center text-base md:text-lg py-8 px-4 md:px-0">
          Monday.com is a work operating system (Work OS).{" "}
          <br className="hidden md:block" />
          You can manage all types of workflow and processes in one place.
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center px-4 md:px-0">
          <a
            href="https://try.monday.com/wme"
            target="_blank"
            className="bg-[#5949d5] text-white py-3 md:py-4 px-4 md:px-6 rounded-xl flex items-center justify-center text-sm md:text-base"
          >
            <p className="font-bold">Start Free Trial</p>
          </a>
          <a
            href="/contact-us"
            className="bg-[#f4d752] text-black py-3 md:py-4 px-4 md:px-6 rounded-xl flex items-center justify-center text-sm md:text-base"
          >
            <p className="font-bold">Request a demo</p>
          </a>
        </div>
      </div>
    </div>
  );
}