"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/shared/mode-toggle";

export function Navbar() {
    return (
        <header className="fixed top-0 w-full border-b border-border bg-background/80 backdrop-blur-md z-50">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="font-semibold text-lg">
                    Zoheer Saad
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <ModeToggle />
                    <Button className="rounded-full">Hire Me</Button>
                </div>
            </div>
        </header>
    );
}
