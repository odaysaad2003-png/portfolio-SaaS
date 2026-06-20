"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {Project} from "@/types/project";

import {EmptyState} from "@/components/shared/empty-state";

type Props = {
    projects: Project[];
};

export function CaseStudyRelatedProjects({projects}: Props) {
    return (
        <section className="mt-14 space-y-6">
            <h2 className="text-xl font-semibold text-foreground ml-5">Related Systems</h2>

            {projects.length === 0 ? (
                <div className="ml-5">
                    <EmptyState title="No related systems yet" description="More case studies will be added soon." />
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-8 ml-5">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.1}}
                            className="p-5 rounded-2xl border border-border bg-card hover:bg-accent transition space-y-6"
                        >
                            <Link href={`/projects/${project.slug}`}>
                                <h3 className="text-card-foreground font-medium mb-2">{project.title}</h3>

                                <p className="text-xs text-muted-foreground">{project.description.slice(0, 80)}...</p>

                                <div className="mt-3 flex flex-wrap gap-1">
                                    {project.technologies.slice(0, 3).map((t) => (
                                        <span
                                            key={t}
                                            className="text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
}
