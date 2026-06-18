type Props = {
    search: string;
    type: string;
    tech: string;
    onTechChange: (value: string) => void;
    onSearchChange: (value: string) => void;
    onTypeChange: (value: string) => void;
};

export function ProjectsFilters({search, type, tech, onSearchChange, onTypeChange, onTechChange}: Props) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <input
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search systems..."
                className="w-full md:w-80 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white outline-none"
            />

            {/* Type Filter */}
            <select
                value={type}
                onChange={(e) => onTypeChange(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white"
            >
                <option value="all">All Systems</option>
                <option value="SaaS System">SaaS</option>
                <option value="Commerce System">E-commerce</option>
                <option value="Productivity System">Productivity</option>
            </select>
            <select
                value={tech}
                onChange={(e) => onTechChange(e.target.value)}
                className="rounded-xl border border-white/10  px-4 py-2 text-white"
            >
                <option value="all" className="text-white">
                    All Technologies
                </option>
                <option value="React">React</option>
                <option value="Next.js">Next.js</option>
                <option value="JavaScript">JavaScript</option>
                <option value="TypeScript">TypeScript</option>
                <option value="CSS">CSS</option>
            </select>
        </div>
    );
}
