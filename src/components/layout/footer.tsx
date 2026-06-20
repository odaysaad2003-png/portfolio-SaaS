import { label } from "framer-motion/client";
import Link from "next/link";
import Image from "next/image";


const footerLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
    
];



const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/YOUR_GITHUB_USERNAME",
        icon: GitHubIcon,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
        icon: LinkedInIcon,
    },
    {
        label: "Email",
        href: "mailto:your-email@example.com",
        icon: MailIcon,
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-24 border-t border-white/10 bg-[#05070d]">
            {/* Top glow line */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
            />

            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-sm font-bold text-blue-300">
                                <Image src={"/MyLogo.png"} alt={"my-logo-imeg"} width={50} height={50} />
                            </span>

                            <div>
                                <p className="text-sm font-semibold text-white">Oday Zoheer Saad</p>
                                <p className="text-xs text-white/45">Fullstack Developer</p>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
                            I build systems, not pages — scalable SaaS-style products, architecture-driven interfaces,
                            and engineering case studies.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Navigation</h3>

                        <ul className="mt-4 space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 transition hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Connect</h3>

                        <ul className="mt-4 space-y-3">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                const isExternal = !link.href.startsWith("mailto:");

                                return (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noreferrer" : undefined}
                                            className="group inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                                        >
                                            <Icon className="h-4 w-4" />
                                            <span>{link.label}</span>

                                            {isExternal && (
                                                <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                                            )}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
                    <p>© {currentYear} Oday Zoheer Saad. All rights reserved.</p>

                    <p>
                        Built with <span className="text-white/60">Next.js</span>,{" "}
                        <span className="text-white/60">TypeScript</span>, and{" "}
                        <span className="text-white/60">Tailwind CSS</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
}

type IconProps = {
    className?: string;
};

function GitHubIcon({className}: IconProps) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.22c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.35.77 1.04.77 2.1v3.12c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
    );
}

function LinkedInIcon({className}: IconProps) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.02h4.36V23H.32V8.02ZM8.1 8.02h4.18v2.05h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.22 2.9 5.22 6.67V23h-4.36v-7.56c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.9 1.96-2.9 3.99V23H8.1V8.02Z" />
        </svg>
    );
}

function MailIcon({className}: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
            <path d="m22 6-10 7L2 6" />
        </svg>
    );
}

function ArrowUpRightIcon({className}: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
        </svg>
    );
}
