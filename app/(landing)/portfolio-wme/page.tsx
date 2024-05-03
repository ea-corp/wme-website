import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogisticPage from "./_components/logistic";
import ManufacturingPage from "./_components/manufacturing";
import RestaurantPage from "./_components/restaurant";
import RealEstatePage from "./_components/real-estate";
import ConstructionPage from "./_components/construction";
import MarketingAgencyPage from "./_components/marketing-agency";
import HrPage from "./_components/hr";
import TimeTrackingPage from "./_components/time-tracking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Workflow Made Easy",
  description:
    "Discover our portfolio of exceptional workflow services, tailored to meet diverse client needs. From productivity enhancements to cost reduction, see how we've optimized processes for businesses across sectors. Trust our expertise to turn your challenges into opportunities.",
};

export default function PortfolioWME() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="bg-gray-100 text-center py-16">
        <h2 className="text-4xl font-semibold">Portfolio</h2>
      </div>
      <div>
        <Tabs
          defaultValue="logistic"
          className="flex flex-col items-center justify-center py-8"
        >
          <TabsList className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
            <div className="bg-gray-100 md:bg-transparent text-center py-4 md:py-0">
              <TabsTrigger value="logistic" className="whitespace-nowrap">
                Logistic
              </TabsTrigger>
              <TabsTrigger value="manufacturing" className="whitespace-nowrap">
                Manufacturing
              </TabsTrigger>
              <TabsTrigger value="restaurant" className="whitespace-nowrap">
                Restaurant
              </TabsTrigger>
              <TabsTrigger value="real-estate" className="whitespace-nowrap">
                Real Estate
              </TabsTrigger>
              <TabsTrigger value="construction" className="whitespace-nowrap">
                Construction
              </TabsTrigger>
              <TabsTrigger
                value="marketing-agency"
                className="whitespace-nowrap"
              >
                Marketing Agency
              </TabsTrigger>
              <TabsTrigger value="hr" className="whitespace-nowrap">
                HR
              </TabsTrigger>
              <TabsTrigger value="time-tracking" className="whitespace-nowrap">
                Time tracking
              </TabsTrigger>
            </div>
          </TabsList>
          <div className="mt-32 md:mt-16 mb-16">
            <TabsContent value="logistic">
              <LogisticPage />
            </TabsContent>
            <TabsContent value="manufacturing">
              <ManufacturingPage />
            </TabsContent>
            <TabsContent value="restaurant">
              <RestaurantPage />
            </TabsContent>
            <TabsContent value="real-estate">
              <RealEstatePage />
            </TabsContent>
            <TabsContent value="construction">
              <ConstructionPage />
            </TabsContent>
            <TabsContent value="marketing-agency">
              <MarketingAgencyPage />
            </TabsContent>
            <TabsContent value="hr">
              <HrPage />
            </TabsContent>
            <TabsContent value="time-tracking">
              <TimeTrackingPage />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
