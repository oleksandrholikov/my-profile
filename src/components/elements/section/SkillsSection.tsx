import {useRef, useEffect, useState} from 'react';
import LangsSkills from '@/components/elements/bloks/LangsSkills';
import TechsSkills from '@/components/elements/bloks/TechsSkills';
import ProgsSkills from '@/components/elements/bloks/ProgSkills';
import SoftSkills from '@/components/elements/bloks/SoftSkills';
 


export default function SkillsSection (){
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [zoom, setZoom] = useState<boolean>(false)

        useEffect(()=>{         
         console.log("zoom",window.devicePixelRatio )   
        if (window.devicePixelRatio > 1) {
            setZoom(true)
        }
    }, [])
    
    return (
        <div ref={sectionRef} className={`${!zoom ? 'flex flex-wrap flex-col p-4 h-full w-full overflow-hidden' : 'flex flex-wrap items-center justify-around h-full w-full overflow-y-auto'}`}>            
            <LangsSkills  parentRef={sectionRef}/>
            <TechsSkills parentRef={sectionRef}/>
            <ProgsSkills parentRef={sectionRef}/>
            <SoftSkills parentRef={sectionRef} />        
        </div>
    )
}
// flex flex-wrap p-1 items-center justify-around h-full w-full overflow-y-auto