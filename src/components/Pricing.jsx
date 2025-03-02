import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

function Pricing() {
  return (
    <div id='pricingSection' className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl my-6 text-center tracking-wide text-diesel-100">Pricing</h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option , index)=> (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 bg-gradient-to-tl from-diesel-800 to-diesel-950">
                        <p className="text-4xl mb-8 ">
                            {option.title}
                            {option.title === "Pro" && <span className="text-diesel-200 text-lg ml-2 mb-4">
                                (Most Popular)</span>}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2">{option.price}</span>
                            <span className="text-neutral-300 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature , index) => (
                                <li key={index} className="mt-8 flex items-center ">
                                    <CheckCircle2 />
                                    <span className="ml-2 text-diesel-100">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight rounded-lg border border-diesel-950 bg-diesel-200 text-diesel-950 hover:bg-diesel-300 transition duration-200 text-xl">
                            Suscribe
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing