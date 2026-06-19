"use client";

import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import {CaseStudy} from "../../engine/project-mapper";

type Props = {
    data: CaseStudy;
};

type SelectedImage = {
    url: string;
    alt?: string;
};

export function CaseStudyImages({data}: Props) {
    const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

    if (!data.images?.length) return null;

    const [featured, ...rest] = data.images;

    return (
        <>
            <section className="relative py-28">
                <div className="mx-auto max-w-6xl space-y-10 px-6">
                    {/* Label */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.4}}
                        transition={{duration: 0.5}}
                        className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/60"
                    >
                        Visual Overview
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{opacity: 0, y: 24}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.4}}
                        transition={{duration: 0.6, delay: 0.05}}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl font-bold md:text-4xl">Project Screenshots</h2>

                        <p className="max-w-2xl text-white/60">
                            A visual walkthrough of the product experience, interface structure, and core system
                            screens.
                        </p>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.button
                        type="button"
                        onClick={() => setSelectedImage(featured)}
                        initial={{opacity: 0, y: 35, scale: 0.98}}
                        whileInView={{opacity: 1, y: 0, scale: 1}}
                        viewport={{once: true, amount: 0.25}}
                        transition={{duration: 0.7, ease: "easeOut"}}
                        className="group relative w-full overflow-hidden rounded-2xl border border-white/10 text-left"
                    >
                        <img
                            src={featured.url}
                            alt={featured.alt || "Featured project screenshot"}
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        <div className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur">
                            Click to preview
                        </div>
                    </motion.button>

                    {/* Grid Images */}
                    {rest.length > 0 && (
                        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
                            {rest.map((image, index) => (
                                <motion.button
                                    type="button"
                                    key={`${image.url}-${index}`}
                                    onClick={() => setSelectedImage(image)}
                                    initial={{opacity: 0, y: 28, scale: 0.96}}
                                    whileInView={{opacity: 1, y: 0, scale: 1}}
                                    viewport={{once: true, amount: 0.3}}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.12,
                                        ease: "easeOut",
                                    }}
                                    className="group relative overflow-hidden rounded-xl border border-white/10 text-left"
                                >
                                    <img
                                        src={image.url}
                                        alt={image.alt || "Project screenshot"}
                                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />

                                    <div className="absolute bottom-4 left-4 translate-y-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/0 backdrop-blur transition group-hover:translate-y-0 group-hover:text-white/80">
                                        Preview
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.25}}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{opacity: 0, scale: 0.92, y: 20}}
                            animate={{opacity: 1, scale: 1, y: 0}}
                            exit={{opacity: 0, scale: 0.92, y: 20}}
                            transition={{duration: 0.3, ease: "easeOut"}}
                            className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedImage(null)}
                                className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10"
                                aria-label="Close image preview"
                            >
                                Close
                            </button>

                            <img
                                src={selectedImage.url}
                                alt={selectedImage.alt || "Selected project screenshot"}
                                className="max-h-[90vh] w-full object-contain"
                            />

                            {selectedImage.alt && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <p className="text-sm text-white/70">{selectedImage.alt}</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
