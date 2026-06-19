import {ProjectCard} from "@/features/projects/components/project-card";
import {motion} from "framer-motion";
import type {Project} from "@/types/project";
import Link from "next/link";



const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};
const item = {
    hidden: {opacity: 0, y: 15},
    show: {opacity: 1, y: 0},
};
type Props = {
    projects: Project[];
};

export function ProjectsGrid({projects}: Props) {
   if (projects.length === 0) {
       return (
           <div className="text-center py-20 space-y-3">
               <p className="text-white/60">No systems found</p>
               <p className="text-xs text-white/40">Try changing filters or search query</p>
               <Link href="/">
                   <button> Go Home</button>
               </Link>
           </div>
       );
   }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
            {projects.map((project) => (
                <motion.div key={project.id} variants={item}>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        slug={project.slug}
                        technologies={project.technologies}
                        metrics={project.metrics}
                        imageUrl={project.images?.[0]?.url}
                        imageAlt={project.images?.[0]?.alt}
                        search={project.title}
                         type={""}                                             />
                </motion.div>
            ))}
        </motion.div>
    );
}
