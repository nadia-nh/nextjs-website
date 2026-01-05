import Link from 'next/link';
import { Home, FolderOpen } from 'lucide-react';

const navItems = [
    { linkText: 'About', href: '/', icon: Home },
    { linkText: 'Projects', href: '/', icon: FolderOpen },
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex items-center gap-1.5 px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.icon ? (
                                    <item.icon size={18} aria-label={item.linkText} />
                                ) : (
                                    item.linkText
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
