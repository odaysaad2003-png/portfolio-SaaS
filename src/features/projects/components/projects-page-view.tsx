"use client";

import {useMemo, useState} from "react";

import {projects} from "@/lib/data/project.data";

import {ProjectsHeader} from "./projects-header";
import {ProjectsFilters} from "./projects-filters";
import {ProjectsGrid} from "./projects-grid";

export function ProjectsPageView() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");
    const [tech, setTech] = useState("all");

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());

            const matchesType = type === "all" || project.type === type;

            const matchesTech = tech === "all" || project.technologies.includes(tech);

            return matchesSearch && matchesType && matchesTech;
        });
    }, [search, type, tech]);

    return (
        <section className="min-h-screen py-24">
            <div className="mx-auto max-w-6xl px-4 space-y-10">
                <ProjectsHeader />

                <ProjectsFilters
                    search={search}
                    type={type}
                    tech={tech}
                    onSearchChange={setSearch}
                    onTypeChange={setType}
                    onTechChange={setTech}
                />

                <ProjectsGrid projects={filteredProjects} />
            </div>
        </section>
    );
}
