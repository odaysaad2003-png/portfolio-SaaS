import {
    Blocks,
    Blueprint,
    Component,
    DatabaseZap,
    Layers3,
    ShieldCheck,
    Sparkles,
    Waypoints,
    Wrench,
} from "lucide-react";
import {
    SiCss3,
    SiFigma,
    SiFramer,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";

export const techStackGroups = [
    {
        category: "Frontend",
        items: [
            {name: "React", icon: <SiReact className="h-5 w-5" />},
            {name: "Next.js", icon: <SiNextdotjs className="h-5 w-5" />},
            {name: "TypeScript", icon: <SiTypescript className="h-5 w-5" />},
            {name: "JavaScript", icon: <SiJavascript className="h-5 w-5" />},
            {name: "Tailwind CSS", icon: <SiTailwindcss className="h-5 w-5" />},
            {name: "HTML5", icon: <SiHtml5 className="h-5 w-5" />},
            {name: "CSS3", icon: <SiCss3 className="h-5 w-5" />},
        ],
    },
    {
        category: "State & Data",
        items: [
            {name: "Zustand", icon: <Layers3 className="h-5 w-5" />},
            {name: "React Query", icon: <DatabaseZap className="h-5 w-5" />},
            {name: "Zod", icon: <ShieldCheck className="h-5 w-5" />},
            {name: "REST APIs", icon: <Waypoints className="h-5 w-5" />},
        ],
    },
    {
        category: "UI / Motion",
        items: [
            {name: "Framer Motion", icon: <SiFramer className="h-5 w-5" />},
            {name: "shadcn/ui", icon: <Component className="h-5 w-5" />},
            {name: "Design Systems", icon: <Sparkles className="h-5 w-5" />},
        ],
    },
    {
        category: "Tools & Workflow",
        items: [
            {name: "Node.js", icon: <SiNodedotjs className="h-5 w-5" />},
            {name: "Git", icon: <SiGit className="h-5 w-5" />},
            {name: "GitHub", icon: <SiGithub className="h-5 w-5" />},
            {name: "Vercel", icon: <SiVercel className="h-5 w-5" />},
            {name: "Figma", icon: <SiFigma className="h-5 w-5" />},
            {name: "Architecture", icon: <Blueprint className="h-5 w-5" />},
            {name: "Problem Solving", icon: <Blocks className="h-5 w-5" />},
            {name: "Engineering Workflow", icon: <Wrench className="h-5 w-5" />},
        ],
    },
];
