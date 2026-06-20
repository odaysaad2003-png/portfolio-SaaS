import {LoadingState} from "@/components/shared/loading-state";

export default function Loading() {
    return (
        <main className="min-h-screen bg-background px-6 py-32 text-foreground">
            <div className="mx-auto max-w-6xl">
                <LoadingState
                    variant="page"
                    title="Loading projects"
                    description="Preparing case studies, filters, technologies, and project systems."
                />
                <LoadingState
                    variant="page"
                    title="Loading projects"
                    description="Preparing case studies, filters, technologies, and project systems."
                />
            </div>
        </main>
    );
}
