import {Principle} from "@/features/about/types/about";
import {AboutMotionWrapper} from "./about-motion-wrapper";

type AboutPhilosophyProps = {
    principles: Principle[];
};

export function AboutPhilosophy({principles}: AboutPhilosophyProps) {
    return (
        <section className="relative bg-background px-6 py-24 text-foreground sm:px-10">
            <div className="mx-auto max-w-5xl">
                <AboutMotionWrapper>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Engineering Philosophy
                    </p>
                    <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        How I think about systems
                    </h2>
                </AboutMotionWrapper>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {principles.map((principle, index) => (
                        <AboutMotionWrapper key={principle.id} delay={index * 0.08}>
                            <div className="h-full rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 shadow-sm backdrop-blur transition-colors hover:border-primary/40">
                                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                                <h3 className="mt-3 text-lg font-semibold text-foreground">{principle.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {principle.description}
                                </p>
                            </div>
                        </AboutMotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
