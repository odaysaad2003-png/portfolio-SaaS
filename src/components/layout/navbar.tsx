"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/shared/mode-toggle";

export function Navbar() {
    return (
        <header className="fixed top-0 w-full border-b border-border bg-background/70 backdrop-blur-md z-50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="font-semibold text-lg">
                    Zoheer Saad
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-foreground transition">
                        Home
                    </Link>

                    <Link href="/projects" className="hover:text-foreground transition">
                        Projects
                    </Link>

                    <Link href="/about" className="hover:text-foreground transition">
                        About
                    </Link>

                    <Link href="/contact" className="hover:text-foreground transition">
                        Contact
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <ModeToggle />

                    <Button className="rounded-full px-5">Hire Me</Button>
                </div>
            </div>
        </header>
    );
}
