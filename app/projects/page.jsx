import ProjectCard from './project-card';
import {
    applications,
    games_godot,
    games_rcade,
    games_other,
    sketches,
    shaders
} from './project.data.jsx';

export const metadata = {
    title: 'Projects'
};

export default function ProjectsPage() {
    return (
        <div className="pb-12">
            {/* Page Header */}
            <div className="mb-12">
                <h1 className="mb-4">Projects</h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"
                    style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                    
                </p>
            </div>

            <h2 className="mb-4">Apps</h2>

            {/* Apps Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {applications.map((app) => (
                    <ProjectCard key={app.id} project={app} />
                ))}
            </div>

            <br /><br />

            <h2 className="mb-4">Games</h2>

            <h3 className="mb-4">Godot Engine</h3>
            {/* Godot Games Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {games_godot.map((game) => (
                    <ProjectCard key={game.id} project={game} />
                ))}
            </div>

            <br /><br />
            <h3 className="mb-4">
                <a
                href='https://github.com/fcjr/RCade'
                target="_blank"
                aria-label="RCade repository">
                RCade
                </a>
            </h3>
            {/* RCade Games Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {games_rcade.map((game) => (
                    <ProjectCard key={game.id} project={game} />
                ))}
            </div>

            <br /><br />
            <h3 className="mb-4">Other Engines</h3>
            {/* Other Games Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {games_other.map((game) => (
                    <ProjectCard key={game.id} project={game} />
                ))}
            </div>

            <br /><br />
            <h2 className="mb-4">Creative Code</h2>

            <h3 className="mb-4">P5.js Sketches</h3>

            {/* Creative Code Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {sketches.map((sketch) => (
                    <ProjectCard key={sketch.id} project={sketch} />
                ))}
            </div>

            <br /><br />
            <h3 className="mb-4">Time-based Shaders</h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {shaders.map((shader) => (
                    <ProjectCard key={shader.id} project={shader} />
                ))}
            </div>
        </div>
    );
}
