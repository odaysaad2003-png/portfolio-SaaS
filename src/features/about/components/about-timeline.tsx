// src/features/about/components/about-timeline.tsx

import {TimelineEntry} from "@/features/about/types/about";
import {AboutMotionWrapper} from "./about-motion-wrapper";

type AboutTimelineProps = {
    timeline: TimelineEntry[];
};

export function AboutTimeline({timeline}: AboutTimelineProps) {
    return (
        <section className="relative px-6 py-24 sm:px-10">
            <div className="mx-auto max-w-3xl">
                <AboutMotionWrapper>
                    <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                        Product Evolution
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        Versioned, not just dated
                    </h2>
                </AboutMotionWrapper>

                <div className="relative mt-14 pl-8">
                    <div
                        aria-hidden
                        className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent"
                    />

                    <div className="space-y-10">
                        {timeline.map((entry, index) => (
                            <AboutMotionWrapper key={entry.version} delay={index * 0.12}>
                                <div className="relative">
                                    <span
                                        aria-hidden
                                        className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-emerald-400 bg-[#05070d]"
                                    />
                                    <div className="flex flex-wrap items-baseline gap-3">
                                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs text-emerald-300">
                                            {entry.version}
                                        </span>
                                        <h3 className="text-lg font-semibold text-white">
                                            {entry.title}
                                        </h3>
                                        <span className="text-xs text-white/40">{entry.year}</span>
                                    </div>
                                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
                                        {entry.description}
                                    </p>
                                </div>
                            </AboutMotionWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
