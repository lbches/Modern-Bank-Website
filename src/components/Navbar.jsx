import {useState} from 'react'
import {close,logo, menu } from '../assets';
import {navLinks} from '../Constants';

const Navbar = () => {
  return (
    <nav className="navbar w-full flex py-6 justify-between items-center">
        <img src={logo} alt="chesbank" className="w-[124px] h-[32px]" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) =>(
                <li key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index===navLinks.length-1 ? 'mr-0': 'mr-10'} text-white mr-10`}>
                        <a href={`${nav.id}`}>
                            {nav.title}
                        </a>
                </li>
            )

            )}

        </ul> 

    </nav>
  )
}

export default Navbar