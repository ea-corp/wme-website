"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import Link from "next/link";

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
    label: "Stories worth telling",
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

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu className="text-gray-800 font-bold" />
      </SheetTrigger>
      <SheetContent side="right" className="p-0 bg-white">
        <div className="h-full border-r flex flex-col overflow-y-auto bg-gray-white shadow-sm">
          <div className="p-6">
           
               <Link href="/"> <SheetClose>
            <Logo />   </SheetClose>
            </Link>
         
           
          </div>

          <div className="flex flex-col w-full">
            {guestRoutes.map(
              (
                route,
                index, // Ajout de la prop `key` ici
              ) => (
                <SheetClose key={index}>
                  {" "}
                  {/* Utilisation de `index` comme clé */}
                  <SidebarItem label={route.label} href={route.href} />
                </SheetClose>
              ),
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
