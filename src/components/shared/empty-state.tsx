import * as React from "react";
import Link from "next/link";
import {Inbox} from "lucide-react";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

export type StateAction = {
    label: string;
    href?: string;
    onClick?: () => void;
};

export type EmptyStateProps = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    action?: StateAction;
    className?: string;
};

export function EmptyState({title, description, icon, action, className}: EmptyStateProps) {
    return (
        <div
            role="status"
            aria-live="polite"
            className={cn(
                "flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card px-6 py-12 text-center",
                className
            )}
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                {icon ?? <Inbox className="h-5 w-5" aria-hidden="true" />}
            </div>

            <div className="flex flex-col gap-1.5">
                <p className="text-sm font-medium text-card-foreground">{title}</p>
                {description ? <p className="max-w-sm text-sm text-muted-foreground">{description}</p> : null}
            </div>

            {action ? <EmptyStateAction action={action} /> : null}
        </div>
    );
}

function EmptyStateAction({action}: {action: StateAction}) {
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
