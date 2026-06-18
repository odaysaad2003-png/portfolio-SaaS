"use client";

import {motion} from "framer-motion";

type Props = {
    name: string;
};

export function TechItem({name}: Props) {
    return (
        <motion.div
            whileHover={{scale: 1.05}}
            className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white/70 text-sm backdrop-blur text-center"
        >
            {name}
        </motion.div>
    );
}
