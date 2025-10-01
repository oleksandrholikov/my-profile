import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type AnimatedPageProps = {
  children: React.ReactNode;
  activTab: string;
};

export default function AnimatedPage({ children, activTab }: AnimatedPageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    gsap.set(containerRef.current, { opacity: 0, y: 40 });
   
    gsap.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    });
  }, [activTab]); 

  return (
    <div ref={containerRef} className="w-full h-full">
      {children}
    </div>
  );
}
