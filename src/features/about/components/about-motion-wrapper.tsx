// src/features/about/components/about-motion-wrapper.tsx

"use client";

import type {ReactNode} from "react";
import {motion} from "framer-motion";

type AboutMotionWrapperProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

/**
 * Shared scroll-reveal wrapper for About sections.
 * Mirrors the role of CaseStudyMotionWrapper — keeps motion logic in one
 * client component while individual sections stay server components.
 */
export function AboutMotionWrapper({children, delay = 0, className}: AboutMotionWrapperProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.6, delay, ease: "easeOut"}}
            className={className}
        >
            {children}
        </motion.div>
    );
}
