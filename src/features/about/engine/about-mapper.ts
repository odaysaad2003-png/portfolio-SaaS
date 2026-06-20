import type {AboutViewModel} from "@/features/about/types/about";
import {getAboutData} from "../lib/data/about.data";

type AboutRawData = ReturnType<typeof getAboutData>;

const skillLabels: Record<string, string> = {
    frontend: "Frontend Systems",
    backend: "Backend Architecture",
    tools: "Engineering Tools",
};

export function mapAboutData(data: AboutRawData): AboutViewModel {
    return {
        hero: {
            badge: "About the Builder",
            identityStatement: data.identity.tagline,
            role: data.identity.role,
            summary: data.identity.summary,
            avatarUrl: data.identity.avatarUrl,
            initials: data.identity.initials,
            primaryAction: {
                label: "View Case Studies",
                href: "/projects",
            },
            secondaryAction: {
                label: "Contact Me",
                href: "/contact",
            },
            focusAreas: ["SaaS Systems", "Architecture", "Fullstack Engineering"],
            stats: [
                {label: "Focus", value: "Systems"},
                {label: "Stack", value: "Fullstack"},
                {label: "Goal", value: "Scale"},
            ],
        },

        principles: data.principles,

        skillSystems: Object.entries(data.skills).map(([key, value]) => ({
            id: key,
            category: skillLabels[key] ?? key,
            description: value.description,
            items: value.items,
        })),

        timeline: data.timeline,

        mindset: {
            title: "Engineering Mindset",
            steps: data.mindsetSteps,
        },

        vision: data.vision,

        featuredProjects: data.featuredProjects,
    };
}
