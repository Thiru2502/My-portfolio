import Aboutimg from '../assets/about.png'
export default function About(){
    return <section className='flex flex-col md:flex-row bg-primary px-5 'id='about'>
        <div className='md:w-1/2 py-5'>
            <img src={Aboutimg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl font-bold text-white border-b-4 border-[purple] mb-5 w-[170px]'>About Me</h1>
            <p className='pb-5'>Myself Thiruchitrambalam B, I had Completed BE mechanical Engineering in 2021  and worked in just dial for 7 months and ccompleted Full stack Developer Python  Course and worked for 7 Months as web developer and Currently looking For Roles in Frontend or Back end</p>
            <p className='pb-5'>I am able to Create Beautiful Websites using React and Tailwind CSS and Javascript</p>
            <p className='pb-5'>In Backend I know MySQL Python and Django</p>
            <p className='pb-5'>I am able to Work with Git </p>
        </div>
        </div>
    </section>
}