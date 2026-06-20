import type {Metadata} from "next";

import {Inter, Geist_Mono} from "next/font/google";

import "../../style/globals.css";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/theme/theme-provider";
import {AppShell} from "@/components/layout/app-shell";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "Oday Saad — Fullstack Developer",
    description: "SaaS-style Developer Portfolio showcasing systems, architecture, and case studies",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn("h-full", "antialiased", inter.variable, geistMono.variable)}
        >
            <body className="theme-aware min-h-full flex flex-col font-sans">
                <ThemeProvider>
                    <AppShell>{children}</AppShell>
                </ThemeProvider>
            </body>
        </html>
    );
}
