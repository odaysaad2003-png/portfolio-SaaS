"use client";

import {motion} from "framer-motion";

import {HeroText} from "./hero-text";
import {IdentityCard} from "./identity-card";
import {HeroBackground} from "./hero-background";

export function HeroSection() {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.6, ease: "easeOut"}}
            className="relative flex min-h-[90vh] w-full items-center overflow-hidden"
        >
            <HeroBackground />

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <HeroText />
                    </div>

                    <div className="flex justify-center lg:col-span-5 lg:justify-end">
                        <IdentityCard />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
