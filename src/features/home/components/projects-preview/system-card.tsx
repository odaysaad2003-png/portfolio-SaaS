import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

import {cn} from "@/lib/utils";

type SystemCardProps = {
    title: string;
    description: string;
    technologies: string[];
    slug: string;
    imageUrl?: string;
    imageAlt?: string;
    metrics?: {
        label: string;
        value: string;
    }[];
    className?: string;
};

export function SystemCard({
    title,
    description,
    technologies,
    slug,
    imageUrl,
    imageAlt = title,
    metrics = [],
    className,
}: SystemCardProps) {
    const primaryMetric = metrics[0];

    return (
        <article
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
                "transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10",
                "hover:shadow-[0_0_45px_-12px_rgba(59,130,246,0.45)]",
                className
            )}
        >
            {/* Image */}
            <div className="relative h-44 overflow-hidden border-b border-white/10 bg-slate-950">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-white/40">Project Preview</div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                        Engineering System
                    </span>

                    {primaryMetric ? (
                        <span className="text-xs font-semibold text-emerald-400">{primaryMetric.value}</span>
                    ) : null}
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>

                    <p className="line-clamp-2 text-sm leading-relaxed text-white/60">{description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 4).map((technology) => (
                        <span
                            key={technology}
                            className="rounded-md border border-white/10 bg-white/10 px-2 py-1 text-xs text-white/70"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                <Link
                    href={`/projects/${slug}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                >
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </article>
    );
}
