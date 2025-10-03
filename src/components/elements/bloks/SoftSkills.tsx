import { useEffect, useRef }  from "react"
import { gsap} from "gsap"

// IMAGES

import Creativity from "@assets/images/skills/soft/Creativity.png"
import Mskils from "@assets/images/skills/soft/Mskils.png"
import Orgaisation from "@assets/images/skills/soft/Orgaisation.png"
import Respons from "@assets/images/skills/soft/Respons.png"
import Stress from "@assets/images/skills/soft/Stress.png"
import Teamwork from "@assets/images/skills/soft/Teamwork.png"

type Props = {
    parentRef: React.RefObject<HTMLDivElement | null>;
};


export default function SoftSkills({parentRef} : Props){
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const pieces = containerRef.current?.querySelectorAll("img")
        const container = parentRef.current
        if (!pieces || !container) return
       
        pieces.forEach(piece => {
            const pieceW = (piece as HTMLElement).offsetWidth
            const pieceH = (piece as HTMLElement).offsetHeight

            gsap.set(piece, {
                x: () => {
                const { offsetWidth: w } = container
                return Math.random() * (w - pieceW) - (w - pieceW) / 2
                },
                y: () => {
                const { offsetHeight: h } = container
                return Math.random() * (h - pieceH) - (h - pieceH) / 2
                },
                rotation: Math.random() * 720 - 360,
                opacity: 0.9,
                scale: 0.9,
            })
        })

        setTimeout(() => {
            gsap.to(pieces, {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "elastic.out(1, 0.6)",
            stagger: 0.2,
            delay: 0.5,
            });
        }, 500); 
    },[])
    return(
        <div ref={containerRef}className="relative w-76 h-112 mx-5">
            <div className="absolute top-0 left-0 hover:scale-105 hover:cursor-pointer"><img src={Mskils} alt="Mskils piece"/></div>
            <div className="absolute top-[35px] right-[-19px] hover:scale-105 hover:cursor-pointer"><img src={Creativity} alt="Creativity piece" /></div>
            <div className="absolute top-[89px] left-[-48px] hover:scale-105 hover:cursor-pointer"><img src={Teamwork} alt="Teamwork piece" /></div>
            <div className="absolute top-[166px] right-[17px] hover:scale-105 hover:cursor-pointer"><img src={Orgaisation} alt="Orgaisation piece" /></div>
            <div className="absolute bottom-[-26px] left-[-69px] hover:scale-105 hover:cursor-pointer"><img src={Stress} alt="Stress piece" /></div>
            <div className="absolute bottom-[-50px] right-[35px] hover:scale-105 hover:cursor-pointer"><img src={Respons} alt="Respons piece" /></div>            
            
        </div>    
    )
}
