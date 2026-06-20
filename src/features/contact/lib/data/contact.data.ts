import type {ContactData} from "@/features/contact/types/contact";

export function getContactData(): ContactData {
    return {
        hero: {
            badge: "Open To New Systems",
            headline: "Let's build something scalable.",
            subheadline:
                "Have a product idea, SaaS dashboard, platform, or system that needs clean architecture and strong UI? Let's talk.",
            availabilityNote: "Currently available for new fullstack and frontend architecture engagements.",
            stats: [
                {id: "saas-systems", label: "SaaS Systems", value: "Built"},
                {id: "fullstack-builds", label: "Fullstack Builds", value: "Shipped"},
                {id: "clean-architecture", label: "Clean Architecture", value: "Always"},
            ],
        },

        options: [
            {
                id: "email",
                label: "Email",
                description: "Best for detailed project briefs and proposals.",
                href: "mailto:odaysaad2003@gmail.com",
                external: false,
                icon: "email",
            },
            {
                id: "github",
                label: "GitHub",
                description: "Review system architecture and code quality firsthand.",
                href: "https://github.com/odaysaad2003-png",
                external: true,
                icon: "github",
            },
            {
                id: "linkedin",
                label: "LinkedIn",
                description: "Connect professionally or discuss long-term collaboration.",
                href: "https://www.linkedin.com/in/oday-saad-ab96743a5/?skipRedirect=true",
                external: true,
                icon: "linkedin",
            },
        ],

        fitItems: [
            {
                id: "saas-dashboards",
                title: "SaaS Dashboards",
                description: "Data-dense, product-grade interfaces built for clarity and scale.",
            },
            {
                id: "admin-systems",
                title: "Admin Systems",
                description: "Internal tools and control panels engineered for reliability.",
            },
            {
                id: "marketplaces",
                title: "Marketplaces",
                description: "Multi-sided platforms connecting buyers, sellers, and listings.",
            },
            {
                id: "developer-portfolios",
                title: "Developer Portfolios",
                description: "Engineering identity platforms that read as a product, not a resume.",
            },
            {
                id: "product-landing-pages",
                title: "Product Landing Pages",
                description: "High-conversion pages with SaaS-grade storytelling.",
            },
            {
                id: "fullstack-web-apps",
                title: "Fullstack Web Apps",
                description: "End-to-end systems, from the data layer to a polished UI.",
            },
            {
                id: "ui-ux-upgrades",
                title: "UI/UX System Upgrades",
                description: "Turning an existing product into a cohesive design system.",
            },
        ],

        projectTypes: [
            "SaaS Dashboard",
            "Admin System",
            "Marketplace",
            "Developer Portfolio",
            "Landing Page",
            "Fullstack Web App",
            "UI/UX Upgrade",
            "Other",
        ],

        budgetRanges: [
            {
                id: "under-1000",
                label: "Under $1,000",
                value: "under-1000",
            },
            {
                id: "1000-3000",
                label: "$1,000 - $3,000",
                value: "1000-3000",
            },
            {
                id: "3000-7000",
                label: "$3,000 - $7,000",
                value: "3000-7000",
            },
            {
                id: "7000-plus",
                label: "$7,000+",
                value: "7000-plus",
            },
            {
                id: "not-sure",
                label: "Not sure yet",
                value: "not-sure",
            },
        ],

        responseExpectation: "Expect a reply within 1-2 business days.",
        frontendOnlyNote: "This form is frontend-only for now. Email integration can be added later.",

        formTitle: "Start the conversation.",
        formDescription: "Tell me about the system you're building. The more context, the better the first reply.",
    };
}
