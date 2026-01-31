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
                    <Link href="/app-projects" className="cta-link">
                        All apps <span aria-hidden>→</span>
                    </Link>
                    <Link href="/game-projects" className="cta-link">
                        All games <span aria-hidden>→</span>
                    </Link>
                    <Link href="/creative-projects" className="cta-link">
                        All creative code <span aria-hidden>→</span>
                    </Link>
                </div>

                <p className="page-description mt-8" />

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
