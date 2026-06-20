"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ContactMotionWrapperProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

export function ContactMotionWrapper({
    children,
    delay = 0,
    className,
}: ContactMotionWrapperProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
