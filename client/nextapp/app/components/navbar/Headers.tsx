import Link from 'next/link'
import React from 'react'
import "./headers.css"
import MobileMenu from './MobileMenu'

const Headers = () => {
  return (
    <header>
        <nav>
            <div className='container'>
                <div className='' >
                 <Link href={"/"} className='logo'>GIST FORUM</Link>

                   {/* LEFT */}
                 </div>
              
                <div className='hidden'></div>
                {/* CENTER */}
                <div className=''>

                    <MobileMenu />
                     {/* Right */}
                </div>
                {/* since we going to have mobile menu here we cant store server 
                conponent here we need to create another component for mobile menu */}
                
               
               
                {/* <Link href={"/login"}>login</Link>  */}
            </div>
        </nav>
    </header>
  )
}

export default Headers