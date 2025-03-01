"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogisticPage from "./_components/logistic";
import ManufacturingPage from "./_components/manufacturing";
import RestaurantPage from "./_components/restaurant";
import RealEstatePage from "./_components/real-estate";
import ConstructionPage from "./_components/construction";
import MarketingAgencyPage from "./_components/marketing-agency";
import HrPage from "./_components/hr";
import TimeTrackingPage from "./_components/time-tracking";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CrmPage from "./_components/crm";
import DashboardsPage from "./_components/dashboards";
import EmailActivitiesPage from "./_components/email-activities";
import MakeIntegrationsPage from "./_components/make-integrations";
import MapPage from "./_components/map";
import ApiPage from "./_components/api";
import AiPage from "./_components/ai";

// Définition des types de filtres
type FilterType = "industry" | "feature";

// Définition des données pour chaque type de filtre
const filterData = {
  industry: [
    { id: "logistic", label: "Logistic" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "restaurant", label: "Restaurant" },
    { id: "real-estate", label: "Real Estate" },
    { id: "construction", label: "Construction" },
    { id: "marketing-agency", label: "Marketing" },
    { id: "hr", label: "Human Resources" },
  ],
  feature: [
    { id: "time-tracking", label: "Time Tracking" },
    { id: "ai", label: "AI" },
    { id: "crm", label: "CRM" },
    { id: "dashboards", label: "Dashboards" },
    { id: "email-activities", label: "Email Activities" },
    { id: "make-integrations", label: "Make.com" },
    { id: "map", label: "Map" },
    { id: "api", label: "API" },
  ],
};

export default function PortfolioWME() {
  // État pour suivre le type de filtre actif
  const [filterType, setFilterType] = useState<FilterType>("industry");
  // État pour suivre la valeur de filtre sélectionnée
  const [selectedFilter, setSelectedFilter] = useState("logistic");

  // Mettre à jour le filtre sélectionné lorsque le type de filtre change
  useEffect(() => {
    // Sélectionner le premier filtre du type actif
    setSelectedFilter(filterData[filterType][0].id);
  }, [filterType]);

  // Fonction pour rendre le contenu en fonction du filtre sélectionné
  const renderContent = () => {
    switch (selectedFilter) {
      // Industries
      case "logistic":
        return <LogisticPage />;
      case "manufacturing":
        return <ManufacturingPage />;
      case "restaurant":
        return <RestaurantPage />;
      case "real-estate":
        return <RealEstatePage />;
      case "construction":
        return <ConstructionPage />;
      case "marketing-agency":
        return <MarketingAgencyPage />;
      case "hr":
        return <HrPage />;

      // Features
      case "time-tracking":
        return <TimeTrackingPage />;
      case "ai":
        return <AiPage />;
      case "crm":
        return <CrmPage />;
      case "dashboards":
        return <DashboardsPage />;
      case "email-activities":
        return <EmailActivitiesPage />;
      case "make-integrations":
        return <MakeIntegrationsPage />;
      case "map":
        return <MapPage />;
      case "api":
        return <ApiPage />;
      default:
        return <LogisticPage />;
    }
  };

  return (
    <div>
      <div className="bg-gray-100 text-center py-16">
        <h2 className="text-4xl font-semibold">Portfolio</h2>
      </div>
      <div>
        <Tabs
          value={selectedFilter}
          onValueChange={setSelectedFilter}
          className="flex flex-col items-center justify-center py-8"
        >
          <div className="flex items-center justify-center mb-4 gap-4">
            <span className="text-sm font-medium">Filter by</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="capitalize">
                  {filterType}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup
                  value={filterType}
                  onValueChange={(value) => setFilterType(value as FilterType)}
                >
                  <DropdownMenuRadioItem value="industry">
                    Industry
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="feature">
                    Feature
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <TabsList className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
            <div className="bg-gray-100 md:bg-transparent text-center py-4 md:py-0">
              {filterData[filterType].map((filter) => (
                <TabsTrigger
                  key={filter.id}
                  value={filter.id}
                  className="whitespace-nowrap flex-1 min-w-[120px]"
                >
                  {filter.label}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>

          <div className="mt-32 md:mt-16 mb-16">
            {renderContent()}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
