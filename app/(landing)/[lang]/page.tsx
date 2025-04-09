import { getDictionary } from "@/lib/dictionaries";
import IncitationButton from "../_components/incitation-button";
import { YouTubeVideo } from "../_components/monday-os-video";
import OrganizationUsingMonday from "../_components/organization-using-monday";
import OurServices from "../_components/our-services";
import MondayWorkOS from "../_components/use-monday-as-workos";
import HeroVideo from "../_components/hero-video";

interface PageProps {
  params: any;
}

export default async function Home({ params }: PageProps) {

  const lang = (params as { lang: string }).lang; // Forçage du type
  const dict = await getDictionary(lang);


  return (
    <div className="mx-auto max-w-7xl px-4">
      <IncitationButton dictionary={dict.incitationbutton} />
      <OurServices dictionary={dict.ourservices} />
      <div className="mb-8 mt-2">
        <OrganizationUsingMonday dictionary={dict.organizationusingmonday} />
      </div>
      <div>
        <HeroVideo dictionary={dict.herovideo} />
      </div>
      <div className="my-8">
        <MondayWorkOS dictionary={dict.mondayworkos} />
      </div>
    </div>
  );
}
