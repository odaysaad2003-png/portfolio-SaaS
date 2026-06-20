import * as React from "react";

import {cn} from "@/lib/utils";

export type LoadingStateVariant = "page" | "section" | "card" | "grid";

export type LoadingStateProps = {
    title?: string;
    description?: string;
    variant?: LoadingStateVariant;
    className?: string;
};

function SkeletonBlock({className}: {className?: string}) {
    return <div className={cn("animate-pulse rounded-md bg-muted", className)} aria-hidden="true" />;
}

function PageSkeleton() {
    return (
        <div className="flex flex-col gap-6">
            <SkeletonBlock className="h-8 w-1/3" />
            <SkeletonBlock className="h-4 w-2/3" />
            <GridSkeleton />
        </div>
    );
}

function SectionSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <SkeletonBlock className="h-6 w-1/4" />
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-5/6" />
        </div>
    );
}

function CardSkeleton() {
    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
            <SkeletonBlock className="h-5 w-1/2" />
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-3/4" />
        </div>
    );
}

function GridSkeleton() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({length: 6}).map((_, index) => (
                <CardSkeleton key={index} />
            ))}
        </div>
    );
}

const variantSkeletons: Record<LoadingStateVariant, React.ComponentType> = {
    page: PageSkeleton,
    section: SectionSkeleton,
    card: CardSkeleton,
    grid: GridSkeleton,
};

export function LoadingState({title, description, variant = "section", className}: LoadingStateProps) {
    const Skeleton = variantSkeletons[variant];

    return (
        <div role="status" aria-busy="true" aria-live="polite" className={cn("flex flex-col gap-4", className)}>
            <span className="sr-only">{title ?? "Loading content"}</span>
            {description ? <span className="sr-only">{description}</span> : null}

            <Skeleton />
        </div>
    );
}
