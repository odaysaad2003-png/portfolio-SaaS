"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Sun, Moon} from "lucide-react";

export function ModeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="
                relative flex items-center justify-center
                w-10 h-10 rounded-xl
                border border-white/10
                bg-white/5 backdrop-blur
                hover:bg-white/10
                active:scale-95
                transition-all duration-300
                group
            "
        >
            {/* Icon Wrapper */}
            <div className="transition-all duration-300 rotate-0 group-hover:rotate-12">
                {isDark ? (
                    <Sun className="w-5 h-5 text-yellow-400 transition-all duration-300" />
                ) : (
                    <Moon className="w-5 h-5 text-blue-300 transition-all duration-300" />
                )}
            </div>
        </button>
    );
}
