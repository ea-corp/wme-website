"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Maximize2, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ProjectCardProps {
  title: string[]
  description: string[]
  image: string
  imagesCarousel: string[][]
  tags?: string[]
  onTagClick?: (tag: string) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  imagesCarousel,
  tags = [],
  onTagClick,
}) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Modifier la fonction handleTagClick pour fermer le dialog quand on clique sur un tag
  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDialogOpen(false) // Fermer le dialog quand on clique sur un tag
    if (onTagClick) {
      onTagClick(tag)
    }
  }

  // Modifier la gestion du fullscreen pour fermer le dialog
  const openFullscreen = (img: string) => {
    setFullscreenImage(img)
    setIsDialogOpen(false) // Fermer le dialog quand on ouvre le fullscreen
  }

  return (
    <div className="h-full">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Card className="w-full h-full p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="relative overflow-hidden rounded-md mb-3 flex-shrink-0">
              <img
                src={image || "/placeholder.svg"}
                alt={title[0]}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg mb-2">{title[0]}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{description[0]}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                  onClick={(e) => handleTagClick(e, tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md md:max-w-2xl lg:max-w-7xl p-0">
          <div className="p-6">
            <Carousel className="w-full">
              <CarouselContent>
                {imagesCarousel.flat().map((img, index) => {
                  // Déterminer à quel projet cette image appartient
                  let projIndex = 0;
                  let imgCount = 0;
                  for (let i = 0; i < imagesCarousel.length; i++) {
                    if (index < imgCount + imagesCarousel[i].length) {
                      projIndex = i;
                      break;
                    }
                    imgCount += imagesCarousel[i].length;
                  }

                  return (
                    <CarouselItem key={`image-${index}`} className="flex flex-col gap-4">
                      <h3 className="font-semibold text-2xl">{title[projIndex] || title[0]}</h3>
                      <div
                        className="relative group cursor-pointer"
                        onClick={() => openFullscreen(img)}
                      >
                        <img
                          src={img || "/placeholder.svg"}
                          className="object-contain w-full rounded-md h-[200px] sm:h-[300px] md:h-[400px]"
                          alt={`Project image ${index}`}
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation()
                            openFullscreen(img)
                          }}
                        >
                          <Maximize2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="font-medium">{description[projIndex] || description[0]}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                            onClick={(e) => handleTagClick(e, tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              {!isMobile && (
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious className="static transform-none mx-0" />
                  <CarouselNext className="static transform-none mx-0" />
                </div>
              )}
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>

      {/* Fullscreen image modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white"
            onClick={() => setFullscreenImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={fullscreenImage || "/placeholder.svg"}
            alt="Fullscreen view"
            className="max-h-screen max-w-full object-contain"
          />
        </div>
      )}
    </div>
  )
}

export default ProjectCard
