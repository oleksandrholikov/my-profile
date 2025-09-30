import IconBooks from '@assets/icons/icon-books.png'
import IconLight from '@assets/icons/icon-lightning-mood.png'

export default function AboutSection(){
    return(
        <div className="flex flex-col w-full h-full items-center justify-start p-6 space-y-2 overflow-y-auto">
            <div className="flex flex-col items-start space-y-3 w-full">
                <h1 className="text-5xl font-bold text-white">Oleksandr Holikov</h1>
                <p className="text-3xl font-semibold text-[#CE9178]">Full Stack Web Developer</p>
                <p className="text-xl text-white">
                    To me, programming is like solving a complex puzzle: at first, it may look chaotic, but with patience and attention to detail, each piece clicks into place. It’s a creative process rooted in logic — where you build something meaningful from nothing.
                    I find inspiration in walks through the forest and a good cup of coffee. Yoga and puzzles help me stay balanced and focused.
                </p>
            </div>
            <div>
                <ul className='flex flex-wrap w-[600px]'>
                    <li className='w-[200px] bg-amber-500'>1</li>
                    <li className='w-[200px] bg-green-500'>2</li>
                    <li className='w-[200px] bg-red-500'>3</li>
                    <li className='w-[200px] bg-blue-500'>3</li>
                    <li className='w-[200px] bg-yellow-500'>5</li>
                    <li className='w-[200px] bg-pink-500'>6</li>
                </ul>
                
            </div>
        </div>
    )
}