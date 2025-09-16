import { useState, useEffect } from "react";
import IconVScode from '@assets/icons/icon-vscode.png'

export default function MainPage(){
    const [isActve, setIsActive] = useState<string>('');



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
        </>
    )
}