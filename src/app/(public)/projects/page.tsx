import type {Metadata} from "next";

import {getProjects} from "@/lib/data/service";
import {ProjectsPageView} from "@/features/projects/components/projects-page-view";

export const metadata: Metadata = {
    title: "Projects — Case Studies",
    description: "SaaS-style engineering case studies and fullstack systems.",
};

export default async function ProjectsPage() {
    const projects = await getProjects();

    return <ProjectsPageView projects={projects} />;
}
