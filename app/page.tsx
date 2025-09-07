'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { data } from '@/data/index';
import { Moon, Sun, Github, Linkedin } from 'lucide-react';


export default function Home() {
    const bio = data.bio;
    const [isDark, setIsDark] = useState(true);
    const [activeSection, setActiveSection] = useState('');
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '0px 0px -20% 0px' }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className='min-h-screen bg-background text-foreground relative '>
            <nav className='fixed right-6 top-1/2 -translate-y-1/2 lg:left-8 border-amber-600'>
                <div className='flex flex-col gap-4'>
                    {['intro', 'work', 'projects', 'connect'].map((section) => (
                        <button
                            key={section}
                            onClick={() =>
                                document
                                    .getElementById(section)
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className={`w-2 h-8 rounded-full transition-all duration-500 ${
                                activeSection === section
                                    ? 'bg-primary'
                                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                            }`}
                            aria-label={`Navigate to ${section}`}
                        />
                    ))}
                </div>
            </nav>

            <main className='max-w-4xl mx-auto px-8 pr-10 lg:px-16 snap-y snap-mandatory scroll-smooth '>
                <header
                    id='intro'
                    ref={(el: any) => (sectionsRef.current[0] = el)}
                    className='min-h-screen flex items-center opacity-0'>
                    <div className='grid lg:grid-cols-5 gap-8 md:gap-16 w-full'>
                        <div className='lg:col-span-3 space-y-8'>
                            <div className='space-y-2'>
                                <div className='text-sm text-muted-foreground font-mono tracking-wider'>
                                    PORTFOLIO / 2025
                                </div>
                                <h1 className='text-6xl lg:text-7xl font-light tracking-tight'>
                                    {data.first_name}
                                    <br />
                                    <span className='text-muted-foreground/70'>
                                        {data.last_name}
                                    </span>
                                </h1>
                            </div>

                            <div className='space-y-6 max-w-md'>
                                <p className='text-xl text-muted-foreground leading-relaxed '>
                                    {bio.intro}{' '}
                                    {bio.highlights.map((item, index) => (
                                        <span
                                            key={index}
                                            className='text-foreground '>
                                            {' '}
                                            {item}
                                            {index < bio.highlights.length - 1
                                                ? ','
                                                : ''}
                                        </span>
                                    ))}
                                    .
                                    <span className='block text-sm my-2 text-muted-foreground leading-relaxed'>
                                        {bio.body}
                                    </span>
                                    <span className='block text-sm my-2 text-muted-foreground leading-relaxed'>
                                        {bio.closing}
                                    </span>
                                </p>

                                <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                                        Working
                                    </div>
                                    |
                                    <div>
                                        {data.location.city},{' '}
                                        {data.location.country}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='lg:col-span-2 flex flex-col justify-end space-y-8'>
                            <img
                                src={data.profileImage}
                                alt={'me'}
                                className={
                                    'rounded max-h-[120px] md:max-h-[150px] aspect-square object-contain self-start'
                                }
                            />
                            <div className='space-y-4'>
                                <div className='text-sm font-semibold text-muted-foreground font-mono'>
                                    CURRENTLY
                                </div>
                                <div className='space-y-2'>
                                    <div className='text-foreground '>
                                        {data.experience[0].title}
                                    </div>
                                    <div className='text-muted-foreground'>
                                        <span>
                                            @ {data.experience[0].company.name}
                                        </span>
                                    </div>
                                    <div className='text-xs text-muted-foreground'>
                                        {data.experience[0].started.month}
                                        {', '}
                                        {data.experience[0].started.year} —
                                        Present
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <div className='text-sm font-semibold text-muted-foreground font-mono'>
                                    FOCUS
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {data.tech_stack.map((skill) => (
                                        <span
                                            key={skill}
                                            className=' px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300'>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section
                    id='work'
                    ref={(el: any) => (sectionsRef.current[1] = el)}
                    className='snap-center min-h-screen py-32 opacity-0'>
                    <div className='space-y-16'>
                        <div className='flex items-end justify-between'>
                            <h2 className='text-4xl font-light'>Experience</h2>
                            <div className='text-sm text-muted-foreground font-mono'>
                                {
                                    data.experience[data.experience.length - 1]
                                        .started.year
                                }{' '}
                                - {new Date().getFullYear()}
                            </div>
                        </div>

                        <div className='space-y-12'>
                            {data.experience.map((job, index) => (
                                <div
                                    key={index}
                                    className='group grid lg:grid-cols-12 gap-8 py-8 border-b border-border/50 hover:border-border transition-colors duration-500'>
                                    <div className='lg:col-span-2'>
                                        <div className='w-full '>
                                            <div className='text-xs font-medium tracking-wide text-muted-foreground'>
                                                {job.started.month}
                                            </div>
                                        </div>
                                        <div className='text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500'>
                                            {job.started.year}
                                        </div>
                                    </div>

                                    <div className='lg:col-span-6'>
                                        <div>
                                            <h3 className='text-xl font-medium'>
                                                {job.title}
                                            </h3>
                                            <div className='text-muted-foreground font-bold tracking-wide my-2 hover:underline underline-offset-2 '>
                                                <a
                                                    href={job.company.link}
                                                    target='_blank'
                                                    rel='noopener noreferrer'>
                                                    {job.company.name}
                                                </a>
                                            </div>
                                        </div>
                                        <p className='text-muted-foreground leading-relaxed max-w-lg'>
                                            {job.description}
                                        </p>
                                    </div>

                                    <div className='lg:col-span-4 flex flex-wrap gap-2 items-start lg:justify-end'>
                                        {job.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className='px-2.5 py-1 text-xs text-muted-foreground rounded-full border border-muted-foreground/10 transition-colors duration-500'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    id='projects'
                    ref={(el: any) => (sectionsRef.current[2] = el)}
                    className='min-h-[50vh] py-32 opacity-0'>
                    <div className='space-y-16'>
                        <h2 className='text-4xl font-light'>Recent projects</h2>

                        <div className='grid lg:grid-cols-2 gap-8'>
                            {data.projects.map((project, index) => (
                                <article
                                    key={index}
                                    className='group p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer'>
                                    <div className='space-y-4'>
                                        <h3 className='text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300'>
                                            {project.name}
                                        </h3>

                                        <p className='text-muted-foreground leading-relaxed'>
                                            {project.description}
                                        </p>

                                        <div className='flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
                                            <span>Explore</span>
                                            <svg
                                                className='w-4 h-4 transform group-hover:translate-x-1 group-hover:-rotate-45 group-hover:size-3  transition-all duration-300'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'>
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id='connect'
                    ref={(el: any) => (sectionsRef.current[3] = el)}
                    className='snap-center py-32 opacity-0'>
                    <div className='grid lg:grid-cols-2 gap-16'>
                        <div className='space-y-8'>
                            <h2 className='text-4xl font-light'>
                                Let's Connect
                            </h2>

                            <div className='space-y-6'>
                                <p className='text-lg text-muted-foreground leading-relaxed'>
                                    Always interested in new opportunities,
                                    collaborations, and conversations about
                                    technology and design.
                                </p>

                                <div className='space-y-4'>
                                    <Link
                                        href={'mailto:' + data.contact.email}
                                        className='group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300'>
                                        <span className='text-lg transition-all   '>
                                            {data.contact.email}
                                        </span>
                                        <svg
                                            className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-8'>
                            <div className='text-sm text-muted-foreground font-mono'>
                                Socials
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                {data.contact.socials.map((social, si) => (
                                    <Link
                                        key={si}
                                        href={social.url}
                                        className='group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm cursor-pointer'>
                                        <div className='space-y-2   '>
                                            <div className='uppercase text-foreground group-hover:text-muted-foreground transition-colors duration-300'>
                                                {social.platform}
                                            </div>
                                            <div className='text-sm text-muted-foreground'>
                                                {social.handle}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <footer className='py-16 border-t border-border'>
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
                        <div className='space-y-2'>
                            <div className='text-sm text-muted-foreground'>
                                © 2025 Mohit Sharma. All rights reserved.
                            </div>
                            <div className='text-xs text-muted-foreground'>
                                Built with Next.js, and ShadCN
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <button
                                onClick={toggleTheme}
                                className='cursor-pointer group p-3 rounded-lg border-2 border-border hover:border-muted-foreground/50 transition-all duration-300'
                                aria-label='Toggle theme'>
                                {isDark ? (
                                    <Sun size={16} />
                                ) : (
                                    <Moon size={16} />
                                )}
                            </button>
                        </div>
                    </div>
                </footer>
            </main>

            <div className='fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none'></div>
        </div>
    );
}
