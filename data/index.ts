// Image url from github profile
const defaultImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s';

// Profile information
export const data = {
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
        /**
         * 
         {
            year: '2023',
            role: 'Senior Frontend Engineer',
            company: 'Vercel',
            description:
                'Leading frontend architecture for developer tools and AI-powered features.',
            tech: ['React', 'TypeScript', 'Next.js'],
        },
         */
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
            name: 'Animersive',
            description:
                'Animersive is a fun, personal project built with React Native. It leverages web scraping to gather and display detailed anime information, creating an immersive experience for users to explore their favorite animes..',
            techStack: ['React native'],
            url: 'https://github.com/mohit-sharma082/Animersive',
        },
    ],
};
