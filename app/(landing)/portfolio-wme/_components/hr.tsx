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
    <CarouselPrevious className="ml-16 md:ml-28">Previous</CarouselPrevious>
    <CarouselNext className="mr-28 md:mr-20">Next</CarouselNext>
  </Carousel>
</DialogContent>
      </Dialog>
    </div>
  );
};

export default function ConstructionPage() {
  const projects = [
    {
      title: [
        "Dashboard 2- Resource Allocation Management 1",
        "Dashboard 1- Resource Allocation Management 2",
        "Process Mapping for NGO with worldwide presence",
        "Dashboard 3- Workload Management",
        "Resource Allocation Management 3"
      ],
      description: [
        "Analysis of the time spent by each team members on specific projects and the combined effort.",
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",
        "",
        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
        "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees."
      ],
      image: 
        "images/portfolio/hr/image-1.png",
      
      imagesCarousel: [
        ["images/portfolio/hr/image-1.png"],
        ["images/portfolio/hr/image-2.png"],
        ["images/portfolio/hr/image-3.png"],
        ["images/portfolio/hr/image-4.png"],
        ["images/portfolio/hr/image-5.png"]
      ]
    },
    {
      title: [
        
        "Dashboard 1- Resource Allocation Management 2",
        "Process Mapping for NGO with worldwide presence",
        "Dashboard 3- Workload Management",
        "Resource Allocation Management 3","Dashboard 2- Resource Allocation Management 1",
      ],
      description: [
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",
        "",
        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
        "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees.",
                "Analysis of the time spent by each team members on specific projects and the combined effort.",

      ],
      image: 
        "images/portfolio/hr/image-2.png",
    
      imagesCarousel: [
        ["images/portfolio/hr/image-2.png"],
        ["images/portfolio/hr/image-3.png"],
        ["images/portfolio/hr/image-4.png"],
        ["images/portfolio/hr/image-5.png"],
        ["images/portfolio/hr/image-1.png"]
      ]
    },
    {
      title: [
       
        "Process Mapping for NGO with worldwide presence",
        "Dashboard 3- Workload Management",
        "Resource Allocation Management 3", "Dashboard 2- Resource Allocation Management 1",
        "Dashboard 1- Resource Allocation Management 2",
      ],
      description: [
       
        "",
        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
        "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees."
       ,"Analysis of the time spent by each team members on specific projects and the combined effort.",
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",],
      image: 
        "images/portfolio/hr/image-3.png",
    
      imagesCarousel: [
      
        ["images/portfolio/hr/image-3.png"],
        ["images/portfolio/hr/image-4.png"],
        ["images/portfolio/hr/image-5.png"] , ["images/portfolio/hr/image-1.png"],
        ["images/portfolio/hr/image-2.png"],
      ]
    },
    {
      title: [
       
        "Dashboard 3- Workload Management",
        "Resource Allocation Management 3","Dashboard 2- Resource Allocation Management 1",
        "Dashboard 1- Resource Allocation Management 2",
        "Process Mapping for NGO with worldwide presence",
      ],
      description: [
      
        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
        "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees."
       ,"Analysis of the time spent by each team members on specific projects and the combined effort.",
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",
        "", ],
      image: 
        "images/portfolio/hr/image-4.png",
      
      imagesCarousel: [
       
        ["images/portfolio/hr/image-4.png"],
        ["images/portfolio/hr/image-5.png"],["images/portfolio/hr/image-1.png"],
        ["images/portfolio/hr/image-2.png"],
        ["images/portfolio/hr/image-3.png"],
      ]
    },
    {
      title: [  "Resource Allocation Management 3",
        "Dashboard 2- Resource Allocation Management 1",
        "Dashboard 1- Resource Allocation Management 2",
        "Process Mapping for NGO with worldwide presence",
        "Dashboard 3- Workload Management",
      
      ],
      description: [        "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees.",

        "Analysis of the time spent by each team members on specific projects and the combined effort.",
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",
        "",
        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
      ],
      image: 
        "images/portfolio/hr/image-5.png",
    
      imagesCarousel: [        
        ["images/portfolio/hr/image-5.png"],
        ["images/portfolio/hr/image-1.png"],
        ["images/portfolio/hr/image-2.png"],
        ["images/portfolio/hr/image-3.png"],
        ["images/portfolio/hr/image-4.png"],
      ]
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
