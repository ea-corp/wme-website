"use client";
import React from "react";
import ProjectCard from "./project-card";
import { projectsData } from "./projectsData";

interface FilteredProjectsProps {
    selectedFilter: string;
}

const FilteredProjects: React.FC<FilteredProjectsProps> = ({ selectedFilter }) => {
    const filteredProjects = projectsData.filter((project) =>
        project.tags.includes(selectedFilter)
    );

    console.log("Filtered projects:", filteredProjects);

    return (
        <div className="flex flex-wrap justify-center gap-8 p-4">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
};

export default FilteredProjects;
