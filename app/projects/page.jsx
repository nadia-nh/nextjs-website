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

                <p className="page-description mt-4">
                    Curated selection of personal projects I've worked on, including apps, games, and generative art experiments.
                </p>

                <div className="page-description mt-4 flex flex-wrap items-center gap-3">
                    <span>Browse:</span>
                    <Link href="/app-projects" className="cta-link">all apps</Link>
                    <Link href="/game-projects" className="cta-link">all games</Link>
                    <Link href="/creative-projects" className="cta-link">all generative art</Link>
                </div>

                <br />

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
