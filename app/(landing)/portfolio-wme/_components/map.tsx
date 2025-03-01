"use client"
import ProjectCard from "./project-card"

export default function MapPage() {
    const projects = [
        {
            title: ["Map View of all shipments", "Employee Type Distribution Map", "Real Estate Property Map"],
            description: [
                "View of Export, Import, domestic shipments on a world map where data can be seen and updated directly from the map or on the Monday.com board.",
                "An interactive map displaying the geographic distribution of employees, with colored pins indicating different types of employees.",
                "Interactive map showing property locations, status, and key information for real estate management.",
            ],
            image: "images/portfolio/logistic/image-1.png",
            imagesCarousel: [
                ["images/portfolio/logistic/image-1.png"],
                ["images/portfolio/hr/image-16.png"],
                ["/placeholder.svg?height=600&width=800"],
            ],
            labels: ["Map", "Logistic", "HR", "Real Estate"],
        },
        {
            title: ["Customer Location Mapping", "Service Area Visualization", "Delivery Route Optimization"],
            description: [
                "Interactive map showing customer locations with filtering by various attributes.",
                "Visual representation of service areas with coverage analysis and market penetration metrics.",
                "Route optimization system for delivery vehicles, reducing travel time and fuel costs.",
            ],
            image: "/placeholder.svg?height=300&width=400",
            imagesCarousel: [
                ["/placeholder.svg?height=600&width=800"],
                ["/placeholder.svg?height=600&width=800"],
                ["/placeholder.svg?height=600&width=800"],
            ],
            labels: ["Map", "Restaurant", "Logistic"],
        },
    ]

    return (
        <div className="flex flex-wrap justify-center gap-8 p-4">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    )
}

