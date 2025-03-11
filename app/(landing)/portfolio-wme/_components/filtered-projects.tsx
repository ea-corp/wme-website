"use client"

import type React from "react"
import ProjectCard from "./project-card"
import { projectsData } from "./projectsData"
import ConstructionPage from "./hr"

interface FilteredProjectsProps {
    selectedFilter: string
    onTagClick?: (tag: string) => void
}

const FilteredProjects: React.FC<FilteredProjectsProps> = ({ selectedFilter, onTagClick }) => {
    if (selectedFilter === "Human Resources") {
        return <ConstructionPage />
    }

    const filteredProjects = projectsData.filter((project) => project.tags.includes(selectedFilter))

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} onTagClick={onTagClick} />
            ))}
        </div>
    )
}

export default FilteredProjects

