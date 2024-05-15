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
        "Resource Allocation Management 3", "Dashboard 2- Resource Allocation Management 1",
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
        , "Analysis of the time spent by each team members on specific projects and the combined effort.",
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",],
      image:
        "images/portfolio/hr/image-3.png",

      imagesCarousel: [

        ["images/portfolio/hr/image-3.png"],
        ["images/portfolio/hr/image-4.png"],
        ["images/portfolio/hr/image-5.png"], ["images/portfolio/hr/image-1.png"],
        ["images/portfolio/hr/image-2.png"],
      ]
    },
    {
      title: [

        "Dashboard 3- Workload Management",
        "Resource Allocation Management 3", "Dashboard 2- Resource Allocation Management 1",
        "Dashboard 1- Resource Allocation Management 2",
        "Process Mapping for NGO with worldwide presence",
      ],
      description: [

        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
        "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees."
        , "Analysis of the time spent by each team members on specific projects and the combined effort.",
        "The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",
        "",],
      image:
        "images/portfolio/hr/image-4.png",

      imagesCarousel: [

        ["images/portfolio/hr/image-4.png"],
        ["images/portfolio/hr/image-5.png"], ["images/portfolio/hr/image-1.png"],
        ["images/portfolio/hr/image-2.png"],
        ["images/portfolio/hr/image-3.png"],
      ]
    },
    {
      title: ["Resource Allocation Management 3",
        "Dashboard 2- Resource Allocation Management 1",
        "Dashboard 1- Resource Allocation Management 2",
        "Process Mapping for NGO with worldwide presence",
        "Dashboard 3- Workload Management",

      ],
      description: ["Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees.",

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





    {
      title: [
        "Employee's Directory Overview",
        "Employee Profile Interface",
        "Employee Type Distribution Map",
      ],
      description: [
        "A detailed screenshot of an employee directory interface, displaying sections for office staff, operation staff, and former employees. The interface includes columns for employee details such as onboarding status, position, contract type, department, supervisor, contract dates, and email addresses.",
        "A comprehensive view of an employee's profile page, featuring sections for personal information, employment details, and paid time off (PTO). The interface includes fields for name, contact details, employment position, salary, and leave balance.",
        "An interactive map displaying the geographic distribution of employees, with colored pins indicating different types of employees. This visualization helps in understanding the regional placement of various employee categories across the United States"
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
    {
      title: [

        "Employee Profile Interface",
        "Employee Type Distribution Map", "Employee's Directory Overview",
      ],
      description: [
        "A comprehensive view of an employee's profile page, featuring sections for personal information, employment details, and paid time off (PTO). The interface includes fields for name, contact details, employment position, salary, and leave balance.",
        "An interactive map displaying the geographic distribution of employees, with colored pins indicating different types of employees. This visualization helps in understanding the regional placement of various employee categories across the United States"
        ,"A detailed screenshot of an employee directory interface, displaying sections for office staff, operation staff, and former employees. The interface includes columns for employee details such as onboarding status, position, contract type, department, supervisor, contract dates, and email addresses.",

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

    {
      title: [        
        "Employee Type Distribution Map",
        "Employee's Directory Overview",
        "Employee Profile Interface",
      ],
      description: [
        "An interactive map displaying the geographic distribution of employees, with colored pins indicating different types of employees. This visualization helps in understanding the regional placement of various employee categories across the United States",

        "A detailed screenshot of an employee directory interface, displaying sections for office staff, operation staff, and former employees. The interface includes columns for employee details such as onboarding status, position, contract type, department, supervisor, contract dates, and email addresses.",
        "A comprehensive view of an employee's profile page, featuring sections for personal information, employment details, and paid time off (PTO). The interface includes fields for name, contact details, employment position, salary, and leave balance.",
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
  const determineLabel = (titles: string[]) => {
    const firstTitle = titles[0]; // Récupérer le premier titre
    if (firstTitle.includes("Employee")) {
      return "Employee's Management";
    } else if (firstTitle.includes("Survey")) {
      return "HR Survey";
    } else {
      return "Other";
    }
  };



  const groupProjectsByLabel = (projects: any[]) => {
    const projectsByLabel: { [key: string]: any[] } = {};
    const encounteredTitles = new Set<string>(); // Utiliser un ensemble pour stocker les titres déjà rencontrés
    projects.forEach(project => {
      const label = determineLabel(project.title);
      if (!projectsByLabel[label]) {
        projectsByLabel[label] = [];
      }
      // Vérifier si le titre a déjà été rencontré pour éviter les doublons
      if (!encounteredTitles.has(project.title[0])) {
        projectsByLabel[label].push(project);
        encounteredTitles.add(project.title[0]); // Ajouter le titre à l'ensemble rencontré
      }
    });
    return projectsByLabel;
  };

  const projectsByLabel = groupProjectsByLabel(projects);


  return (
    <div className="p-4">
    {Object.entries(projectsByLabel).map(([label, projects]) => (
      <div key={label}>
        <h2 className="text-4xl font-semibold mb-8 mt-8 ml-32">{label}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  );
}