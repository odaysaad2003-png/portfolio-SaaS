import {AboutViewModel} from "../types/about";
import {AboutHero} from "../components/about-hero";
import {AboutPhilosophy} from "../components/about-philosophy";
import {AboutSkillsSystem} from "../components/about-skills-system";
import {AboutTimeline} from "../components/about-timeline";
import {AboutMindset} from "../components/about-mindset";
import {AboutVision} from "../components/about-vision";
import {AboutCta} from "../components/about-cta";

type AboutLayoutProps = {
    data: AboutViewModel;
};

export function AboutLayout({data}: AboutLayoutProps) {
    return (
        <main className="min-h-screen bg-[#05070d]">
            <AboutHero data={data.hero} />
            <AboutPhilosophy principles={data.principles} />
            <AboutSkillsSystem skillSystems={data.skillSystems} />
            <AboutTimeline timeline={data.timeline} />
            <AboutMindset mindset={data.mindset} />
            <AboutVision vision={data.vision} />
            <AboutCta featuredProjects={data.featuredProjects} />
        </main>
    );
}
