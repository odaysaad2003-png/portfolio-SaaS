import {AboutViewModel, AboutHeroData, FeaturedProjectLink} from "../types/about";

export function mapAboutData(data: any): AboutViewModel {
    return {
        hero: {
            badge: "About Me",
            identityStatement: data.identity.tagline,
            role: data.identity.role,
            summary: `${data.identity.name} — System Architect`,
            stats: [
                {label: "Projects", value: "10+"},
                {label: "Focus", value: "SaaS Systems"},
                {label: "Stack", value: "Fullstack"},
            ],
        },

        principles: data.principles,

        skillSystems: [
            {category: "Frontend", items: data.skills.frontend},
            {category: "Backend", items: data.skills.backend},
            {category: "Tools", items: data.skills.tools},
        ],

        timeline: data.timeline,

        mindset: data.mindset,

        vision: data.vision,

        featuredProjects: data.featuredProjects,
    };
}
