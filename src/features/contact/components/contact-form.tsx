"use client";

import { useState, type FormEvent } from "react";

import type { ContactFormData } from "@/features/contact/types/contact";
import { ContactMotionWrapper } from "@/features/contact/components/contact-motion-wrapper";

type ContactFormProps = {
    data: ContactFormData;
};

type SubmitStatus = "idle" | "submitted";

export function ContactForm({ data }: ContactFormProps) {
    const [status, setStatus] = useState<SubmitStatus>("idle");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Frontend-only for now — no network call. Email integration
        // (Resend / Nodemailer + an API route) can be wired in later.
        setStatus("submitted");
    }

    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-3xl">
                <ContactMotionWrapper>
                    <span className="text-xs font-medium uppercase tracking-wide text-blue-300">
                        Send a Message
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                        {data.title}
                    </h2>
                    <p className="mt-3 text-white/55">{data.description}</p>
                </ContactMotionWrapper>

                <ContactMotionWrapper delay={0.1}>
                    <form
                        onSubmit={handleSubmit}
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
                                    required
                                    autoComplete="name"
                                    placeholder="Your name"
                                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-blue-400/60"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-white/80">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="you@company.com"
                                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-blue-400/60"
                                />
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
                                    required
                                    defaultValue=""
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
                                required
                                rows={5}
                                placeholder="Tell me about the system you're building..."
                                className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-blue-400/60"
                            />
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
