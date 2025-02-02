
import React from 'react';
import { data } from "@/data/index";
import PageWrapper from "@/components/page-wrapper";
const { skills, projects, bio, contact, experience, name, profileImage } = data
import SectionWrapper from '@/components/section-wrapper'

const page = () => {
  return (
    <PageWrapper>

      <SectionWrapper heading="skills">
        {/* <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 "> */}

        <div className="flex-1 flex flex-wrap gap-3 ">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-wrap min-w-32 pl-4 items-center gap-2 p-2 border-l-4  hover:bg-muted/20 transition"
            >
              {/* {skill.image && (
                  <div className="">
                    <Image
                    src={skill.image}
                    alt={skill.name}
                    width={36}
                    height={36}
                    className=" object-contain rounded"
                    />
                    </div>
                    )} */}
              <span className="text-xs font-mono">{skill.name}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </PageWrapper>
  )
}

export default page