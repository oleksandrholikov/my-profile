import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ExperienceSection() {
    const eduRef = useRef(null);
    const expRef = useRef(null);
    const educationData = `
    {
      "period": "November 2024 - November 2026",
      "institution": "EPITECH WEB@CADEMIE",
      "program": "Integrate - Developer Web"
    },
    {
      "period": "October 2024 - November 2024",
      "institution": "Fast Food Restaurant",
      "program": "Working Courses"
    },
    {
      "period": "September - December 2023",
      "institution": "Data Center and Digital Infrastructure Technician",
      "program": "Digital Plumber"
    },
    {
      "period": "January 2023 - July 2023",
      "institution": "French Language Workshop",
      "program": "Professional Purposes"
    },
    {
      "period": "2018 - 2019",
      "institution": "Masters in Innovative Technologies of Restaurant Business",
      "program": ""
        }`;
    const experienceData = `    
    {
      "period": "July 2024 - October 2024",
      "position": "Kitchen Worker",
      "company": "Disney Paris"
    },
    {
      "period": "November 27, 2023 - December 18, 2023",
      "position": "Data Center Technician Internship (Digital Plumber)",
      "company": "Global Switch - Clichy"
    },
    {
      "period": "March 2021 - October 2021",
      "position": "Sales Manager",
      "company": "Beer Store - Mariupol, Ukraine"
    },
    {
      "period": "October 2018 - October 2020",
      "position": "Administrator",
      "company": "WaffleBar - Odessa, Ukraine"
    },
    {
      "period": "May 2016 - October 2016 / May 2017 - October 2017",
      "position": "Guide",
      "company": "AnexTour Travel Company"
        }`

    useEffect(() => {
        gsap.fromTo(
        eduRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(
        expRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
        );
    }, []);

    return (
    <div className="w-full sm:h-full flex justify-around sm:overflow-y-auto text-[#d4d4d4] p-4 rounded-lg max-sm:flex-col">
        <div ref={eduRef} className="flex flex-col">
            <h3 className="text-3xl font-bold text-[#ED816C]">Education</h3>
            <SyntaxHighlighter language="json"
            style={{
            ...vscDarkPlus,
            'pre[class*="language-"]': {
                ...vscDarkPlus['pre[class*="language-"]'],
                background: "transparent", 
                fontSize: "20px", 
                lineHeight: "1.2",
                padding: "0"
            }
            }}>
                {educationData}
            </SyntaxHighlighter>
        </div>
        <div ref={expRef} className="flex flex-col">
            <h3 className="text-3xl font-bold text-[#ED816C]">Work Experience</h3>
            <SyntaxHighlighter language="json"
            style={{
            ...vscDarkPlus,
            'pre[class*="language-"]': {
                ...vscDarkPlus['pre[class*="language-"]'],
                background: "transparent", 
                fontSize: "20px", 
                lineHeight: "1.2",
                padding: "0"
            }
            }}
            >
                {experienceData}
            </SyntaxHighlighter>
        </div>
    </div>
  );
}