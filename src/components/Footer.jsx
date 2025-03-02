import { FaTwitter, FaX, FaXTwitter } from "react-icons/fa6"
import { resourcesLinks , platformLinks , communityLinks } from "../constants"

function Footer() {
  return (
    <footer className="mt-20 border-t border-diesel-900 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h3 className="text-md mb-4 font-semibold text-diesel-200">Resources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link , index)=> (
                        <li key={index}>
                            <a href={link.href} className="text-neutral-300 hover:text-white">{link.text} </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md mb-4 font-semibold  text-diesel-200">Platforms</h3>
                <ul className="space-y-2">
                    {platformLinks.map((link , index)=> (
                        <li key={index}>
                            <a href={link.href} className="text-neutral-300 hover:text-white">{link.text} </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md mb-4 font-semibold  text-diesel-200">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((link , index)=> (
                        <li key={index}>
                            <a href={link.href} className="text-neutral-300 hover:text-white">{link.text} </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='mt-20'>
           <a href='https://x.com/MyDevTrail' target="_blank" className="flex justify-end">
                <FaXTwitter className="h-5 w-5" />
                <span className="ml-2 text-sm font-normal text-diesel-50 hover:text-diesel-100">Mruthunjay</span>
           </a>
        </div>
    </footer>
  )
}

export default Footer