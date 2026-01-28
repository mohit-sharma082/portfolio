// Image url from github profile
const defaultImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s';

type Profile = {
    name: string;
    first_name: string;
    last_name: string;
    location: {
        city: string;
        country: string;
    };
    bio: {
        intro: string;
        highlights: string[];
        body: string;
        closing: string;
    };
    tech_stack: string[];
    profileImage: string;
    contact: {
        email: string;
        socials: {
            platform: string;
            handle: string;
            url: string;
        }[];
    };
    education: {
        degree: string;
        field: string;
        institution: string;
        startYear: number;
        endYear: number | null;
        details: string[];
    }[];
    certifications: {
        title: string;
        provider: string;
        by: string;
        type: string;
        completion_date: string;
        credential_id: string;
        link: string;
        skills: string[];
    }[];
    skills: {
        name: string;
        level: 'basic' | 'intermediate' | 'advanced' | 'expert';
        image: string;
        resource: string;
    }[];
    experience: {
        title: string;
        description: string;
        company: {
            name: string;
            link: string;
        };
        tech: string[];
        started: {
            date: string;
            month: string;
            year: string;
        };
        ended: {
            date: string;
            month: string;
            year: string;
        } | null;
    }[];
    projects: {
        id: number;
        name: string;
        description: string;
        techStack: string[];
        tags: string[];
        url: string;
        status:
            | 'ongoing'
            | 'completed'
            | 'paused'
            | 'discontinued'
            | 'planned'
            | 'archived';
        images: {
            heading: string;
            items: string[];
        }[];
    }[];
};

