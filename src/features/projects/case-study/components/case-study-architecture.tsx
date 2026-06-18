import {CaseStudy} from "../../engine/project-mapper";

type Props = {
    data: CaseStudy;
};

export function CaseStudyArchitecture({data}: Props) {
    return (
        <section className="relative py-24">
            <div className="max-w-4xl mx-auto px-6 space-y-8">
                {/* Label */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs uppercase tracking-widest">
                    Architecture
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">System Architecture</h2>

                {/* Intro */}
                <p className="text-white/70 text-lg leading-relaxed">
                    This section explains how the system is structured, how data flows, and how components interact to
                    achieve scalability and maintainability.
                </p>

                {/* Architecture List */}
                {data.architecture && data.architecture.length > 0 ? (
                    <div className="grid gap-4 mt-8">
                        {data.architecture.map((item, i) => (
                            <div
                                key={i}
                                className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                            >
                                <div className="flex gap-3">
                                    <span className="text-purple-400 mt-1">▣</span>
                                    <p className="text-white/70 leading-relaxed">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-white/40 text-sm mt-6">No architecture data provided for this project.</div>
                )}

                {/* Visual Divider */}
                <div className="pt-10">
                    <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/40 via-white/10 to-transparent" />
                </div>
            </div>
        </section>
    );
}
