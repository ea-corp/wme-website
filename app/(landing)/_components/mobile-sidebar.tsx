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
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Portfolio",
    href: "/portfolio-wme",
  },
  {
    label: "Apps",
    href: "/apps",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

interface SidebarItemProps {
  label: string;
  href: string;
  onClick: () => void;
}

const SidebarItem = ({ label, href, onClick }: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  return (
    <button
      onClick={onClick}
      type="button"
      className={`
        flex items-center w-full px-6 py-4 text-left transition-colors duration-200
        ${isActive 
          ? "text-[#5949d5] font-bold bg-gray-100" 
          : "text-gray-700 hover:bg-gray-50"
        }
      `}
    >
      <span className="text-base">{label}</span>
    </button>
  );
};

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="md:hidden p-4 hover:opacity-75 transition">
        <Menu className="h-6 w-6 text-gray-800" />
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-[300px] bg-white">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Logo />
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto">
            {guestRoutes.map((route) => (
              <SidebarItem
                key={route.href}
                label={route.label}
                href={route.href}
                onClick={() => handleNavigation(route.href)}
              />
            ))}
          </div>
          <div className="p-6 border-t">
            <a
              href="https://try.monday.com/wme"
              target="_blank"
              className="bg-[#5949d5] text-white py-3 px-4 rounded-xl flex items-center justify-center text-sm transition-colors duration-200 hover:bg-[#5949d5]/90"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-bold pr-2">Try</span>
              <img
                src="images/monday-com_only_logo.svg"
                alt="monday.com logo"
                className="w-6 h-6 pr-2"
              />
              <span className="font-bold">monday.com</span>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};