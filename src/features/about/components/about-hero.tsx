// src/features/about/components/about-hero.tsx

import {AboutHeroData} from "@/types/about";
import {AboutMotionWrapper} from "./about-motion-wrapper";

type AboutHeroProps = {
    data: AboutHeroData;
};

export function AboutHero({data}: AboutHeroProps) {
    return (
        <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-10">
            {/* Glow background */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
            />

            <div className="relative mx-auto max-w-4xl text-center">
                <AboutMotionWrapper>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur">
                        {data.badge}
                    </span>
                </AboutMotionWrapper>

                <AboutMotionWrapper delay={0.1}>
                    <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                        {data.identityStatement}
                    </h1>
                </AboutMotionWrapper>

                <AboutMotionWrapper delay={0.2}>
                    <p className="mt-4 text-lg font-medium text-white/70">{data.role}</p>
                </AboutMotionWrapper>

                <AboutMotionWrapper delay={0.3}>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60">
                        {data.summary}
                    </p>
                </AboutMotionWrapper>

                <AboutMotionWrapper delay={0.4}>
                    <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4">
                        {data.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur"
                            >
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </AboutMotionWrapper>
            </div>
        </section>
    );
}
