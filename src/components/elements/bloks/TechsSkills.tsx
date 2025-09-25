import { useEffect, useRef }  from "react"
import { gsap} from "gsap"

// IMAGES

import MERN from "@assets/images/skills/techs/MERN.png"
import REACT from "@assets/images/skills/techs/React-Native.png"
import Symfony from "@assets/images/skills/techs/Symfony.png"
import Laravel from "@assets/images/skills/techs/Laravel.png"
import Vue from "@assets/images/skills/techs/Vue.png"
import Scss from "@assets/images/skills/techs/Scss.png"
import Tailwind from "@assets/images/skills/techs/Tailwind.png"
import API from "@assets/images/skills/techs/API.png"
import Django from "@assets/images/skills/techs/Django.png"

type Props = {
    parentRef: React.RefObject<HTMLDivElement | null>;
};

export default function TechsSkills({parentRef} : Props){
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    const pieces = containerRef.current?.querySelectorAll("img");
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
    }, []);


    return(
        <div  ref={containerRef}className="relative w-[465px] flex flex-wrap aspect-square mx-5">
            <div className="absolute top-0.5 left-0 hover:scale-105 hover:cursor-pointer"><img src={MERN} alt="MERN icon" /></div>
            <div className="absolute top-1.5 left-[144px] hover:scale-105 hover:cursor-pointer"><img src={REACT} alt="REACT icon" /></div>
            <div className="absolute top-[30px] right-0 hover:scale-105 hover:cursor-pointer"><img src={Symfony} alt="Symfony icon" /></div>
            <div className="absolute top-[93px] left-[-14px] hover:scale-105 hover:cursor-pointer"><img src={Laravel} alt="Laravel icon" /></div>
            <div className="absolute top-[156px] right-[170px] hover:scale-105 hover:cursor-pointer"><img src={Vue} alt="Vue icon" /></div>
            <div className="absolute top-[172px] right-[25px] hover:scale-105 hover:cursor-pointer"><img src={Scss} alt="Scss icon" /></div>
            <div className="absolute bottom-[11px] left-[-29px] hover:scale-105 hover:cursor-pointer"><img src={Tailwind} alt="Tailwind icon" /></div>
            <div className="absolute bottom-[-6px] right-[125px] hover:scale-105 hover:cursor-pointer"><img src={API} alt="API icon" /></div>
            <div className="absolute bottom-[-17px] right-[18px] hover:scale-105 hover:cursor-pointer"><img src={Django} alt="Django icon" /></div>        
        </div>
    )

}