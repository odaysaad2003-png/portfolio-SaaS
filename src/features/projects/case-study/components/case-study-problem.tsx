import {CaseStudy} from "../../engine/project-mapper";

type Props = {
    data: CaseStudy;
};

export function CaseStudyProblem({data}: Props) {
    return (
        <section className="relative py-5">
            <div className="max-w-4xl mx-auto px-6 space-y-6">
                {/* Section Label */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs uppercase tracking-widest">
                    Problem
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">The Challenge</h2>

                {/* Content */}
                <p className="text-white/70 text-lg leading-relaxed">{data.problem}</p>

                {/* Visual Accent Line */}
                <div className="pt-6">
                    <div className="h-[1px] w-full bg-gradient-to-r from-red-500/40 via-white/10 to-transparent" />
                </div>
            </div>
        </section>
    );
}
