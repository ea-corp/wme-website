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
                  <img
                    src={img}
                    className="object-"
                    alt={`${title} image ${index}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default function MarketingAgencyPage() {
  const projects = [
    {
      title: "Dashboard Sample 1- Client Overview",
      description:
      "Used by a Marketing Agency to see what are the activity for a particular account. The leads are connected from the client's website so that everything can be managed within Monday.com",
      image: "images/portfolio/marketing-agency/image-1.png",
      imagesCarousel: ["images/portfolio/marketing-agency/image-1.png"],
    },
    {
      title: "Sample Board 1- Marekting Agency",
      description:
      "Sample Board 1- Marketing Agency",
      image: "images/portfolio/marketing-agency/image-2.png",
      imagesCarousel: ["images/portfolio/marketing-agency/image-2.png"],
    },
    {
      title: "Sample Board 2- Video Production",
      description: "",
      image: "images/portfolio/marketing-agency/image-3.png",
      imagesCarousel: ["images/portfolio/marketing-agency/image-3.png"],
    },
    {
      title: "Sample Board 3- Video Production",
      description: "",
      image: "images/portfolio/marketing-agency/image-4.png",
      imagesCarousel: ["images/portfolio/marketing-agency/image-4.png"],
    },
    {
      title: "Sample Automations 1",
      description: "",
      image: "images/portfolio/marketing-agency/image-5.png",
      imagesCarousel: ["images/portfolio/marketing-agency/image-5.png"],
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
