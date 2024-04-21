import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoutes } from "./navbar-routes";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex items-center bg-white shadow">
      <NavbarRoutes />
      <MobileSidebar />
    </div>
  );
};
