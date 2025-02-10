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
          <Card className="w-[320px] md:w-[400px] p-4 cursor-pointer">
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
      title: ["Live Dashboard - Daily Deliveries", "Dashboard 2", "Dashboard 3", "Dashboard Sample 1 - CRM Suppliers"],
      description: [
        "Tracking orders made by customers on different channels. Reporting was done daily, weekly and monthly. Reporting was made per location as this restaurant had several branches.",
        "We were able to tracking on the 2 bottom widgets the orders by geographical zones, and by type of customers",
        "",
        "",
      ],
      image: "images/portfolio/restaurant/image-1.png",
      imagesCarousel: [
        ["images/portfolio/restaurant/image-1.png"],
        ["images/portfolio/restaurant/image-2.png"],
        ["images/portfolio/restaurant/image-3.png"],
        ["images/portfolio/restaurant/image-4.png"]
      ],
    },
    {
      title: ["Dashboard 2", "Dashboard 3", "Dashboard Sample 1 - CRM Suppliers", "Live Dashboard - Daily Deliveries"],
      description: [
        "We were able to tracking on the 2 bottom widgets the orders by geographical zones, and by type of customers",
        "",
        "",
        "Tracking orders made by customers on different channels. Reporting was done daily, weekly and monthly. Reporting was made per location as this restaurant had several branches.",
      ],
      image: "images/portfolio/restaurant/image-2.png",
      imagesCarousel: [
        ["images/portfolio/restaurant/image-2.png"],
        ["images/portfolio/restaurant/image-3.png"],
        ["images/portfolio/restaurant/image-4.png"],
        ["images/portfolio/restaurant/image-1.png"]
      ],
    },
    {
      title: ["Dashboard 3", "Dashboard Sample 1 - CRM Suppliers", "Live Dashboard - Daily Deliveries", "Dashboard 2"],
      description: [
        "",
        "",
        "Tracking orders made by customers on different channels. Reporting was done daily, weekly and monthly. Reporting was made per location as this restaurant had several branches.",
        "We were able to tracking on the 2 bottom widgets the orders by geographical zones, and by type of customers",
      ],
      image: "images/portfolio/restaurant/image-3.png",
      imagesCarousel: [
        ["images/portfolio/restaurant/image-3.png"],
        ["images/portfolio/restaurant/image-4.png"],
        ["images/portfolio/restaurant/image-1.png"],
        ["images/portfolio/restaurant/image-2.png"]
      ],
    },
    {
      title: ["Dashboard Sample 1 - CRM Suppliers", "Live Dashboard - Daily Deliveries", "Dashboard 2", "Dashboard 3"],
      description: [
        "",
        "Tracking orders made by customers on different channels. Reporting was done daily, weekly and monthly. Reporting was made per location as this restaurant had several branches.",
        "We were able to tracking on the 2 bottom widgets the orders by geographical zones, and by type of customers",
        "",
      ],
      image: "images/portfolio/restaurant/image-4.png",
      imagesCarousel: [
        ["images/portfolio/restaurant/image-4.png"],
        ["images/portfolio/restaurant/image-1.png"],
        ["images/portfolio/restaurant/image-2.png"],
        ["images/portfolio/restaurant/image-3.png"]
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
