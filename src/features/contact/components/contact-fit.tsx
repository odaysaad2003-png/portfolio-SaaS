import type {ProjectFitItem} from "@/features/contact/types/contact";
import {ContactMotionWrapper} from "@/features/contact/components/contact-motion-wrapper";

type ContactFitProps = {
    items: ProjectFitItem[];
};

export function ContactFit({items}: ContactFitProps) {
    return (
        <section className="border-b border-border bg-background px-6 py-20 text-foreground">
            <div className="mx-auto max-w-6xl">
                <ContactMotionWrapper>
                    <span className="text-xs font-medium uppercase tracking-wide text-purple-500">Project Fit</span>
                    <h2 className="mt-3 max-w-2xl font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        What kinds of systems are a good fit.
                    </h2>
                </ContactMotionWrapper>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <ContactMotionWrapper key={item.id} delay={0.06 * (index + 1)}>
                            <div className="h-full rounded-2xl border border-border bg-card/75 p-6 text-card-foreground shadow-sm backdrop-blur transition hover:border-primary/30 hover:bg-card">
                                <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                            </div>
                        </ContactMotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