// Profile information
export const data: Profile = {
    name: 'Mohit Sharma',
    first_name: 'Mohit',
    last_name: 'Sharma',
    location: {
        city: 'Delhi',
        country: 'India',
    },
    bio: {
        intro: 'MERN stack enthusiast crafting web apps at the intersection of',
        highlights: ['puzzles', 'creativity', 'scalability'],
        body: 'Focused on building user-friendly experiences while keeping things fun and fresh.',
        closing: 'Always learning and ready for the next big challenge.',
    },
    tech_stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'TailwindCSS'],
    profileImage: 'https://avatars.githubusercontent.com/u/116288240',
    contact: {
        email: 'mohitsharmafeb2004@gmail.com',
        socials: [
            {
                platform: 'github',
                handle: 'mohit-sharma082',
                url: 'https://github.com/mohit-sharma082',
            },
            {
                platform: 'linkedin',
                handle: 'mohit-sharma82',
                url: 'https://www.linkedin.com/in/mohit-sharma82/',
            },
        ],
    },
    education: [
        {
            degree: 'Bachelor of Arts (BA)',
            field: '',
            institution: 'School of Open Learning, University of Delhi',
            startYear: 2022,
            endYear: 2025,
            details: [
                'Completed coursework in Political Theory, International Relations, and Public Administration.',
                'Engaged in various seminars and workshops to enhance understanding of political systems.',
            ],
        },
        {
            degree: 'Master of Computer Applications (MCA)',
            field: 'Computer Applications',
            institution: 'Manipal University Jaipur',
            startYear: 2025,
            endYear: null,
            details: [
                'Pursuing advanced studies in software development, data structures, and algorithms.',
                'Participating in coding bootcamps and hackathons to apply theoretical knowledge practically.',
            ],
        },
    ],
    certifications: [
        {
            title: 'Introduction to Software Engineering',
            provider: 'Coursera',
            by: 'IBM',
            type: 'course',
            completion_date: 'January 28, 2026',
            credential_id: 'TGAX7GW0MSR9',
            link: 'https://www.coursera.org/account/accomplishments/verify/TGAX7GW0MSR9',
            skills: [
                'Software Development Tools',
                'Python Programming',
                'Software Design Patterns',
                'Development Environment',
                'Application Deployment',
                'Front-End Web Development',
                'Software Engineering',
                'Computer Programming',
                'Back-End Web Development',
                'Web Applications',
                'Software Development',
                'Software Documentation',
                'Unified Modeling Language',
                'Programming Principles',
                'Software Development Life Cycle',
                'Software Development Methodologies',
                'Software Architecture',
                'Software Design',
            ],
        },
        {
            title: 'Hands-on Introduction to Linux Commands and Shell Scripting',
            provider: 'Coursera',
            by: 'IBM',
            type: 'course',
            completion_date: 'April 5, 2025',
            credential_id: 'DTH7JLU8V51Q',
            link: 'https://www.coursera.org/account/accomplishments/verify/DTH7JLU8V51Q',
            skills: [
                'File Management',
                'Shell Script',
                'Linux Commands',
                'OS Process Management',
                'Command-Line Interface',
                'Linux Administration',
                'File Systems',
                'Unix',
                'Scripting',
                'Software Installation',
                'Operating Systems',
                'Bash (Scripting Language)',
                'Linux',
                'Automation',
                'Network Protocols',
                'Ubuntu',
                'Unix Commands',
            ],
        },
        {
            title: 'How Computers Work',
            provider: 'Coursera',
            by: 'University of London',
            type: 'course',
            completion_date: 'July 17, 2025',
            credential_id: '3M4SB22Z43A6',
            link: 'https://www.coursera.org/account/accomplishments/verify/3M4SB22Z43A6',
            skills: [
                'Problem Management',
                'Cybersecurity',
                'Computer Science',
                'Debugging',
                'Web Applications',
                'Computer Networking',
                'Computational Thinking',
                'Web Design and Development',
                'Computer Literacy',
                'Software Architecture',
                'Network Security',
                'Computer Systems',
                'Data Storage',
            ],
        },
        {
            title: 'Explore Core Data Concepts in Microsoft Azure',
            provider: 'Coursera',
            by: 'Microsoft',
            type: 'course',
            completion_date: 'November 15, 2025',
            credential_id: '7LNDX7RQ71JD',
            link: 'https://www.coursera.org/account/accomplishments/verify/7LNDX7RQ71JD',
            skills: [
                'Database Management',
                'Data Analysis',
                'Database Systems',
                'Microsoft Azure',
                'Cloud Computing',
                'NoSQL',
                'Data Management',
                'Unstructured Data',
                'Data Visualization Software',
                'Transaction Processing',
                'Data Processing',
                'Databases',
                'Data Storage',
                'Relational Databases',
                'Query Languages',
            ],
        },
        {
            title: 'TypeScript Variables and Data Types',
            provider: 'Coursera',
            by: 'Coursera',
            type: 'course',
            completion_date: 'December 8, 2025',
            credential_id: '290J3O00QPXC',
            link: 'https://www.coursera.org/account/accomplishments/verify/290J3O00QPXC',
            skills: [
                'Web Development Tools',
                'Javascript',
                'Programming Principles',
                'TypeScript',
                'Web Language',
            ],
        },
    ],
    skills: [
        {
            name: 'JavaScript',
            level: 'basic',
            image: defaultImage,
            resource: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            name: 'TypeScript',
            level: 'basic',
            image: defaultImage,
            resource: 'https://www.typescriptlang.org/docs/',
        },
        {
            name: 'React.js',
            level: 'basic',
            image: defaultImage,
            resource: 'https://react.dev/',
        },
        {
            name: 'Next.js',
            level: 'basic',
            image: defaultImage,
            resource: 'https://nextjs.org/docs',
        },
        {
            name: 'Vue.js',
            level: 'basic',
            image: defaultImage,
            resource: 'https://vuejs.org/guide/introduction.html',
        },
        {
            name: 'AngularJS',
            level: 'basic',
            image: defaultImage,
            resource: 'https://angular.io/docs',
        },
        {
            name: 'Node.js',
            level: 'basic',
            image: defaultImage,
            resource: 'https://nodejs.org/en/docs/',
        },
        {
            name: 'Express.js',
            level: 'basic',
            image: defaultImage,
            resource: 'https://expressjs.com/en/starter/hello-world.html',
        },
        {
            name: 'MongoDB',
            level: 'basic',
            image: defaultImage,
            resource: 'https://www.mongodb.com/docs/',
        },
        {
            name: 'Microservices',
            level: 'basic',
            image: defaultImage,
            resource: 'https://microservices.io/',
        },
        {
            name: 'React Native',
            level: 'basic',
            image: defaultImage,
            resource: 'https://reactnative.dev/docs/getting-started',
        },
        {
            name: 'Android Studio',
            level: 'basic',
            image: defaultImage,
            resource: 'https://developer.android.com/studio',
        },
        {
            name: 'Kotlin',
            level: 'basic',
            image: defaultImage,
            resource: 'https://kotlinlang.org/docs/home.html',
        },
        {
            name: 'TailwindCSS',
            level: 'basic',
            image: defaultImage,
            resource: 'https://tailwindcss.com/docs',
        },
        {
            name: 'Git',
            level: 'basic',
            image: defaultImage,
            resource: 'https://git-scm.com/doc',
        },
        // {
        // 	name: 'Turbo Repo',
        // 	level: 'basic',
        // 	image: defaultImage,
        // 	resource: 'https://turbo.build/repo/docs',
        // },
        // {
        // 	name: 'ShadCN',
        // 	level: 'basic',
        // 	image: defaultImage,
        // 	resource: 'https://ui.shadcn.com/docs',
        // },
        {
            name: 'C',
            level: 'basic',
            image: defaultImage,
            resource: 'https://en.cppreference.com/w/c/language',
        },
        {
            name: 'Python',
            level: 'basic',
            image: defaultImage,
            resource: 'https://docs.python.org/3/',
        },
        {
            name: 'Bash',
            level: 'basic',
            image: defaultImage,
            resource: 'https://www.gnu.org/software/bash/manual/',
        },
        {
            name: 'HTML5',
            level: 'basic',
            image: defaultImage,
            resource:
                'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
        },
        {
            name: 'CSS3',
            level: 'basic',
            image: defaultImage,
            resource: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
    ],
    experience: [
        {
            title: 'Associate Software Development Engineer',
            description: `Working on various projects using React and Node.js.`,
            company: {
                name: 'Whizhack Technologies',
                link: 'https://whizhack.com/',
            },
            tech: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
            started: {
                date: '01',
                month: 'July',
                year: '2024',
            },
            ended: null,
        },
        {
            title: 'Software Engineer',
            description: `Worked on various projects using React and Node.js.`,
            company: {
                name: 'Mogi I/O',
                link: 'https://www.mogiio.com/',
            },
            tech: [
                'React',
                'Node.js',
                'MongoDB',
                'TypeScript',
                'AngularJS',
                'VueJs',
            ],

            started: {
                date: '10',
                month: 'January',
                year: '2023',
            },
            ended: {
                date: '15',
                month: 'June',
                year: '2024',
            },
        },
    ],
    projects: [
        {
            id: 1,
            name: 'Animersive',
            description:
                'Animersive is a fun, personal project built with React Native. It leverages web scraping to gather and display detailed anime information, creating an immersive experience for users to explore their favorite animes..',
            techStack: ['React native'],
            tags: ['react native', 'mobile app'],
            url: 'https://github.com/mohit-sharma082/Animersive',
            status: 'discontinued', // ongoing | completed | paused | discontinued | planned | archived

            images: [
                {
                    heading: 'Home Screen',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/home.jpeg',
                    ],
                },
                {
                    heading: 'Continue Exploring Screen',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/continue_exploring.jpeg',
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/continue_exploring_2.jpeg',
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/continue_exploring_3.jpeg',
                    ],
                },

                {
                    heading: 'Search Screen',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/search_page.jpeg',
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/search_page_2.jpeg',
                    ],
                },
                {
                    heading: 'Details Screen',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/details.jpeg',
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/details_2.jpeg',
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/details_3.jpeg',
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/details_4.jpeg',
                    ],
                },
                {
                    heading: 'Player Section',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/player.jpeg',
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/player_2.jpeg',
                    ],
                },
                {
                    heading: 'Profile Screen',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/profile.jpeg',
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/profile_2.jpeg',
                    ],
                },
                {
                    heading: 'Genres Screen',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/genres_page.jpeg',
                    ],
                },
                {
                    heading: 'Studio Screen',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/Animersive/refs/heads/main/images/studio_page.jpeg',
                    ],
                },
            ],
        },
        {
            id: 2,
            name: 'Flixr',
            description:
                'Flixr is a project made using tmdb api to browse movies and tv shows. It offers features like searching, viewing detailed information about each title, providing an engaging experience for movie enthusiasts.',
            techStack: ['React', 'Next.js', 'TailwindCSS'],
            tags: ['typescript', 'next.js', 'web app', 'entertainment'],
            url: 'https://github.com/mohit-sharma082/flixr',
            status: 'ongoing',
            images: [
                {
                    heading: 'Home Screen',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/home.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/home_lists_4.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/home_movies_lists.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/home_movies_lists_2.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/home_movies_lists_3.png',
                    ],
                },
                {
                    heading: 'Floating Nav Section',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/floating_nav.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/floating_nav_2.png',
                    ],
                },

                {
                    heading: 'Content Details Sections',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/cast-crew_section.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/tmdb_reviews.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/tmdb_reviews_s_2.png',
                    ],
                },

                {
                    heading: 'Media Gallery Section',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/media_gallery_section.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/media_gallery_section_2.png',
                    ],
                },
                {
                    heading: 'Movie details Screen',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/movie_details.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/movie_details_similar_movies.png',
                    ],
                },
                {
                    heading: 'Tv Show details Screen',
                    items: [
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/tv_show_details.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/tv_show_details_2.png',
                        'https://raw.githubusercontent.com/mohit-sharma082/flixr/refs/heads/main/images/tv_show_seasons.png',
                    ],
                },
            ],
        },
    ],
};
