import ProjectCard from '../projects/project-card';
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
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl"
                    style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                    
                </p>
            </div>

            {/* Apps Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {applications.map((app) => (
                    <ProjectCard key={app.id} project={app} />
                ))}
            </div>
        </div>
    );
}
