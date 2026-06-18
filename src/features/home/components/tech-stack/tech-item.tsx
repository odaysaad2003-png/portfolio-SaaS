"use client";

import {motion} from "framer-motion";
import type {ReactNode} from "react";

type Props = {
    name: string;
    icon: ReactNode;
};

export function TechItem({name, icon}: Props) {
    return (
        <motion.div
            whileHover={{y: -4, scale: 1.02}}
            transition={{duration: 0.2}}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur"
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-300 transition group-hover:text-blue-200">
                {icon}
            </div>

            <span className="font-medium">{name}</span>
        </motion.div>
    );
}
