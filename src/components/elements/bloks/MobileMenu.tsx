import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import IconBurger from "@/assets/icons/icon-burger.png";
import IconVScode from '@assets/icons/icon-vscode.png'
import IconFile from '@assets/icons/icon-files.png'
import IconCode from '@assets/icons/icon-code.png'
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
  const {setIsOpen} = useSendEmailForm()

  return (
    <div className="flex flex-col ">     
      <img
        ref={burgerRef}
        src={IconBurger}
        alt="Menu"
        className="w-18 cursor-pointer transform  transition-transform  duration-500 ease-in-out rotate-0 hover:rotate-90 "        
      />
      <div className="flex flex-col items-center">
        <Navbar direction={true} activTab={activTab} setActiveTab={setActiveTab}/>
        <div className="flex flex-col w-full">
                        <a className="hover:bg-[#333333] active:bg-[#333333]"
                            href="https://github.com/oleksandrholikov"
                            target="_blank"
                            title="Go to My GitHub"
                        ><img src={IconGit} alt="Icon Git" className="w-full" /></a>
                        <a className="hover:bg-[#333333] active:bg-[#333333]"
                            href="https://linkedin.com/in/oleksandr-holikov"
                            target="_blank"
                            title="Go to My LinkEdin"
                        ><img src={IconLinkEdin} alt="Icon LinkEdin" className="w-full" /></a>
                        <div className="hover:bg-[#333333] active:bg-[#333333] hover:cursor-pointer"
                            onClick={()=>setIsOpen(true)}                       
                            title="Send me a message"
                            ><img src={IconLetter} alt="Icon contact me" className="w-full" /></div>
                        <a className="hover:bg-[#333333] active:bg-[#333333]"
                            href="/my-profile/files/CV-HOLIKOV-Oleksandr.pdf"
                            target="_blank"
                            title="Go to My CV"
                        ><img src={IconProfil} alt="Icon my CV" className="w-full" /></a>
          </div>
      </div>    
     
    </div>
  );
}
