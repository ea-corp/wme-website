"use client"
import ProjectCard from "./project-card"

export default function MakeIntegrationsPage() {
    const projects = [
        {
            title: [
                "Make.com Integration for Automated Workflows",
                "Cross-Platform Data Synchronization",
                "Custom API Integrations",
            ],
            description: [
                "Implementation of Make.com (formerly Integromat) to automate complex business workflows across multiple platforms.",
                "Seamless data synchronization between different business systems using Make.com's powerful integration capabilities.",
                "Custom API integrations built with Make.com to connect proprietary systems with third-party applications.",
            ],
            image: "/placeholder.svg?height=300&width=400",
            imagesCarousel: [
                ["/placeholder.svg?height=600&width=800"],
                ["/placeholder.svg?height=600&width=800"],
                ["/placeholder.svg?height=600&width=800"],
            ],
            labels: ["Make.com", "Logistic", "Manufacturing"],
        },
        {
            title: ["Automated Document Processing", "Customer Data Integration", "Marketing Automation Workflows"],
            description: [
                "Make.com scenario for automatically processing, categorizing, and storing documents from multiple sources.",
                "Integration of customer data across CRM, email marketing, and e-commerce platforms using Make.com.",
                "Complex marketing automation workflows built in Make.com to nurture leads and improve conversion rates.",
            ],
            image: "/placeholder.svg?height=300&width=400",
            imagesCarousel: [
                ["/placeholder.svg?height=600&width=800"],
                ["/placeholder.svg?height=600&width=800"],
                ["/placeholder.svg?height=600&width=800"],
            ],
            labels: ["Make.com", "Marketing", "Restaurant"],
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

