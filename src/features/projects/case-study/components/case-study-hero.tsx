"use client";

import {CaseStudy} from "../../engine/project-mapper";

type Props = {
    data: CaseStudy;
};

export function CaseStudyHero({data}: Props) {
    return (
        <section className="relative overflow-hidden py-10">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs tracking-widest uppercase">
                    Engineering Case Study
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{data.title}</h1>

                {/* Subtitle */}
                {data.subtitle && <p className="text-white/60 text-lg md:text-xl">{data.subtitle}</p>}

                {/* Overview */}
                <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">{data.overview}</p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap justify-center gap-2 pt-4">
                    {data.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-white/70"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Metrics Preview */}
                {data.metrics?.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10 max-w-3xl mx-auto">
                        {data.metrics.slice(0, 3).map((m) => (
                            <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div className="text-blue-400 text-lg font-bold">{m.value}</div>
                                <div className="text-white/50 text-xs mt-1">{m.label}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
