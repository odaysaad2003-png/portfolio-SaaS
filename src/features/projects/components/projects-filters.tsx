type Props = {
    search: string;
    type: string;
    tech: string;
    onSearchChange: (v: string) => void;
    onTypeChange: (v: string) => void;
    onTechChange: (v: string) => void;
};

const techOptions = ["all", "React", "Next.js", "JavaScript", "TypeScript", "CSS"];

const typeOptions = ["all", "SaaS System", "Commerce System", "Productivity System"];

export function ProjectsFilters({search, type, tech, onSearchChange, onTypeChange, onTechChange}: Props) {
    return (
        <div className="space-y-6">
            {/* SEARCH */}
            <input
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search systems..."
                className="w-full md:w-96 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white outline-none"
            />

            {/* TECH CHIPS */}

            <div className="flex flex-wrap gap-2">
                {techOptions.map((t) => (
                    <button
                        key={t}
                        onClick={() => onTechChange(t)}
                        className={`px-3 py-1 rounded-full text-sm border transition
              ${
                  tech === t
                      ? "bg-blue-500 text-white border-blue-400 shadow-lg scale-105"
                      : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
              }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* TYPE CHIPS */}
            <div className="flex flex-wrap gap-2">
                {typeOptions.map((t) => (
                    <button
                        key={t}
                        onClick={() => onTypeChange(t)}
                        className={`px-3 py-1 rounded-full text-sm border transition-all duration-200
  ${
      tech === t
          ? "bg-blue-500 text-white border-blue-400 shadow-lg scale-105"
          : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
  }
`}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </div>
    );
}
