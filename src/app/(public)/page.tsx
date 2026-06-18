import {HeroSection} from "@/features/home/components/hero-section";
import CaseStudiesGrid from "@/features/projects/components/case-studies-grid";
import {StatsSection} from "@/features/home/components/status.section";
import {WhatIDoSection} from "@/features/home/components/what-i-do/what-i-do-section";
import {TechStackSection} from "@/features/home/components/tech-stack/tech-stack-section";
import {CTASection} from "@/features/home/components/cta/cta-section";
import {ProjectsPreviewSection} from "@/features/home/components/projects-preview/projects-preview-section";
export default function HomePage() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <WhatIDoSection />
            <TechStackSection />
            <CaseStudiesGrid />
            <ProjectsPreviewSection />
            <CTASection />
        </>
    );
}
