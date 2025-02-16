"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string[];
  description: string[];
  image: string;
  imagesCarousel: string[][];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  imagesCarousel,
}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="w-[320px] md:w-[400px] h-full p-4 cursor-pointer">
            <img
              src={image}
              alt={title[0]}
              className="w-full h-48 object-cover"
            />
            <h3 className="font-semibold text-lg mt-2">{title[0]}</h3>
            <p className="text-sm md:text-medium">{description[0]}</p>
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
              src={img}
              className="object-cover w-full h-48 md:h-auto"
              alt={`${title[projIndex]} image ${imgIndex}`}
            />
            <p className="font-medium text-lg">{description[projIndex]}</p>
          </CarouselItem>
        ))
      )}
    </CarouselContent>
    <CarouselPrevious className="ml-16 md:ml-28 bg-yellow-400">Previous</CarouselPrevious>
    <CarouselNext className="mr-28 md:mr-20 bg-yellow-400">Next</CarouselNext>
  </Carousel>
</DialogContent>
      </Dialog>
    </div>
  );
};
export default function ConstructionPage() {
  const projects = [
    {
      title: ["Time tracking report on Toggl integrated with Monday", "Time tracking report on Toggl integrated with Monday", "2 Way Sync of the tasks between Monday and Toggl", "Sample o the scenario we have build using Make.com"],
      description: [
        "",
        "",
        "",
        "",
      ],
      image: "images/portfolio/time-tracking/image-1.png",
      imagesCarousel: [
        ["images/portfolio/time-tracking/image-1.png"],
        ["images/portfolio/time-tracking/image-2.png"],
        ["images/portfolio/time-tracking/image-3.png"],
        ["images/portfolio/time-tracking/image-4.png"]
      ],
    },
    {
      title: ["Time tracking report on Toggl integrated with Monday", "2 Way Sync of the tasks between Monday and Toggl", "Sample o the scenario we have build using Make.com", "Time tracking report on Toggl integrated with Monday"],
      description: [
        "",
        "",
        "",
        "",
      ],
      image: "images/portfolio/time-tracking/image-2.png",
      imagesCarousel: [
        ["images/portfolio/time-tracking/image-2.png"],
        ["images/portfolio/time-tracking/image-3.png"],
        ["images/portfolio/time-tracking/image-4.png"],
        ["images/portfolio/time-tracking/image-1.png"]
      ],
    },
    {
      title: ["2 Way Sync of the tasks between Monday and Toggl", "Sample o the scenario we have build using Make.com", "Time tracking report on Toggl integrated with Monday", "Time tracking report on Toggl integrated with Monday"],
      description: [
        "",
        "",
        "",
        "",
      ],
      image: "images/portfolio/time-tracking/image-3.png",
      imagesCarousel: [
        ["images/portfolio/time-tracking/image-3.png"],
        ["images/portfolio/time-tracking/image-4.png"],
        ["images/portfolio/time-tracking/image-1.png"],
        ["images/portfolio/time-tracking/image-2.png"]
      ],
    },
    {
      title: ["Sample o the scenario we have build using Make.com", "Time tracking report on Toggl integrated with Monday", "Time tracking report on Toggl integrated with Monday", "2 Way Sync of the tasks between Monday and Toggl"],
      description: [
        "",
        "",
        "",
        "",
      ],
      image: "images/portfolio/time-tracking/image-4.png",
      imagesCarousel: [
        ["images/portfolio/time-tracking/image-4.png"],
        ["images/portfolio/time-tracking/image-1.png"],
        ["images/portfolio/time-tracking/image-2.png"],
        ["images/portfolio/time-tracking/image-3.png"]
      ],
    },
  ];
  
  

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
