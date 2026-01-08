import Image from 'next/image';
import { Github } from 'lucide-react';

export default function ProjectCard({ project }) {
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
