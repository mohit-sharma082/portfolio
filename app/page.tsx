
import Image from "next/image";
import SectionWrapper from "@/components/section-wrapper";

import { data } from "@/data/index";
import PageWrapper from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";

const formatDate = (str: string) => {
  const date = new Date(str)
  const a =  date.toLocaleDateString();
  console.log(`got : `, str, date, a);
  
  return a
}

export default function Home() {
  
const skills = data.skills;
const projects = data.projects;
const bio = data.bio;
const contact = data.contact;
const experience = data.experience;
const name = data.name;
const profileImage = data.profileImage;


  return (
    <PageWrapper>
      <div className="flex flex-col gap-16 items-center w-full min-h-screen py-8 px-4">
        {/* Introduction Section */}
        <SectionWrapper heading="" >
          <h1 className="text-2xl font-semibold mb-4" id="about">Hello, I'm {name}!</h1>
          <pre className="text font-normal text-muted-foreground text-pretty">
            {bio}
          </pre>
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper heading="skills">
          {/* <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 "> */}

          <div className="flex-1 flex flex-wrap gap-3 ">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="cursor-pointer flex flex-wrap min-w-32 pl-4 items-center gap-2 p-2 border-l-4  hover:bg-muted/50 transition"
              >
                <span className="text-xs font-mono">{skill.name}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper heading="Work Experience">

          <div className="flex-1 flex flex-col  ">
            {experience.map((item, index) => (
              <div
                className="flex flex-col min-h-20 border-l-4 pl-4 transition relative pb-8"
              >
                <div className="border-8 border-foreground  h-1 w-1 absolute left-[-10] top-1 rounded-full"></div>
                <span className=" pb-4">{formatDate(item.started)} - {item.ended == null ? 'present' : formatDate(item.ended)}</span>
                <span className="font-medium">{item.title}</span>
                <a href={item.company.link}

                  target="_blank"
                  className="hover:underline italic" >
                  {item.company.name}
                </a>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper heading="projects">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="p-6 border rounded-md shadow-md hover:bg-muted transition"
              >
                <h3 className="text-xl font-medium">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </SectionWrapper>
        {/* Contact Section */}
        <section className="text-center bg-secondary/50 p-16 w-full relative" id="contact">
          <a
            href={"mailto:" + contact.email}
          >
            <Button >
              Contact Me

            </Button>
          </a>
        </section>
      </div>
    </PageWrapper>
  );
}
