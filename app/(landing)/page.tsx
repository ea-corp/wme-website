import IncitationButton from "./_components/incitation-button";
import OrganizationUsingMonday from "./_components/organization-using-monday";
import OurServices from "./_components/our-services";
import MondayWorkOS from "./_components/use-monday-as-workos";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <IncitationButton />
      <div className="my-8">
        <OrganizationUsingMonday />
      </div>
      <div className="my-8">
        <MondayWorkOS />
      </div>
      <div>
        <OurServices />
      </div>
    </div>
  );
}
