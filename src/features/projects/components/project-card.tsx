import Image from "next/image";
import Link from "next/link";

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
export function ProjectCard({title, description, slug, type, technologies, metrics, imageUrl, imageAlt, search}: Props) {
    return (
        <Link
            href={`/projects/${slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
        >
            {/* IMAGE - BIGGER */}
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

                {/* TYPE BADGE ON IMAGE */}
                <div className="absolute top-4 left-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-black/40 text-blue-300 border border-blue-500/30 backdrop-blur">
                        {type}
                    </span>
                </div>

                {/* METRIC ON IMAGE */}
                {metrics?.[0] && (
                    <div className="absolute top-4 right-4">
                        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 backdrop-blur">
                            {metrics[0].value}
                        </span>
                    </div>
                )}
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-4">
                {/* TITLE */}
                <h3 className="text-xl font-semibold text-white">{highlightText(title, search)}</h3>

                {/* DESCRIPTION (MORE SPACE) */}
                <p className="text-sm text-white/70 leading-relaxed">{description}</p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 5).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/70 border border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* METRICS ROW (EXPANDED) */}
                <div className="flex flex-wrap gap-4 pt-2">
                    {metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="flex flex-col">
                            <span className="text-xs text-white/50">{m.label}</span>
                            <span className="text-sm font-semibold text-white">{m.value}</span>
                        </div>
                    ))}
                </div>

                {/* CTA INDICATOR */}
                <div className="pt-2 text-sm text-blue-400 group-hover:text-blue-300 transition flex items-center gap-2">
                    View Case Study →
                </div>
            </div>
        </Link>
    );
}
