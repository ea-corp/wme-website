"use client"
import ProjectCard from "./project-card"

export default function AiPage() {
  const projects = [
    {
      title: ["AI-Powered Document Analysis", "AI Chatbot Interface", "Sentiment Analysis Dashboard"],
      description: [
        "An AI system that automatically extracts and categorizes information from business documents, saving hours of manual data entry.",
        "A customer service chatbot that uses natural language processing to answer customer queries and route complex issues to human agents.",
        "Real-time analysis of customer feedback across multiple channels, highlighting sentiment trends and key issues.",
      ],
      image: "/placeholder.svg?height=300&width=400",
      imagesCarousel: [
        ["/placeholder.svg?height=600&width=800"],
        ["/placeholder.svg?height=600&width=800"],
        ["/placeholder.svg?height=600&width=800"],
      ],
      labels: ["AI", "Manufacturing", "Marketing"],
    },
    {
      title: ["Predictive Maintenance System", "AI-Driven Sales Forecasting", "Automated Content Generation"],
      description: [
        "AI algorithms that predict equipment failures before they happen, reducing downtime and maintenance costs.",
        "Sales prediction model that analyzes historical data and market trends to forecast future sales with high accuracy.",
        "AI tool that generates marketing copy, product descriptions, and social media posts based on brand guidelines.",
      ],
      image: "/placeholder.svg?height=300&width=400",
      imagesCarousel: [
        ["/placeholder.svg?height=600&width=800"],
        ["/placeholder.svg?height=600&width=800"],
        ["/placeholder.svg?height=600&width=800"],
      ],
      labels: ["AI", "Manufacturing", "Construction"],
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

