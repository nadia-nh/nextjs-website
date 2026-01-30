import ProjectCard from '../projects/project-card';
import {
    games_godot,
    games_rcade,
    games_other,
} from '../projects/project.data.jsx';

export const metadata = {
    title: 'Games'
};

export default function GameProjectsPage() {
    return (
        <div className="pb-12">
            {/* Page Header */}
            <div className="mb-12">
                <h1 className="mb-4">Games</h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"
                    style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                    
                </p>
            </div>

            <h2 className="mb-4">Godot Engine</h2>
            {/* Godot Games Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {games_godot.map((game) => (
                    <ProjectCard key={game.id} project={game} />
                ))}
            </div>

            <br /><br />
            <h2 className="mb-4">
                <a
                href='https://github.com/fcjr/RCade'
                target="_blank"
                aria-label="RCade repository">
                RCade
                </a>
            </h2>
            {/* RCade Games Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {games_rcade.map((game) => (
                    <ProjectCard key={game.id} project={game} />
                ))}
            </div>

            <br /><br />
            <h2 className="mb-4">Other Engines</h2>
            {/* Other Games Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {games_other.map((game) => (
                    <ProjectCard key={game.id} project={game} />
                ))}
            </div>
        </div>
    );
}
