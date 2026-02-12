// 'use client';
// import { useParams, useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import { data } from '@/data/index';
// import { ArrowLeftCircle, X } from 'lucide-react';

// const ProjectDetailsPage = () => {
//     const [project, setProject] = useState<any>(null);
//     const [selectedImage, setSelectedImage] = useState<string | null>(null);
//     const router = useRouter();

//     const { id } = useParams();
//     console.log('Project ID from params:', id);

//     useEffect(() => {
//         document.documentElement.classList.toggle('dark', true);

//         if (project) return;

//         const projectData = data.projects.find(
//             (proj) => proj.id.toString() === id,
//         );
//         setProject(projectData);

//         // listen for escape key to close the image modal
//         const handleKeyDown = (e: KeyboardEvent) => {
//             if (e.key === 'Escape') {
//                 setSelectedImage(null);
//             }
//         };
//         window.addEventListener('keydown', handleKeyDown);

//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [id]);

//     if (!project) {
//         return (
//             <div className='min-h-screen flex items-center justify-center'>
//                 <p className='text-muted-foreground'>
//                     Loading project details...
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <div className='dark:dark min-h-screen bg-background text-foreground relative '>
//             {selectedImage && (
//                 <div
//                     className='fixed h-screen inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
//                     onClick={() => setSelectedImage(null)}>
//                     <div
//                         className='relative max-w-[90vw] max-h-[80vh]  border-4 rounded-sm overflow-hidden'
//                         onClick={(e) => e.stopPropagation()}>
//                         <img
//                             src={selectedImage}
//                             alt='Selected'
//                             className='max-w-full max-h-[80vh] rounded-lg object-contain'
//                         />
//                         <button
//                             className='cursor-pointer absolute top-4 right-4 border bg-black/40 text-white p-3 backdrop-blur rounded-full hover:bg-black/70 transition-colors'
//                             onClick={() => setSelectedImage(null)}>
//                             <X className='w-6 h-6' />
//                         </button>
//                     </div>
//                 </div>
//             )}
//             <section className='max-w-6xl mx-auto px-8 pr-10 lg:px-16 snap-y snap-mandatory scroll-smooth text-pretty  min-h-screen py-16 md:py-32 animate-fade-in-up opacity-0'>
//                 <div className='grid lg:grid-cols-5 gap-8 md:gap-16 w-full'>
//                     <div className='lg:col-span-3 space-y-4'>
//                         <div className='space-y-2'>
//                             <div
//                                 className=' rounded-full bg-foreground/5 p-3 border border-border/10 cursor-pointer hover:scale-105 w-fit text-sm text-foreground font-mono tracking-wider'
//                                 onClick={() => router.push('/')}>
//                                 <ArrowLeftCircle size={20} strokeWidth={1.5} />
//                             </div>
//                             <div className='text-sm text-muted-foreground font-mono tracking-wider'>
//                                 PROJECT
//                             </div>
//                             <h1 className='text-4xl lg:text-7xl font-light tracking-tight'>
//                                 {project?.name}
//                             </h1>
//                         </div>

//                         <div className=' max-w-md'>
//                             <p className='md:text-lg text-muted-foreground leading-relaxed text-pretty'>
//                                 {project?.description}
//                             </p>
//                         </div>
//                     </div>

//                     <div className='lg:col-span-2 flex flex-col justify-end space-y-4'>
//                         <span
//                             className={
//                                 'hidden md:flex rounded h-[60px] md:h-[100px] bg-foreground/10 text-2xl font-bold items-center justify-center aspect-square object-contain self-start'
//                             }>
//                             {project.name.charAt(0)}
//                         </span>
//                         <div className='space-y-4'>
//                             <div className='text-sm font-semibold text-foreground font-mono uppercase rounded-full bg-foreground/20 w-fit px-3 py-1.5'>
//                                 {project?.status}
//                             </div>
//                             <div className='space-y-2'>
//                                 <div className='text-sm text-muted-foreground font-mono tracking-wider'>
//                                     TECH STACK
//                                 </div>
//                                 <div className='text-foreground bg-foreground/5 text-sm font-semibold rounded-sm p-2 w-fit px-4'>
//                                     {project.techStack?.join(' | ')}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='space-y-2'>
//                             <div className='text-sm font-semibold text-muted-foreground font-mono'>
//                                 TAGS
//                             </div>
//                             <div className='flex flex-wrap gap-2'>
//                                 {project?.tags?.map(
//                                     (tag: string, ti: number) => (
//                                         <span
//                                             key={ti}
//                                             className='uppercase px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300'>
//                                             {tag}
//                                         </span>
//                                     ),
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='py-8 '>
//                     <div className='text-sm text-muted-foreground font-mono tracking-wider'>
//                         IMAGES
//                     </div>
//                     {project.images.map((imageSection: any, index: number) => (
//                         <div key={index} className='mt-2 mb-6'>
//                             <h2 className='text-2xl font-semibold mb-2'>
//                                 {imageSection.heading}
//                             </h2>
//                             <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-4 mb-2'>
//                                 {imageSection.items.length === 0 ? (
//                                     <p className='text-sm text-muted-foreground'>
//                                         No images available.
//                                     </p>
//                                 ) : (
//                                     imageSection.items.map(
//                                         (imgSrc: string, imgIndex: number) => (
//                                             <img
//                                                 tabIndex={
//                                                     (index + 1) * 100 + imgIndex
//                                                 }
//                                                 key={imgIndex}
//                                                 src={imgSrc}
//                                                 onClick={() =>
//                                                     setSelectedImage(imgSrc)
//                                                 }
//                                                 loading='lazy'
//                                                 alt={`${imageSection.heading} ${imgIndex + 1}`}
//                                                 className='cursor-pointer hover:scale-105 transition-all duration-300 w-full min-h-32 min-w-32 bg-foreground/5 h-auto rounded-lg border border-border'
//                                             />
//                                         ),
//                                     )
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ProjectDetailsPage;

