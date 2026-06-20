import {SkillSystem} from "@/features/about/types/about";
import {AboutMotionWrapper} from "./about-motion-wrapper";

type AboutSkillsSystemProps = {
    skillSystems: SkillSystem[];
};

export function AboutSkillsSystem({skillSystems}: AboutSkillsSystemProps) {
    return (
        <section className="relative bg-background px-6 py-24 text-foreground sm:px-10">
            <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-purple-500/10 blur-[120px]"
            />

            <div className="relative mx-auto max-w-5xl">
                <AboutMotionWrapper>
                    <p className="text-sm font-semibold uppercase tracking-wider text-purple-500">Skills as Systems</p>
                    <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Subsystems, not a list
                    </h2>
                </AboutMotionWrapper>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {skillSystems?.map((system, index) => (
                        <AboutMotionWrapper key={system.id} delay={index * 0.1}>
                            <div className="flex h-full flex-col rounded-2xl border border-purple-500/20 bg-purple-500/[0.04] p-6 shadow-sm backdrop-blur">
                                <h3 className="text-base font-semibold text-foreground">{system.category}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{system.description}</p>

                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {system.items.map((tech) => (
                                        <li
                                            key={tech}
                                            className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AboutMotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
