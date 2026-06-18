import {notFound} from "next/navigation";

import {getProjectBySlug} from "@/lib/data/service";
import {mapProjectToCaseStudy} from "@/features/projects/engine/project-mapper";
import {CaseStudyLayout} from "@/features/projects/case-study/layout/case-study-layout";

type Props = {
    params: Promise<{slug: string}>;
};

export default async function ProjectPage({params}: Props) {
    const {slug} = await params;

    const project = getProjectBySlug(slug);

    if (!project) return notFound();

    const caseStudy = mapProjectToCaseStudy(project);

    return <CaseStudyLayout data={caseStudy} />;
}
