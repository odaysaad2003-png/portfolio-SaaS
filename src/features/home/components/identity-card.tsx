"use client";

import Image from "next/image";
import {BadgeCheck} from "lucide-react";
import {motion} from "framer-motion";

export function IdentityCard() {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.2}}
            whileHover={{scale: 1.03}}
            className="relative w-full"
        >
            {/* Glow Frame */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(59,130,246,0.15)]">
                {/* Avatar Section */}
                <div className="flex justify-center">
                    <div className="relative w-28 h-28">
                        {/* Glow Ring */}
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border border-blue-500/30 shadow-lg">
                            <Image src="/public/profile.jpeg" alt="oday Saad" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Name */}
                <div className="text-center mt-4 space-y-1">
                    <h3 className="text-white text-xl font-semibold flex items-center justify-center gap-2">
                        Oday Saad
                        <BadgeCheck className="text-blue-400 w-4 h-4" />
                    </h3>
                    <p className="text-white/60 text-sm">Fullstack Developer</p>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                    <div>
                        <p className="text-white font-semibold">3+</p>
                        <p className="text-white/50 text-xs">Systems</p>
                    </div>
                    <div>
                        <p className="text-white font-semibold">SaaS</p>
                        <p className="text-white/50 text-xs">Focused</p>
                    </div>
                    <div>
                        <p className="text-white font-semibold">Fast</p>
                        <p className="text-white/50 text-xs">Delivery</p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {[ "React" ,"Next.js", "Tailwind", "Node" , "TS" ,"css" , "HTML" ,"JS" ].map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
