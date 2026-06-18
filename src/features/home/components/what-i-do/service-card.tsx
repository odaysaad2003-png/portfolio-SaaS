"use client";

import {motion} from "framer-motion";

type Props = {
    title: string;
    description: string;
    icon?: React.ReactNode;
};

export function ServiceCard({title, description, icon}: Props) {
    return (
        <motion.div whileHover={{y: -5}} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-blue-400 mb-3">{icon}</div>

            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>

            <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}
