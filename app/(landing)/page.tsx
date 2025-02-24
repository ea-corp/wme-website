import IncitationButton from "./_components/incitation-button";
import { YouTubeVideo } from "./_components/monday-os-video";
import OrganizationUsingMonday from "./_components/organization-using-monday";
import OurServices from "./_components/our-services";
import MondayWorkOS from "./_components/use-monday-as-workos";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <IncitationButton />
      <OurServices />
      <div className="mb-8 mt-2">
        <OrganizationUsingMonday />
      </div>
      <div>
        <div className="flex flex-col items-center bg-gray-100 py-8 md:py-16 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Monday.com can be used as a work OS <br className="hidden md:block" /> for almost any business.
          </h2>
          <div className="w-full max-w-4xl px-4 md:px-0">
            <YouTubeVideo videoId="vQ2dfgeSJHU" />
          </div>
          <p className="text-center text-base md:text-lg py-8 px-4 md:px-0">
            Monday.com is a work operating system (Work OS).{" "}
            <br className="hidden md:block" />
            You can manage all types of workflow and processes in one place.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center px-4 md:px-0">
            <a
              href="https://try.monday.com/wme"
              target="_blank"
              className="bg-[#5949d5] text-white py-3 md:py-4 px-4 md:px-6 rounded-xl flex items-center justify-center text-sm md:text-base"
            >
              <p className="font-bold">Start Free Trial</p>
            </a>
            <a
              href="/contact-us"
              className="bg-[#f4d752] text-black py-3 md:py-4 px-4 md:px-6 rounded-xl flex items-center justify-center text-sm md:text-base"
            >
              <p className="font-bold">Request a demo</p>
            </a>
          </div>
        </div>
      </div>
      <div className="my-8">
        <MondayWorkOS />
      </div>
    </div>
  );
}
