import {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPage from "@components/pages/AnimatedPage"

import IconVScode from '@assets/icons/icon-vscode.png'
import IconFile from '@assets/icons/icon-files.png'
import IconCode from '@assets/icons/icon-code.png'
import IconGit from '@assets/icons/icon-github.png'
import IconLetter from '@assets/icons/icon-letter.png'
import IconLinkEdin from '@assets/icons/icon-linkedin.png'
import IconProfil from '@assets/icons/icon-profile.png'
import IconArrowDown from '@assets/icons/icon-arrow-outlined.png'
import BgImage from '@assets/images/BG-group.png'

import NavBar from '@elements/NavBar'
import MainSection from '@/components/elements/section/MainSection'
import AboutSection from "@/components/elements/section/AboutSection";
import SkillsSection from "@/components/elements/section/SkillsSection";
import ProjectSection from "@/components/elements/section/ProjectSection";
import ContactSection from "@/components/elements/section/ContactSection";
import ExperienceSection from "@/components/elements/section/ExperienceSection";
import MobileMenu from "@elements/bloks/MobileMenu"
import SendEmailForm from "@elements/bloks/SendSmsForm"
import {useSendEmailForm} from "@contexts/SendEmailContext"

export default function MainPage(){
    const [activTab, setActiveTab] = useState<string>('welcome');
    const [dropDown, setDropDown] =useState<Boolean>(true)
    const {setIsOpen} = useSendEmailForm()

    return(
        <div className="h-[95vh] w-full">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3 max-sm:hidden">
                    <div>
                        <img src={IconVScode} alt="Icon VS code" />
                    </div>
                    <ul className="flex items-center justify-between space-x-5 ">
                        <li className="hover:text-[#979797] cursor-pointer">Home</li>
                        <li className="hover:text-[#979797] cursor-pointer">Edit</li>
                        <li className="hover:text-[#979797] cursor-pointer">View</li>
                        <li className="hover:text-[#979797] cursor-pointer">Terminal</li>
                        <li className="hover:text-[#979797] cursor-pointer">Help</li>
                    </ul>

                </div>
                <span>
                    Oleksandr Holikov - Visual Studio Code
                </span>
                <ul className="flex items-center justify-between space-x-3">
                    <li className="size-5 bg-[#00A80B] rounded-full hover:scale-105 hover:cursor-pointer"></li>
                    <li className="size-5 bg-[#FFF600] rounded-full hover:scale-105 hover:cursor-pointer"></li>
                    <li className="size-5 bg-[#FF0000] rounded-full hover:scale-105 hover:cursor-pointer"></li>
                </ul>
            </div>
            <div className="flex w-full h-full"
            >
                {/* SideBar */}
                <div  className="flex flex-col w-20 justify-between items-center bg-[#252526] max-sm:hidden">
                    <div className="flex flex-col w-full">
                        <div className="hover:bg-[#333333] active:bg-[#333333] hover:cursor-pointer"
                            title="Go to My Projects"
                            onClick={() => setActiveTab('projects')}
                        ><img src={IconFile} alt="Icon File" className="w-full" /></div>
                        <div className="hover:bg-[#333333] active:bg-[#333333] hover:cursor-pointer"
                            title="Go to my Skills"
                            onClick={() => setActiveTab('skills')}
                        ><img src={IconCode} alt="Icon Code" className="w-full" /></div>
                    </div>
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
                {/* SideNav */}
                <div className="flex flex-col w-2xs justify-start items-start p-2 text-[#D4D4D4] max-sm:hidden">
                    <span className="font-bold text-2xl">EXPLORER</span>
                    <span className="flex items-center text-2xl hover:cursor-pointer hover:text-[#fff]"
                        onClick={() => setDropDown(!dropDown)}
                    ><img src={IconArrowDown} alt="Icon Arrow Down" className ={`w-9 ${dropDown ? 'rotate-180' : ''} duration-200`}/>Portfolio</span>
                    <AnimatePresence>
                        {dropDown && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden w-full"
                        >
                            <NavBar
                            direction={true}
                            activTab={activTab}
                            setActiveTab={setActiveTab}
                            />
                        </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="flex flex-col w-full">
                    {/* NavHeader */}
                    <div className="max-sm:hidden">
                        <NavBar direction={false} activTab={activTab} setActiveTab={setActiveTab} />
                    </div>
                    {/* MobileMenu */}
                    <div className="w-20 max-h-[800px] h-full fixed top-10 z-50 sm:hidden ">
                        <MobileMenu activTab={activTab} setActiveTab={setActiveTab}/>
                    </div>
                    {/* MainBody */}
                    <div
                        className="w-full min-w-6xl h-[93vh] bg-[#242424] bg-center max-sm:hidden"
                        style={{
                            backgroundImage: `url(${BgImage})`,
                            backgroundSize: '100% 100%',
                        }}
                    >
                        {activTab === "welcome" && (
                            <AnimatedPage activTab={activTab}>
                            <MainSection btn={setActiveTab} />
                            </AnimatedPage>
                        )}
                        {activTab === "about" && (
                            <AnimatedPage activTab={activTab}>
                            <AboutSection />
                            </AnimatedPage>
                        )}
                        {activTab === "skills" && (
                            <AnimatedPage activTab={activTab}>
                            <SkillsSection />
                            </AnimatedPage>
                        )}
                        {activTab === "projects" && (
                            <AnimatedPage activTab={activTab}>
                            <ProjectSection />
                            </AnimatedPage>
                        )}
                        {activTab === "contact" && (
                            <AnimatedPage activTab={activTab}>
                            <ContactSection />
                            </AnimatedPage>
                        )}
                        {activTab === "experience" && (
                            <AnimatedPage activTab={activTab}>
                            <ExperienceSection />
                            </AnimatedPage>
                        )}
                    </div>
                    <div className="flex-col max-sm:flex sm:hidden h-full overflow-y-auto">                        
                        <MainSection btn={setActiveTab}/>                        
                        <AboutSection />
                        {/* <SkillsSection />
                        <ProjectSection />
                        <ContactSection />
                        <ExperienceSection /> */}

                    </div>

                </div>
                <SendEmailForm/>
            </div>
        </div>
    )
}