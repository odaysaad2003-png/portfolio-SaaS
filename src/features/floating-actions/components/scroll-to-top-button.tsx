"use client";

import {AnimatePresence, motion} from "framer-motion";
import {ArrowUp} from "lucide-react";

import {useFloatingActionsContext} from "../context/floating-actions-provider";

export function ScrollToTopButton() {
    const {showScrollTop, scrollToTop} = useFloatingActionsContext();

    return (
        <AnimatePresence>
            {showScrollTop && (
                <motion.button
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Scroll back to top"
                    initial={{opacity: 0, scale: 0.6, y: 20}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    exit={{opacity: 0, scale: 0.6, y: 20}}
                    transition={{type: "spring", stiffness: 260, damping: 22}}
                    whileHover={{scale: 1.08}}
                    whileTap={{scale: 0.94}}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 shadow-[0_0_25px_rgba(59,130,246,0.2)] backdrop-blur-xl transition-colors hover:border-blue-400/30 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060a] sm:h-12 sm:w-12"
                >
                    <ArrowUp className="h-5 w-5" aria-hidden="true" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
