import {HeroSection} from "@/features/home/components/hero-section";
import CaseStudiesGrid from "@/features/projects/components/case-studies-grid";
import {StatsSection} from "@/features/home/components/stats-section";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <CaseStudiesGrid />
        </>
    );
}
