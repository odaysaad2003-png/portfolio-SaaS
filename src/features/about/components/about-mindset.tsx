// src/features/about/components/about-mindset.tsx

import {MindsetStep} from "@/features/about/types/about";
import {AboutMotionWrapper} from "./about-motion-wrapper"; 

type AboutMindsetProps = {
    mindset: MindsetStep[];
};

export function AboutMindset({mindset}: AboutMindsetProps) {
    return (
        <section className="relative px-6 py-24 sm:px-10">
            <div className="mx-auto max-w-5xl">
                <AboutMotionWrapper>
                    <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                        Engineering Mindset
                    </p>
                    <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                        How systems get built
                    </h2>
                </AboutMotionWrapper>

                <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/10 md:grid-cols-3">
                    {mindset.map((step, index) => (
                        <AboutMotionWrapper key={step.id} delay={index * 0.1}>
                            <div className="h-full bg-[#05070d] p-6">
                                <span className="font-mono text-sm text-amber-400">{step.step}</span>
                                <h3 className="mt-3 text-lg font-semibold text-white">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/60">
                                    {step.description}
                                </p>
                            </div>
                        </AboutMotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
