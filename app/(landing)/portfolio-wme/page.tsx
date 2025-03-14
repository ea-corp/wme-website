"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X, Maximize, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
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

// Improved fullscreen image viewer
const FullscreenImage = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.25, 0.5);
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      e.preventDefault();
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setStartPos({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      e.preventDefault();
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && scale > 1 && e.touches.length === 1) {
      e.preventDefault();
      setPosition({
        x: e.touches[0].clientX - startPos.x,
        y: e.touches[0].clientY - startPos.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
      if (e.key === "0") handleReset();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 bg-background/10 backdrop-blur-sm p-2 rounded-full">
        <Button
          variant="outline"
          size="icon"
          className="bg-background/50 hover:bg-background/40 rounded-full"
          onClick={handleZoomIn}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-background/50 hover:bg-background/40 rounded-full"
          onClick={handleZoomOut}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-background/50 hover:bg-background/40 rounded-full"
          onClick={handleReset}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Close button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 z-50 right-4 bg-background/60 hover:bg-background/40 rounded-full"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>

      {/* Image container */}
      <div
        ref={imageRef}
        className={`relative w-full h-full overflow-hidden ${isDragging ? "cursor-grabbing" : scale > 1 ? "cursor-grab" : "cursor-default"
          }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="absolute transition-transform duration-100"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: "center",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={1200}
              height={800}
              className="object-contain max-h-[90vh]"
              unoptimized
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-xs text-white/60">
        {scale > 1 ? "Click and drag to move • Use buttons or +/- keys to zoom" : "Use buttons or +/- keys to zoom in"}
      </div>
    </div>
  );
};

// Update the main component
export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("Logistic");
  const [filterCategory, setFilterCategory] = useState<"Industry" | "Feature">("Industry");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  // Update the return JSX to include the new design and fullscreen functionality
  return (
    <div className="container mx-auto py-12 px-4 bg-gradient-to-b from-background to-background/80">
      <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
        Portfolio
      </h1>

      {/* Filters section with improved design */}
      <div className="mb-12 bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border/50">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="font-medium text-lg">Filter by:</span>
          <Select value={filterCategory} onValueChange={(value) => setFilterCategory(value as "Industry" | "Feature")}>
            <SelectTrigger className="w-[180px] bg-background/80 backdrop-blur-sm">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Industry">Industry</SelectItem>
              <SelectItem value="Feature">Feature</SelectItem>
            </SelectContent>
          </Select>

          {activeFilter && (
            <Button variant="outline" size="sm" onClick={clearFilters} className="ml-auto">
              <X className="h-4 w-4 mr-2" /> Clear filter
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mb-2">
          {filterCategories[filterCategory].map((tag) => (
            <Badge
              key={tag}
              variant={activeFilter === tag ? "default" : "outline"}
              className={`cursor-pointer py-2 px-4 text-sm transition-all duration-300 ${activeFilter === tag ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-primary/10"
                }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Render HumanResourcesPage if activeFilter is "Human Resources" */}
      {activeFilter === "Human Resources" ? (
        <HumanResourcesPage />
      ) : (
        <>
          {/* Projects grid with improved design - removed zoom button */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: any) => (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-border/50"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-500 ${hoveredProject === project.id ? "scale-110" : "scale-100"
                      }`}
                    onClick={() => setIsFullscreen(true)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: any) => (
                      <Badge
                        key={`${project.id}-${tag}`}
                        variant="secondary"
                        className={`cursor-pointer transition-all duration-300 ${activeFilter === tag
                          ? "bg-primary/20 text-primary hover:bg-primary/30"
                          : "hover:bg-primary/10"
                          }`}
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

          {/* Project detail dialog with improved design and discreet fullscreen button */}
          <Dialog
            open={selectedProject !== null && !isFullscreen}
            onOpenChange={(open) => {
              if (!open) {
                setSelectedProject(null);
              }
            }}
          >
            <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-md">
              {selectedProject && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      {selectedProject.tags.join(" • ")}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="relative">
                    <div className="relative h-[400px] w-full mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        onClick={() => setIsFullscreen(true)}
                      />
                      {/* Discreet fullscreen button in the corner */}
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute bottom-3 right-3 z-10 bg-background/40 hover:bg-background/60 backdrop-blur-sm rounded-full opacity-70 hover:opacity-100 transition-opacity"
                        onClick={() => setIsFullscreen(true)}
                      >
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{selectedProject.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.tags.map((tag) => (
                        <Badge
                          key={`dialog-${tag}`}
                          variant="secondary"
                          className={`cursor-pointer transition-all duration-300 ${activeFilter === tag
                            ? "bg-primary/20 text-primary hover:bg-primary/30"
                            : "hover:bg-primary/10"
                            }`}
                          onClick={() => setFilter(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevProject} className="group">
                        <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />{" "}
                        Previous
                      </Button>
                      <Button variant="outline" onClick={nextProject} className="group">
                        Next <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          {/* Improved fullscreen image viewer */}
          {selectedProject && isFullscreen && (
            <FullscreenImage
              src={selectedProject.image}
              alt={selectedProject.title}
              onClose={() => setIsFullscreen(false)}
            />
          )}

          {/* Show message if no projects match filters */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-card/50 backdrop-blur-sm rounded-xl shadow-sm border border-border/50">
              <h3 className="text-2xl font-medium mb-3">No projects match your filter</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filter criteria</p>
              <Button onClick={clearFilters} className="px-6">
                Clear filter
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
