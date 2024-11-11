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

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog/");
  const isExcludedPath = 
    pathname.startsWith("/remote-services/usd") || 
    pathname.startsWith("/on-site-implementation-packages/usd");

  return (
    <div className="flex flex-wrap justify-between items-center w-full px-4 md:px-8 py-2 md:py-4">
      <Link href="/" className="flex-shrink-0">
        <Logo />
      </Link>

      <div className="hidden md:flex justify-center flex-grow font-medium space-x-2 lg:space-x-4">
        <Link href="/">
          <p
            className={`px-2 lg:px-4 py-2 text-sm lg:text-base transition-colors duration-200 ${
              pathname === "/"
                ? "text-[#5949d5] font-semibold"
                : "text-gray-700 hover:text-[#5949d5]"
            }`}
          >
            Home
          </p>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 text-sm lg:text-base hover:text-[#5949d5]">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[200px]">
                  <li>
                    <Link
                      href="/remote-services"
                      className="block py-2 px-2 text-sm rounded-lg hover:bg-gray-100"
                    >
                      Remote implementation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/on-site-implementation-packages"
                      className="block py-2 px-2 text-sm rounded-lg hover:bg-gray-100"
                    >
                      On-site consulting
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="/stories-worth-telling">
          <p
            className={`px-2 lg:px-4 py-2 text-sm lg:text-base transition-colors duration-200 ${
              pathname === "/stories-worth-telling"
                ? "text-[#5949d5] font-semibold"
                : "text-gray-700 hover:text-[#5949d5]"
            }`}
          >
            Stories worth telling
          </p>
        </Link>
        <Link href="/blog">
          <p
            className={`px-2 lg:px-4 py-2 text-sm lg:text-base transition-colors duration-200 ${
              pathname === "/blog"
                ? "text-[#5949d5] font-semibold"
                : "text-gray-700 hover:text-[#5949d5]"
            }`}
          >
            Blog
          </p>
        </Link>
        <Link href="/portfolio-wme">
          <p
            className={`px-2 lg:px-4 py-2 text-sm lg:text-base transition-colors duration-200 ${
              pathname === "/portfolio-wme"
                ? "text-[#5949d5] font-semibold"
                : "text-gray-700 hover:text-[#5949d5]"
            }`}
          >
            Portfolio
          </p>
        </Link>
        <Link href="/apps">
          <p
            className={`px-2 lg:px-4 py-2 text-sm lg:text-base transition-colors duration-200 ${
              pathname === "/apps"
                ? "text-[#5949d5] font-semibold"
                : "text-gray-700 hover:text-[#5949d5]"
            }`}
          >
            Apps
          </p>
        </Link>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-4">
        <Link
          href="/contact-us"
          className="hidden md:flex bg-[#f4d752] text-black py-2 px-4 lg:px-6 rounded-xl items-center transition-colors duration-200 hover:bg-[#f4d752]/90"
        >
          <p className="font-bold text-sm">Contact us</p>
        </Link>

        <a
          href="https://try.monday.com/wme"
          target="_blank"
          className="bg-[#5949d5] text-white py-2 px-3 lg:px-4 rounded-xl flex items-center text-sm transition-colors duration-200 hover:bg-[#5949d5]/90"
        >
          <p className="font-bold pr-2 text-sm">Try</p>
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