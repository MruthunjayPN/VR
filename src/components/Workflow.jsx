import { CheckCircle2 } from "lucide-react"
import codeImg from '../assets/code.jpg'
import { checklistItems } from "../constants"

function Workflow() {
  return (
    <div id='workflowSection' className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-diesel-100">
            Accletate your <span className="bg-gradient-to-r from-diesel-600 to-orange-800 text-transparent bg-clip-text">{" "}coding workflow</span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="Code" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12 lg:ml-10">
                        <div className="text-diesel-200 bg-netural-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div className="lg:ml-5 ">
                            <h5 className="mt-1 mb-2 text-xl ">{item.title}</h5>
                            <p className="text-md text-neutral-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Workflow