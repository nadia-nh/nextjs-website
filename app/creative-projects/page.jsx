import ProjectCard from '../projects/project-card';
import Link from 'next/link';
import {
    sketches,
    shaders
} from '../projects/project.data.jsx';

export const metadata = {
    title: 'Creative Code'
};

export default function ProjectsPage() {
    return (
        <div className="pb-12">
            {/* Page Header */}
            <div className="mb-12">
                <h1 className="mb-4">Generative Art</h1>
                <p className="page-description mt-4">
                    Generative and visual experiments exploring motion, color, algorithms, and interaction.
                </p>

                <div className="page-description mt-4 flex flex-wrap items-center gap-3">
                    <span>Browse:</span>
                    <Link href="/projects" className="cta-link">featured projects</Link>
                    <Link href="/app-projects" className="cta-link">all apps</Link>
                    <Link href="/game-projects" className="cta-link">all games</Link>
                </div>
            </div>

            <h2 className="mb-4">P5.js Sketches</h2>

            {/* Creative Code Grid */}
            <div className="project-grid">
                {sketches.map((sketch) => (
                    <ProjectCard key={sketch.id} project={sketch} />
                ))}
            </div>

            <h2 className="mt-12 mb-4">Time-based Shaders</h2>
            <div className="project-grid">
                {shaders.map((shader) => (
                    <ProjectCard key={shader.id} project={shader} />
                ))}
            </div>
        </div>
    );
}
