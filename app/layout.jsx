import '../styles/globals.css';
import { ThemeToggle } from '../components/theme-toggle';
import { Footer } from '../components/footer'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="null" sizes="any" />
            </head>
            <body
                className="antialiased transition-colors" 
                style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
                <ThemeToggle />
                <div className="flex flex-col min-h-screen px-6 sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}