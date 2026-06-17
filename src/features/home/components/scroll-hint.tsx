"use client";

import {motion} from "framer-motion";

export function ScrollHint() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.2}}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
            <span className="text-xs">Scroll</span>

            <motion.div
                animate={{y: [0, 8, 0]}}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                }}
                className="w-[2px] h-6 bg-white/30 rounded-full"
            />
        </motion.div>
    );
}
