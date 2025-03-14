"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X, Maximize } from "lucide-react";
import { projectsData } from "./_components/projectsData";
import HumanResourcesPage from "./_components/hr";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

// Define filter categories
const filterCategories = {
  Industry: ["Logistic", "Manufacturing", "Restaurant", "Real Estate", "Construction", "Marketing", "Human Resources"],
  Feature: [
    "Time tracking",
    "CRM",
    "Dashboard",
    "Make.com",
    "Map",
    "Operations/Checklist",
    "Integrations",
    "Automations",
    "Inventory",
    "Orders tracking",
    "Directory",
    "Cost Analysis",
    "Project Management",
  ],
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("Logistic"); // Default filter set to "Logistic"
  const [filterCategory, setFilterCategory] = useState<"Industry" | "Feature">("Industry");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedProject) return;

      if (event.key === "ArrowRight") {
        nextProject();
      } else if (event.key === "ArrowLeft") {
        prevProject();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  // Filter projects based on active filter
  const filteredProjects: any = activeFilter
    ? projectsData.filter((project) => project.tags.includes(activeFilter))
    : projectsData;

  // Set active filter and update filter category if necessary
  const setFilter = (tag: string) => {
    setActiveFilter(tag);
    if (filterCategories.Industry.includes(tag)) {
      setFilterCategory("Industry");
    } else if (filterCategories.Feature.includes(tag)) {
      setFilterCategory("Feature");
    }
  };

  // Clear active filter
  const clearFilters = () => {
    setActiveFilter("");
  };

  // Navigate to next project in dialog
  const nextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((project: any) => project.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  // Navigate to previous project in dialog
  const prevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((project: any) => project.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>

      {/* Filters section */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="font-medium">Filter by:</span>
          <Select value={filterCategory} onValueChange={(value) => setFilterCategory(value as "Industry" | "Feature")}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Industry">Industry</SelectItem>
              <SelectItem value="Feature">Feature</SelectItem>
            </SelectContent>
          </Select>

          {activeFilter && (
            <Button variant="outline" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-2" /> Clear filter
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {filterCategories[filterCategory].map((tag) => (
            <Badge
              key={tag}
              variant={activeFilter === tag ? "default" : "outline"}
              className="cursor-pointer py-2 px-4"
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Render ConstructionPage if activeFilter is "Human Resources" */}
      {activeFilter === "Human Resources" ? (
        <HumanResourcesPage />
      ) : (
        <>
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: any) => (
              <div
                key={project.id}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: any) => (
                      <Badge
                        key={`${project.id}-${tag}`}
                        variant="secondary"
                        className={`cursor-pointer ${activeFilter === tag ? "bg-black text-white hover:bg-black" : "hover:bg-black hover:text-white"}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setFilter(tag);
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project detail dialog */}
          <Dialog
            open={selectedProject !== null}
            onOpenChange={(open) => {
              if (!open) {
                setSelectedProject(null);
                setIsFullscreen(false);
              }
            }}
          >
            <DialogContent className={isFullscreen ? "max-w-[100vw] h-[100vh] p-0" : "max-w-4xl"}>
              {selectedProject && (
                <>
                  {isFullscreen ? (
                    <div className="relative w-full h-full bg-black flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-4 right-4 z-10 bg-background/80"
                        onClick={() => setIsFullscreen(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <Image
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <>
                      <DialogHeader>
                        <DialogTitle>{selectedProject.title}</DialogTitle>
                        <DialogDescription>{selectedProject.tags.join(" • ")}</DialogDescription>
                      </DialogHeader>
                      <div className="relative">
                        <div
                          className="relative h-[400px] w-full mb-4 cursor-pointer"
                          onClick={() => setIsFullscreen(true)}
                        >
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute top-2 right-2 z-10 bg-background/80"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsFullscreen(true);
                            }}
                          >
                            <Maximize className="h-4 w-4" />
                          </Button>
                          <Image
                            src={selectedProject.image || "/placeholder.svg"}
                            alt={selectedProject.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.tags.map((tag) => (
                            <Badge
                              key={`dialog-${tag}`}
                              variant="secondary"
                              className={`cursor-pointer ${activeFilter === tag ? "bg-black text-white" : ""}`}
                              onClick={() => setFilter(tag)}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between">
                          <Button variant="outline" onClick={prevProject}>
                            <ChevronLeft className="h-4 w-4 mr-2" /> Previous
                          </Button>
                          <Button variant="outline" onClick={nextProject}>
                            Next <ChevronRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </DialogContent>
          </Dialog>

          {/* Show message if no projects match filters */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No projects match your filter</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filter criteria</p>
              <Button onClick={clearFilters}>Clear filter</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
