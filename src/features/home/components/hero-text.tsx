"use client";

    import {motion} from "framer-motion";
import { span } from "framer-motion/client";
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0, transition: {duration: 0.5}},
};

export function HeroText() {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-300"
            >
                Available for Freelance & Remote Opportunities
            </motion.div>

            <motion.h1
                variants={item}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-white"
            >
                <span className="text-blue-400">{` FullStack  "devlober" `}</span> {` for complex problems.. `}
            </motion.h1>

            <motion.p variants={item} className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
                Fullstack Developer specialized in building SaaS-grade applications with clean architecture,
                performance-first thinking, and system design mindset.
            </motion.p>

            <motion.div variants={item} className="space-y-2 text-sm text-white/70">
                <p>• System-driven frontend architecture</p>
                <p>• Scalable backend & API design thinking</p>
                <p>• Product-level UI/UX engineering</p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition">
                    Hire Me
                </button>

                <button className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm text-white hover:bg-white/5 transition">
                    View Case Studies
                </button>
            </motion.div>
        </motion.div>
    );
}
