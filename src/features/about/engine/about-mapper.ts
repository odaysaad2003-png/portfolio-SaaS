export type AboutViewModel = {
    hero: {
        name: string;
        role: string;
        tagline: string;
    };

    principles: {
        title: string;
        description: string;
    }[];

    skillSystems: {
        category: string;
        items: string[];
    }[];

    timeline: {
        year: string;
        title: string;
    }[];

    mindset: {
        title: string;
        points: string[];
    };

    vision: {
        title: string;
        description: string;
    };

    featuredProjects: {
        title: string;
        slug: string;
    }[];
};

export function mapAboutData(data: any): AboutViewModel {
    return {
        hero: {
            name: data.identity.name,
            role: data.identity.role,
            tagline: data.identity.tagline,
        },

        principles: data.principles,

        skillSystems: [
            {
                category: "Frontend",
                items: data.skills.frontend,
            },
            {
                category: "Backend",
                items: data.skills.backend,
            },
            {
                category: "Tools",
                items: data.skills.tools,
            },
        ],

        timeline: data.timeline,

        mindset: data.mindset,

        vision: data.vision,

        featuredProjects: data.featuredProjects,
    };
}
