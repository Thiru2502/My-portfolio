import websiteImg1 from '../assets/projects.png'
import websiteImg2 from '../assets/project2.png'
import websiteImg3 from '../assets/project3.png'
export default function Projects(){
    return<section className="flex flex-col py-20 px-5 justify-center bg-secondary"id='projects'>
        <div className="w-full">
        <div className="flex  flex-col px-10 py-5">
     <h1 className=' text-4xl font-bold text-white border-b-4 border-pink-300 mb-5 w-[140px]'>Projects</h1>
     <p className='text-white'> These are the best projects i had created using HTML vannila css and Javascript  and react  </p>
        </div>
        </div>
        <div className="w-full text-white">
        <div className='flex px-10 gap-5'>
            <div className='relative'>
            <img  src={websiteImg1}/>
            <div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100'>
                <p className='text-center py-5'>An E-commerce website Built With Word press Using Plugins,HTML CSS, Java script and react<a className='btn flex flex-col 'p  href=''>View project</a></p>
            </div>
            </div>
            <div className='relative'>
            <img src={websiteImg2}/>
            <div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100'>
            <p className='text-center py-5'>An E-commerce website built with  HTML custom Css and javascript and python <a className='btn flex flex-col 'p  href=''>View project</a></p>
            </div>
            </div>
            <div className='relative'>
            <img src={websiteImg3}/>
            <div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100' >
            <p className='text-center py-5'>An Blog site built with HTML CSS and java script <a className='btn flex flex-col 'p  href=''>View project</a></p>
            </div>
            </div>
            </div>
        </div>
    </section>
}