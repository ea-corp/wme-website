"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "./logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";
import Image from "next/image";

export const NavbarRoutes = ({ dict, lang }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const isBlogPage = pathname.startsWith(`/${lang}/blog`);
  const isExcludedPath =
    pathname.startsWith("/remote-services/usd") ||
    pathname.startsWith("/on-site-implementation-packages/usd");

  const handleLanguageChange = (value: string) => {
    // Gérer le cas de la route racine et des autres routes
    const newPath = pathname === `/${lang}`
      ? `/${value}`
      : pathname.replace(`/${lang}/`, `/${value}/`);
    router.push(newPath);
  };

  return (
    <div className="flex flex-wrap justify-between items-center w-full px-4 md:px-8 py-2 md:py-4">
      <Link href={`/${lang}`} className="flex-shrink-0">
        <Logo />
      </Link>

      <div className="hidden md:flex justify-center flex-grow font-medium space-x-2 lg:space-x-4">
        <NavigationMenu delayDuration={100000000}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 text-sm lg:text-base hover:text-[#5949d5]">
                {dict.navbar.services}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[240px]">
                  <li>
                    <Link
                      href={`/${lang}/remote-services`}
                      className="block py-2 px-2 text-sm rounded-lg hover:bg-gray-100"
                    >
                      {dict.navbar.remoteImplementation}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${lang}/on-site-implementation-packages`}
                      className="block py-2 px-2 text-sm rounded-lg hover:bg-gray-100"
                    >
                      {dict.navbar.onSiteConsulting}
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href={`/${lang}/stories-worth-telling`}>
          <p
            className={`px-2 lg:px-4 py-2 text-sm lg:text-base transition-colors duration-200 ${pathname === "/stories-worth-telling"
              ? "text-[#5949d5] font-semibold"
              : "text-gray-700 hover:text-[#5949d5]"
              }`}
          >
            {dict.navbar.storiesWorthTelling}
          </p>
        </Link>
        <Link href={`/${lang}/our-team`}>
          <p
            className={`px-2 lg:px-4 py-2 text-sm lg:text-base transition-colors duration-200 ${pathname === "/our-team"
              ? "text-[#5949d5] font-semibold"
              : "text-gray-700 hover:text-[#5949d5]"
              }`}
          >
            {dict.navbar.ourTeam}
          </p>
        </Link>

        <Link href={`/${lang}/portfolio-wme`}>
          <p
            className={`px-2 lg:px-4 py-2 text-sm lg:text-base transition-colors duration-200 ${pathname === "/portfolio-wme"
              ? "text-[#5949d5] font-semibold"
              : "text-gray-700 hover:text-[#5949d5]"
              }`}
          >
            {dict.navbar.portfolio}
          </p>
        </Link>
        <Link href={`/${lang}/apps`}>
          <p
            className={`px-2 lg:px-4 py-2 text-sm lg:text-base transition-colors duration-200 ${pathname === "/apps"
              ? "text-[#5949d5] font-semibold"
              : "text-gray-700 hover:text-[#5949d5]"
              }`}
          >
            {dict.navbar.apps}
          </p>
        </Link>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-4">
        <div className="hidden md:block">
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


        <Link
          href={`/${lang}/contact-us`}
          className="hidden md:flex bg-[#f4d752] text-black py-2 px-4 lg:px-6 rounded-xl items-center transition-colors duration-200 hover:bg-[#f4d752]/90"
        >
          <p className="font-bold text-sm">
            {dict.navbar.contactUs}
          </p>
        </Link>

        <a
          href="https://try.monday.com/wme"
          target="_blank"
          className="bg-[#5949d5] text-white py-2 px-3 lg:px-4 rounded-xl flex items-center text-sm transition-colors duration-200 hover:bg-[#5949d5]/90"
        >
          <p className="font-bold text-sm">
            {dict.navbar.try}
          </p>
          {!isBlogPage && !isExcludedPath && (
            <img
              src="/images/monday-com_only_logo.svg"
              alt="monday.com logo"
              className="w-2 h-2 lg:w-8 mx-1 md:mx-0"
            />
          )}
          <p className="font-bold text-sm">monday.com</p>
        </a>
      </div>
    </div>
  );
};