'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { data } from '@/data/index';
import { ArrowLeftCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetailsPage = () => {
    const [project, setProject] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [allImages, setAllImages] = useState<
        { src: string; section: string }[]
    >([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageDimensions, setImageDimensions] = useState<{
        [key: string]: { width: number; height: number };
    }>({});
    const router = useRouter();

    const { id } = useParams();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', true);

        if (project) return;

        const projectData = data.projects.find(
            (proj) => proj.id.toString() === id,
        );
        setProject(projectData);

        // Flatten all images for modal navigation
        if (projectData?.images) {
            const flattened = projectData.images.flatMap((section: any) =>
                section.items.map((src: string) => ({
                    src,
                    section: section.heading,
                })),
            );
            setAllImages(flattened);
        }

        // Listen for escape key to close the image modal
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            } else if (e.key === 'ArrowLeft') {
                handlePreviousImage();
            } else if (e.key === 'ArrowRight') {
                handleNextImage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [id]);

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        const index = allImages.findIndex((img) => img.src === imageSrc);
        setCurrentImageIndex(index);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? allImages.length - 1 : prev - 1,
        );
        setSelectedImage(
            allImages[
                currentImageIndex === 0
                    ? allImages.length - 1
                    : currentImageIndex - 1
            ].src,
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === allImages.length - 1 ? 0 : prev + 1,
        );
        setSelectedImage(
            allImages[
                currentImageIndex === allImages.length - 1
                    ? 0
                    : currentImageIndex + 1
            ].src,
        );
    };

    const handleImageLoad = (src: string, img: HTMLImageElement) => {
        setImageDimensions((prev) => ({
            ...prev,
            [src]: { width: img.naturalWidth, height: img.naturalHeight },
        }));
    };

    const isPortrait = (src: string) => {
        const dims = imageDimensions[src];
        return dims && dims.height > dims.width;
    };

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
        <div className='dark:dark min-h-screen bg-background text-foreground relative'>
            {selectedImage && (
                <div
                    className='fixed h-screen inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4'
                    onClick={() => setSelectedImage(null)}>
                    <div
                        className='relative max-w-[90vw] max-h-[90vh] flex flex-col'
                        onClick={(e) => e.stopPropagation()}>
                        {/* Image container */}
                        <div className='flex-1 flex items-center justify-center overflow-hidden rounded-lg'>
                            <img
                                src={selectedImage}
                                alt={`Project image ${currentImageIndex + 1}`}
                                className='max-w-full max-h-[80vh] object-contain'
                            />
                        </div>

                        {/* Image counter and info */}
                        <div className='mt-4 flex items-center justify-between text-white text-sm'>
                            <div className='text-muted-foreground'>
                                {allImages[currentImageIndex]?.section && (
                                    <span>
                                        {allImages[currentImageIndex].section}
                                    </span>
                                )}
                            </div>
                            <div className='text-muted-foreground'>
                                {currentImageIndex + 1} / {allImages.length}
                            </div>
                        </div>

                        {/* Navigation buttons */}
                        <div className='absolute inset-y-0 left-4 flex items-center'>
                            <button
                                onClick={handlePreviousImage}
                                className='p-2 rounded-full bg-primary/20 hover:bg-primary/40 text-foreground transition-all duration-300'
                                aria-label='Previous image'>
                                <ChevronLeft className='w-6 h-6' />
                            </button>
                        </div>
                        <div className='absolute inset-y-0 right-4 flex items-center'>
                            <button
                                onClick={handleNextImage}
                                className='p-2 rounded-full bg-primary/20 hover:bg-primary/40 text-foreground transition-all duration-300'
                                aria-label='Next image'>
                                <ChevronRight className='w-6 h-6' />
                            </button>
                        </div>

                        {/* Close button */}
                        <button
                            className='cursor-pointer absolute top-4 right-4 border border-primary/30 bg-primary/10 hover:bg-primary/20 text-foreground p-2 backdrop-blur rounded-full transition-all duration-300'
                            onClick={() => setSelectedImage(null)}>
                            <X className='w-6 h-6' />
                        </button>
                    </div>
                </div>
            )}
            <section className='max-w-6xl mx-auto px-8 pr-10 lg:px-16 snap-y snap-mandatory scroll-smooth text-pretty  min-h-screen py-16 md:py-32 animate-fade-in-up opacity-0'>
                <div className='grid lg:grid-cols-5 gap-8 md:gap-16 w-full'>
                    <div className='lg:col-span-3 space-y-4'>
                        <div className='space-y-3'>
                            <button
                                onClick={() => router.push('/')}
                                className='p-2.5 rounded-lg bg-secondary border border-primary/20 hover:border-primary/50 text-foreground transition-all duration-300 hover:bg-primary/10 flex items-center gap-2'>
                                <ArrowLeftCircle size={20} strokeWidth={1.5} />
                                <span className='text-xs font-medium hidden sm:inline'>
                                    Back
                                </span>
                            </button>
                            <div className='text-xs font-bold text-primary font-mono tracking-widest'>
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

                    <div className='lg:col-span-2 flex flex-col justify-end space-y-6'>
                        <div className='space-y-2'>
                            <div className='text-xs font-bold text-primary font-mono tracking-widest'>
                                STATUS
                            </div>
                            <div className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/30'>
                                <div className='w-2 h-2 rounded-full bg-primary animate-pulse'></div>
                                <span className='text-sm font-medium text-foreground uppercase'>
                                    {project?.status}
                                </span>
                            </div>
                        </div>

                        <div className='space-y-3'>
                            <div className='text-xs font-bold text-primary font-mono tracking-widest'>
                                TECH STACK
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {project.techStack?.map(
                                    (tech: string, index: number) => (
                                        <span
                                            key={index}
                                            className='px-3 py-2 text-xs font-medium bg-secondary border border-primary/20 text-foreground rounded-lg hover:border-primary/50 transition-all duration-300'>
                                            {tech}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>

                        <div className='space-y-3'>
                            <div className='text-xs font-bold text-primary font-mono tracking-widest'>
                                TAGS
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {project?.tags?.map(
                                    (tag: string, ti: number) => (
                                        <span
                                            key={ti}
                                            className='uppercase px-3 py-1.5 text-xs font-medium border border-primary/20 bg-secondary text-foreground rounded-full hover:border-primary/50 transition-all duration-300'>
                                            {tag}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-12 space-y-12'>
                    <div className='space-y-2'>
                        <div className='text-xs font-bold text-primary font-mono tracking-widest'>
                            PROJECT SHOWCASE
                        </div>
                        <h2 className='text-3xl font-light'>
                            Screenshots & Demo
                        </h2>
                    </div>

                    {project.images.map((imageSection: any, index: number) => (
                        <div key={index} className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <div className='w-1.5 h-8 rounded-full bg-primary'></div>
                                <h3 className='text-xl font-medium text-foreground'>
                                    {imageSection.heading}
                                </h3>
                            </div>

                            <div className='grid gap-4 auto-rows-max'>
                                {imageSection.items.length === 0 ? (
                                    <p className='text-sm text-muted-foreground py-8'>
                                        No images available.
                                    </p>
                                ) : (
                                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                        {imageSection.items.map(
                                            (
                                                imgSrc: string,
                                                imgIndex: number,
                                            ) => {
                                                const portrait =
                                                    isPortrait(imgSrc);
                                                const colSpan = portrait
                                                    ? 'col-span-1'
                                                    : 'col-span-1 md:col-span-2';

                                                return (
                                                    <div
                                                        key={imgIndex}
                                                        className={`${colSpan} group relative overflow-hidden rounded-lg border-2 border-primary/10 bg-secondary cursor-pointer transition-all duration-300 hover:border-primary/50`}
                                                        onClick={() =>
                                                            handleImageClick(
                                                                imgSrc,
                                                            )
                                                        }>
                                                        <img
                                                            src={imgSrc}
                                                            onClick={(e) =>
                                                                handleImageLoad(
                                                                    imgSrc,
                                                                    e.target as HTMLImageElement,
                                                                )
                                                            }
                                                            onLoad={(e) =>
                                                                handleImageLoad(
                                                                    imgSrc,
                                                                    e.currentTarget as HTMLImageElement,
                                                                )
                                                            }
                                                            loading='lazy'
                                                            alt={`${imageSection.heading} ${imgIndex + 1}`}
                                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                                        />
                                                        <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3'>
                                                            <span className='text-xs font-medium text-white bg-primary/50 px-2 py-1 rounded backdrop-blur-sm'>
                                                                Click to expand
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            },
                                        )}
                                    </div>
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
