import { useEffect, useRef }  from "react"
import { gsap} from "gsap"


import CSS from "@assets/images/skills/langs/CSS.png"
import JS from "@assets/images/skills/langs/JS.png"
import PHP from "@assets/images/skills/langs/PHP.png"
import PYTHON from "@assets/images/skills/langs/PYTHON.png"
import SQL from "@assets/images/skills/langs/SQL.png"
import TS from "@assets/images/skills/langs/TS.png"

type Props = {
    parentRef: React.RefObject<HTMLDivElement | null>;
};

export default function LangsSkills({parentRef} : Props){
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 640px)").matches; // sm breakpoint
        if (isMobile) return; 

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
        }, 1000); 
   
    }, [])

    return(
        <div  ref={containerRef} className="relative w-113 h-82 mx-5 max-sm:scale-60 max-sm:mx-0">
            <div className="absolute top-0 left-0 hover:scale-105 hover:cursor-pointer"><img src={PHP} alt="PHP piece"/></div>
            <div className="absolute top-[12px] left-[144px] hover:scale-105 hover:cursor-pointer"><img src={JS} alt="JS piece" /></div>
            <div className="absolute top-[21px] right-0 hover:scale-105 hover:cursor-pointer"><img src={CSS} alt="CSS piece" /></div>
            <div className="absolute bottom-6 left-[-13px] hover:scale-105 hover:cursor-pointer"><img src={PYTHON} alt="PYTHON piece" /></div>
            <div className="absolute bottom-3 left-[80px] hover:scale-105 hover:cursor-pointer"><img src={SQL} alt="SQL piece" /></div>
            <div className="absolute bottom-0 right-2 hover:scale-105 hover:cursor-pointer"><img src={TS} alt="TS piece" /></div>
        </div>
    )
}