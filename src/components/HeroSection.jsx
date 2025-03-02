import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
function HeroSection() {
  return (
    <div className="flex flex-col mt-6 lg:mt-20 items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wider text-diesel-100">
            Virtual Reality build tools 
            <span className='bg-gradient-to-r from-diesel-300 to-diesel-700 text-transparent bg-clip-text'> for developers</span>
        </h1>
        <p className='mt-10 text-center text-lg text-neutral-400 max-w-4xl'>
            Empower your creativity and bring your VR app ideas to life with our intutive development tools. Get started today and turn your imagination into immersive Reality! 
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-diesel-600 to-diesel-800 py-3 px-4 mx-3 rounded-md'>
                Start for free
            </a>
            <a href="#" className='py-3 px-4 ,mx-3 rounded-md border text-diesel-100 '>Documentation</a>
        </div>
        <div className="flex justify-center mt-10">
            <video autoPlay muted loop className='rounded-lg border border-diesel-500 shadow-diesel-300 mx-3 my-4 w-1/2'>
                <source src={video1} type='video/mp4'/>
                your browser does not support the video 
            </video>
            <video autoPlay muted loop className='rounded-lg border border-diesel-500 shadow-diesel-300 mx-3 my-4 w-1/2'>
                <source src={video2} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default HeroSection