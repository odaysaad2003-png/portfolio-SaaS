const socialLinks = [
    {
        label: "Facebook",
        shortLabel: "FB",
        href: "https://facebook.com/your-profile",
    },
    {
        label: "GitHub",
        shortLabel: "GH",
        href: "https://github.com/odaysaad2003-png",
    },
    {
        label: "LinkedIn",
        shortLabel: "IN",
        href: "https://linkedin.com/in/your-profile",
    },
];

export function SocialLinks() {
    return (
        <div className="mt-6 border-t border-white/10 pt-5">
            <p className="mb-3 text-center text-xs uppercase tracking-widest text-white/40">Connect</p>

            <div className="flex justify-center gap-3">
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/70 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_25px_-8px_rgba(59,130,246,0.8)]"
                    >
                        {link.shortLabel}
                    </a>
                ))}
            </div>
        </div>
    );
}
