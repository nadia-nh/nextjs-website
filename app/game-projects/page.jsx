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
                <p className="page-description" />
            </div>

            <h2 className="mb-4">
                <a
                    href='https://godotengine.org/'
                    target="_blank"
                    aria-label="Godot Engine website">
                    Godot Engine
                </a>
            </h2>
            {/* Godot Games Grid */}
            <div className="project-grid">
                {games_godot.map((game) => (
                    <ProjectCard key={game.id} project={game} />
                ))}
            </div>

            <h2 className="mt-12 mb-4 flex items-center gap-2">
                <a
                    href='https://www.lexaloffle.com/pico-8.php'
                    target="_blank"
                    aria-label="Pico-8 fantasy console website">
                    Pico-8
                </a>
                and
                <a
                    href='https://love2d.org/'
                    target="_blank"
                    aria-label="Löve-2D framework website">
                    Löve-2D
                </a>
            </h2>
            {/* Other Games Grid */}
            <div className="project-grid">
                {games_other.map((game) => (
                    <ProjectCard key={game.id} project={game} />
                ))}
            </div>

            <h2 className="mt-12 mb-4">
                <a
                    href='https://github.com/fcjr/RCade'
                    target="_blank"
                    aria-label="RCade repository">
                    RCade
                </a>
            </h2>
            {/* RCade Games Grid */}
            <div className="project-grid">
                {games_rcade.map((game) => (
                    <ProjectCard key={game.id} project={game} />
                ))}
            </div>
        </div>
    );
}
