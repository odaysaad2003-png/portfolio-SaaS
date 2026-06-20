import type {ContactHeroData} from "@/features/contact/types/contact";
import {ContactMotionWrapper} from "@/features/contact/components/contact-motion-wrapper";

type ContactHeroProps = {
    data: ContactHeroData;
};

export function ContactHero({data}: ContactHeroProps) {
    return (
        <section className="relative overflow-hidden border-b border-border bg-background px-6 py-24 text-foreground sm:py-32">
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[680px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-primary/25 via-purple-500/15 to-transparent blur-3xl"
            />

            <div className="relative mx-auto max-w-6xl">
                <ContactMotionWrapper>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-primary shadow-sm backdrop-blur">
                        {data.badge}
                    </span>
                </ContactMotionWrapper>

                <ContactMotionWrapper delay={0.1}>
                    <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        {data.headline}
                    </h1>
                </ContactMotionWrapper>

                <ContactMotionWrapper delay={0.2}>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{data.subheadline}</p>
                </ContactMotionWrapper>

                <ContactMotionWrapper delay={0.3}>
                    <p className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-300">
                        <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                        {data.availabilityNote}
                    </p>
                </ContactMotionWrapper>

                <ContactMotionWrapper delay={0.4}>
                    <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
                        {data.stats.map((stat) => (
                            <div key={stat.id}>
                                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</dt>
                                <dd className="mt-1 text-lg font-medium text-foreground">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </ContactMotionWrapper>
            </div>
        </section>
    );
}
