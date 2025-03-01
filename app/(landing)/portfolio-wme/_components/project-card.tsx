"use client"
import type React from "react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string[]
  description: string[]
  image: string
  imagesCarousel: string[][]
  labels?: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, imagesCarousel, labels = [] }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="w-[320px] md:w-[400px] h-full p-4 cursor-pointer">
            <img src={image || "/placeholder.svg"} alt={title[0]} className="w-full h-48 object-cover" />
            <h3 className="font-semibold text-lg mt-2">{title[0]}</h3>
            <p className="text-sm md:text-medium">{description[0]}</p>

            {/* Labels en bas de la description */}
            <div className="flex flex-wrap gap-2 mt-3">
              {labels.map((label) => (
                <Badge key={label} variant="outline" className="hover:bg-primary/90 hover:text-white">
                  {label}
                </Badge>
              ))}
            </div>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-screen-sm">
          <Carousel className="w-screen md:w-full">
            <CarouselContent className="w-96 md:w-full">
              {imagesCarousel.map((imgs, projIndex) =>
                imgs.map((img, imgIndex) => (
                  <CarouselItem key={`${projIndex}-${imgIndex}`}>
                    <h3 className="font-semibold text-2xl">{title[projIndex]}</h3>
                    <img
                      src={img || "/placeholder.svg"}
                      className="object-cover w-full h-48 md:h-auto"
                      alt={`${title[projIndex]} image ${imgIndex}`}
                    />
                    <p className="font-medium text-lg">{description[projIndex]}</p>

                    {/* Labels dans la modal aussi */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {labels.map((label) => (
                        <Badge key={label} variant="outline" className="hover:bg-primary/90">
                          {label}
                        </Badge>
                      ))}
                    </div>
                  </CarouselItem>
                )),
              )}
            </CarouselContent>
            <CarouselPrevious className="ml-16 md:ml-28 bg-yellow-400">Previous</CarouselPrevious>
            <CarouselNext className="mr-28 md:mr-20 bg-yellow-400">Next</CarouselNext>
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProjectCard

