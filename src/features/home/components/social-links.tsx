import {FaFacebookF, FaGithub, FaLinkedinIn} from "react-icons/fa";

const socialLinks = [
    {
        label: "Facebook",
        href: "https://facebook.com/your-profile",
        icon: FaFacebookF,
    },
    {
        label: "GitHub",
        href: "https://github.com/odaysaad-png",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/your-profile",
        icon: FaLinkedinIn,
    },
];

export function SocialLinks() {
    return (
        <div className="mt-6 border-t border-white/10 pt-5">
            <p className="mb-3 text-center text-xs uppercase tracking-widest text-white/40">Connect</p>

            <div className="flex justify-center gap-3">
                {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            title={link.label}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_25px_-8px_rgba(59,130,246,0.8)]"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
