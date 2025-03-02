import React from 'react'
import logo  from '../assets/logo.png'
import {navItems} from '../constants'
import {Menu , X} from "lucide-react"
import { useState } from 'react'

const Navbar = () => {
    const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    //toggle navbar for mobile
    const toggleNavbar = () => {
        setMobileDrawerOpen(!MobileDrawerOpen);
    };
    return (
        <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80 backdrop-blur-lg">
            <div className="container text-sm px-4 mx-auto relative">
                <div className="flex justify-between items-center">
                    <div className="flex flex-shrink-0 items-center">
                        <img  src={logo} alt='logo' className='h-10 w-10 mr-2'/>
                        <span className='text-xl tracking-tight text-diesel-100 font-semibold'>VirtualReality</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item , index) => (
                            <li key={index}>
                                <a className='text-diesel-50' href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center items-center space-x-12">
                        <a href="#" className='py-2 px-3 border rounded-md hover:bg-diesel-200 hover:text-diesel-950 hover:border-diesel-200'>
                            Sign In
                        </a>
                        <a href="#" className='py-2 px-3 bg-gradient-to-r from-diesel-700 to-diesel-900 rounded-md'>
                            Create an account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {MobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {MobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item , index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                         <div className="flex space-x-6 py-4">
                            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                            <a href="#" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 
                            rounded-md'>Create an account</a>    
                        </div>   
                    </div> 
                )}
            </div>   
        </nav>
    )
}

export default Navbar