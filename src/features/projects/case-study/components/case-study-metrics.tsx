import {CaseStudy} from "../../engine/project-mapper";
import {EmptyState} from "@/components/shared/empty-state";

type Props = {
    data: CaseStudy;
};

export function CaseStudyMetrics({data}: Props) {
    return (
        <section className="relative py-0">
            <div className="max-w-5xl mx-auto px-6 space-y-10">
                {/* Label */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs uppercase tracking-widest">
                    Impact
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Results & Impact</h2>

                {data.metrics && data.metrics.length > 0 ? (
                    <>
                        <p className="text-muted-foreground max-w-2xl leading-relaxed">
                            Measurable outcomes achieved after implementing the system and optimizing architecture.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
                            {data.metrics.map((metric, i) => (
                                <div
                                    key={i}
                                    className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:bg-accent transition"
                                >
                                    {/* Glow Effect */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />

                                    {/* Value */}
                                    <div className="text-3xl font-bold text-blue-400">{metric.value}</div>

                                    {/* Label */}
                                    <div className="text-muted-foreground text-sm mt-2">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <EmptyState title="No measurable metrics yet" description="This project is still being refined." />
                )}

                {/* Bottom Divider */}
                <div className="pt-10">
                    <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/40 via-border to-transparent" />
                </div>
            </div>
        </section>
    );
}
