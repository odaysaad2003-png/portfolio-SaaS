"use client";

import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";

export function ModeToggle() {
    const {resolvedTheme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = resolvedTheme === "dark";

    if (!mounted) {
        return (
            <Button variant="outline" size="sm" aria-label="Toggle theme" className="min-w-20" disabled>
                Theme
            </Button>
        );
    }

    return (
        <Button
            variant="outline"
            size="sm"
            aria-label="Toggle theme"
            className="min-w-20"
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? (
                <>
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                </>
            ) : (
                <>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                </>
            )}
        </Button>
    );
}
