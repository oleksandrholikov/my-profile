import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import IconBurger from "@/assets/icons/icon-burger.png";
import IconGit from '@assets/icons/icon-github.png'
import IconLetter from '@assets/icons/icon-letter.png'
import IconLinkEdin from '@assets/icons/icon-linkedin.png'
import IconProfil from '@assets/icons/icon-profile.png'

import Navbar from "@components/elements/NavBar";
import {useSendEmailForm} from "@contexts/SendEmailContext";


type NavbarProps = { 
  activTab: string; 
  setActiveTab: (tab: string) => void; 
    
};

export default function BurgerMenu({activTab, setActiveTab }: NavbarProps) {  
  const burgerRef = useRef<HTMLImageElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const {setIsOpen} = useSendEmailForm();
  const [isOpen, setIsOpenMenu] = useState(false);


  // Animtion Open/Close
  useEffect(() =>{
    if(!menuRef.current) return;

    if(isOpen){
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(burgerRef.current,{
        rotate: 90,
        duration: 0.5,
        ease: "power2.out"
      });
    }else{
      gsap.to(menuRef.current,{
        x: "-200%",
        duration: 0.5,
        ease: "power3.in"
      });
      gsap.to(burgerRef.current,{
        rotate: 0,
        duration: 0.5,
        ease: "power2.in"
      });
    }
  }, [isOpen])

  // close click outSide
  useEffect(() =>{
    const handleClickOutside = (event: MouseEvent | TouchEvent) =>{
      if(
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerRef.current && 
        !burgerRef.current.contains(event.target as Node)
      ) {
        setIsOpenMenu(false);
      }
    };
    if(isOpen){
      document.addEventListener("click",handleClickOutside);
      document.addEventListener("touchstart",handleClickOutside);
    } else {
      document.removeEventListener("click",handleClickOutside);
      document.removeEventListener("touchstart",handleClickOutside);
    }

    return () =>{
      document.removeEventListener("click",handleClickOutside);
      document.removeEventListener("touchstart",handleClickOutside);
    }

  }, [isOpen])

  return (
    <div className="flex flex-col max-w-20">     
      <img
        ref={burgerRef}
        src={IconBurger}
        alt="Menu"
        onClick={()=> setIsOpenMenu(prev => !prev)}
        className="w-18 cursor-pointer ml-3"        
      />
      <div ref={menuRef} 
        className="fixed top-30 left-0 h-full  bg-[#1a1a1a82] z-50 flex flex-col items-center p-6 shadow-lg"
        style={{ transform: "translateX(-100%)" }}      
      >
        <Navbar direction={true} activTab={activTab} setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsOpenMenu(false);
          }}/>
        <div className="flex flex-col w-full">
                        <a className="hover:bg-[#333333] active:bg-[#333333] max-w-20"
                            href="https://github.com/oleksandrholikov"
                            target="_blank"
                            title="Go to My GitHub"
                        ><img src={IconGit} alt="Icon Git" className="w-full" /></a>
                        <a className="hover:bg-[#333333] active:bg-[#333333] max-w-20"
                            href="https://linkedin.com/in/oleksandr-holikov"
                            target="_blank"
                            title="Go to My LinkEdin"
                        ><img src={IconLinkEdin} alt="Icon LinkEdin" className="w-full" /></a>
                        <div className="hover:bg-[#333333] active:bg-[#333333] hover:cursor-pointer max-w-20"
                            onClick={()=>setIsOpen(true)}                       
                            title="Send me a message"
                            ><img src={IconLetter} alt="Icon contact me" className="w-full" /></div>
                        <a className="hover:bg-[#333333] active:bg-[#333333] max-w-20"
                            href="/my-profile/files/CV-HOLIKOV-Oleksandr.pdf"
                            target="_blank"
                            title="Go to My CV"
                        ><img src={IconProfil} alt="Icon my CV" className="w-full" /></a>
          </div>
      </div>    
     
    </div>
  );
}
