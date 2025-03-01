"use client"
import ProjectCard from "./project-card"

export default function DashboardsPage() {
    const projects = [
        {
            title: [
                "Dashboard 1- Cost Analysis",
                "Dashboard 2- Projected Vs Actual Costs by project",
                "Dashboard 3 - Projected Vs Actual Costs",
            ],
            description: [
                "Comprehensive cost analysis dashboard for construction projects.",
                "Comparison of projected versus actual costs by project.",
                "Overall comparison of projected versus actual costs across all projects.",
            ],
            image: "images/portfolio/construction/image-1.png",
            imagesCarousel: [
                ["images/portfolio/construction/image-1.png"],
                ["images/portfolio/construction/image-2.png"],
                ["images/portfolio/construction/image-3.png"],
            ],
            labels: ["Dashboards", "Construction"],
        },
        {
            title: ["Live Dashboard - Daily Deliveries", "Dashboard 2", "Dashboard 3"],
            description: [
                "Tracking orders made by customers on different channels. Reporting was done daily, weekly and monthly. Reporting was made per location as this restaurant had several branches.",
                "We were able to tracking on the 2 bottom widgets the orders by geographical zones, and by type of customers",
                "Additional dashboard features for restaurant management.",
            ],
            image: "images/portfolio/restaurant/image-1.png",
            imagesCarousel: [
                ["images/portfolio/restaurant/image-1.png"],
                ["images/portfolio/restaurant/image-2.png"],
                ["images/portfolio/restaurant/image-3.png"],
            ],
            labels: ["Dashboards", "Restaurant"],
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

