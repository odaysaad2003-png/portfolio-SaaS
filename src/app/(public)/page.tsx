import {HeroSection} from "@/features/home/components/hero-section";
import CaseStudiesGrid from "@/features/projects/components/case-studies-grid";
import {StatsSection} from "@/features/home/components/stats-section";
import {WhatIDoSection} from "@/features/home/components/what-i-do/what-i-do-section";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <WhatIDoSection />
            <CaseStudiesGrid />
        </>
    );
}
