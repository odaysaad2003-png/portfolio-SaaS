"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {Project} from "@/types/project";

type Props = {
    projects: Project[];
};

export function CaseStudyRelatedProjects({projects}: Props) {
    if (!projects.length) return null;

    return (
        <section className="mt-14 space-y-6">
            <h2 className="text-xl font-semibold text-white/90 ml-5">Related Systems</h2>

            <div className="grid md:grid-cols-3 gap-8 ml-5  ">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: index * 0.1}}
                        className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition space-y-6"
                    >
                        <Link href={`/projects/${project.slug}`}>
                            <h3 className="text-white font-medium mb-2">{project.title}</h3>

                            <p className="text-xs text-white/50">{project.description.slice(0, 80)}...</p>

                            <div className="mt-3 flex flex-wrap gap-1 ">
                                {project.technologies.slice(0, 3).map((t) => (
                                    <span
                                        key={t}
                                        className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/60"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
