import { useState, useRef } from 'react'
import IconVScode from '@assets/icons/icon-vscode.png'
import IconHTML from '@assets/icons/icon-html.png'
import IconScss from '@assets/icons/icon-scss.png'
import IconJson from '@assets/icons/icon-type-json.png'
import IconPython from '@assets/icons/icon-python.png'

type NavbarProps = {
  direction: boolean; 
  activTab: string; 
  setActiveTab: (tab: string) => void; 
    
};

export default function Navbar({direction, activTab, setActiveTab }: NavbarProps){

    return(
        <ul className={`flex ${direction ? "flex-col w-full space-y-2" : "flex-row justify-start"}   text-[20px]`}
        >
         <li
        className={`flex space-x-1 px-2 hover:bg-[#333333] hover:cursor-pointer hover:text-[#fff] active:bg-[#333333] ${
          activTab === "welcome" ? "bg-[#333333] text-white" : ""
        }`}
        onClick={() => setActiveTab("welcome")}
      >
        <img src={IconVScode} alt="VS code icon" className="mr-2" />
        Welcome
      </li>
      <li
        className={`flex space-x-1 px-2 hover:bg-[#333333] hover:cursor-pointer hover:text-[#fff] active:bg-[#333333] ${
          activTab === "about" ? "bg-[#333333] text-white" : ""
        }`}
        onClick={() => setActiveTab("about")}
      >
        <img src={IconHTML} alt="HTML icon" className="mr-2" />
        about.html
      </li>
      <li
        className={`flex space-x-1 px-2 hover:bg-[#333333] hover:cursor-pointer hover:text-[#fff] active:bg-[#333333] ${
          activTab === "skills" ? "bg-[#333333] text-white" : ""
        }`}
        onClick={() => setActiveTab("skills")}
      >
        <img src={IconScss} alt="Scss icon" className="mr-2" />
        skills.scss
      </li>
      <li
        className={`flex space-x-1 px-2 hover:bg-[#333333] hover:cursor-pointer hover:text-[#fff] active:bg-[#333333] ${
          activTab === "projects" ? "bg-[#333333] text-white" : ""
        }`}
        onClick={() => setActiveTab("projects")}
      >
        <img src={IconJson} alt="Json icon" className="mr-2" />
        projects.json
      </li>
      <li
        className={`flex space-x-1 px-2 hover:bg-[#333333] hover:cursor-pointer hover:text-[#fff] active:bg-[#333333] ${
          activTab === "contact" ? "bg-[#333333] text-white" : ""
        }`}
        onClick={() => setActiveTab("contact")}
      >
        <img src={IconPython} alt="Python icon" className="mr-2" />
        contact.py
      </li>
       </ul>                 
    )
}