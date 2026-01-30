import Link from 'next/link';
import ProjectCard from './project-card';
import { featured } from './project.data.jsx';

export const metadata = {
    title: 'Projects'
};

export default function ProjectsPage() {
    return (
        <div className="pb-12">
            {/* Page Header */}
            <div className="mb-12">
                <h1 className="mb-4">Featured Projects</h1>
                    <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                    <Link
                        href="/app-projects"
                        className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-neutral-700"
                    >
                        All apps <span aria-hidden>→</span>
                    </Link>
                    
                    <Link
                        href="/game-projects"
                        className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-neutral-700"
                    >
                        All games <span aria-hidden>→</span>
                    </Link>
                    
                    <Link
                        href="/creative-projects"
                        className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-neutral-700"
                    >
                        All creative code <span aria-hidden>→</span>
                    </Link>
                </div>

                <br /><br />
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"
                    style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                    
                </p>

                {/* Featured Projects Grid */}
                <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
                    {featured.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                
            </div>
        </div>
    );
}
