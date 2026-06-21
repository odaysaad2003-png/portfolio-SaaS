import {Project} from "@/types/project";

export const projects: Project[] = [
    {
        id: "1",
        slug: "business-management-dashboard",

        title: "Business Management Dashboard",
        description:
            "A multilingual business management dashboard for analytics, employees, departments, tasks, and operational insights.",

        problem:
            "Businesses often manage employees, departments, tasks, and performance data across disconnected tools, making it difficult to track operations clearly and make fast decisions.",

        approach:
            "Designed a modular React dashboard using reusable UI components, context-based state management, theme switching, RTL/LTR support, filtering, and structured dashboard pages.",

        solution:
            "Delivered a scalable admin dashboard experience with analytics cards, employee management, task views, multilingual support, and dark/light mode customization.",

        context:
            "This project was built as a frontend-focused management system to simulate how real SaaS dashboards organize business operations, users, tasks, and analytics in one unified interface.",

        architecture: [
            "Component-driven dashboard architecture",
            "Reusable analytics and management UI blocks",
            "Context-based state management",
            "Dark and light theme support",
            "Arabic RTL and English LTR interface support",
            "Structured pages for analytics, employees, and tasks",
        ],

        technologies: ["React", "JSX", "Tailwind CSS"],

        metrics: [
            {label: "Dashboard Pages", value: "5+"},
            {label: "UI Components", value: "15+"},
            {label: "Language Modes", value: "2"},
        ],

        images: [
            {
                url: "/dashboard-oday/darkmood-Arabik-rtl.png",
                alt: "Arabic RTL dark mode dashboard overview",
            },
            {
                url: "/dashboard-oday/dashpord pages-darkmood.png",
                alt: "Business analytics dashboard pages in dark mode",
            },
            {
                url: "/dashboard-oday/task-pages-lightmood.png",
                alt: "Task management page in light mode",
            },
        ],

        featured: true,
        createdAt: "2026-01-01",
        category: "frontend",

        tags: ["dashboard", "analytics", "rtl", "theme-system", "business-management"],

        liveDemoUrl: "https://dashpord-project.vercel.app",
        githubUrl: "https://github.com/odaysaad2003-png/Dashpord--project",
    },

    {
        id: "2",
        slug: "mini-marketplace-gaza",

        title: "Mini Marketplace Gaza",
        description:
            "A localized marketplace interface for browsing, filtering, and managing products with a clean shopping experience.",

        problem:
            "Local sellers need a fast and simple digital storefront to display products, organize categories, and help customers discover items easily.",

        approach:
            "Built a Next.js marketplace UI with product cards, filtering, category organization, product details, and dashboard-style management screens.",

        solution:
            "Delivered a responsive marketplace experience with fast navigation, structured product data, filtering, and admin-oriented product management views.",

        context:
            "The project focuses on applying real marketplace patterns in a local Gaza-oriented product browsing experience, while keeping the architecture frontend-first and scalable.",

        architecture: [
            "Next.js App Router structure",
            "Feature-based product sections",
            "Reusable product card system",
            "Filtering and category-driven browsing",
            "Admin dashboard views for product management",
            "Responsive layout for mobile and desktop users",
        ],

        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],

        metrics: [
            {label: "Product Screens", value: "4+"},
            {label: "Admin Views", value: "2+"},
            {label: "Filter Options", value: "5+"},
        ],

        images: [
            {
                url: "/markit-gaza/hom-page-light.png",
                alt: "Marketplace home page in light mode",
            },
            {
                url: "/markit-gaza/maneger-dashboard-dark.png",
                alt: "Marketplace admin dashboard in dark mode",
            },
            {
                url: "/markit-gaza/product-dark.png",
                alt: "Marketplace product details page in dark mode",
            },
        ],

        featured: true,
        createdAt: "2026-01-10",
        category: "frontend",

        tags: ["marketplace", "nextjs", "products", "filtering", "dashboard"],

        liveDemoUrl: "https://gaza-marketplace.vercel.app",

        // TODO: Replace with the real repository URL when ready.
        githubUrl: "https://github.com/odaysaad2003-png/Gaza_Marketplace",
    },

    {
        id: "3",
        slug: "home-hive-department",

        title: "Home Hive Department",
        description:
            "A modern furniture and home services website focused on brand presentation, service discovery, and responsive UI.",

        problem:
            "Furniture and home service businesses need a clear and visually attractive online presence to present services, products, and brand identity.",

        approach:
            "Designed a multi-section landing website with clean navigation, service blocks, product presentation, and responsive layouts using vanilla web technologies.",

        solution:
            "Delivered a responsive business website that improves visual presentation, strengthens brand trust, and makes services easier to explore.",

        context:
            "This project focuses on landing page structure, visual hierarchy, and business presentation for a furniture and home services brand.",

        architecture: [
            "Multi-section landing page structure",
            "Reusable content sections",
            "Responsive layout with HTML and CSS",
            "JavaScript interactions for smoother user experience",
            "Brand-focused visual presentation",
        ],

        technologies: ["HTML", "JavaScript", "CSS"],

        metrics: [
            {label: "Landing Sections", value: "5+"},
            {label: "Responsive Layout", value: "Yes"},
            {label: "Core Pages", value: "3+"},
        ],

        images: [
            {
                url: "/homehive/about-homhive.png",
                alt: "Home Hive about section preview",
            },
        ],

        featured: true,
        createdAt: "2026-01-10",
        category: "frontend",

        tags: ["landing-page", "business-website", "responsive", "html-css-js"],

        liveDemoUrl: "https://odaysaad2003-png.github.io/HomHiv-partment-Project/",
        githubUrl: "https://github.com/odaysaad2003-png/HomHiv-partment-Project",
    },

    {
        id: "4",
        slug: "product-manager-crud",

        title: "Product Manager CRUD System",
        description:
            "A JavaScript CRUD application for creating, updating, deleting, searching, and organizing product records.",

        problem:
            "Managing product records manually can lead to duplicated data, slower updates, and poor organization when handling product information.",

        approach:
            "Implemented CRUD operations with JavaScript, structured product data, input handling, search functionality, and local UI updates.",

        solution:
            "Built a lightweight product management system that demonstrates core JavaScript logic, data manipulation, and interface-driven operations.",

        context:
            "This project was built to strengthen core JavaScript skills through practical data operations and product management logic.",

        architecture: [
            "Vanilla JavaScript CRUD logic",
            "Structured product data handling",
            "Search and update operations",
            "Dynamic UI rendering",
            "Local frontend state management",
        ],

        technologies: ["HTML", "JavaScript", "CSS"],

        metrics: [
            {label: "CRUD Operations", value: "4"},
            {label: "Search Feature", value: "Yes"},
            {label: "Core JS Logic", value: "High"},
        ],

        images: [
            {
                url: "/cruds/لقطة شاشة 2026-06-20 150543.png",
                alt: "Product Manager CRUD system interface",
            },
        ],

        featured: false,
        createdAt: "2026-01-10",
        category: "frontend",

        tags: ["crud", "javascript", "product-management", "data-handling"],

        // Add a real GitHub Pages live link here if available.
        githubUrl: "https://github.com/odaysaad2003-png/CRUDS_Project",
    },

    {
        id: "5",
        slug: "building-company-website",

        title: "Building Company Website",
        description:
            "A corporate construction company website for presenting services, projects, contact information, and brand credibility.",

        problem:
            "Construction companies need a professional website to communicate services, build trust, and make it easier for potential clients to reach them.",

        approach:
            "Built a structured multi-section website with service highlights, about section, contact area, footer, responsive layouts, and AOS animations.",

        solution:
            "Delivered a modern business website that improves credibility, presents company services clearly, and creates a polished client-facing experience.",

        context:
            "This project focuses on business website structure, visual credibility, and responsive presentation for a construction company.",

        architecture: [
            "Multi-section business website",
            "AOS-based scroll animations",
            "Responsive layout system",
            "Service-focused page sections",
            "Contact and footer conversion areas",
        ],

        technologies: ["HTML", "JavaScript", "CSS", "AOS"],

        metrics: [
            {label: "Website Sections", value: "6+"},
            {label: "Animation Layer", value: "AOS"},
            {label: "Responsive Design", value: "Yes"},
        ],

        images: [
            {
                url: "/building-project/about-section.png",
                alt: "Building company about section",
            },
            {
                url: "/building-project/contact-page.png",
                alt: "Building company contact page",
            },
            {
                url: "/building-project/footer.png",
                alt: "Building company footer section",
            },
            {
                url: "/building-project/services-page.png",
                alt: "Building company services page",
            },
        ],

        featured: true,
        createdAt: "2026-01-10",
        category: "frontend",

        tags: ["business-website", "construction", "aos", "responsive", "landing-page"],

        liveDemoUrl: "https://odaysaad2003-png.github.io/Bulding-Project/",
        githubUrl: "https://github.com/odaysaad2003-png/Bulding-Project",
    },

    {
        id: "6",
        slug: "portfolio-website",

        title: "Personal Portfolio Website",
        description:
            "A personal portfolio website for showcasing skills, services, projects, and developer identity using a clean frontend structure.",

        problem:
            "Developers need a professional platform to present their skills, services, projects, and personal brand in a structured way.",

        approach:
            "Designed a portfolio layout with dedicated sections for hero, about, services, skills, and project presentation using HTML, CSS, JavaScript, and AOS.",

        solution:
            "Built a responsive personal portfolio that improves professional visibility and presents technical skills in a clear visual format.",

        context:
            "This project represents an earlier portfolio iteration focused on frontend fundamentals, layout structure, and personal branding.",

        architecture: [
            "Multi-section portfolio layout",
            "Service and skills presentation",
            "AOS-based reveal animations",
            "Responsive HTML/CSS structure",
            "Project showcase sections",
        ],

        technologies: ["HTML", "JavaScript", "CSS", "AOS"],

        metrics: [
            {label: "Portfolio Sections", value: "5+"},
            {label: "Animation Layer", value: "AOS"},
            {label: "Responsive Design", value: "Yes"},
        ],

        images: [
            {
                url: "/old-portfolio/about.me.png",
                alt: "Old portfolio about section",
            },
            {
                url: "/old-portfolio/hom-page.png",
                alt: "Old portfolio home page",
            },
            {
                url: "/old-portfolio/servise.png",
                alt: "Old portfolio services section",
            },
            {
                url: "/old-portfolio/skils.png",
                alt: "Old portfolio skills section",
            },
        ],

        featured: false,
        createdAt: "2026-01-10",
        category: "frontend",

        tags: ["portfolio", "personal-branding", "responsive", "aos", "html-css-js"],

        liveDemoUrl: "https://odaysaad2003-png.github.io/portfolio/",
        githubUrl: "https://github.com/odaysaad2003-png/portfolio",
    },
    {
        id: "7",
        slug: "remah-luxe-beauty",

        title: "Remah Luxe Beauty",
        description:
            "A modern beauty center website with an integrated store experience for showcasing services, beauty products, and brand identity.",

        problem:
            "Beauty centers need a professional digital presence that presents services clearly, builds trust with customers, and allows products to be displayed in an organized shopping experience.",

        approach:
            "Designed a visually elegant beauty website with service sections, product showcase, responsive layouts, and a polished user interface focused on brand presentation and customer engagement.",

        solution:
            "Delivered a modern beauty center platform that combines business presentation with store-style product browsing, helping users explore services and products in a smooth digital experience.",

        context:
            "This project focuses on building a premium beauty brand experience by combining landing page structure, service presentation, and e-commerce-inspired product sections.",

        architecture: [
            "Beauty brand landing page structure",
            "Integrated store-style product showcase",
            "Responsive layout for mobile and desktop",
            "Service-focused content sections",
            "Visual hierarchy optimized for beauty and lifestyle branding",
            "Reusable UI sections for products, services, and brand content",
        ],

        technologies: ["React", "typeScript", "CSS"],

        metrics: [
            {label: "Website Sections", value: "6+"},
            {label: "Store Experience", value: "Yes"},
            {label: "Responsive Design", value: "Yes"},
        ],

        images: [
            {
                url: "/beautycenter/landing-beauty-center.png",
                alt: "Remah Luxe Beauty homepage",
            },
            {
                url: "/beautycenter/services.png",
                alt: "Beauty center services section",
            },
            {
                url: "/beautycenter/shop.png",
                alt: "Beauty products store section",
            },
            {
                url: "/beautycenter/blag.png",
                alt: "Beauty products b section",
            },
        ],

        featured: true,
        createdAt: "2026-01-12",
        category: "frontend",

        tags: ["beauty-center", "business-website", "store", "responsive", "brand-identity", "html-css-js"],

        liveDemoUrl: "https://tanstack-start-app.remah.workers.dev/",
        githubUrl: "https://github.com/odaysaad2003-png/remah-luxe-beauty-main.git",
    },
];
