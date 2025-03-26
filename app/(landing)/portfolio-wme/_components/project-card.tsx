"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface ProjectCardProps {
  title: string[]
  description: string[]
  imagesCarousel: string[][]
  labels: string[]
  activeLabels: string[]
  image?: string
  onLabelClick?: (label: string) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imagesCarousel,
  labels,
  activeLabels,
  image,
  onLabelClick,
}) => {
  return (
    <Card className="w-[320px] md:w-[400px] h-full p-4 cursor-pointer flex flex-col">
      <div>
        <img src={image || "/placeholder.svg"} alt={title[0]} className="w-full h-48 object-cover" />
        <h3 className="font-semibold text-lg mt-2">{title[0]}</h3>
        <p className="text-sm md:text-medium">{description[0]}</p>
      </div>

      {/* Labels positioned at the bottom */}
      <div className="flex flex-wrap gap-2 mt-auto pt-3">
        {labels.map((label) => (
          <Badge
            key={label}
            variant={activeLabels.includes(label) ? "default" : "outline"}
            className="cursor-pointer hover:text-white hover:bg-blue-500"
            onClick={(e) => {
              e.stopPropagation()
              if (onLabelClick) onLabelClick(label)
            }}
          >
            {label}
          </Badge>
        ))}
      </div>
    </Card>
  )
}

interface ProjectCarouselProps {
  title: string[]
  description: string[]
  imagesCarousel: string[][]
  labels: string[]
  activeLabels: string[]
  onLabelClick?: (label: string) => void
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  title,
  description,
  imagesCarousel,
  labels,
  activeLabels,
  onLabelClick,
}) => {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent className="w-96 md:w-full">
        {imagesCarousel.map((imgs, projIndex) =>
          imgs.map((img, imgIndex) => (
            <CarouselItem key={`${projIndex}-${imgIndex}`} className="touch-pan-y cursor-pointer">
              <h3 className="font-semibold text-2xl">{title[projIndex]}</h3>
              <div className="relative group">
                <img
                  src={img || "/placeholder.svg"}
                  className="object-contain h-full max-h-[60vh] w-auto mx-auto cursor-zoom-in"
                  alt={`${title[projIndex]} image ${imgIndex}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-background/70 text-foreground px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    Click to zoom
                  </span>
                </div>
              </div>
              <p className="font-medium text-lg">{description[projIndex]}</p>

              {/* Labels in the modal with dialog close on click */}
              <div className="flex flex-wrap gap-2 mt-3">
                {labels.map((label) => (
                  <Badge
                    key={label}
                    variant={activeLabels.includes(label) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/90"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (onLabelClick) {
                        onLabelClick(label)
                        // Close the dialog when clicking a label
                        const closeButton = document.querySelector('[data-state="open"] button[data-state="closed"]')
                        if (closeButton instanceof HTMLElement) {
                          closeButton.click()
                        }
                      }
                    }}
                  >
                    {label}
                  </Badge>
                ))}
              </div>
            </CarouselItem>
          )),
        )}
      </CarouselContent>
      <CarouselPrevious className="ml-16 md:ml-28 bg-yellow-400 hidden md:flex">Previous</CarouselPrevious>
      <CarouselNext className="mr-28 md:mr-20 bg-yellow-400 hidden md:flex">Next</CarouselNext>
    </Carousel>
  )
}

export default ProjectCard

