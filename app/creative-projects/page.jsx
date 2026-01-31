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
                <p className="page-description" />
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
