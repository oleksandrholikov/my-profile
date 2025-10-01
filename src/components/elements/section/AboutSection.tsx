import { useEffect, useRef }  from "react"
import { gsap} from "gsap"
import { SplitText } from "gsap/SplitText";


type Facts = {
    image: string;
    title: string;
    description: string;
    bg: string;
 
}

export default function AboutSection(){

    const textRef = useRef<HTMLParagraphElement | null>(null);
    const facts: Facts[] = [
        {
            image:"/my-profile/images/hobbies/puzzles.png",
            title:"Puzzles",
            description:"I've assembled over 200 puzzles, ranging from 2,500 to 5,000 pieces; My Top images are the World Map 1864, and Van Gogh's painting Starry Night Over the Rhône ",
            bg:"#40E0D0"
        },
        {
            image:"/my-profile/images/hobbies/cooking.png",
            title:"Cooking",
            description:"Master's in Culinary and Restaurant Services",
            bg:"#FFD54F"
        },
        {
            image:"/my-profile/images/hobbies/dancing.png",
            title:"Dancing",
            description:"I danced professionally for 13 years and won the European Cup in the 14-16 y.o. category",
            bg:"#FF4081"
        },
        {
            image:"/my-profile/images/hobbies/trevelGuide.png",
            title:"Travel Guide",
            description:"I once worked as a tour guide in Turkey, sharing culture and stories with travelers from around the world",
            bg:"#87CEEB"
        },
        {
            image:"/my-profile/images/hobbies/vegan.png",
            title:"Vegan",
            description:"I don't eat meat, sugar, or drink alcohol — I believe in conscious and balanced living",
            bg:"#4CAF50"
        },
        {
            image:"/my-profile/images/hobbies/chess.png",
            title:"Chess",
            description:" I love chess —Played for school and university in city competitions",
            bg:"linear-gradient(135deg,#000000,#FFFFFF)"
        }
    ]
    
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
        <div className="flex flex-col w-full h-full items-center justify-start p-6 space-y-2 overflow-y-auto">
            <div className="flex flex-col items-start space-y-3 w-full">
                <h1 className="text-5xl font-bold text-white">Oleksandr Holikov</h1>
                <p className="text-3xl font-semibold text-[#CE9178]">Full Stack Web Developer</p>
                <p ref={textRef} className="text-xl text-white">
                    To me, programming is like solving a complex puzzle: at first, it may look chaotic, but with patience and attention to detail, each piece clicks into place. It’s a creative process rooted in logic — where you build something meaningful from nothing.
                    I find inspiration in walks through the forest and a good cup of coffee. Yoga and puzzles help me stay balanced and focused.
                </p>
            </div>
            <div className='flex flex-wrap w-[780px] gap-3'>
                {facts.map((item)=>{
                   return(
                   <div 
                    key={item.title} 
                    style={{ background: item.bg }}
                    className="w-[250px] h-[250px] group relative overflow-hidden hover:rounded-xl " 
                    >                   
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>                    
                    <div className="absolute inset-0 flex items-center justify-center px-3 text-center text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xl font-semibold">{item.description}</p>
                    </div>
                    </div>
                   ) 
                })}
                
            </div>
        </div>
    )
}