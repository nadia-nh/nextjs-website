import ProjectCard from '../projects/project-card';
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
                <h1 className="mb-4">Creative Code</h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"
                    style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                </p>
            </div>

            <h2 className="mb-4">P5.js Sketches</h2>

            {/* Creative Code Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {sketches.map((sketch) => (
                    <ProjectCard key={sketch.id} project={sketch} />
                ))}
            </div>

            <br /><br />
            <h2 className="mb-4">Time-based Shaders</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {shaders.map((shader) => (
                    <ProjectCard key={shader.id} project={shader} />
                ))}
            </div>
        </div>
    );
}
