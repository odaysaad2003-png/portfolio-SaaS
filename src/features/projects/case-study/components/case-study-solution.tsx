import {CaseStudy} from "../../engine/project-mapper";

type Props = {
    data: CaseStudy;
};

export function CaseStudySolution({data}: Props) {
    return (
        <section className="relative py-5">
            <div className="max-w-4xl mx-auto px-6 space-y-8">
                {/* Label */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs uppercase tracking-widest">
                    Solution
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">Engineering Solution</h2>

                {/* Main Content */}
                <p className="text-white/70 text-lg leading-relaxed">{data.solution}</p>

                {/* Architecture Thinking Block */}
                {data.architecture && data.architecture.length > 0 && (
                    <div className="mt-10 space-y-4">
                        <h3 className="text-white/90 font-semibold text-lg">Architectural Decisions</h3>

                        <div className="grid gap-3">
                            {data.architecture.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                                >
                                    <span className="text-green-400 mt-1">✓</span>
                                    <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Divider */}
                <div className="pt-8">
                    <div className="h-[1px] w-full bg-gradient-to-r from-green-500/40 via-white/10 to-transparent" />
                </div>
            </div>
        </section>
    );
}
