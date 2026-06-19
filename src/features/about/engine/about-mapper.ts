// engine/about-mapper.ts

import type {
    AboutViewModel,
    SkillSystem,
    TimelineEntry,
    MindsetStep,
    FeaturedProjectLink,
} from "@/features/about/types/about";
import { getAboutData } from "../lib/data/about.data";

type AboutRawData = ReturnType<typeof getAboutData>;

export function mapAboutData(data: AboutRawData): AboutViewModel {
    return {
        hero: {
            badge: "About Me",
            identityStatement: data.identity.tagline,
            role: data.identity.role,
            summary: `${data.identity.name} — System Architect & SaaS Builder`,
            stats: [
                {label: "Focus", value: "Systems"},
                {label: "Stack", value: "Fullstack"},
                {label: "Goal", value: "Scale"},
            ],
        },

        principles: data.principles,

        skillSystems: [
            {
                category: "Frontend",
                description: data.skills.frontend.description,
                items: data.skills.frontend.items,
            },
            {
                category: "Backend",
                description: data.skills.backend.description,
                items: data.skills.backend.items,
            },
            {
                category: "Tools",
                description: data.skills.tools.description,
                items: data.skills.tools.items,
            },
        ],

        timeline: data.timeline.map((t: TimelineEntry) => ({
            version: t.version,
            year: t.year,
            title: t.title,
            description: t.description,
        })),

        mindset: {
            title: "Engineering Mindset",
            steps: data.mindsetSteps as MindsetStep[],
        },

        vision: data.vision,

        featuredProjects: data.featuredProjects as FeaturedProjectLink[],
    };
}
