"use client";

import {motion} from "framer-motion";
import {ServiceCard} from "./service-card";
import {Code2, Layers, Rocket} from "lucide-react";

const services = [
    {
        title: "System Architecture",
        description:
            "Designing scalable frontend architectures with clean separation of concerns and reusable systems.",
        icon: <Layers />,
    },
    {
        title: "Frontend Engineering",
        description: "Building high-performance React & Next.js applications with focus on UX and maintainability.",
        icon: <Code2 />,
    },
    {
        title: "SaaS Development",
        description: "Developing production-ready SaaS platforms with modern UI systems and scalable structures.",
        icon: <Rocket />,
    },
];

export function WhatIDoSection() {
    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-semibold text-white">What I Do</h2>
                    <p className="text-white/60 mt-2">I turn complex problems into scalable digital systems</p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: i * 0.1}}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
