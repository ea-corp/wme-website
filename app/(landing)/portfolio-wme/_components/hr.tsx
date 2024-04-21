"use client";
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imagesCarousel: string[];
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
          <img src={image} alt={title} className="w-full h-48 object-cover" />
            <h3 className="font-semibold text-lg mt-2">{title}</h3>
            <p className="text-sm md:text-medium">{description}</p>
          </Card>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <Carousel>
            <CarouselContent>
              {imagesCarousel.map((img, index) => (
                <CarouselItem key={index}>
                  <img src={img} className="object-" alt={`${title} image ${index}`} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default function HrPage() {
  const projects = [
    {
      title: "Dashboard 2- Resource ALlocation Management 1",
      description:
      "Analysis of the time spent by each team members on specific projects and the combined effort.",
      image: "images/portfolio/hr/image-1.png",
      imagesCarousel: [
        "images/portfolio/hr/image-1.png",

      ],
    },
    {
      title: "Dashboard 1- Resource Allocation Management 2",
      description:"The workflow built allowed deep analysis of the team submitted work and compare it to time initially planned.",
      image: "images/portfolio/hr/image-2.png",
      imagesCarousel: ["images/portfolio/hr/image-2.png"],
    },
    {
      title: " Process Mapping for NGO with worlwide presence",
      description:
        "",
      image: "images/portfolio/hr/image-3.png",
      imagesCarousel: ["images/portfolio/hr/image-3.png"],
    },
    {
      title: "Dashboard 3- Workload Management",
      description:
        "Used to manage the workload capacity of each individual, to see who is available to take a new project, who is overloaded, etc...",
      image: "images/portfolio/hr/image-4.png",
      imagesCarousel: ["images/portfolio/hr/image-4.png"],
    },
    {
        title: "Resource Allocation Management 3",
        description:
          "Detailed reporting of the time spent by an individual on specific projects and compare it to the theorical time that was allocated. This reporting was used for one on one meeting between management and the employees.",
        image: "images/portfolio/hr/image-5.png",
        imagesCarousel: ["images/portfolio/hr/image-5.png"],
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
