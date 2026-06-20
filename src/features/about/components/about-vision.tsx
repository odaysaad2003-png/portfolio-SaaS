// src/features/about/components/about-vision.tsx

import {VisionGoal} from "@/features/about/types/about";
import {AboutMotionWrapper} from "./about-motion-wrapper";

type AboutVisionProps = {
    vision: VisionGoal[];
};

export function AboutVision({vision}: AboutVisionProps) {
    return (
        <section className="relative overflow-hidden px-6 py-24 sm:px-10">
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-[140px]"
            />

            <div className="relative mx-auto max-w-4xl">
                <AboutMotionWrapper>
                    <p className="text-center text-sm font-semibold uppercase tracking-wider text-blue-400">Vision</p>
                    <h2 className="mt-3 text-center text-3xl font-bold text-white sm:text-4xl">Where this is going</h2>
                </AboutMotionWrapper>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {vision?.map((goal, index) => (
                        <AboutMotionWrapper key={`${goal.title}-${index}`} delay={index * 0.1}>
                            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                                <span className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                                    {goal.title}
                                </span>
                                <h3 className="mt-3 text-lg font-semibold text-white">{goal.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/60">{goal.description}</p>
                            </div>
                        </AboutMotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
