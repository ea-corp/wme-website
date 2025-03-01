"use client"
import ProjectCard from "./project-card"

export default function EmailActivitiesPage() {
    const projects = [
        {
            title: ["Sample Integrations - Automated Emails", "Email Campaign Management", "Email Analytics Dashboard"],
            description: [
                "When an element of the checklist is about to be due or overdue, emails are sent automatically to the PIC and Managers based on a set of rules",
                "Comprehensive email campaign management system with scheduling, targeting, and personalization features.",
                "Dashboard for tracking email campaign performance, including open rates, click-through rates, and conversions.",
            ],
            image: "images/portfolio/real-estate/image-3.png",
            imagesCarousel: [
                ["images/portfolio/real-estate/image-3.png"],
                ["/placeholder.svg?height=600&width=800"],
                ["/placeholder.svg?height=600&width=800"],
            ],
            labels: ["Email Activities", "Real Estate"],
        },
        {
            title: ["Automated Email Notifications", "Email Template Management", "Customer Email Interaction Tracking"],
            description: [
                "System for sending automated email notifications based on specific triggers and events.",
                "Library of email templates for various business communications, with version control and approval workflows.",
                "Tracking system for all email interactions with customers, integrated with CRM.",
            ],
            image: "/placeholder.svg?height=300&width=400",
            imagesCarousel: [
                ["/placeholder.svg?height=600&width=800"],
                ["/placeholder.svg?height=600&width=800"],
                ["/placeholder.svg?height=600&width=800"],
            ],
            labels: ["Email Activities", "Marketing", "HR"],
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

