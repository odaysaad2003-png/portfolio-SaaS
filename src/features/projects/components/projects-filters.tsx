type Props = {
    search: string;
    category: string;
    tech: string;

    onSearchChange: (v: string) => void;
    onCategoryChange: (v: string) => void;
    onTechChange: (v: string) => void;
};

const techOptions = ["all", "React", "Next.js", "JavaScript", "TypeScript", "CSS"];

const categoryOptions = ["all", "frontend", "fullstack", "backend"];

export function ProjectsFilters({search, category, tech, onSearchChange, onCategoryChange, onTechChange}: Props) {
    return (
        <div className="space-y-6">
            {/* SEARCH */}
            <input
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search systems..."
                className="w-full md:w-96 rounded-xl border border-border bg-card px-4 py-2 text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                      : "bg-muted text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground"
              }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* CATEGORY CHIPS */}
            <div className="flex flex-wrap gap-2">
                {categoryOptions.map((c) => (
                    <button
                        key={c}
                        onClick={() => onCategoryChange(c)}
                        className={`px-3 py-1 rounded-full text-sm border transition-all duration-200
              ${
                  category === c
                      ? "bg-purple-500 text-white border-purple-400 shadow-lg scale-105"
                      : "bg-muted text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground"
              }
            `}
                    >
                        {c}
                    </button>
                ))}
            </div>
        </div>
    );
}
