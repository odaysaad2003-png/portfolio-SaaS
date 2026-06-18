"use client";

import {motion} from "framer-motion";

export function CTASection() {
    return (
        <section className="w-full py-24">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                {/* Container */}
                <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center overflow-hidden"
                >
                    {/* Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white">
                            Let’s Build Something Powerful
                        </h2>

                        <p className="text-white/60 max-w-2xl mx-auto">
                            I design and build scalable SaaS systems, modern web apps, and high-performance frontend
                            architectures. Let’s turn your idea into a production-ready product.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <button className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">
                                Hire Me
                            </button>

                            <button className="px-6 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5 transition">
                                View GitHub
                            </button>

                            <button className="px-6 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5 transition">
                                Download CV
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
