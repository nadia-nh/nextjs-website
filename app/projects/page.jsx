import Image from 'next/image';
import { Github } from 'lucide-react';
import screenshotRcGodotFarmRpg from './screenshot-rc-godot-farm-rpg.png';
import screenshotRcLovePlatformer from './screenshot-rc-love-platformer.png';
import screenshotRcShooter from './screenshot-rc-shooter.png';

export const metadata = {
    title: 'Projects'
};

const projects = [
    {
        id: 1,
        title: 'RC Godot Farming Game',
        description: 'Farming game made with Godot Engine. The player can prepare the soil, plant seeds, water crops, and harvest them once they are fully grown.',
        image: screenshotRcGodotFarmRpg,
        githubUrl: 'https://github.com/nadia-nh/rc-godot-farm-rpg',
        tags: ['Godot', 'gdscript', 'farming']
    },
    {
        id: 2,
        title: 'RC Pico-8 Shoot Em Up Game',
        description: 'Small shoot em up game made with Pico-8. The player controls a ship that can move and shoot lasers at falling enemies.',
        image: screenshotRcShooter,
        githubUrl: 'https://github.com/nadia-nh/rc-pico8-shoot-em-up',
        tags: ['Pico-8', 'lua', 'shmup']
    },
    {
        id: 3,
        title: 'RC Love2D Platformer Game',
        description: 'Small platformer game made with Löve-2D. The player can jump over platforms in order to collect coins.',
        image: screenshotRcLovePlatformer,
        githubUrl: 'https://github.com/nadia-nh/rc-love2d-platformer',
        tags: ['Löve-2D', 'lua', 'platformer']
    },
];

function ProjectCard({ project }) {
    return (
        <article className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden bg-black">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                />
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
