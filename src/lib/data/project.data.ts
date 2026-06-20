import {Project} from "@/types/project";

export const projects: Project[] = [
    {
        id: "1",
        slug: "oday-dashboard",

        title: "Oday dashboard",
        description: "Analytics dashboard for tracking and managing business performance.",

        problem: "Businesses lacked a unified analytics system to track performance in real time.",

        approach: "Designed a modular dashboard architecture with reusable analytics components.",

        solution: "Built a scalable SaaS dashboard with real-time insights and optimized UX.",

        technologies: ["React", "JSx", "Tailwind CSS"],

        metrics: [
            {label: "Performance Boost", value: "+40%"},
            {label: "User Engagement", value: "+60%"},
            {label: "Uptime", value: "99.9%"},
        ],

        images: [
            {
                url: "/dashboard-oday/darkmood-Arabik-rtl.png",
                alt: "darkmood-Arabik-rtl overview",
            },
            {
                url: "/dashboard-oday/dashpord pages-darkmood.png",
                alt: "Analytics charts view",
            },
            {
                url: "/dashboard-oday/task-pages-lightmood.png",
                alt: "Mobile responsive view",
            },
        ],

        featured: true,

        createdAt: "2026-01-01",
        category: "frontend",
    },

    {
        id: "2",
        slug: "markit-plase",

        title: "Mini Marketplace Gaza",
        description: "Full-featured e-commerce system with advanced filtering.",

        problem: "Existing e-commerce solutions were slow and not scalable.",

        approach: "Implemented a fast filtering system with optimized queries.",

        solution: "Delivered a high-performance shopping platform.",

        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],

        metrics: [
            {label: "Conversion Rate", value: "+55%"},
            {label: "Load Speed", value: "+70%"},
        ],

        images: [
            {
                url: "/markit-gaza/hom-page-light.png",
                alt: "darkmood-Arabik-rtl overview",
            },
            {
                url: "/markit-gaza/maneger-dashboard-dark.png",
                alt: "Analytics charts view",
            },
            {
                url: "/markit-gaza/product-dark.png",
                alt: "Mobile responsive view",
            },
        ],

        featured: true,

        createdAt: "2026-01-10",
        category: "frontend",
    },
    {
        id: "3",
        slug: "hom-hive",

        title: "home hive department",
        description: "Full-featured sell system with advanced show.",

        problem: "Existing e-commerce solutions were slow and not scalable.",

        approach: "Implemented a fast filtering system with optimized queries.",

        solution: "Delivered a high-performance shopping platform.",

        technologies: ["html", "JavaScript", " CSS"],

        metrics: [
            {label: "Conversion Rate", value: "+55%"},
            {label: "Load Speed", value: "+70%"},
        ],

        images: [
            {
                url: "/homehive/about-homhive.png",
                alt: "darkmood-Arabik-rtl overview",
            },
            {
                url: "/markit-gaza/maneger-dashboard-dark.png",
                alt: "Analytics charts view",
            },
            {
                url: "/markit-gaza/product-dark.png",
                alt: "Mobile responsive view",
            },
        ],

        featured: true,

        createdAt: "2026-01-10",
        category: "frontend",
    },

    {
        id: "4",
        slug: "cruds",

        title: "product maneger",
        description: "Full-featured sell system with advanced show.",

        problem: "Existing cruds opration delet add aupdate",

        approach: "Implemented a fast filtering system with optimized queries.",

        solution: "Delivered a high-performance shopping platform.",

        technologies: ["html", "JavaScript", "CSS"],

        metrics: [
            {label: "Conversion Rate", value: "+35%"},
            {label: "Load Speed", value: "+40%"},
        ],

        images: [
            {
                url: "/cruds/لقطة شاشة 2026-06-20 150543.png",
                alt: "crud-photo-project",
            },
        ],

        featured: true,

        createdAt: "2026-01-10",
        category: "frontend",
    },
    {
        id: "5",
        slug: "bulding-progict",

        title: "Puilding",
        description: "Full-featured sell system with advanced show.",

        problem: "Existing e-commerce solutions were slow and not scalable.",

        approach: "Implemented a fast filtering system with optimized queries.",

        solution: "Delivered a high-performance shopping platform.",

        technologies: ["html", "JavaScript", "CSS" , "AOS"],

        metrics: [
            {label: "Conversion Rate", value: "+35%"},
            {label: "Load Speed", value: "+40%"},
        ],

        images: [
            {
                url: "/building-project/about-section.png",
                alt: "about-photo",
            },
            {
                url: "/building-project/contact-page.png",
                alt: "contact-page-photo",
            },
            {
                url: "/building-project/footer.png",
                alt: "footer-photo",
            },
            {
                url: "/building-project/services-page.png",
                alt: "services-page-photo",
            },
        ],

        featured: true,

        createdAt: "2026-01-10",
        category: "frontend",
    },
];
