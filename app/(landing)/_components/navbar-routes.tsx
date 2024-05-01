"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog/");

  return (
    <div className="flex flex-wrap justify-between items-center w-full  px-8 py-4">
      <a href="/">
        <Logo />
      </a>

      <div className="hidden md:flex justify-center flex-grow font-medium">
        <Link href="/">
          <p
            className={`px-4 py-2 ${
              pathname === "/"
                ? "text-[#5949d5] font-semibold"
                : "text-gray-700"
            }`}
          >
            Home
          </p>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black text-lg">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr]">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex w-full">
                      <a
                        href="/remote-services"
                        className="flex-1 py-2 px-2 text-sm rounded-lg hover:bg-gray-100 text-center"
                      >
                        Remote implementation
                      </a>
                    </div>
                    <div className="flex w-full">
                      <a
                        href="/on-site-implementation-packages"
                        className="flex-1 py-2 px-2 w-[200px] text-sm rounded-lg hover:bg-gray-100 text-center"
                      >
                        On-site consulting
                      </a>
                    </div>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="/stories-worth-telling">
          <p
            className={`px-4 py-2 ${
              pathname === "/stories-worth-telling"
                ? "text-[#5949d5] font-semibold"
                : "text-gray-700"
            }`}
          >
            Stories worth telling
          </p>
        </Link>
        <Link href="/blog">
          <p
            className={`px-4 py-2 ${
              pathname === "/blog"
                ? "text-[#5949d5] font-semibold"
                : "text-gray-700"
            }`}
          >
            Blog
          </p>
        </Link>
        <Link href="/portfolio-wme">
          <p
            className={`px-4 py-2 ${
              pathname === "/portfolio-wme"
                ? "text-[#5949d5] font-semibold"
                : "text-gray-700"
            }`}
          >
            Portfolio
          </p>
        </Link>
        <Link href="/apps">
          <p
            className={`px-4 py-2 ${
              pathname === "/apps"
                ? "text-[#5949d5] font-semibold"
                : "text-gray-700"
            }`}
          >
            Apps
          </p>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 mr-6 md:mt-0">
        <Link
          href="/contact-us"
          className="hidden md:flex bg-[#f4d752] text-black py-2 sm:py-4 px-4 sm:px-6 rounded-xl justify-center items-center"
        >
          <p className="font-bold text-sm">Book a Free Call</p>
        </Link>
      </div>

      <div>
        <a
          href="https://try.monday.com/wme"
          target="_blank"
          className="bg-[#5949d5] text-white py-2 px-4 rounded-xl flex items-center text-sm md:py-4 md:px-6 md:text-md"
        >
          <p className="font-bold pr-2 text-sm md:text-md">Try</p>
          {!isBlogPage && ( // Affiche l'image du logo uniquement si ce n'est pas la page du blog
            <img
              src="images/monday-com_only_logo.svg"
              alt="monday.com logo"
              width={30}
              className="pr-2"
            />
          )}
          <p className="font-bold text-sm md:text-md">monday.com</p>
        </a>
      </div>
    </div>
  );
};
