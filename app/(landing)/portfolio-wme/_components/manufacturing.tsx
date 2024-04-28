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

export default function ManufacturingPage() {
  const projects = [
    {
      title: "QR Codes Scan",
      description:
        "Scanning QR codes at the Factory changing automatically statuses and timers on the Monday board.",
      image: "images/portfolio/manufacturing/image-1.png",
      imagesCarousel: ["images/portfolio/manufacturing/image-1.png"],
    },
    {
      title: "Sample Manufacturing Board 1",
      description:
        "Orders status for each station changing after the employees canning the orders at the factory.",
      image: "images/portfolio/manufacturing/image-2.png",
      imagesCarousel: ["images/portfolio/manufacturing/image-2.png"],
    },
    {
      title: "Sample Manufacturing Board 2",
      description: "",
      image: "images/portfolio/manufacturing/image-3.png",
      imagesCarousel: ["images/portfolio/manufacturing/image-3.png"],
    },
    {
      title: "Sample Automations in a Manufacturing Board",
      description: "",
      image: "images/portfolio/manufacturing/image-4.png",
      imagesCarousel: ["images/portfolio/manufacturing/image-4.png"],
    },
    {
      title: "Inventory Management Board Sample",
      description: "",
      image: "images/portfolio/manufacturing/image-5.png",
      imagesCarousel: ["images/portfolio/manufacturing/image-5.png"],
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
