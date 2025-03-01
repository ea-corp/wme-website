"use client"
import ProjectCard from "./project-card"

export default function ApiPage() {
  const projects = [
    {
      title: ["Custom API Integration for Logistics", "Third-Party API Connections", "Data Exchange API"],
      description: [
        "Custom API development for connecting logistics systems with external platforms and services.",
        "Integration with multiple third-party APIs to create a unified data ecosystem.",
        "API for secure and efficient data exchange between different business units and partners.",
      ],
      image: "/placeholder.svg?height=300&width=400",
      imagesCarousel: [
        ["/placeholder.svg?height=600&width=800"],
        ["/placeholder.svg?height=600&width=800"],
        ["/placeholder.svg?height=600&width=800"],
      ],
      labels: ["API", "Logistic"],
    },
    {
      title: ["Real-Time Data API", "Payment Gateway Integration", "Inventory Management API"],
      description: [
        "API for real-time data access and updates across multiple platforms.",
        "Seamless integration with various payment gateways for secure transaction processing.",
        "Comprehensive API for inventory management, tracking, and synchronization.",
      ],
      image: "/placeholder.svg?height=300&width=400",
      imagesCarousel: [
        ["/placeholder.svg?height=600&width=800"],
        ["/placeholder.svg?height=600&width=800"],
        ["/placeholder.svg?height=600&width=800"],
      ],
      labels: ["API", "Restaurant", "Manufacturing"],
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

