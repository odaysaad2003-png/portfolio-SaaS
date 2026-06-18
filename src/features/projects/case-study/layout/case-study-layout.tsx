import {CaseStudy} from "../../engine/project-mapper";

import {CaseStudyHero} from "../components/case-study-hero";
import {CaseStudyProblem} from "../components/case-study-problem";
import {CaseStudyContext} from "../components/case-study-context";
import {CaseStudySolution} from "../components/case-study-solution";
import {CaseStudyArchitecture} from "../components/case-study-architecture";
import {CaseStudyMetrics} from "../components/case-study-metrics";

type Props = {
    data: CaseStudy;
};

export function CaseStudyLayout({data}: Props) {
    return (
        <main className="relative min-h-screen bg-gradient-to-b from-[#0B1220] to-black text-white">
            {/* HERO */}
            <CaseStudyHero data={data} />

            {/* STORY FLOW */}
            <div className="space-y-32 pb-32">
                {/* PROBLEM */}
                <CaseStudyProblem data={data} />

                {/* CONTEXT */}
                <CaseStudyContext data={data} />

                {/* SOLUTION */}
                <CaseStudySolution data={data} />

                {/* ARCHITECTURE */}
                <CaseStudyArchitecture data={data} />

                {/* METRICS (Impact Layer) */}
                <CaseStudyMetrics data={data} />
            </div>
        </main>
    );
}
