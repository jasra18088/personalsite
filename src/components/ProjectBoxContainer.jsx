import React from "react";
import ProjectBox from "./ProjectBox";

export default function ProjectBoxContainer({ projects }) {
    return (projects.map((project) => (
        <ProjectBox 
            key={project.id}
            project={project}
        />
    )))
}