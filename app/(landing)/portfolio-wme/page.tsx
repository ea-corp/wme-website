"use client";
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import FilteredProjects from "./_components/filtered-projects";

const filterData = {
  industry: [
    { id: "Logistic", label: "Logistic" },
    { id: "Manufacturing", label: "Manufacturing" },
    { id: "Restaurant", label: "Restaurant" },
    { id: "Real Estate", label: "Real Estate" },
    { id: "Construction", label: "Construction" },
    { id: "Marketing", label: "Marketing" },
    { id: "Human Resources", label: "Human Resources" },
  ],
  feature: [
    { id: "Time tracking", label: "Time tracking" },
    { id: "AI", label: "AI" },
    { id: "CRM", label: "CRM" },
    { id: "Dashboard", label: "Dashboard" },
    { id: "Email Activities", label: "Email Activities" },
    { id: "Make.com", label: "Make.com" },
    { id: "Map", label: "Map" },
    { id: "API", label: "API" },
    { id: "Operations/Checklist", label: "Operations/Checklist" },
    { id: "Integrations", label: "Integrations" },
    { id: "Automations", label: "Automations" },
    { id: "Inventory", label: "Inventory" },
    { id: "Orders tracking", label: "Orders tracking" },
    { id: "Directory", label: "Directory" },
    { id: "Cost Analysis", label: "Cost Analysis" },
    { id: "Project Management", label: "Project Management" }
  ],
};

const PortfolioWME = () => {
  const [filterType, setFilterType] = useState<keyof typeof filterData>("industry");
  const [selectedFilter, setSelectedFilter] = useState("Logistic");

  useEffect(() => {
    console.log("Filter type changed:", filterType);
    setSelectedFilter((prevFilter) => {
      if (filterData[filterType][0].id !== prevFilter) {
        return filterData[filterType][0].id;
      }
      return prevFilter;
    });
  }, [filterType]);

  useEffect(() => {
    console.log("Selected filter changed:", selectedFilter);
  }, [selectedFilter]);

  return (
    <div>
      <div className="bg-gray-100 text-center py-16">
        <h2 className="text-4xl font-semibold">Portfolio</h2>
      </div>
      <div>
        <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="flex flex-col items-center justify-center py-8">
          <div className="flex items-center justify-center mb-4 gap-4">
            <span className="text-sm font-medium">Filter by</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="capitalize">
                  {filterType}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup value={filterType} onValueChange={(value) => setFilterType(value as keyof typeof filterData)}>
                  <DropdownMenuRadioItem value="industry">Industry</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="feature">Feature</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <TabsList className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
            <div className="bg-gray-100 md:bg-transparent text-center py-4 md:py-0">
              {filterData[filterType].map((filter) => (
                <TabsTrigger key={filter.id} value={filter.id} className="whitespace-nowrap flex-1 min-w-[120px]">
                  {filter.label}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          <div className="mt-32 md:mt-16 mb-16">
            <FilteredProjects selectedFilter={selectedFilter} />
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PortfolioWME;
