// src/features/about/components/about-cta.tsx

import Link from "next/link";

import {FeaturedProjectLink} from "../engine/about-mapper";
import {AboutMotionWrapper} from "./about-motion-wrapper";

type AboutCtaProps = {
    featuredProjects: FeaturedProjectLink[];
};

export function AboutCta({featuredProjects}: AboutCtaProps) {
    return (
        <section className="relative px-6 py-24 sm:px-10">
            <div className="mx-auto max-w-4xl text-center">
                <AboutMotionWrapper>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        See this thinking applied
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-white/60">
                        Every principle above is implemented somewhere in these systems.
                    </p>
                </AboutMotionWrapper>

                {featuredProjects.length > 0 && (
                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {featuredProjects.map((project, index) => (
                            <AboutMotionWrapper key={project.slug} delay={index * 0.08}>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur transition-colors hover:border-blue-500/40"
                                >
                                    <h3 className="text-base font-semibold text-white transition-colors group-hover:text-blue-300">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 line-clamp-2 text-sm text-white/50">
                                        {project.description}
                                    </p>
                                    <span className="mt-4 inline-block text-xs font-medium text-blue-400">
                                        View case study →
                                    </span>
                                </Link>
                            </AboutMotionWrapper>
                        ))}
                    </div>
                )}

                <AboutMotionWrapper delay={0.2}>
                    {/* Adjust the href to match your actual contact route */}
                    <Link
                        href="/contact"
                        className="mt-12 inline-flex items-center rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-400"
                    >
                        Let&apos;s build something
                    </Link>
                </AboutMotionWrapper>
            </div>
        </section>
    );
}
