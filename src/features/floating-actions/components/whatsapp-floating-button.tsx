"use client";

import {motion} from "framer-motion";

import {useFloatingActionsContext} from "../context/floating-actions-provider";

function WhatsappIcon() {
    return (
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M16.04 3C9.37 3 3.96 8.4 3.96 15.05c0 2.23.6 4.32 1.65 6.12L4 29l8.02-1.57a12.1 12.1 0 0 0 4.02.68c6.67 0 12.08-5.4 12.08-12.06C28.12 8.4 22.71 3 16.04 3Zm0 21.94a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-4.76.93.94-4.62-.24-.38a9.84 9.84 0 0 1-1.53-5.27c0-5.47 4.46-9.92 9.96-9.92 5.5 0 9.96 4.45 9.96 9.92 0 5.47-4.46 9.94-9.96 9.94Zm5.47-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
    );
}

export function WhatsappFloatingButton() {
    const {whatsappUrl} = useFloatingActionsContext();

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{opacity: 0, scale: 0.6, y: 20}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{type: "spring", stiffness: 260, damping: 20, delay: 0.4}}
            whileHover={{scale: 1.08}}
            whileTap={{scale: 0.94}}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.25)] backdrop-blur-xl transition-colors hover:border-emerald-400/30 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060a] sm:h-14 sm:w-14"
        >
            <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-emerald-400/20"
                animate={{opacity: [0.35, 0, 0.35], scale: [1, 1.4, 1]}}
                transition={{duration: 2.4, repeat: Infinity, ease: "easeInOut"}}
            />
            <WhatsappIcon />
        </motion.a>
    );
}
