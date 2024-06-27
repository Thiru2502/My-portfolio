import Resumeimg from '../assets/resume.jpg'
export default function Resume(){
    return <section className='flex flex-col md:flex-row bg-primary px-5'id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img  className='w-[300px]' src={Resumeimg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl font-bold text-white border-b-4 border-[purple] mb-5 w-[140px]'>Resume</h1>
            <p> You can view my Resume<a className='btn' href='https://drive.google.com/file/d/1EOO4Xx2_jdHLZdcrrFkbCaZkM6BMNlqn/view?usp=drive_link'> Download</a></p>
        </div>
        </div>
    </section>
}