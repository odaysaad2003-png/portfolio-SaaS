import Link from "next/link";
import {ArrowRight} from "lucide-react";

import {projects} from "@/lib/data/project.data";
import {SystemCard} from "./system-card";

export function ProjectsPreviewSection() {
    const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

    return (
        <section className="relative py-24">
            <div className="mx-auto w-full max-w-6xl px-4">
                {/* Section Header */}
                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl space-y-4">
                        <span className="inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                            Featured Engineering Systems
                        </span>

                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Selected Systems Built as Real Products
                            </h2>

                            <p className="text-sm leading-relaxed text-white/60 md:text-base">
                                A focused preview of engineering projects, showing product thinking, technical
                                decisions, measurable impact, and system-level execution.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/projects"
                        className="group inline-flex w-fit items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_35px_-12px_rgba(59,130,246,0.8)] transition hover:bg-blue-400"
                    >
                        View All Projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <SystemCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            slug={project.slug}
                            metrics={project.metrics}
                            imageUrl={project.images[0]?.url}
                            imageAlt={project.images[0]?.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
