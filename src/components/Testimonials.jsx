import { testimonials } from "../constants"

function Testimonials() {
  return (
    <div id="testiSection" className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl my-10 text-center tracking-wide text-diesel-100">
            What people are saying 
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index ) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-diesel-900 font-light bg-diesel-950">
                        <p>{testimonial.text}</p>
                        <div className="flex mt-8 items-start">
                            <img src={testimonial.image} alt={testimonial.user} className='w-12 h-12 rounded-full mr-6 border-neutral-300'/>
                            <div >
                                <h6 className="text-diesel-100">{testimonial.user}</h6>
                                <span className="text-sm font-normal italic text-diesel-200">{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials