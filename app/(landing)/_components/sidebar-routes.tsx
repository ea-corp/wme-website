"use client";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
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
];

export const SidebarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem key={route.href} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
