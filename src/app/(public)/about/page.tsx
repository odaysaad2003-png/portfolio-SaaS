// src/app/(public)/about/page.tsx

import type {Metadata} from "next";

import {getAboutData} from "@/features/about/lib/data/about.data";
import {mapAboutData} from "@/features/about/engine/about-mapper";
import {AboutLayout} from "@/features/about/layout/about-layout";

export const metadata: Metadata = {
    title: "About — System Architect & SaaS Builder",
    description:
        "How I think about systems, architecture, and product engineering.",
};

export default function AboutPage() {
    const aboutData = getAboutData();
    const data = mapAboutData(aboutData);

    return <AboutLayout data={data} />;
}
