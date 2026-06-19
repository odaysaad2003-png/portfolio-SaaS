"use client";

import Link from "next/link";
import {motion} from "framer-motion";

type ProjectNav = {
    title: string;
    slug: string;
};

type Props = {
    next: ProjectNav | null;
    previous: ProjectNav | null;
};

export function CaseStudyNavigation({next, previous}: Props) {
    if (!next && !previous) return null;

    return (
        <section className="w-full mt-24">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <div className="mb-6">
                    <h2 className="text-sm tracking-wide text-white/50 uppercase">Continue Exploring</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Previous */}
                    {previous ? (
                        <motion.div
                            whileHover={{scale: 1.02}}
                            transition={{type: "spring", stiffness: 200, damping: 18}}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
                        >
                            <p className="text-xs text-white/40 mb-3">← Previous Project</p>

                            <Link href={`/projects/${previous.slug}`}>
                                <h3 className="text-white font-medium text-lg group-hover:text-white/80 transition">
                                    {previous.title}
                                </h3>
                            </Link>

                            {/* Glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />
                        </motion.div>
                    ) : (
                        <div />
                    )}

                    {/* Next */}
                    {next ? (
                        <motion.div
                            whileHover={{scale: 1.02}}
                            transition={{type: "spring", stiffness: 200, damping: 18}}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition text-right"
                        >
                            <p className="text-xs text-white/40 mb-3">Next Project →</p>

                            <Link href={`/projects/${next.slug}`}>
                                <h3 className="text-white font-medium text-lg group-hover:text-white/80 transition">
                                    {next.title}
                                </h3>
                            </Link>

                            {/* Glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none" />
                        </motion.div>
                    ) : (
                        <div />
                    )}
                </div>
            </div>
        </section>
    );
}
