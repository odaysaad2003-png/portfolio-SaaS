import {Navbar} from "./navbar";

export function AppShell({children}: {children: React.ReactNode}) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-20">{children}</main>
        </div>
    );
}
