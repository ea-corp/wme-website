"use client"

import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react"
import FullscreenImageViewer from "./FullScreen"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

type Project = {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    section?: string
}

export default function Portfolio({ dict }: { dict: any }) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [activeFilter, setActiveFilter] = useState<string>(dict.portfolio.filterCategories.Industry[0])
    const [filterCategory, setFilterCategory] = useState<"Industry" | "Feature">("Industry")
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [zoomLevel, setZoomLevel] = useState(1)
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const [transformOrigin, setTransformOrigin] = useState({ x: 0.5, y: 0.5 }) // Default center
    const dialogImageRef = useRef<HTMLDivElement>(null)
    const imageContainerRef = useRef<HTMLDivElement>(null)
    const [touchStart, setTouchStart] = useState({ x: 0, y: 0 })
    const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 })
    const [isSwiping, setIsSwiping] = useState(false)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!selectedProject) return

            if (event.key === "ArrowRight") {
                nextProject()
            } else if (event.key === "ArrowLeft") {
                prevProject()
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [selectedProject])

    // Filter projects based on active filter
    const filteredProjects: any = activeFilter
        ? dict.portfolio.projects.filter((project: any) => project.tags.includes(activeFilter))
        : dict.portfolio.projects

    // Group projects by section if the active filter is an industry
    const groupedProjects =
        activeFilter === "Manufacturing" || activeFilter === "Real Estate" || activeFilter === "Human Resources"
            ? filteredProjects.reduce((acc: any, project: any) => {
                const section = project.section || ""
                if (!acc[section]) {
                    acc[section] = []
                }
                acc[section].push(project)
                return acc
            }, {})
            : { "": filteredProjects }

    // Set active filter and update filter category if necessary
    const setFilter = (tag: string) => {
        setActiveFilter(tag)
        if (dict.portfolio.filterCategories.Industry.includes(tag)) {
            setFilterCategory("Industry")
        } else if (dict.portfolio.filterCategories.Feature.includes(tag)) {
            setFilterCategory("Feature")
        }

        // Close the dialog if it's open
        setDialogOpen(false)
    }

    // Clear active filter
    const clearFilters = () => {
        setActiveFilter("")
    }

    // Navigate to next project in dialog
    const nextProject = () => {
        if (!selectedProject) return
        const currentIndex = filteredProjects.findIndex((project: any) => project.id === selectedProject.id)
        const nextIndex = (currentIndex + 1) % filteredProjects.length
        setSelectedProject(filteredProjects[nextIndex])
        // Reset zoom when changing projects
        resetZoom()
    }

    // Navigate to previous project in dialog
    const prevProject = () => {
        if (!selectedProject) return
        const currentIndex = filteredProjects.findIndex((project: any) => project.id === selectedProject.id)
        const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
        setSelectedProject(filteredProjects[prevIndex])
        // Reset zoom when changing projects
        resetZoom()
    }

    // Reset zoom and position
    const resetZoom = () => {
        setZoomLevel(1)
        setImagePosition({ x: 0, y: 0 })
        setTransformOrigin({ x: 0.5, y: 0.5 })
    }

    // Handle mouse wheel zoom in dialog - zoom at cursor position
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault()

        if (!imageContainerRef.current) return

        // Get container dimensions and position
        const container = imageContainerRef.current
        const rect = container.getBoundingClientRect()

        // Calculate cursor position relative to the image (0 to 1)
        const cursorX = (e.clientX - rect.left) / rect.width
        const cursorY = (e.clientY - rect.top) / rect.height

        // Store the cursor position as the transform origin
        setTransformOrigin({ x: cursorX, y: cursorY })

        // Calculate the point under cursor before zoom
        const pointX = (cursorX - 0.5) * rect.width
        const pointY = (cursorY - 0.5) * rect.height

        const prevZoom = zoomLevel
        let newZoom = prevZoom

        if (e.deltaY < 0) {
            // Zoom in
            newZoom = Math.min(prevZoom + 0.1, 3)
        } else {
            // Zoom out
            newZoom = Math.max(prevZoom - 0.1, 1)
            if (newZoom === 1) {
                resetZoom()
                return
            }
        }

        setZoomLevel(newZoom)

        // Adjust position to keep the point under cursor
        if (newZoom !== 1) {
            const scaleFactor = newZoom / prevZoom
            const newPointX = pointX * scaleFactor
            const newPointY = pointY * scaleFactor

            setImagePosition((prev) => ({
                x: prev.x - (newPointX - pointX),
                y: prev.y - (newPointY - pointY),
            }))
        }
    }

    // Handle mouse down for dragging zoomed image
    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoomLevel > 1) {
            e.preventDefault()
            setIsDragging(true)
            setDragStart({
                x: e.clientX - imagePosition.x,
                y: e.clientY - imagePosition.y,
            })
        }
    }

    // Handle mouse move for dragging zoomed image
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && zoomLevel > 1) {
            e.preventDefault()
            setImagePosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y,
            })
        }
    }

    // Handle mouse up to stop dragging
    const handleMouseUp = () => {
        setIsDragging(false)
    }

    // Handle touch start for swipe navigation
    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0]
        setTouchStart({ x: touch.clientX, y: touch.clientY })
        setTouchEnd({ x: touch.clientX, y: touch.clientY })
        setIsSwiping(true)
    }

    // Handle touch move for swipe navigation
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isSwiping) return

        const touch = e.touches[0]
        setTouchEnd({ x: touch.clientX, y: touch.clientY })
    }

    // Handle touch end for swipe navigation
    const handleTouchEnd = () => {
        if (!isSwiping) return

        const horizontalDistance = touchStart.x - touchEnd.x
        const verticalDistance = touchStart.y - touchEnd.y

        // Only process horizontal swipes (ignore vertical scrolling)
        if (Math.abs(horizontalDistance) > Math.abs(verticalDistance) && Math.abs(horizontalDistance) > 50) {
            if (horizontalDistance > 0) {
                // Swipe left - next project
                nextProject()
            } else {
                // Swipe right - previous project
                prevProject()
            }
        }

        setIsSwiping(false)
    }

    return (
        <div className="container mx-auto py-12 px-4 bg-gradient-to-b from-background to-background/80">
            <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {dict.portfolio.title}
            </h1>

            {/* Filters section with improved design - centered filter badges */}
            <div className="mb-12 bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border/50">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="font-medium text-lg">{dict.portfolio.filterBy}</span>
                    <div className="hidden md:flex">
                        <Select value={filterCategory} onValueChange={(value) => setFilterCategory(value as "Industry" | "Feature")}>
                            <SelectTrigger className="w-[180px] bg-background/80 backdrop-blur-sm">
                                <SelectValue placeholder={dict.portfolio.selectCategory} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Industry">{dict.portfolio.industry}</SelectItem>
                                <SelectItem value="Feature">{dict.portfolio.feature}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="md:hidden space-x-4 flex">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                value="Industry"
                                checked={filterCategory === "Industry"}
                                onChange={() => setFilterCategory("Industry")}
                                className="form-radio"
                            />
                            <span>{dict.portfolio.industry}</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                value="Feature"
                                checked={filterCategory === "Feature"}
                                onChange={() => setFilterCategory("Feature")}
                                className="form-radio"
                            />
                            <span>{dict.portfolio.feature}</span>
                        </label>
                    </div>
                </div>

                {/* Centered filter badges */}
                <div className="hidden md:flex flex-wrap justify-center gap-3 mb-2">
                    {dict.portfolio.filterCategories[filterCategory].map((tag: string) => (
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

                <div className="md:hidden mb-2">
                    <Select value={activeFilter} onValueChange={(value) => setFilter(value)}>
                        <SelectTrigger className="w-full bg-background/80 backdrop-blur-sm">
                            <SelectValue placeholder={dict.portfolio.selectTag} />
                        </SelectTrigger>
                        <SelectContent>
                            {dict.portfolio.filterCategories[filterCategory].map((tag: string) => (
                                <SelectItem key={tag} value={tag}>
                                    {tag}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Projects grid with improved design - removed zoom button */}
            {Object.keys(groupedProjects).map((section) => (
                <div key={section} className="mb-8">
                    <h2 className="text-3xl text-blue-700 text-center py-4 font-semibold mb-4">{section}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {groupedProjects[section].map((project: any) => (
                            <div
                                key={project.id}
                                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-border/50 flex flex-col"
                                onClick={() => {
                                    setSelectedProject(project)
                                    setDialogOpen(true)
                                    resetZoom()
                                }}
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
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                        <div className="bg-background/40 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Maximize className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <Tooltip>
                                            <TooltipTrigger className="text-left">
                                                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                                            </TooltipTrigger>
                                            <TooltipContent className="w-72">
                                                {project.description}
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                    {/* Tags positioned at the bottom */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag: any) => (
                                            <Badge
                                                key={`${project.id}-${tag}`}
                                                variant="secondary"
                                                className={`cursor-pointer transition-all duration-300 ${activeFilter === tag
                                                    ? "bg-primary/20 text-primary hover:bg-primary/30"
                                                    : "hover:bg-primary/10"
                                                    }`}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setFilter(tag)
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
                </div>
            ))}

            {/* Project detail dialog with improved design and mouse wheel zoom */}
            <Dialog
                open={dialogOpen && selectedProject !== null && !isFullscreen}
                onOpenChange={(open) => {
                    if (!open) {
                        setDialogOpen(false)
                        resetZoom()
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
                            <div
                                className="relative"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                {/* Image container with mouse wheel zoom at cursor position */}
                                <div
                                    ref={imageContainerRef}
                                    className="relative h-[400px] w-full mb-6 rounded-xl overflow-hidden"
                                    onWheel={handleWheel}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseUp}
                                    style={{ cursor: isDragging ? "grabbing" : zoomLevel > 1 ? "grab" : "default" }}
                                >
                                    <div
                                        ref={dialogImageRef}
                                        className="absolute inset-0 flex items-center justify-center transition-transform"
                                        style={{
                                            transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${zoomLevel})`,
                                            transformOrigin: `${transformOrigin.x * 100}% ${transformOrigin.y * 100}%`,
                                        }}
                                    >
                                        <Image
                                            src={selectedProject.image || "/placeholder.svg"}
                                            alt={selectedProject.title}
                                            width={800}
                                            height={600}
                                            className="object-contain max-h-[400px]"
                                            onClick={() => setIsFullscreen(true)}
                                        />
                                    </div>
                                    {/* Fullscreen button */}
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
                                            className={`cursor-pointer transition-all duration-300 ${activeFilter === tag ? "bg-primary/20 text-primary hover:bg-primary/30" : "hover:bg-primary/10"
                                                }`}
                                            onClick={() => {
                                                // Filter and close dialog
                                                setFilter(tag)
                                                setDialogOpen(false)
                                            }}
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <Button variant="outline" onClick={prevProject} className="group md:flex">
                                        <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
                                    </Button>
                                    <Button variant="outline" onClick={nextProject} className="group md:flex">
                                        Next <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>

            {/* Use the new FullscreenImageViewer component */}
            {selectedProject && isFullscreen && (
                <FullscreenImageViewer
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    onClose={() => setIsFullscreen(false)}
                />
            )}

            {/* Show message if no projects match filters */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-16 bg-card/50 backdrop-blur-sm rounded-xl shadow-sm border border-border/50">
                    <h3 className="text-2xl font-medium mb-3">{dict.portfolio.noProjectsMatch}</h3>
                    <p className="text-muted-foreground mb-6">{dict.portfolio.adjustFilters}</p>
                    <Button onClick={clearFilters} className="px-6">
                        {dict.portfolio.clearFilter}
                    </Button>
                </div>
            )}
        </div>
    )
}
