import type {ContactOption, ContactOptionIcon} from "@/features/contact/types/contact";
import {ContactMotionWrapper} from "@/features/contact/components/contact-motion-wrapper";

// Inline SVG icons only — this project previously hit export errors with
// lucide-react brand icons (Github / Linkedin), so brand marks are hand-rolled
// here instead of imported.
function OptionIcon({name}: {name: ContactOptionIcon}) {
    switch (name) {
        case "email":
            return (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path
                        d="m3 7 9 6 9-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "github":
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
            );
        case "linkedin":
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" />
                    <path d="M5.25 7.06a1.97 1.97 0 1 0 0-3.94 1.97 1.97 0 0 0 0 3.94Z" />
                    <path d="M20.44 14.06c0-3.2-1.71-4.69-4-4.69-1.84 0-2.66 1.01-3.12 1.72V8.5H10v12h3.32v-6.7c0-1.77.34-3.48 2.53-3.48 2.16 0 2.19 2.02 2.19 3.59v6.59h3.4v-7.44Z" />
                </svg>
            );
        default:
            return null;
    }
}

type ContactOptionsProps = {
    options: ContactOption[];
};

export function ContactOptions({options}: ContactOptionsProps) {
    return (
        <section className="border-b border-border bg-background px-6 py-20 text-foreground">
            <div className="mx-auto max-w-6xl">
                <ContactMotionWrapper>
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">Reach Out</span>
                    <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        Choose how you want to connect.
                    </h2>
                </ContactMotionWrapper>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {options.map((option, index) => (
                        <ContactMotionWrapper key={option.id} delay={0.1 * (index + 1)}>
                            <a
                                href={option.href}
                                target={option.external ? "_blank" : undefined}
                                rel={option.external ? "noreferrer noopener" : undefined}
                                className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card/75 p-6 text-card-foreground shadow-sm backdrop-blur transition hover:border-primary/40 hover:bg-card"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-primary transition group-hover:border-primary/40">
                                    <OptionIcon name={option.icon} />
                                </span>

                                <div>
                                    <p className="text-base font-medium text-foreground">{option.label}</p>
                                    <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
                                </div>
                            </a>
                        </ContactMotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
