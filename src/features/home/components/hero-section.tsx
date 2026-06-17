"use client";

import React from "react";
import {HeroText} from "./hero-text";
import {IdentityCard} from "./identity-card";
import {HeroBackground} from "./hero-background";
import {ScrollHint} from "./scroll-hint";

import {motion} from "framer-motion";

export function HeroSection() {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.6, ease: "easeOut"}}
            className="relative w-full min-h-[90vh] flex items-center overflow-hidden"
        >
            <HeroBackground />

            {/* Container */}
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                {/* GRID LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* LEFT SIDE - TEXT SYSTEM */}
                    <div className="lg:col-span-7">
                        <HeroText />
                    </div>

                    {/* RIGHT SIDE - IDENTITY CARD */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <IdentityCard />
                    </div>
                </div>
            </div>
            <ScrollHint />
        </motion.section>
    );
}
