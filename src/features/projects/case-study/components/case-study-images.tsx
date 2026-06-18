"use client";

import {CaseStudy} from "../../engine/project-mapper";

type Props = {
    data: CaseStudy;
};

export function CaseStudyImages({data}: Props) {
    if (!data.images?.length) return null;

    const [featured, ...rest] = data.images;

    return (
        <section className="relative py-28">
            <div className="max-w-6xl mx-auto px-6 space-y-10">
                {/* Label */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/60 text-xs uppercase tracking-widest">
                    Visual Overview
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold">Project Screenshots</h2>

                {/* FEATURED IMAGE */}
                <div className="relative group overflow-hidden rounded-2xl border border-white/10">
                    <img
                        src={featured.url}
                        alt={featured.alt || "featured image"}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* overlay glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* GRID IMAGES */}
                {rest.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                        {rest.map((img, i) => (
                            <div key={i} className="relative overflow-hidden rounded-xl border border-white/10 group">
                                <img
                                    src={img.url}
                                    alt={img.alt || "project image"}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
