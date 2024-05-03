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
      title: ["Map View of all shipments", "Board Sample - Outbounds shipments", "CRM - Leads Management Board", "CRM - Sales Pipeline & Costing","CRM - Freight Rates Management"],
      description: [
        "View of Export, Import, domestic shipments on a world map where data can be seen and updated directly from the map or on the Monday.com board.",
        "Used by an International Relocation company to track what needs to be done for each shipment. This board was displayed on a large screen for the team to have an overview of the status of each job",
        "A board allowing to manage all leads by salesperson. This board is part of a CRM workflow with advanced automations in place",
        "Sales people able to generate a quotation from this board by first inputting various cost associated to each shipment",
        "Freight rates analysis coming from various suppliers that are used by the salespersons before generating quotations for clients.",
      ],
      image: "images/portfolio/logistic/image-1.png",
      imagesCarousel: [
        ["images/portfolio/logistic/image-1.png"],
        ["images/portfolio/logistic/image-2.png"],
        ["images/portfolio/logistic/image-3.png"],
        ["images/portfolio/logistic/image-4.png"],
        ["images/portfolio/logistic/image-5.png"]
      ],
    },
    {
      title: [ "Board Sample - Outbounds shipments", "CRM - Leads Management Board", "CRM - Sales Pipeline & Costing","CRM - Freight Rates Management","Map View of all shipments",],
      description: [
        "Used by an International Relocation company to track what needs to be done for each shipment. This board was displayed on a large screen for the team to have an overview of the status of each job",
        "A board allowing to manage all leads by salesperson. This board is part of a CRM workflow with advanced automations in place",
        "Sales people able to generate a quotation from this board by first inputting various cost associated to each shipment",
        "Freight rates analysis coming from various suppliers that are used by the salespersons before generating quotations for clients.","View of Export, Import, domestic shipments on a world map where data can be seen and updated directly from the map or on the Monday.com board.",
      ],
      image: "images/portfolio/logistic/image-2.png",
      imagesCarousel: [
        ["images/portfolio/logistic/image-2.png"],
        ["images/portfolio/logistic/image-3.png"],
        ["images/portfolio/logistic/image-4.png"],
        ["images/portfolio/logistic/image-5.png"],
        ["images/portfolio/logistic/image-1.png"]
      ],
    },
    {
      title: ["CRM - Leads Management Board", "CRM - Sales Pipeline & Costing","CRM - Freight Rates Management","Map View of all shipments", "Board Sample - Outbounds shipments", ],
      description: [
        "A board allowing to manage all leads by salesperson. This board is part of a CRM workflow with advanced automations in place",
        "Sales people able to generate a quotation from this board by first inputting various cost associated to each shipment",
        "Freight rates analysis coming from various suppliers that are used by the salespersons before generating quotations for clients.","View of Export, Import, domestic shipments on a world map where data can be seen and updated directly from the map or on the Monday.com board.",
        "Used by an International Relocation company to track what needs to be done for each shipment. This board was displayed on a large screen for the team to have an overview of the status of each job",
      ],
      image: "images/portfolio/logistic/image-3.png",
      imagesCarousel: [
        ["images/portfolio/logistic/image-3.png"],
        ["images/portfolio/logistic/image-4.png"],
        ["images/portfolio/logistic/image-5.png"],
        ["images/portfolio/logistic/image-1.png"],
        ["images/portfolio/logistic/image-2.png"],
      ],
    },
    {
      title: ["CRM - Sales Pipeline & Costing","CRM - Freight Rates Management","Map View of all shipments", "Board Sample - Outbounds shipments", "CRM - Leads Management Board", ],
      description: [
        "Sales people able to generate a quotation from this board by first inputting various cost associated to each shipment",
        "Freight rates analysis coming from various suppliers that are used by the salespersons before generating quotations for clients.","View of Export, Import, domestic shipments on a world map where data can be seen and updated directly from the map or on the Monday.com board.",
        "Used by an International Relocation company to track what needs to be done for each shipment. This board was displayed on a large screen for the team to have an overview of the status of each job",
        "A board allowing to manage all leads by salesperson. This board is part of a CRM workflow with advanced automations in place",
      ],
      image: "images/portfolio/logistic/image-4.png",
      imagesCarousel: [
        ["images/portfolio/logistic/image-4.png"],
        ["images/portfolio/logistic/image-5.png"],
        ["images/portfolio/logistic/image-1.png"],
        ["images/portfolio/logistic/image-2.png"],
        ["images/portfolio/logistic/image-3.png"],
      ],
    },
    {
      title: ["CRM - Freight Rates Management","Map View of all shipments", "Board Sample - Outbounds shipments", "CRM - Leads Management Board", "CRM - Sales Pipeline & Costing"],
      description: [
        "Freight rates analysis coming from various suppliers that are used by the salespersons before generating quotations for clients.",
        "View of Export, Import, domestic shipments on a world map where data can be seen and updated directly from the map or on the Monday.com board.",
        "Used by an International Relocation company to track what needs to be done for each shipment. This board was displayed on a large screen for the team to have an overview of the status of each job",
        "A board allowing to manage all leads by salesperson. This board is part of a CRM workflow with advanced automations in place",
        "Sales people able to generate a quotation from this board by first inputting various cost associated to each shipment",
      ],
      image: "images/portfolio/logistic/image-5.png",
      imagesCarousel: [
        ["images/portfolio/logistic/image-5.png"],
        ["images/portfolio/logistic/image-1.png"],
        ["images/portfolio/logistic/image-2.png"],
        ["images/portfolio/logistic/image-3.png"],
        ["images/portfolio/logistic/image-4.png"],
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
