import Link from "next/link";
import {FeaturedProjectLink} from "@/features/about/types/about";
import {AboutMotionWrapper} from "./about-motion-wrapper";

type AboutCtaProps = {
    featuredProjects: FeaturedProjectLink[];
};

export function AboutCta({featuredProjects}: AboutCtaProps) {
    return (
        <section className="relative bg-background px-6 py-24 text-foreground sm:px-10">
            <div className="mx-auto max-w-4xl text-center">
                <AboutMotionWrapper>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        See this thinking applied
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                        Every principle above is implemented somewhere in these systems.
                    </p>
                </AboutMotionWrapper>

                {featuredProjects.length > 0 && (
                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {featuredProjects.map((project, index) => (
                            <AboutMotionWrapper key={project.slug} delay={index * 0.08}>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="group block h-full rounded-2xl border border-border bg-card/75 p-6 text-left shadow-sm backdrop-blur transition-colors hover:border-primary/40 hover:bg-card"
                                >
                                    <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                                        {project.description}
                                    </p>
                                    <span className="mt-4 inline-block text-xs font-medium text-primary">
                                        View case study →
                                    </span>
                                </Link>
                            </AboutMotionWrapper>
                        ))}
                    </div>
                )}

                <AboutMotionWrapper delay={0.2}>
                    <Link
                        href="/contact"
                        className="mt-12 inline-flex items-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:opacity-90"
                    >
                        Let&apos;s build something
                    </Link>
                </AboutMotionWrapper>
            </div>
        </section>
    );
}
