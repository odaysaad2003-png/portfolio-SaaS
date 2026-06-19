export function getAboutData() {
    return {
        identity: {
            name: "Oday Zoheer Saad",
            role: "System Architect & SaaS Builder",
            tagline: "I build systems, not pages.",
        },

        principles: [
            {
                title: "Think in Systems",
                description: "Every UI is part of a larger system, not an isolated screen.",
            },
            {
                title: "Architecture First",
                description: "Good products start from strong structural design.",
            },
            {
                title: "Product Mindset",
                description: "Every feature must behave like part of a product system.",
            },
        ],

        skills: {
            frontend: ["Next.js", "React", "TypeScript", "Tailwind"],
            backend: ["Node.js", "APIs", "System Design"],
            tools: ["Git", "Framer Motion", "Vercel"],
        },

        timeline: [
            {
                year: "2023",
                title: "Started thinking in systems instead of pages",
            },
            {
                year: "2024",
                title: "Built SaaS-style engineering projects",
            },
            {
                year: "2025",
                title: "Evolving into full system architecture thinking",
            },
        ],

        mindset: {
            title: "Engineering Philosophy",
            points: [
                "UI is a reflection of system design",
                "Code should scale like a product, not a page",
                "Every component must have a reason to exist",
            ],
        },

        vision: {
            title: "Future Vision",
            description: "Building scalable digital systems that behave like real products, not static websites.",
        },

        featuredProjects: [
            {
                title: "Case Study Platform",
                slug: "oday-dashboard",
            },
            {
                title: "Marketplace System",
                slug: "markit-plase",
            },
        ],
    };
}
