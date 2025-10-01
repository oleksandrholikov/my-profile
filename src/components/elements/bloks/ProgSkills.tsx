import { useEffect, useRef }  from "react"
import { gsap} from "gsap"

import Docker from "@assets/images/skills/progs/Docker.png"
import Git from "@assets/images/skills/progs/GIT.png"
import Figma from "@assets/images/skills/progs/FIGMA.png"
import VSCode from "@assets/images/skills/progs/VScode.png"

type Props = {
    parentRef: React.RefObject<HTMLDivElement | null>;
};

export default function ProgsSkills({parentRef} : Props){
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
            });
        }, 2000); 
    },[])

    return(
        <div ref={containerRef}className="relative w-[295px] h-[300px] mx-5">
            <div className="absolute top-0 left-0 hover:scale-105 hover:cursor-pointer"><img src={Docker} alt="Docker piece"/></div>
            <div className="absolute top-[-16px] right-[-15px] hover:scale-105 hover:cursor-pointer"><img src={VSCode} alt="VSCode piece" /></div>
            <div className="absolute bottom-[-9px] left-[17px] hover:scale-105 hover:cursor-pointer"><img src={Figma} alt="Figma piece" /></div>
            <div className="absolute bottom-[4px] right-[-32px] hover:scale-105 hover:cursor-pointer"><img src={Git} alt="Git piece" /></div>
        </div>
    )
            
}