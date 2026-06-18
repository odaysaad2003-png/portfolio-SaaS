"use client";

import {motion} from "framer-motion";
import {TechItem} from "./tech-item";
import {techStackGroups} from "./tech-stack.data";

export function TechStackSection() {
    return (
        <section className="w-full py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-semibold text-white">Tech Stack</h2>
                    <p className="mt-2 text-white/60">
                        Technologies, tools, and systems I use to build scalable products
                    </p>
                </motion.div>

                {/* Groups */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {techStackGroups.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{opacity: 0, y: 24}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.15}}
                            transition={{delay: i * 0.08, duration: 0.4}}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                        >
                            <h3 className="mb-5 text-lg font-semibold text-white">{group.category}</h3>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {group.items.map((item) => (
                                    <TechItem key={item.name} name={item.name} icon={item.icon} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
