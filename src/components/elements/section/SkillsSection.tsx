import {useRef, useEffect, useState} from 'react';
import LangsSkills from '@/components/elements/bloks/LangsSkills';
import TechsSkills from '@/components/elements/bloks/TechsSkills';
import ProgsSkills from '@/components/elements/bloks/ProgSkills';
import SoftSkills from '@/components/elements/bloks/SoftSkills';
import ImgLang from '@assets/images/skills/SkillsMob/langs.png'
import ImgTech from '@assets/images/skills/SkillsMob/techs.png'
import ImgProg from '@assets/images/skills/SkillsMob/progs.png'
import ImgSoft from '@assets/images/skills/SkillsMob/skilsSoft.png'
 


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
        <>
            <div ref={sectionRef} className={`${!zoom ? 'flex flex-wrap flex-col p-4 h-full w-full overflow-hidden' : 'flex flex-wrap items-center justify-around h-full w-full overflow-y-auto'} max-sm:hidden` }>            
                <LangsSkills  parentRef={sectionRef}/>
                <TechsSkills parentRef={sectionRef}/>
                <ProgsSkills parentRef={sectionRef}/>
                <SoftSkills parentRef={sectionRef} />        
            </div>
            <div className='flex flex-col sm:hidden py-5 justify-evenly items-center space-y-3'>
                <h1 className='text-2xl font-bold text-[#ED816C]'>My Skills</h1>
                <div><img src={ImgLang} alt=" Programming languages" /></div>
                <div><img src={ImgTech} alt=" Technologies" /></div>
                <div><img src={ImgProg} alt=" Programming"/></div>
                <div><img src={ImgSoft} alt=" Soft Skills"/></div>
                
            </div>
        </>
    )
}
