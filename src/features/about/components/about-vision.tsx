import {VisionGoal} from "@/features/about/types/about";
import {AboutMotionWrapper} from "./about-motion-wrapper";

type AboutVisionProps = {
    vision: VisionGoal;
};

export function AboutVision({vision}: AboutVisionProps) {
    return (
        <section className="relative overflow-hidden bg-background px-6 py-24 text-foreground sm:px-10">
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 blur-[140px]"
            />

            <div className="relative mx-auto max-w-4xl text-center">
                <AboutMotionWrapper>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">Vision</p>

                    <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Where this is going
                    </h2>
                </AboutMotionWrapper>

                <AboutMotionWrapper delay={0.1}>
                    <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card/75 p-8 text-left shadow-sm backdrop-blur">
                        <span className="text-xs font-semibold uppercase tracking-wide text-purple-500">
                            Future Direction
                        </span>

                        <h3 className="mt-3 text-xl font-semibold text-foreground">{vision.title}</h3>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{vision.description}</p>
                    </div>
                </AboutMotionWrapper>
            </div>
        </section>
    );
}
