import {useRef} from 'react';
import LangsSkills from '@/components/elements/bloks/LangsSkills';
import TechsSkills from '@/components/elements/bloks/TechsSkills';
import ProgsSkills from '@/components/elements/bloks/ProgSkills';
import SoftSkills from '@/components/elements/bloks/SoftSkills';
 


export default function SkillsSection (){
    const sectionRef = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={sectionRef} className='flex flex-wrap flex-col p-9 h-full w-full overflow-hidden'>            
            <LangsSkills  parentRef={sectionRef}/>
            <TechsSkills parentRef={sectionRef}/>
            <ProgsSkills parentRef={sectionRef}/>
            <SoftSkills parentRef={sectionRef} />
        
        </div>
    )
}