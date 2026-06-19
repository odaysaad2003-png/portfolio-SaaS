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
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
            {/* Previous */}
            {previous && (
                <motion.div
                    whileHover={{scale: 1.02}}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
                >
                    <p className="text-xs text-white/40 mb-2">← Previous Project</p>

                    <Link href={`/projects/${previous.slug}`}>
                        <h3 className="text-white font-medium hover:text-white/80 transition">{previous.title}</h3>
                    </Link>
                </motion.div>
            )}

            {/* Next */}
            {next && (
                <motion.div
                    whileHover={{scale: 1.02}}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur text-right"
                >
                    <p className="text-xs text-white/40 mb-2">Next Project →</p>

                    <Link href={`/projects/${next.slug}`}>
                        <h3 className="text-white font-medium hover:text-white/80 transition">{next.title}</h3>
                    </Link>
                </motion.div>
            )}
        </div>
    );
}
