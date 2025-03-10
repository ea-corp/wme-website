"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Filter } from 'lucide-react'
import FilteredProjects from "./_components/filtered-projects"

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
    { id: "CRM", label: "CRM" },
    { id: "Dashboard", label: "Dashboard" },
    { id: "Make.com", label: "Make.com" },
    { id: "Map", label: "Map" },
    { id: "Operations/Checklist", label: "Operations/Checklist" },
    { id: "Integrations", label: "Integrations" },
    { id: "Automations", label: "Automations" },
    { id: "Inventory", label: "Inventory" },
    { id: "Orders tracking", label: "Orders tracking" },
    { id: "Directory", label: "Directory" },
    { id: "Cost Analysis", label: "Cost Analysis" },
    { id: "Project Management", label: "Project Management" },
  ],
}

const PortfolioWME = () => {
  const [filterType, setFilterType] = useState<keyof typeof filterData>("industry")
  const [selectedFilter, setSelectedFilter] = useState(filterData.industry[0].id)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Update selected filter when filter type changes
  useEffect(() => {
    setSelectedFilter(filterData[filterType][0].id)
  }, [filterType])

  return (
    <div className="w-full">
      {/* Hero section */}
      <div className="bg-muted py-16 text-center">
        <h2 className="text-4xl font-semibold">Portfolio</h2>
      </div>

      {/* Filter section */}
      <div className="container mx-auto px-4 py-8">
        {/* Filter type selector */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Filter by</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="capitalize">
                  {filterType}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuRadioGroup
                  value={filterType}
                  onValueChange={(value) => setFilterType(value as keyof typeof filterData)}
                >
                  <DropdownMenuRadioItem value="industry">Industry</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="feature">Feature</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile filter button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Mobile filter dropdown */}
        <div
          className={`mb-6 overflow-hidden transition-all duration-300 md:hidden ${showMobileFilters ? "max-h-96" : "max-h-0"
            }`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {filterData[filterType].find((f) => f.id === selectedFilter)?.label || "Select filter"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
              <DropdownMenuRadioGroup value={selectedFilter} onValueChange={setSelectedFilter}>
                {filterData[filterType].map((filter) => (
                  <DropdownMenuRadioItem key={filter.id} value={filter.id}>
                    {filter.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop filter pills */}
        <div className="mb-8 hidden md:block">
          <div className="flex flex-wrap gap-2">
            {filterData[filterType].map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                className="rounded-full px-4 py-1 text-sm transition-all"
                onClick={() => setSelectedFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Selected filter indicator for mobile */}
        <div className="mb-6 md:hidden">
          <p className="text-sm text-muted-foreground">
            Filtered by:{" "}
            <span className="font-medium text-foreground">
              {filterData[filterType].find((f) => f.id === selectedFilter)?.label}
            </span>
          </p>
        </div>

        {/* Projects display */}
        <div className="mt-8">
          <FilteredProjects selectedFilter={selectedFilter} />
        </div>
      </div>
    </div>
  )
}

export default PortfolioWME
