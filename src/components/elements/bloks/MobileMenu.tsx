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

export default function BurgerMenu() {  
  const burgerRef = useRef<HTMLImageElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative">     
      <img
        ref={burgerRef}
        src={IconBurger}
        alt="Menu"
        className="w-10 cursor-pointer absolute top-5 left-5 z-50"        
      />    
     
    </div>
  );
}
