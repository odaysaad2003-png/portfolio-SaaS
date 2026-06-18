import {CaseStudy} from "../../engine/project-mapper";

type Props = {
    data: CaseStudy;
};

export function CaseStudyContext({data}: Props) {
    return (
        <section className="relative py-10">
            <div className="max-w-4xl mx-auto px-6 space-y-6">
                {/* Label */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs uppercase tracking-widest">
                    Context
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">System Context</h2>

                {/* Description */}
                <p className="text-white/70 text-lg leading-relaxed">{data.context}</p>

                {/* Optional Architecture Hint */}
                {data.architecture && (
                    <div className="pt-6 space-y-3">
                        <h3 className="text-white/90 font-semibold">Key System Constraints & Decisions</h3>

                        <ul className="space-y-2">
                            {data.architecture.map((item, i) => (
                                <li key={i} className="flex gap-2 text-white/60">
                                    <span className="text-blue-400">▹</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Divider */}
                <div className="pt-6">
                    <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent" />
                </div>
            </div>
        </section>
    );
}
