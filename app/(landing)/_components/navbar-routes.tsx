"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const NavbarRoutes = ({ dict, lang }: any) => {
  const pathname = usePathname();

  const isBlogPage = pathname.startsWith(`/${lang}/blog`);
  const isExcludedPath =
    pathname.startsWith("/remote-services/usd") ||
    pathname.startsWith("/on-site-implementation-packages/usd");

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
                <ul className="grid gap-3 p-4 w-[200px]">
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
        {/* 
        <NavigationMenu delayDuration={100000000} >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 text-md">
                About us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr]">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex w-full">
                      <a
                        href="/our-team"
                        className="flex-1 py-2 px-2 text-sm rounded-lg hover:bg-gray-100"
                      >
                        Our Team
                      </a>
                    </div>
                    <div className="flex w-full">
                      <a
                        href="/blog"
                        className="flex-1 py-2 px-2 w-[180px] text-sm rounded-lg hover:bg-gray-100"
                      >
                        Our Blog
                      </a>
                    </div>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
            */}

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
        <Link
          href={`/${lang}/contact-us`}
          className="hidden md:flex bg-[#f4d752] text-black py-2 px-4 lg:px-6 rounded-xl items-center transition-colors duration-200 hover:bg-[#f4d752]/90"
        >
          <p className="font-bold text-sm">                      {dict.navbar.contactUs}
          </p>
        </Link>

        <a
          href="https://try.monday.com/wme"
          target="_blank"
          className="bg-[#5949d5] text-white py-2 px-3 lg:px-4 rounded-xl flex items-center text-sm transition-colors duration-200 hover:bg-[#5949d5]/90"
        >
          <p className="font-bold pr-2 text-sm">                      {dict.navbar.try}
          </p>
          {!isBlogPage && !isExcludedPath && (
            <img
              src="images/monday-com_only_logo.svg"
              alt="monday.com logo"
              className="w-6 h-6 lg:w-8 lg:h-8 pr-2"
            />
          )}
          <p className="font-bold text-sm">monday.com</p>
        </a>
      </div>
    </div>
  );
};