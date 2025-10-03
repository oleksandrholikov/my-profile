import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import IconArrowLeft from '@assets/icons/icon-arrow-left.png'
 
type MainSectionProps = {
  btn: (tab: string) => void;
};


export default function MainSection({btn}: MainSectionProps) {
  const codeString = `
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const developer = {
    name: 'Oleksandr HOLIKOV',
    desc: 'Full Stack Web Developer',
    bio: 'The web is my puzzle...'
  };

  useEffect(() => {
    document.title = \`\${developer} | Portfolio\`;
    console.log('Hello, World!');
  }, []);

  return (
    <div className="hero-container">
      <h1>{developer.name}</h1>
      <p>{developer.desc}</p>
    </div>
  );
};

export default HomePage;`;

  return (
    <div
      className="w-full h-full flex items-center justify-between px-12 gap-8"
    >
    <div className="max-w-2xl w-full rounded-lg border border-gray-600/60 shadow-md p-4 font-mono text-sm leading-relaxed text-gray-200 backdrop-blur-sm">
      <SyntaxHighlighter language="tsx" style={vscDarkPlus} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </div>
    <div className="max-w-md flex flex-col justify-between items-start space-y-6">        
          <h1 className="text-7xl font-bold text-white">Oleksandr Holikov</h1>
          <p className="text-5xl font-semibold text-[#CE9178]">Full Stack Web Developer</p>
          <p className="text-xl text-white italic">Every line of code is a puzzle piece. Let's assemble your perfect puzzle: fast, high-quality, and with minimal resource usage.</p>
          <button
            className="flex items-center justify-evenly text-2xl font-semibold text-white px-6 py-3 rounded-4xl bg-[#6A9955] hover:cursor-pointer hover:bg-[#517c3e]"
            onClick={() => btn('projects')}
          ><span>View Projects</span><img src={IconArrowLeft} alt="Icon arrow left" /></button>
        

    </div>
    </div>
  );
}


