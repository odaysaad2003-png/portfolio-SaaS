import {waitInDevelopment} from "@/lib/dev/wait";

export async function getAboutData() {
    await waitInDevelopment(600);

    return {
        identity: {
            name: "Oday Zoheer Saad",
            role: "Fullstack Developer / System Architect & SaaS Builder",
            tagline: "I build systems, not pages.",
            summary:
                "I’m Oday Zoheer Saad, a fullstack developer focused on turning product ideas into scalable SaaS-style systems, architecture-driven interfaces, and real engineering case studies.",
            initials: "OZS",
            avatarUrl: "/about-me-photo.png",
        },

        principles: [
            {
                id: "p1",
                title: "Think in Systems",
                description: "Every UI is part of a larger system.",
            },
            {
                id: "p2",
                title: "Architecture First",
                description: "Good products start from structure.",
            },
            {
                id: "p3",
                title: "Product Mindset",
                description: "Features must behave like systems.",
            },
        ],

        skills: {
            frontend: {
                description: "UI development systems",
                items: ["Next.js", "React", "TypeScript", "Tailwind", "JavaScript", "HTML", "CSS"],
            },
            backend: {
                description: "Server-side architecture",
                items: ["Node.js", "APIs", "System Design", "HTTP", "Design Patterns"],
            },
            tools: {
                description: "Development ecosystem",
                items: ["Git", "Framer Motion", "Vercel", "GitHub", "Netlify"],
            },
        },

        timeline: [
            {
                version: "v1.0",
                year: "2023",
                title: "Started thinking in systems",
                description: "Shifted mindset from UI to architecture",
            },
            {
                version: "v2.0",
                year: "2024",
                title: "Built SaaS systems",
                description: "Started building scalable apps",
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
                description: "Understand feature interactions.",
            },
            {
                id: "m2",
                step: "02",
                title: "Design Architecture",
                description: "Break into scalable layers.",
            },
            {
                id: "m3",
                step: "03",
                title: "Build Products",
                description: "Implement real systems.",
            },
        ],

        vision: {
            title: "Future Vision",
            description: "Building scalable digital systems like real products.",
        },

        featuredProjects: [
            {
                title: "Case Study Platform",
                slug: "oday-dashboard",
                description: "SaaS engineering system",
            },
            {
                title: "Marketplace System",
                slug: "marketplace",
                description: "Full-stack architecture",
            },
        ],
    };
}
