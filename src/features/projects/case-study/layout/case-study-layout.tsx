import {CaseStudy} from "../../engine/project-mapper";

import {CaseStudyHero} from "../components/case-study-hero";
import {CaseStudyProblem} from "../components/case-study-problem";
import {CaseStudyContext} from "../components/case-study-context";
import {CaseStudySolution} from "../components/case-study-solution";
import {CaseStudyArchitecture} from "../components/case-study-architecture";
import {CaseStudyMetrics} from "../components/case-study-metrics";
import {CaseStudyImages} from "../components/case-study-images";
import {CaseStudyMotionWrapper} from "../components/case-study-motion-wrapper";
import {CaseStudyNavigation} from "../components/case-study-navigation";

import {getNextProject, getPreviousProject} from "@/lib/data/service";

import {getRelatedProjects} from "@/lib/data/service";
import {CaseStudyRelatedProjects} from "../components/case-study-related-projects";

type Props = {
    data: CaseStudy;
    slug: string; // 👈 مهم للنفيجيشن
};

export function CaseStudyLayout({data, slug}: Props) {
    const next = getNextProject(slug);
    const previous = getPreviousProject(slug);

    const related = getRelatedProjects(slug);

    return (
        <main className="relative min-h-screen bg-gradient-to-b from-[#0B1220] to-black text-white">
            <CaseStudyMotionWrapper>
                <CaseStudyHero data={data} />
            </CaseStudyMotionWrapper>

            <CaseStudyMotionWrapper>
                <CaseStudyImages data={data} />
            </CaseStudyMotionWrapper>

            <div className="space-y-32 pb-32">
                <CaseStudyMotionWrapper>
                    <CaseStudyProblem data={data} />
                </CaseStudyMotionWrapper>

                <CaseStudyMotionWrapper>
                    <CaseStudyContext data={data} />
                </CaseStudyMotionWrapper>

                <CaseStudyMotionWrapper>
                    <CaseStudySolution data={data} />
                </CaseStudyMotionWrapper>

                <CaseStudyMotionWrapper>
                    <CaseStudyArchitecture data={data} />
                </CaseStudyMotionWrapper>

                <CaseStudyMotionWrapper>
                    <CaseStudyMetrics data={data} />
                </CaseStudyMotionWrapper>
            </div>

            {/* 🔥 Navigation moved INSIDE layout */}
            <CaseStudyNavigation next={next} previous={previous} />
            <CaseStudyRelatedProjects projects={related} />
        </main>
    );
}
