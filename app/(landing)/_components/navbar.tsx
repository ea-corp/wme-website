import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoutes } from "./navbar-routes";

interface NavbarProps {
  dict: any; // (ou mieux : le vrai type de ton dictionnaire si tu l'as)
  lang: any;
}

export const Navbar = ({ dict, lang }: NavbarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex items-center bg-white shadow">
      <NavbarRoutes dict={dict} lang={lang} />
      <MobileSidebar />
    </div>
  );
};
