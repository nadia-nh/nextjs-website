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
                <p className="page-description" />
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
