import { useEffect, useRef }  from "react"
import { gsap} from "gsap"
import { SplitText } from "gsap/SplitText";
import {useSendEmailForm} from "@contexts/SendEmailContext"


export default function ContactSection(){
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const {setIsOpen} = useSendEmailForm()



    useEffect(()=>{
        const text = textRef.current
    
        if (!text) return
        let split = new SplitText(text, { type: "words" });
        gsap.from(split.words,{
        y:100,
        autoAlpha: 0,
        stagger: 0.05
        })

    }, [])

    return(
        <div className="w-full  sm:h-full flex flex-col items-center justify-start p-4 gap-4 max-sm:items-end">
            <h2 className="text-5xl font-bold text-[#ED816C] max-sm:text-4xl">Contact me</h2>
            <p ref={textRef}  className="text-xl text-white max-w-md" >Building a quality product is always a result of collaboration. If you're looking for a web developer who is detail-oriented and ready to work together to achieve your goals, let's connect.</p>
            <div 
            className="border border-t-4 border-[#ED816C] w-xl font-mono text-base leading-relaxed text-gray-200 backdrop-blur-sm shadow-xl
                        max-sm:w-full max-sm:text-[10px]
            ">
                <div className="flex">                    
                    <div className="bg-[#252526] text-gray-500 text-right pr-5 pl-3 select-none sm:text-base">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="leading-8">
                        {i + 1}
                        </div>
                    ))}
                    </div>
                    
                    <pre className="text-gray-200 p-7 leading-8 sm:text-base">
                    <code>
                        <span className="text-blue-400">.socials</span> {"{"}{"\n"}
                        {"    "}email:{" "}
                        <a
                        href="mailto:oleksandr.holikov@epitech.eu"
                        className="text-[#ce9178] hover:underline"
                        >
                        oleksandr.holikov@epitech.eu
                        </a>
                        ,{"\n"}
                        {"    "}linkedin:{" "}
                        <a
                        href="https://linkedin.com/in/oleksandr-holikov"
                        target="_blank"
                        className="text-[#ce9178] hover:underline"
                        >
                        oleksandr-holikov
                        </a>
                        ,{"\n"}
                        {"    "}github:{" "}
                        <a
                        href="https://github.com/oleksandrholikov"
                        target="_blank"
                        className="text-[#ce9178] hover:underline"
                        >
                        oleksandrholikov
                        </a>
                        ,{"\n"}
                        {"}"}{"\n\n"}
                        <span className="text-blue-400">.cv</span> {"{"}{"\n"}
                        {"    "}file:{" "}
                        <a
                        href="/my-profile/files/CV-HOLIKOV-Oleksandr.pdf"
                        target="_blank"
                        className="text-[#ce9178] hover:underline"
                        >
                        view my CV
                        </a>
                        {"\n"}
                        {"}"}
                    </code>
                    </pre>
                </div>
            </div>
            <div>
                <button className="flex items-center justify-evenly text-2xl font-semibold text-white w-3xs  p-2 rounded-4xl bg-[#6A9955] hover:cursor-pointer hover:bg-[#517c3e] max-sm:self-center"
                    onClick={()=>setIsOpen(true)}
                >Send Message</button>
            </div>           
        </div>
    )
}