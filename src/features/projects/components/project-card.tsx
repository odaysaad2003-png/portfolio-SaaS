import Image from "next/image";
import Link from "next/link";
import {ArrowRight, ExternalLink, Code2} from "lucide-react";

type Props = {
    title: string;
    description: string;
    slug: string;
    type: string;
    search: string;
    technologies: string[];
    metrics: {label: string; value: string}[];
    imageUrl?: string;
    imageAlt?: string;

    // ✅ NEW
    liveDemoUrl?: string;
    githubUrl?: string;
};

const highlightText = (text: string, query: string) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} className="text-blue-400">
                {part}
            </span>
        ) : (
            part
        )
    );
};

export function ProjectCard({
    title,
    description,
    slug,
    type,
    technologies,
    metrics,
    imageUrl,
    imageAlt,
    search,
    liveDemoUrl,
    githubUrl,
}: Props) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-blue-500/30 hover:bg-white/10 hover:shadow-[0_0_45px_-18px_rgba(59,130,246,0.55)]">
            {/* IMAGE */}
            <Link href={`/projects/${slug}`} className="block">
                <div className="relative h-72 w-full overflow-hidden">
                    {imageUrl && (
                        <Image
                            src={imageUrl}
                            alt={imageAlt || title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* CATEGORY BADGE */}
                    <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-blue-500/30 bg-black/40 px-3 py-1 text-xs text-blue-300 backdrop-blur">
                            {type}
                        </span>
                    </div>

                    {/* PRIMARY METRIC */}
                    {metrics?.[0] && (
                        <div className="absolute right-4 top-4">
                            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 backdrop-blur">
                                {metrics[0].value}
                            </span>
                        </div>
                    )}
                </div>
            </Link>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-6">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">{highlightText(title, search)}</h3>

                    <p className="text-sm leading-relaxed text-white/70">{description}</p>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2">
                        {technologies.slice(0, 5).map((tech) => (
                            <span
                                key={tech}
                                className="rounded-md border border-white/10 bg-white/10 px-2 py-1 text-xs text-white/70"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* METRICS */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        {metrics.slice(0, 2).map((m) => (
                            <div key={m.label} className="flex flex-col">
                                <span className="text-xs text-white/50">{m.label}</span>
                                <span className="text-sm font-semibold text-white">{m.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ACTIONS */}
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    <Link
                        href={`/projects/${slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
                    >
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                    </Link>

                    {liveDemoUrl && (
                        <a
                            href={liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                        >
                            Live Demo
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    )}

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                        >
                            GitHub
                            <Code2 className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
