import ProjectCard from "@elements/bloks/ProjectCard";
import { useEffect, useRef }  from "react"
import { gsap} from "gsap"
import { SplitText } from "gsap/SplitText";


type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  techs: string[];
};

export default function ProjectSection(){
    const projects: Project[] = [
    {
      title: "H5Ai",
      description: "Web-based file manager for easy navigation and previewing of server files.",
      image: "/my-profile/images/projects/h5ai.png",
      link: "https://github.com/oleksandrholikov/H5AI",
      techs: ["Python"],
    },
    {
      title: "My-iRC",
      description: "A web application for real-time messaging and communication between users, similar to a classic IRC client.",
      image: "/my-profile/images/projects/myIrc.png",
      link: "https://github.com/oleksandrholikov/myIRC",
      techs: ["Socket.io", "Express", "React", "Node.js"],
    },
    {
      title: "E-commerce KANOV",
      description: "A professional e-commerce platform for selling literature and reading goods with focus on usability and performance.",
      image: "/my-profile/images/projects/kanov.png",
      link: "#",
      techs: ["Symfony", "API Platform", "React", "SQL"],
    },
    {
      title: "My-SnapChat",
      description: "A Snapchat-inspired web application with real-time media sharing powered by an external API.",
      image: "/my-profile/images/projects/SnapChat.png",
      link: "https://github.com/oleksandrholikov/snapChat",
      techs: ["React-Native", "Expo", "TS"],
    },
  ];
  const textRef = useRef<HTMLParagraphElement | null>(null);

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
        <div className=" flex  flex-col  justify-start gap-8 p-6 h-full w-full overflow-y-auto ">
            <h2 className="text-5xl self-start font-bold text-[#ED816C]">My projects</h2>
            <p ref={textRef} className="text-2xl max-w-xl self-start text-white" id="text">
                Below are some of my latest projects. More projects are available on my  
                 <a
                    href="https://github.com/oleksandrholikov"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#ED816C] hover:font-semibold hover:cursor-pointer"
                    >&nbsp;GitHub</a>
            </p>
            <div className="flex justify-center w-full flex-wrap gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}