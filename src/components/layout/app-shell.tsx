import { Footer } from "./footer";
import {Navbar} from "./navbar";

export function AppShell({children}: {children: React.ReactNode}) {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* NAV */}
            <Navbar />

            {/* MAIN */}
            <main className="flex-1 w-full">
                <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">{children}</div>
            </main>

            {/* FOOTER */}
            <footer className="border-t border-border mt-20">
               <Footer/>
            </footer>
        </div>
    );
}
