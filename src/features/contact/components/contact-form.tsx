"use client";

import {useState, type FormEvent} from "react";

import type {ContactFormData} from "@/features/contact/types/contact";
import {contactFormSchema, type ContactFormValues} from "@/features/contact/lib/schema/contact-form.schema";
import {ContactMotionWrapper} from "@/features/contact/components/contact-motion-wrapper";

type ContactFormProps = {
    data: ContactFormData;
};

type SubmitStatus = "idle" | "submitted";

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function ContactForm({data}: ContactFormProps) {
    const [status, setStatus] = useState<SubmitStatus>("idle");
    const [errors, setErrors] = useState<FormErrors>({});

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

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
            return;
        }

        const validatedValues = result.data;

        console.log("Validated contact form values:", validatedValues);

        setErrors({});
        setStatus("submitted");
        event.currentTarget.reset();
    }

    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-3xl">
                <ContactMotionWrapper>
                    <span className="text-xs font-medium uppercase tracking-wide text-blue-300">Send a Message</span>

                    <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{data.title}</h2>

                    <p className="mt-3 text-white/55">{data.description}</p>
                </ContactMotionWrapper>

                <ContactMotionWrapper delay={0.1}>
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-white/80">
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
                                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-blue-400/60"
                                />

                                {errors.name && (
                                    <p id="name-error" className="mt-2 text-xs text-red-300">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-white/80">
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
                                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-blue-400/60"
                                />

                                {errors.email && (
                                    <p id="email-error" className="mt-2 text-xs text-red-300">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="projectType" className="text-sm font-medium text-white/80">
                                    Project type
                                </label>

                                <select
                                    id="projectType"
                                    name="projectType"
                                    defaultValue=""
                                    aria-invalid={Boolean(errors.projectType)}
                                    aria-describedby={errors.projectType ? "project-type-error" : undefined}
                                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white outline-none transition focus:border-blue-400/60"
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
                                    <p id="project-type-error" className="mt-2 text-xs text-red-300">
                                        {errors.projectType}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="budgetRange" className="text-sm font-medium text-white/80">
                                    Budget range <span className="text-white/40">(optional)</span>
                                </label>

                                <select
                                    id="budgetRange"
                                    name="budgetRange"
                                    defaultValue=""
                                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white outline-none transition focus:border-blue-400/60"
                                >
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
                            <label htmlFor="message" className="text-sm font-medium text-white/80">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell me about the system you're building..."
                                aria-invalid={Boolean(errors.message)}
                                aria-describedby={errors.message ? "message-error" : undefined}
                                className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-blue-400/60"
                            />

                            {errors.message && (
                                <p id="message-error" className="mt-2 text-xs text-red-300">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-white/40">{data.responseExpectation}</p>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                            >
                                {status === "submitted" ? "Message received" : "Send message"}
                            </button>
                        </div>

                        {status === "submitted" && (
                            <p className="text-sm text-emerald-300" role="status">
                                Thanks — this is a frontend-only preview, so no message was actually sent yet.
                            </p>
                        )}

                        <p className="text-xs text-white/35">{data.frontendOnlyNote}</p>
                    </form>
                </ContactMotionWrapper>
            </div>
        </section>
    );
}
