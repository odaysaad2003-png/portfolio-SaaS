import * as React from "react";
import Link from "next/link";
import {AlertTriangle} from "lucide-react";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import type {StateAction} from "./empty-state";

export type ErrorStateProps = {
    title?: string;
    description?: string;
    action?: StateAction;
    className?: string;
};

export function ErrorState({
    title = "Something went wrong",
    description = "We couldn't load this content. Please try again.",
    action,
    className,
}: ErrorStateProps) {
    return (
        <div
            role="alert"
            aria-live="assertive"
            className={cn(
                "flex flex-col items-center justify-center gap-4 rounded-2xl border border-destructive/30 bg-card px-6 py-12 text-center",
                className
            )}
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-1.5">
                <p className="text-sm font-medium text-card-foreground">{title}</p>
                <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
            </div>

            {action ? <ErrorStateAction action={action} /> : null}
        </div>
    );
}

function ErrorStateAction({action}: {action: StateAction}) {
    if (action.href) {
        return (
            <Button asChild size="sm" variant="outline">
                <Link href={action.href}>{action.label}</Link>
            </Button>
        );
    }

    return (
        <Button size="sm" variant="outline" onClick={action.onClick}>
            {action.label}
        </Button>
    );
}
