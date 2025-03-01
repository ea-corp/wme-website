"use client"
import ProjectCard from "./project-card"

export default function CrmPage() {
    const projects = [
        {
            title: ["CRM - Leads Management Board", "CRM - Sales Pipeline & Costing", "CRM - Freight Rates Management"],
            description: [
                "A board allowing to manage all leads by salesperson. This board is part of a CRM workflow with advanced automations in place",
                "Sales people able to generate a quotation from this board by first inputting various cost associated to each shipment",
                "Freight rates analysis coming from various suppliers that are used by the salespersons before generating quotations for clients.",
            ],
            image: "images/portfolio/logistic/image-3.png",
            imagesCarousel: [
                ["images/portfolio/logistic/image-3.png"],
                ["images/portfolio/logistic/image-4.png"],
                ["images/portfolio/logistic/image-5.png"],
            ],
            labels: ["CRM", "Logistic"],
        },
        {
            title: ["Dashboard Sample 1- Client Overview", "CRM - Customer Interaction Tracking", "CRM - Deal Management"],
            description: [
                "Used by a Marketing Agency to see what are the activity for a particular account. The leads are connected from the client's website so that everything can be managed within Monday.com",
                "Comprehensive system for tracking all customer interactions across multiple channels.",
                "Pipeline management system for tracking deals from initial contact to close.",
            ],
            image: "images/portfolio/marketing-agency/image-1.png",
            imagesCarousel: [
                ["images/portfolio/marketing-agency/image-1.png"],
                ["/placeholder.svg?height=600&width=800"],
                ["/placeholder.svg?height=600&width=800"],
            ],
            labels: ["CRM", "Marketing"],
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

