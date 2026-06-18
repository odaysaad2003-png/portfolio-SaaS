import {Project} from "@/types/project";

export const projects: Project[] = [
    {
        id: "1",
        slug: "Oday-dashboard",

        title: "Oday dashboard",
        description: "Analytics dashboard for tracking and managing business performance.",

        problem: "Businesses lacked a unified analytics system to track performance in real time.",

        approach: "Designed a modular dashboard architecture with reusable analytics components.",

        solution: "Built a scalable SaaS dashboard with real-time insights and optimized UX.",

        technologies: ["React", "JavaScript", "CSS"],

        metrics: [
            {label: "Performance Boost", value: "+40%"},
            {label: "User Engagement", value: "+60%"},
            {label: "Uptime", value: "99.9%"},
        ],

        images: [
            {
                url: "/public/dashboard-oday/darkmood-Arabik-rtl.png",
                alt: "darkmood-Arabik-rtl overview",
            },
            {
                url: "/public/dashboard-oday/dashpord pages-darkmood.png",
                alt: "Analytics charts view",
            },
            {
                url: "/public/dashboard-oday/task-pages-lightmood.png",
                alt: "Mobile responsive view",
            },
        ],

        featured: true,

        createdAt: "2026-01-01",
    },

    {
        id: "2",
        slug: "Markit-Plase",

        title: "Markit Plase",
        description: "Full-featured e-commerce system with advanced filtering.",

        problem: "Existing e-commerce solutions were slow and not scalable.",

        approach: "Implemented a fast filtering system with optimized queries.",

        solution: "Delivered a high-performance shopping platform.",

        technologies: ["Next.js", "React", "TaielwindCSS", "TS"],

        metrics: [
            {label: "Conversion Rate", value: "+55%"},
            {label: "Load Speed", value: "+70%"},
        ],

        images: [
            {
                url: "/public/markit-gaza/hom-page-light.png",
                alt: "darkmood-Arabik-rtl overview",
            },
            {
                url: "/public/markit-gaza/maneger-dashboard-dark.png",
                alt: "Analytics charts view",
            },
            {
                url: "/public/markit-gaza/product-dark.png",
                alt: "Mobile responsive view",
            },
        ],

        featured: true,

        createdAt: "2026-01-10",
    },
];
