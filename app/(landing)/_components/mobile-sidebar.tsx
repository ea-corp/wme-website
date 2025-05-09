"use client";
import { useState } from "react";
import { Menu, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Logo } from "./logo";
import Link from "next/link";
import Image from "next/image";

interface Route {
  label: string;
  href: string;
}

const guestRoutes: Route[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services - Remote Services",
    href: "/remote-services",
  },
  {
    label: "Services - On Site Consulting",
    href: "/on-site-implementation-packages",
  },
  {
    label: "Stories Worth Telling",
    href: "/stories-worth-telling",
  },
  {
    label: "Our Team",
    href: "/our-team",
  },
  {
    label: "Portfolio",
    href: "/portfolio-wme",
  },
  {
    label: "Apps",
    href: "/apps",
  },
];

interface SidebarItemProps {
  label: string;
  href: string;
}

const SidebarItem = ({ label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={`
        flex items-center gap-x-2 w-full text-slate-500 font-bold text-sm pl-6 transition-all hover:bg-slate-300/20
        ${isActive && "text-[#5949d5] font-bold bg-sky-200/20 hover:bg-sky-200/20"}
      `}
    >
      <div
        className={`
        "ml-auto opacity-0 border-2 border-sky-400 h-full transition-all",
        ${isActive && "opacity-100"}
        `}
      />{" "}
      <div className="flex items-center gap-x-2 py-4">{label}</div>
    </button>
  );
};

export const MobileSidebar = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (value: string) => {
    // Gérer le cas de la route racine et des autres routes
    const newPath = pathname === `/${lang}`
      ? `/${value}`
      : pathname.replace(`/${lang}/`, `/${value}/`);
    router.push(newPath);
  };

  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu className="text-gray-800 font-bold" />
      </SheetTrigger>
      <SheetContent side="right" className="p-0 bg-white">
        <div className="h-full border-r flex flex-col overflow-y-auto bg-gray-white shadow-sm">
          <div className="p-6">
            <Link href="/">
              <SheetClose>
                <Logo />
              </SheetClose>
            </Link>
          </div>

          <div className="px-6 mb-4">
            <Select onValueChange={handleLanguageChange} defaultValue={lang}>
              <SelectTrigger className="w-[100px]">
                <div className="flex items-center">
                  <SelectValue placeholder="Language" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/english_flag.svg"
                      alt="English"
                      width={20}
                      height={15}
                      className="rounded-sm"
                    />
                    EN
                  </div>

                </SelectItem>
                <SelectItem value="fr" >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/french_flag.svg"
                      alt="Français"
                      width={20}
                      height={15}
                      className="rounded-sm"
                    />
                    FR
                  </div>

                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col w-full">
            {guestRoutes.map((route, index) => (
              <SheetClose key={index}>
                <SidebarItem label={route.label} href={route.href} />
              </SheetClose>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
