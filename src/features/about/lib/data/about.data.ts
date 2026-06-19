// lib/data/about.data.ts


export function getAboutData() {
    return {
        identity: {
            name: "Oday Zoheer Saad",
            role: "System Architect & SaaS Builder",
            tagline: "I build systems, not pages.",
        },

        principles: [
            {
                id: "p1",
                title: "Think in Systems",
                description: "Every UI is part of a larger system, not an isolated screen.",
            },
            {
                id: "p2",
                title: "Architecture First",
                description: "Good products start from strong structural design.",
            },
            {
                id: "p3",
                title: "Product Mindset",
                description: "Every feature must behave like part of a product system.",
            },
        ],

        skills: {
            frontend: {
                description: "UI development systems",
                items: ["Next.js", "React", "TypeScript", "Tailwind"],
            },
            backend: {
                description: "Server-side architecture",
                items: ["Node.js", "APIs", "System Design"],
            },
            tools: {
                description: "Development ecosystem",
                items: ["Git", "Framer Motion", "Vercel"],
            },
        },

        timeline: [
            {
                version: "v1.0",
                year: "2023",
                title: "Started thinking in systems",
                description: "Shifted mindset from UI to architecture thinking",
            },
            {
                version: "v2.0",
                year: "2024",
                title: "Built SaaS systems",
                description: "Started building production-grade systems",
            },
            {
                version: "v3.0",
                year: "2025",
                title: "System architecture focus",
                description: "Scaling engineering mindset",
            },
        ],

        mindsetSteps: [
            {
                id: "m1",
                step: "01",
                title: "Observe Systems",
                description: "Understand how features interact as a system.",
            },
            {
                id: "m2",
                step: "02",
                title: "Design Architecture",
                description: "Break features into scalable layers.",
            },
            {
                id: "m3",
                step: "03",
                title: "Build Products",
                description: "Implement real production systems.",
            },
        ],

        vision: {
            title: "Future Vision",
            description: "Building scalable digital systems that behave like real products.",
        },

        featuredProjects: [
            {
                title: "Case Study Platform",
                slug: "oday-dashboard",
                description: "SaaS engineering system",
            },
            {
                title: "Marketplace System",
                slug: "markit-plase",
                description: "Full-stack system architecture",
            },
        ],
    };
}
