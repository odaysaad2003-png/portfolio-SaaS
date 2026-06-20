import Link from "next/link";
import {AboutHeroData} from "@/features/about/types/about";
import {AboutMotionWrapper} from "./about-motion-wrapper";

type AboutHeroProps = {
    data: AboutHeroData;
};

export function AboutHero({data}: AboutHeroProps) {
    return (
        <section className="relative overflow-hidden bg-background px-6 pb-24 pt-32 text-foreground sm:px-10">
            {/* Background glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-40 h-[360px] w-[360px] rounded-full bg-purple-500/10 blur-[120px]"
            />

            <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Left content */}
                <div>
                    <AboutMotionWrapper>
                        <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur">
                            {data.badge}
                        </span>
                    </AboutMotionWrapper>

                    <AboutMotionWrapper delay={0.1}>
                        <h1 className="mt-6 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                            {data.identityStatement}
                        </h1>
                    </AboutMotionWrapper>

                    <AboutMotionWrapper delay={0.2}>
                        <p className="mt-5 text-lg font-medium text-muted-foreground">{data.role}</p>
                    </AboutMotionWrapper>

                    <AboutMotionWrapper delay={0.3}>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{data.summary}</p>
                    </AboutMotionWrapper>

                    <AboutMotionWrapper delay={0.4}>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href={data.primaryAction.href}
                                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
                            >
                                {data.primaryAction.label}
                            </Link>

                            <Link
                                href={data.secondaryAction.href}
                                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted"
                            >
                                {data.secondaryAction.label}
                            </Link>
                        </div>
                    </AboutMotionWrapper>

                    <AboutMotionWrapper delay={0.5}>
                        <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                            {data.stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-border bg-card/75 px-4 py-5 shadow-sm backdrop-blur"
                                >
                                    <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                                    <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AboutMotionWrapper>
                </div>

                {/* Right identity card */}
                <AboutMotionWrapper delay={0.25}>
                    <div className="relative">
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 to-purple-500/20 blur-2xl" />

                        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/80 p-6 text-card-foreground shadow-soft backdrop-blur-xl">
                            <div className="flex items-center gap-4">
                                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
                                    {data.avatarUrl ? (
                                        <img
                                            src={data.avatarUrl}
                                            alt="Oday Zoheer Saad"
                                            className="h-full w-full object-cover"
                                            
                                        
                                        />
                                    ) : (
                                        <span className="text-xl font-bold text-foreground">{data.initials}</span>
                                    )}
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">Builder Profile</p>
                                    <h2 className="mt-1 text-xl font-semibold text-foreground">Oday Zoheer Saad</h2>
                                    <p className="mt-1 text-sm text-primary">Fullstack Developer</p>
                                </div>
                            </div>

                            <div className="mt-8 rounded-2xl border border-border bg-muted/70 p-5">
                                <p className="font-mono text-xs text-muted-foreground">engineering_principle.ts</p>

                                <pre className="mt-4 overflow-x-auto font-mono text-sm leading-relaxed text-muted-foreground">
                                    {`const principle = {
  focus: "Systems",
  mindset: "Architecture First",
  output: "Scalable Products"
};`}
                                </pre>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {data.focusAreas.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 border-t border-border pt-5">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                    Current direction
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Building developer case studies as real product systems — with architecture, UX, and
                                    measurable engineering decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </AboutMotionWrapper>
            </div>
        </section>
    );
}
