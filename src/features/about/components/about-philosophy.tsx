// src/features/about/components/about-philosophy.tsx

import {Principle} from "@/features/about/types/about";
import {AboutMotionWrapper} from "./about-motion-wrapper";

type AboutPhilosophyProps = {
    principles: Principle[];
};

export function AboutPhilosophy({principles}: AboutPhilosophyProps) {
    return (
        <section className="relative px-6 py-24 sm:px-10">
            <div className="mx-auto max-w-5xl">
                <AboutMotionWrapper>
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                        Engineering Philosophy
                    </p>
                    <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                        How I think about systems
                    </h2>
                </AboutMotionWrapper>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {principles.map((principle, index) => (
                        <AboutMotionWrapper key={principle.id} delay={index * 0.08}>
                            <div className="h-full rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-6 backdrop-blur transition-colors hover:border-blue-500/40">
                                <span className="font-mono text-xs text-blue-400">
                                    0{index + 1}
                                </span>
                                <h3 className="mt-3 text-lg font-semibold text-white">
                                    {principle.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/60">
                                    {principle.description}
                                </p>
                            </div>
                        </AboutMotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
