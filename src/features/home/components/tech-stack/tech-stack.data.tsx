import React from "react";
import {SiBootstrap} from "react-icons/si";
import {
    Cpu,
    Wrench,
    Sparkles,
    Waypoints,
    ShieldCheck,
    Database,
    Code2,
    Workflow,
    GitBranch,
    Palette,
    Layers,
    Bold,
} from "lucide-react";

import {
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
    SiMui,
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
            {name: "Bootstrab", icon: <SiBootstrap className="h-5 w-5 " />},
        ],
    },

    {
        category: "State & Data",
        items: [
            {name: "Zustand", icon: <Layers className="h-5 w-5" />},
            {name: "React Query", icon: <Database className="h-5 w-5" />},
            {name: "Zod", icon: <ShieldCheck className="h-5 w-5" />},
            {name: "APIs", icon: <Waypoints className="h-5 w-5" />},
        ],
    },

    {
        category: "UI / Motion",
        items: [
            {name: "Framer Motion", icon: <SiFramer className="h-5 w-5" />},
            {name: "shadcn/ui", icon: <Palette className="h-5 w-5" />},
            {name: "Material UI", icon: <SiMui className="h-5 w-5" />},
            {name: "Radix UI", icon: <Layers className="h-5 w-5" />},
            {name: "Tailwind UI Patterns", icon: <Sparkles className="h-5 w-5" />},
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
            {name: "Architecture", icon: <Cpu className="h-5 w-5" />},
            {name: "Problem Solving", icon: <Code2 className="h-5 w-5" />},
            {name: "Workflow", icon: <Workflow className="h-5 w-5" />},
            {name: "Version Control", icon: <GitBranch className="h-5 w-5" />},
            {name: "Engineering Mindset", icon: <Wrench className="h-5 w-5" />},
        ],
    },
];
