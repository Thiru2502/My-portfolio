import HeroImg from '../assets/Hero.png'
import { AiOutlineLinkedin , AiOutlineGithub} from "react-icons/ai";
export default function Hero(){
    return <section className=' flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
    <h1  className='text-white text-6xl'>Hi, <br></br>Im <span className='text-black'>Thiruchitrambalam Pillai</span>
    <p className='text-2xl'>I am Full-stack Developer</p>
    </h1>
    <div className='flex py-5 '>
        <a href='#'className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
       <a href='#'className='hover:text-white'><AiOutlineGithub size={40}/></a>
    </div>
    </div>
    <img className='w-1/3'src={HeroImg}/>
    </section>
}