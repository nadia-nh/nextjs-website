import ProjectCard from './project-card';
import { games } from './project.data.jsx';

export const metadata = {
    title: 'Projects'
};

export default function ProjectsPage() {
    return (
        <div className="pb-12">
            {/* Page Header */}
            <div className="mb-12">
                <h1 className="mb-4">Projects</h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                    
                </p>
            </div>

            <h2 className="mb-4">Games</h2>

            {/* Games Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {games.map((game) => (
                    <ProjectCard key={game.id} project={game} />
                ))}
            </div>
        </div>
    );
}
