import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import MainSection from '@elements/MainSection'



export default function MainPage(){
    const [activTab, setActiveTab] = useState<string>('welcome');
    const [dropDown, setDropDown] =useState<Boolean>(true)



    return(
        <>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-[10px]">
                    <div>
                        <img src={IconVScode} alt="Icon VS code" />
                    </div>
                    <ul className="flex items-center justify-between space-x-[30px]">
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
                <ul className="flex items-center justify-between space-x-[10px]">
                    <li className="w-[20px] aspect-square bg-[#00A80B] rounded-full hover:scale-105 hover:cursor-pointer"></li>
                    <li className="w-[20px] aspect-square bg-[#FFF600] rounded-full hover:scale-105 hover:cursor-pointer"></li>
                    <li className="w-[20px] aspect-square bg-[#FF0000] rounded-full hover:scale-105 hover:cursor-pointer"></li>
                </ul>
            </div>
            <div className="flex w-full h-[990px]"
            >
                {/* SideBar */}
                <div  className="flex flex-col w-[70px] justify-between items-center bg-[#252526]">
                    <div className="flex flex-col w-[70px]">
                        <div className="hover:bg-[#333333] active:bg-[#333333]"><img src={IconFile} alt="Icon File" className="w-full" /></div>
                        <div className="hover:bg-[#333333] active:bg-[#333333]"><img src={IconCode} alt="Icon Code" className="w-full" /></div>
                    </div>
                    <div className="flex flex-col w-[70px]">
                        <div className="hover:bg-[#333333] active:bg-[#333333]"><img src={IconGit} alt="Icon Git" className="w-full" /></div>
                        <div className="hover:bg-[#333333] active:bg-[#333333]"><img src={IconLinkEdin} alt="Icon LinkEdin" className="w-full" /></div>
                        <div className="hover:bg-[#333333] active:bg-[#333333]"><img src={IconLetter} alt="Icon contact me" className="w-full" /></div>
                        <div className="hover:bg-[#333333] active:bg-[#333333]"><img src={IconProfil} alt="Icon my CV" className="w-full" /></div>
                    </div>
                </div>
                {/* SideNav */}
                <div className="flex flex-col w-[300px] justify-start items-start p-[10px] text-[#D4D4D4]">
                    <span className="font-bold text-[25px]">EXPLORER</span>
                    <span className="flex items-center text-[25px] hover:cursor-pointer hover:text-[#fff]"
                        onClick={() => setDropDown(!dropDown)}
                    ><img src={IconArrowDown} alt="Icon Arrow Down" className ={`w-[35px] h-[17px] ${dropDown ? 'rotate-180' : ''} duration-200`}/>Portfolio</span>
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
                        <NavBar direction={false} activTab={activTab} setActiveTab={setActiveTab} />
                    {/* MainBody */}
                    <div
                        className="w-full h-full bg-[#242424] bg-cover bg-center"
                        style={{backgroundImage:`url(${BgImage})`}}
                    >
                        {activTab === 'welcome' && <MainSection btn={setActiveTab}/>}
                    </div>

                </div>
            </div>
        </>
    )
}