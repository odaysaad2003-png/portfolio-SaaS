"use client";

import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative flex items-center justify-center min-h-[92vh] px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-120px] right-[-80px] w-[500px] h-[500px] bg-sky-400/20 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-3xl text-center space-y-8">
                {/* Badge */}
                <motion.div
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="inline-flex items-center rounded-full border border-border px-4 py-1 text-sm text-muted-foreground"
                >
                    Available for Freelance & Remote Roles
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.1}}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                    I build scalable fullstack systems, not just websites.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.2}}
                    className="text-muted-foreground text-lg md:text-xl leading-relaxed"
                >
                    SaaS-focused Fullstack Developer specializing in system design, architecture thinking, and
                    production-grade web applications.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.3}}
                    className="flex items-center justify-center gap-4 pt-4"
                >
                    <Button className="rounded-full px-6">Hire Me</Button>

                    <Button variant="outline" className="rounded-full px-6">
                        View Case Studies
                    </Button>
                </motion.div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.6}}
                    className="text-sm text-muted-foreground pt-6"
                >
                    Scroll to explore case studies ↓
                </motion.div>
            </div>
        </section>
    );
}
