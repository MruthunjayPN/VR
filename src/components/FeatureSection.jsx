import { features } from "../constants"

function FeatureSection() {
  return (
    <div id='featureSection' className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className="text-center">
            <span  className='bg-neutral-900 text-diesel-500 text-md font-medium uppercase px-2 py-2 rounded-full'>
                features
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-6xl mt-20 lg:mt-20 tracking-wide'>
                Easily build 
                <span className='bg-gradient-to-r from-diesel-500 to-diesel-800 text-transparent bg-clip-text'>
                    {" "}your code
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature , index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
                    <div className="flex hover:bg-diesel-900 hover:rounded-lg pt-5 ">
                        <div className="flex mx-6 h-10 w-10 text-orange-700 bg-neutral-900 p-2 rounded-full  
                            justify-center items-center ">{feature.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-xl text-diesel-50">{feature.text}</h5>
                            <p className="text-md p-2 pr-8 text-neutral-300 mb-20">{feature.description}</p>
                        </div>
                    </div>
                    
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default FeatureSection