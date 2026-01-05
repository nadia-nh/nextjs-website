import Image from 'next/image';
import { Github } from 'lucide-react';
import screenshotRcGodotFarmRpg from './screenshot-rc-godot-farm-rpg.png';
import screenshotRcLovePlatformer from './screenshot-rc-love-platformer.png';
import screenshotRcShooter from './screenshot-rc-shooter.png';
import screenshotRcSurvivors from './screenshot-rc-survivors.png';
import screenshotRc8Ball from './screenshot-rc-8-ball.png';
import screenshotRcCatIgnore from './screenshot-rc-cat-ignore.png';

export const metadata = {
    title: 'Projects'
};

const games = [
    {
        id: 1,
        title: 'RC Godot Farming Game',
        description: 'Farming game made with Godot Engine. The player can prepare the soil, plant seeds, water crops, and harvest them once they are fully grown.',
        image: screenshotRcGodotFarmRpg,
        githubUrl: 'https://github.com/nadia-nh/rc-godot-farm-rpg',
        tags: ['Godot', 'gdscript', 'farming', 'recurse-center', 'solo']
    },
    {
        id: 2,
        title: 'RC Pico-8 Shoot Em Up Game',
        description: 'Small shoot em up game made with Pico-8. The player controls a ship that can move and shoot lasers at falling enemies.',
        image: screenshotRcShooter,
        githubUrl: 'https://github.com/nadia-nh/rc-pico8-shoot-em-up',
        tags: ['Pico-8', 'lua', 'shmup', 'recurse-center', 'solo']
    },
    {
        id: 3,
        title: 'RC Love2D Platformer Game',
        description: 'Small platformer game made with Löve-2D. The player can jump over platforms in order to collect coins.',
        image: screenshotRcLovePlatformer,
        githubUrl: 'https://github.com/nadia-nh/rc-love2d-platformer',
        tags: ['Löve-2D', 'lua', 'platformer', 'recurse-center', 'solo']
    },
    {
        id: 4,
        title: 'RC Godot Survivors-like Game',
        description: 'Small underwater survivors-like game made with Godot. The player can move around and avoid enemies.',
        image: screenshotRcSurvivors,
        githubUrl: 'https://github.com/nadia-nh/rc-survivors-game',
        tags: ['Godot', 'gdscript', 'survivors-like', 'recurse-center', 'team']
    },
    {
        id: 5,
        title: 'RC RCade 8-ball Game',
        description: 'Small RCade game that simulates a magic 8-ball. The player can ask a question and receive a random answer.',
        image: screenshotRc8Ball,
        githubUrl: 'https://github.com/nadia-nh/rc-8-ball-rcade',
        tags: ['RCade', 'javascript', 'recurse-center', 'team']
    },
    {
        id: 6,
        title: 'RC RCade Cat Ignore Game',
        description: 'Small RCade game featuring a cat. The player calls out to it to try to get its attention.',
        image: screenshotRcCatIgnore,
        githubUrl: 'https://github.com/sllewely/cat-ignore',
        tags: ['RCade', 'typescript', 'recurse-center', 'team']
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
