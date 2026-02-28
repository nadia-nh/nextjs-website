import ProjectCard from '../projects/project-card';
import Link from 'next/link';
import {
    applications,
} from '../projects/project.data.jsx';

export const metadata = {
    title: 'Apps'
};

export default function AppProjectsPage() {
    return (
        <div className="pb-12">
            {/* Page Header */}
            <div className="mb-12">
                <h1 className="mb-4">Apps</h1>
                <p className="page-description mt-4">
                    Mobile and web applications built with a focus on clarity, usability, and clean architecture.
                </p>

                <div className="page-description mt-4 flex flex-wrap items-center gap-3">
                    <span>Browse:</span>
                    <Link href="/projects" className="cta-link">featured projects</Link>
                    <Link href="/game-projects" className="cta-link">all games</Link>
                    <Link href="/creative-projects" className="cta-link">all generative art</Link>
                </div>
            </div>

            {/* Apps Grid */}
            <div className="project-grid">
                {applications.map((app) => (
                    <ProjectCard key={app.id} project={app} />
                ))}
            </div>
        </div>
    );
}
