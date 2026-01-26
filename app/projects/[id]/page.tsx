'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { data } from '@/data/index';
import { ArrowLeftCircle, X } from 'lucide-react';

const ProjectDetailsPage = () => {
    const [project, setProject] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const router = useRouter();

    const { id } = useParams();
    console.log('Project ID from params:', id);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', true);

        if (project) return;

        const projectData = data.projects.find(
            (proj) => proj.id.toString() === id,
        );
        setProject(projectData);

        // listen for escape key to close the image modal
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [id]);

    if (!project) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <p className='text-muted-foreground'>
                    Loading project details...
                </p>
            </div>
        );
    }

    return (
        <div className='dark:dark min-h-screen bg-background text-foreground relative '>
            {selectedImage && (
                <div
                    className='fixed h-screen inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
                    onClick={() => setSelectedImage(null)}>
                    <div
                        className='relative max-w-[90vw] max-h-[80vh]  border-4 rounded-sm overflow-hidden'
                        onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt='Selected'
                            className='max-w-full max-h-[80vh] rounded-lg object-contain'
                        />
                        <button
                            className='cursor-pointer absolute top-4 right-4 border bg-black/40 text-white p-3 backdrop-blur rounded-full hover:bg-black/70 transition-colors'
                            onClick={() => setSelectedImage(null)}>
                            <X className='w-6 h-6' />
                        </button>
                    </div>
                </div>
            )}
            <section className='max-w-4xl mx-auto px-8 pr-10 lg:px-16 snap-y snap-mandatory scroll-smooth text-pretty  min-h-screen py-16 md:py-32 border animate-fade-in-up opacity-0'>
                <div className='grid lg:grid-cols-5 gap-8 md:gap-16 w-full'>
                    <div className='lg:col-span-3 space-y-4'>
                        <div className='space-y-2'>
                            <div
                                className=' rounded-full bg-foreground/5 p-3 border border-border/10 cursor-pointer hover:scale-105 w-fit text-sm text-foreground font-mono tracking-wider'
                                onClick={() => router.push('/')}>
                                <ArrowLeftCircle size={20} strokeWidth={1.5} />
                            </div>
                            <div className='text-sm text-muted-foreground font-mono tracking-wider'>
                                PROJECT
                            </div>
                            <h1 className='text-4xl lg:text-7xl font-light tracking-tight'>
                                {project?.name}
                            </h1>
                        </div>

                        <div className=' max-w-md'>
                            <p className='md:text-lg text-muted-foreground leading-relaxed text-pretty'>
                                {project?.description}
                            </p>
                        </div>
                    </div>

                    <div className='lg:col-span-2 flex flex-col justify-end space-y-4'>
                        <span
                            className={
                                'hidden md:flex rounded h-[60px] md:h-[100px] bg-foreground/10 text-2xl font-bold items-center justify-center aspect-square object-contain self-start'
                            }>
                            {project.name.charAt(0)}
                        </span>
                        <div className='space-y-4'>
                            <div className='text-sm font-semibold text-foreground font-mono uppercase rounded-full bg-foreground/20 w-fit px-3 py-1.5'>
                                {project?.status}
                            </div>
                            <div className='space-y-2'>
                                <div className='text-sm text-muted-foreground font-mono tracking-wider'>
                                    TECH STACK
                                </div>
                                <div className='text-foreground bg-foreground/5 text-sm font-semibold rounded-sm p-2 w-fit px-4'>
                                    {project.techStack?.join(' | ')}
                                </div>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <div className='text-sm font-semibold text-muted-foreground font-mono'>
                                TAGS
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {project?.tags?.map(
                                    (tag: string, ti: number) => (
                                        <span
                                            key={ti}
                                            className='uppercase px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300'>
                                            {tag}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-8 '>
                    <div className='text-sm text-muted-foreground font-mono tracking-wider'>
                        IMAGES
                    </div>
                    {project.images.map((imageSection: any, index: number) => (
                        <div key={index} className='mt-2 mb-6'>
                            <h2 className='text-2xl font-semibold mb-2'>
                                {imageSection.heading}
                            </h2>
                            <div className='grid grid-cols-2 lg:grid-cols-3  gap-4 mb-2'>
                                {imageSection.items.length === 0 ? (
                                    <p className='text-sm text-muted-foreground'>
                                        No images available.
                                    </p>
                                ) : (
                                    imageSection.items.map(
                                        (imgSrc: string, imgIndex: number) => (
                                            <img
                                                tabIndex={
                                                    (index + 1) * 100 + imgIndex
                                                }
                                                key={imgIndex}
                                                src={imgSrc}
                                                onClick={() =>
                                                    setSelectedImage(imgSrc)
                                                }
                                                loading='lazy'
                                                alt={`${imageSection.heading} ${imgIndex + 1}`}
                                                className='cursor-pointer hover:scale-105 transition-all duration-300 w-full min-h-32 min-w-32 bg-foreground/5 h-auto rounded-lg border border-border'
                                            />
                                        ),
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectDetailsPage;
