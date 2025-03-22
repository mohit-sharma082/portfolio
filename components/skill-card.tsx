import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Props {
    skill: {
        name: string;
        level: string;
        image: string;
        resource: string;
    };
    children: React.ReactNode;
}

export function SkillCard({ children, skill }: Props) {
    return (
        <HoverCard openDelay={200} closeDelay={200}>
            <HoverCardTrigger asChild>
                {/* <Button variant='link'>@nextjs</Button> */}
                {children}
            </HoverCardTrigger>
            <HoverCardContent className='w-80'>
                <div className='flex justify-between space-x-4'>
                    <div className='space-y-1'>
                        <h4 className='text-sm font-semibold'>{skill.name}</h4>
                        <img src={skill.image} width={100} alt={skill.name} />
                        <div className='flex items-center pt-2'>
                            <span className='text-xs text-muted-foreground'>
                                {skill.level}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
