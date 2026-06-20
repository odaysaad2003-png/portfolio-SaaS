"use client";

import {useState, type FormEvent} from "react";

import type {ContactFormData} from "@/features/contact/types/contact";
import {contactFormSchema, type ContactFormValues} from "@/features/contact/lib/schema/contact-form.schema";
import {ContactMotionWrapper} from "@/features/contact/components/contact-motion-wrapper";
import {submitContactMessage} from "@/features/contact/actions/submit-contact-message";

type ContactFormProps = {
    data: ContactFormData;
};

type SubmitStatus = "idle" | "submitting" | "submitted" | "error";

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function ContactForm({data}: ContactFormProps) {
    const [status, setStatus] = useState<SubmitStatus>("idle");
    const [submitMessage, setSubmitMessage] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const values = {
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            projectType: String(formData.get("projectType") ?? ""),
            budgetRange: String(formData.get("budgetRange") ?? "") || undefined,
            message: String(formData.get("message") ?? ""),
        };

        const result = contactFormSchema.safeParse(values);

        if (!result.success) {
            const fieldErrors: FormErrors = {};

            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as keyof ContactFormValues;

                if (!fieldErrors[fieldName]) {
                    fieldErrors[fieldName] = issue.message;
                }
            });

            setErrors(fieldErrors);
            setStatus("idle");
            setSubmitMessage("");
            return;
        }

        setErrors({});
        setStatus("submitting");
        setSubmitMessage("");

        const submitResult = await submitContactMessage(result.data);

        if (!submitResult.success) {
            setStatus("error");
            setSubmitMessage(submitResult.message);
            return;
        }

        setStatus("submitted");
        setSubmitMessage(submitResult.message);
        form.reset();
    }

    const inputClassName =
        "mt-2 w-full rounded-lg border border-border bg-background/70 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/15";

    const labelClassName = "text-sm font-medium text-foreground";

    const errorClassName = "mt-2 text-xs text-red-500 dark:text-red-300";

    return (
        <section className="bg-background px-6 py-20 text-foreground">
            <div className="mx-auto max-w-3xl">
                <ContactMotionWrapper>
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">Send a Message</span>

                    <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        {data.title}
                    </h2>

                    <p className="mt-3 text-muted-foreground">{data.description}</p>
                </ContactMotionWrapper>

                <ContactMotionWrapper delay={0.1}>
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="mt-10 space-y-6 rounded-2xl border border-border bg-card/75 p-6 text-card-foreground shadow-sm backdrop-blur sm:p-8"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className={labelClassName}>
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Your name"
                                    aria-invalid={Boolean(errors.name)}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                    className={inputClassName}
                                />

                                {errors.name && (
                                    <p id="name-error" className={errorClassName}>
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className={labelClassName}>
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@company.com"
                                    aria-invalid={Boolean(errors.email)}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    className={inputClassName}
                                />

                                {errors.email && (
                                    <p id="email-error" className={errorClassName}>
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="projectType" className={labelClassName}>
                                    Project type
                                </label>

                                <select
                                    id="projectType"
                                    name="projectType"
                                    defaultValue=""
                                    aria-invalid={Boolean(errors.projectType)}
                                    aria-describedby={errors.projectType ? "project-type-error" : undefined}
                                    className={inputClassName}
                                >
                                    <option value="" disabled>
                                        Select a project type
                                    </option>

                                    {data.projectTypeOptions.map((option) => (
                                        <option key={option.id} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                                {errors.projectType && (
                                    <p id="project-type-error" className={errorClassName}>
                                        {errors.projectType}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="budgetRange" className={labelClassName}>
                                    Budget range <span className="text-muted-foreground">(optional)</span>
                                </label>

                                <select id="budgetRange" name="budgetRange" defaultValue="" className={inputClassName}>
                                    <option value="">Select a budget range</option>

                                    {data.budgetRangeOptions.map((option) => (
                                        <option key={option.id} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className={labelClassName}>
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell me about the system you're building..."
                                aria-invalid={Boolean(errors.message)}
                                aria-describedby={errors.message ? "message-error" : undefined}
                                className={`${inputClassName} resize-none`}
                            />

                            {errors.message && (
                                <p id="message-error" className={errorClassName}>
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-muted-foreground">{data.responseExpectation}</p>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {status === "submitting"
                                    ? "Sending..."
                                    : status === "submitted"
                                    ? "Message sent"
                                    : "Send message"}
                            </button>
                        </div>

                        {status === "submitted" && (
                            <p
                                className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300"
                                role="status"
                            >
                                {submitMessage || "Thanks — your message was sent successfully."}
                            </p>
                        )}

                        {status === "error" && (
                            <p
                                className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300"
                                role="alert"
                            >
                                {submitMessage || "Something went wrong. Please try again."}
                            </p>
                        )}

                        <p className="text-xs text-muted-foreground">{data.frontendOnlyNote}</p>
                    </form>
                </ContactMotionWrapper>
            </div>
        </section>
    );
}
