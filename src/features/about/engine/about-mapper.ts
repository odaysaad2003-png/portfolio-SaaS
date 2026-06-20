// engine/about-mapper.ts

import type {
    AboutViewModel,
    SkillSystem,
    TimelineEntry,
    MindsetStep,
    FeaturedProjectLink,
} from "@/features/about/types/about";
import {getAboutData} from "../lib/data/about.data";

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

        skillSystems: Object.entries(data.skills).map(([key, value], index) => ({
            id: key, // ✅ مهم جدًا
            category: key,
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
