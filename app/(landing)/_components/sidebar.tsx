import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-gray-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
        <div className="flex w-full ml-4 mt-8">
          <a
            href="https://try.monday.com/wme"
            target="_blank"
            className="bg-[#5949d5] text-white py-4 px-6 rounded-xl flex w-56"
          >
            <p className="font-bold pr-2 text-sm md:text-md">Get</p>
            <img src="images/monday-com_only_logo.svg" alt="monday.com logo" width={35} />
            <p className="font-bold pl-2 text-sm md:text-md">monday.com</p>
          </a>
        </div>
        <div className="flex w-full ml-4 mt-4">
          <a
            href="https://try.monday.com/wme"
            target="_blank"
            className="bg-[#5949d5] text-black py-4 px-6 rounded-xl flex w-56"
          >
            <p className="font-bold text-sm">Book a Free Call</p>
          </a>
        </div>
      </div>
    </div>
  );
};
