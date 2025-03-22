import SectionWrapper from "@/components/section-wrapper";

import { data } from "@/data/index";
import PageWrapper from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { SkillCard } from "@/components/skill-card";
import FadeInContainer from "@/components/fade-container";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const formatDate = (str: string) => {
    const [day, month, year] = str.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    const monthName = date.toLocaleString("en-US", { month: "long" });
    const yearStr = date.getFullYear();
    const result = `${monthName}, ${yearStr}`;
    return result;
};

export default function Home() {
    const skills = data.skills;
    const projects = data.projects;
    const bio = data.bio;
    const contact = data.contact;
    const experience = data.experience;
    const name = data.name;

    return (
        <PageWrapper>
            <div className='flex flex-col gap-16 items-center w-full min-h-screen py-8 px-4'>
                {/* Introduction Section */}
                <FadeInContainer>
                    <SectionWrapper
                        heading={
                            <img
                                src={data.profileImage}
                                alt={"me"}
                                className={
                                    "rounded max-w-[20vh] md:max-w-full "
                                }
                            />
                        }
                    >
                        <h1 className='text-2xl font-semibold mb-4' id='about'>
                            Hello, I'm {name}!
                        </h1>
                        <pre className='text font-normal text-muted-foreground text-pretty'>
                            {bio}
                        </pre>
                    </SectionWrapper>
                </FadeInContainer>

                {/* Skills Section */}
                <FadeInContainer delay={0.4}>
                    <SectionWrapper heading='skills'>
                        {/* <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 "> */}

                        {/* <div className="flex-1 flex flex-wrap gap-4 "> */}
                        <div className='flex-1 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4'>
                            {skills.map((skill, i) => (
                                // <SkillCard key={i} skill={skill}>
                                <div
                                    key={i}
                                    className='cursor-pointer flex flex-wrap min-w-32 pl-4 items-center gap-2 p-2 border-l-4  hover:bg-muted/50 transition'
                                >
                                    <span className='text-sm font-mono select-none'>
                                        {skill.name}
                                    </span>
                                </div>
                                // </SkillCard>
                            ))}
                        </div>
                    </SectionWrapper>
                </FadeInContainer>

                {/* Experience Section */}
                <FadeInContainer delay={0.8}>
                    <SectionWrapper heading='Work Experience'>
                        <div className='flex-1 flex flex-col  '>
                            {experience.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex flex-col min-h-20 border-l-4 pl-4 transition relative pb-8'
                                >
                                    <div className='border-8 border-foreground  h-1 w-1 absolute left-[-10] top-1 rounded-full'></div>
                                    <span className=' pb-4'>
                                        {formatDate(item.started)} -{" "}
                                        {item.ended == null
                                            ? "present"
                                            : formatDate(item.ended)}
                                    </span>
                                    <span className='font-medium'>
                                        {item.title}
                                    </span>
                                    <a
                                        href={item.company.link}
                                        target='_blank'
                                        className='hover:underline italic'
                                    >
                                        {item.company.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </SectionWrapper>
                </FadeInContainer>

                {/* Projects Section */}
                <FadeInContainer delay={1.2}>
                    <SectionWrapper heading='projects'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            {projects.map((project) => (
                                <div
                                    key={project.name}
                                    className='p-6 border rounded-md shadow-md hover:bg-muted transition'
                                >
                                    <h3 className='text-xl font-medium'>
                                        {project.name}
                                    </h3>
                                    <p className='text-sm text-muted-foreground'>
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.url}
                                        target='_blank'
                                        className='text-blue-500 hover:underline mt-4 block flex items-center gap-2'
                                    >
                                        <ExternalLink size={18} />
                                        View Project
                                    </a>
                                </div>
                            ))}
                        </div>
                    </SectionWrapper>
                </FadeInContainer>
                {/* Contact Section */}
                <section
                    className='text-center bg-gradient-to-r from-[#6a85b640] via-[#6a85b660] to-[#6a85b640] p-16 w-full relative'
                    id='contact'
                >
                    <a href={"mailto:" + contact.email}>
                        <Button>
                          <Mail />
                          Contact Me</Button>
                    </a>
                    <div className='flex justify-center mt-4 space-x-4'>
                        <Link
                            href={data.contact.socials.github}
                            target='_blank'
                        >
                            <Button variant='ghost' className="border">
                                <Github size={24} />
                            </Button>
                        </Link>
                        <Link
                            href={data.contact.socials.linkedin}
                            target='_blank'
                        >
                            <Button variant='ghost' className="border hover:border-blue-900 hover:bg-blue-800">
                                <Linkedin size={24} />
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
}
