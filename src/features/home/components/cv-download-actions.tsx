"use client";

import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Download, FileDown, X} from "lucide-react";

type CvFile = {
    label: string;
    fileName: string;
    href: string;
};

const cvFiles: CvFile[] = [
    {
        label: "CV EN",
        fileName: "oday-saad-cv-en.pdf",
        href: "/cv/oday-saad-cv-en.pdf",
    },
    {
        label: "CV AR",
        fileName: "oday-saad-cv-ar.pdf",
        href: "/cv/oday-saad-cv-ar.pdf",
    },
];

export function CvDownloadActions() {
    const [selectedCv, setSelectedCv] = useState<CvFile | null>(null);

    const handleDownload = () => {
        if (!selectedCv) return;

        const link = document.createElement("a");
        link.href = selectedCv.href;
        link.download = selectedCv.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setSelectedCv(null);
    };

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {cvFiles.map((cv) => (
                    <button
                        key={cv.href}
                        type="button"
                        onClick={() => setSelectedCv(cv)}
                        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                    >
                        <FileDown className="h-4 w-4 text-blue-300" />
                        {cv.label}
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {selectedCv && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-md pointer"
                        onClick={() => setSelectedCv(null)}
                    >
                        <motion.div
                            initial={{opacity: 0, scale: 0.92, y: 20}}
                            animate={{opacity: 1, scale: 1, y: 0}}
                            exit={{opacity: 0, scale: 0.92, y: 20}}
                            transition={{duration: 0.25, ease: "easeOut"}}
                            onClick={(event) => event.stopPropagation()}
                            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0B1220] p-6 shadow-2xl"
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedCv(null)}
                                aria-label="Close download confirmation"
                                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <div className="space-y-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
                                    <Download className="h-5 w-5" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-white">Confirm CV Download</h3>

                                    <p className="text-sm leading-relaxed text-white/60">
                                        You are about to download{" "}
                                        <span className="font-medium text-white">{selectedCv.fileName}</span>.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
                                    >
                                        <Download className="h-4 w-4" />
                                        Download
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setSelectedCv(null)}
                                        className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
