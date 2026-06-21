"use client";

import Image from "next/image";
import {BadgeCheck} from "lucide-react";
import {motion} from "framer-motion";

import {SocialLinks} from "./social-links";

const techStack = ["React", "Next.js", "Tailwind", "Node", "TypeScript", "CSS", "HTML", "JavaScript"];

export function IdentityCard() {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.2}}
            whileHover={{scale: 1.03}}
            className="relative w-full"
        >
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(59,130,246,0.15)] backdrop-blur-xl">
                {/* Avatar */}
                <div className="flex justify-center">
                    <div className="relative h-28 w-28">
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />

                        <div className="relative h-full w-full overflow-hidden rounded-full border border-blue-500/30 shadow-lg">
                            <Image src="/public/profile.jpeg" alt="Oday Saad" fill priority className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Name */}
                <div className="mt-4 space-y-1 text-center">
                    <h3 className="flex items-center justify-center gap-2 text-xl font-semibold text-white">
                        Oday Saad
                        <BadgeCheck className="h-4 w-4 text-blue-400" />
                    </h3>

                    <p className="text-sm text-white/60">Fullstack Developer</p>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="font-semibold text-white">5+</p>
                        <p className="text-xs text-white/50">Systems</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="font-semibold text-white">SaaS</p>
                        <p className="text-xs text-white/50">Focused</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="font-semibold text-white">Fast</p>
                        <p className="text-xs text-white/50">Delivery</p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Social Links */}
                <SocialLinks />
            </div>
        </motion.div>
    );
}
