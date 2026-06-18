"use client";

import {motion} from "framer-motion";
import {TechItem} from "./tech-item";

const stack = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
        category: "State & Data",
        items: ["Zustand", "React Query", "Zod"],
    },
    {
        category: "UI System",
        items: ["Framer Motion", "ShadCN UI", "Radix UI"],
    },
    {
        category: "Architecture",
        items: ["Feature-Based Design", "Clean Architecture", "Scalability Thinking"],
    },
];

export function TechStackSection() {
    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-semibold text-white">Tech Stack</h2>
                    <p className="text-white/60 mt-2">Tools and systems I use to build scalable applications</p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stack.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: i * 0.1}}
                            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
                        >
                            <h3 className="text-white font-semibold mb-4">{group.category}</h3>

                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <TechItem key={item} name={item} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
