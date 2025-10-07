import IconVScode from '@assets/icons/icon-vscode.png'
import IconHTML from '@assets/icons/icon-html.png'
import IconScss from '@assets/icons/icon-scss.png'
import IconJson from '@assets/icons/icon-type-json.png'
import IconPython from '@assets/icons/icon-python.png'
import IconReact from "@assets/icons/icon-react-ts.png"

type NavbarProps = {
  direction: boolean; 
  activTab: string; 
  setActiveTab: (tab: string) => void; 
    
};

export default function Navbar({direction, activTab, setActiveTab }: NavbarProps){

    return(
        <ul className={`flex ${direction ? "flex-col w-full space-y-2" : "flex-row justify-start"}   text-xl max-sm:justify-start`}
        >
         <li
        className={`flex space-x-1 px-2 hover:bg-[#292929] hover:cursor-pointer hover:text-[#fff] active:bg-[#292929] ${
          activTab === "welcome" ? "bg-[#292929] text-white" : ""
        } max-sm:size-full`}
        onClick={() => setActiveTab("welcome")}
      >
        <img src={IconVScode} alt="VS code icon" className="mr-2 max-sm:size-12 max-sm:mr-0" />
        <span className='max-sm:hidden'>
        Welcome
        </span>
      </li>
      <li
        className={`flex space-x-1 px-2 hover:bg-[#292929] hover:cursor-pointer hover:text-[#fff] active:bg-[#292929] ${
          activTab === "about" ? "bg-[#292929] text-white" : ""
        }`}
        onClick={() => setActiveTab("about")}
      >
        <img src={IconHTML} alt="HTML icon" className="mr-2 max-sm:size-12 max-sm:mr-0" />
        <span className='max-sm:hidden'>
          about.html
        </span>
      </li>
      <li
        className={`flex space-x-1 px-2 hover:bg-[#292929] hover:cursor-pointer hover:text-[#fff] active:bg-[#292929] ${
          activTab === "experience" ? "bg-[#292929] text-white" : ""
        }`}
        onClick={() => setActiveTab("experience")}
      >
        <img src={IconReact} alt="React icon" className="mr-2 max-sm:size-12 max-sm:mr-0" />
        <span className='max-sm:hidden'>
          experience.tsx
        </span>
      </li>
      <li
        className={`flex space-x-1 px-2 hover:bg-[#292929] hover:cursor-pointer hover:text-[#fff] active:bg-[#292929] ${
          activTab === "skills" ? "bg-[#292929] text-white" : ""
        }`}
        onClick={() => setActiveTab("skills")}
      >
        <img src={IconScss} alt="Scss icon" className="mr-2 max-sm:size-12 max-sm:mr-0" />
        <span className='max-sm:hidden'>
          skills.scss
        </span>
      </li>
      <li
        className={`flex space-x-1 px-2 hover:bg-[#292929] hover:cursor-pointer hover:text-[#fff] active:bg-[#292929] ${
          activTab === "projects" ? "bg-[#292929] text-white" : ""
        }`}
        onClick={() => setActiveTab("projects")}
      >
        <img src={IconJson} alt="Json icon" className="mr-2 max-sm:size-12 max-sm:mr-0 " />
        <span className='max-sm:hidden'>
          projects.json
        </span>
      </li>
      <li
        className={`flex space-x-1 px-2 hover:bg-[#292929] hover:cursor-pointer hover:text-[#fff] active:bg-[#292929] ${
          activTab === "contact" ? "bg-[#292929] text-white" : ""
        }`}
        onClick={() => setActiveTab("contact")}
      >
        <img src={IconPython} alt="Python icon" className="mr-2 max-sm:size-12 max-sm:mr-0" />
        <span className='max-sm:hidden'>
          contact.py
        </span>
      </li>
       </ul>                 
    )
}