import { Github } from 'lucide-react';

export const metadata = {
    title: 'Projects'
};

const projects = [
    {
        id: 1,
        title: 'Project Title One',
        description: 'A brief description of this project. Explain what problem it solves, the technologies used, and any notable features or achievements.',
        image: '/placeholder-project-1.jpg',
        githubUrl: 'https://github.com/username/project-1',
        tags: ['React', 'Node.js', 'MongoDB']
    },
    {
        id: 2,
        title: 'Project Title Two',
        description: 'A brief description of this project. Explain what problem it solves, the technologies used, and any notable features or achievements.',
        image: '/placeholder-project-2.jpg',
        githubUrl: 'https://github.com/username/project-2',
        tags: ['Python', 'Django', 'PostgreSQL']
    },
    {
        id: 3,
        title: 'Project Title Three',
        description: 'A brief description of this project. Explain what problem it solves, the technologies used, and any notable features or achievements.',
        image: '/placeholder-project-3.jpg',
        githubUrl: 'https://github.com/username/project-3',
        tags: ['TypeScript', 'Next.js', 'Tailwind']
    },
    {
        id: 4,
        title: 'Project Title Four',
        description: 'A brief description of this project. Explain what problem it solves, the technologies used, and any notable features or achievements.',
        image: '/placeholder-project-4.jpg',
        githubUrl: 'https://github.com/username/project-4',
        tags: ['JavaScript', 'Express', 'Redis']
    },
    {
        id: 5,
        title: 'Project Title Five',
        description: 'A brief description of this project. Explain what problem it solves, the technologies used, and any notable features or achievements.',
        image: '/placeholder-project-5.jpg',
        githubUrl: 'https://github.com/username/project-5',
        tags: ['Go', 'Docker', 'Kubernetes']
    }
];


function ProjectCard({ project }) {
    return (
        <article className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden bg-neutral-200">
                {/* Placeholder image area - replace src with actual project screenshots */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/30">
                    <span className="text-neutral-500 text-sm font-medium">
                        {/* Replace with actual Image component when images are available */}
                        Project Screenshot
                    </span>
                </div>
                {/* Uncomment and use this when you have actual images:
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                */}
            </div>

            {/* Project Content */}
            <div className="p-6">
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-secondary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-neutral-900 group-hover:text-secondary transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-neutral-600 leading-relaxed">
                    {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 no-underline hover:text-secondary transition-colors"
                    >
                        <Github size={18} />
                        View Code
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function ProjectsPage() {
    return (
        <div className="pb-12">
            {/* Page Header */}
            <div className="mb-12">
                <h1 className="mb-4">Projects</h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                    A collection of projects showcasing my work in software development.
                    Each project represents different skills and technologies.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
