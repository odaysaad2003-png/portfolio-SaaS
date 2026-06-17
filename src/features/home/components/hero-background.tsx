"use client";

import {useEffect, useState} from "react";

export function HeroBackground() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="absolute inset-0 -z-20">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050B1A] via-[#060F24] to-[#050B1A]" />

            {/* Top Glow */}
            <div
                className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full"
                style={{transform: `translateY(${offset * 0.05}px)`}}
            />

            {/* Right Glow */}
            <div
                className="absolute top-1/3 right-[-200px] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"
                style={{transform: `translateY(${offset * 0.03}px)`}}
            />

            {/* Bottom Glow */}
            <div
                className="absolute bottom-[-200px] left-1/3 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full"
                style={{transform: `translateY(${offset * 0.02}px)`}}
            />
        </div>
    );
}
