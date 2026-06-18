"use client";

import {motion} from "framer-motion";

const stats = [
    {label: "Years Experience", value: "3+"},
    {label: "Projects Built", value: "12+"},
    {label: "SaaS Systems", value: "4"},
    {label: "Remote Ready", value: "100%"},
];

export function StatsSection() {
    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: i * 0.1}}
                            className="text-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                        >
                            <p className="text-2xl font-semibold text-white">{stat.value}</p>
                            <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
