'use client'

import React, { useState } from 'react'
import "./mobileMenu.css"
import Link from 'next/link'


const MobileMenu = () => {

    const[isOpen, setIsopen] = useState(false)

  return (
    <div className='mobile-icon'>
        
        <div className='mobile-item' 
        onClick={() => setIsopen((prev) =>!prev)}
        > 
        {/* we can use searchModal from previous projects  also div for open and clos icons*/}
    
          
            <div  className={`mobile-menu ${isOpen ? "rotate-45": "" 
                            } origin-left ease-in-out duration-500`}/>
            <div className={`mobile-menu ${isOpen ? "opacity-0": "" }
                             ease-in-out duration-500`}/>
            <div className={`mobile-menu ${isOpen ? "rotate-45": "" }
                             origin-left ease-in-out duration-500`}/>
        
            {/* <div className={`mobile-menu ${isOpen ? "rotate-45": "" }
             origin-left for 1 first and last menu`}/> for meddle menu "" */}
        
    
        </div>
        

        {/* now check if its open */}
        {isOpen && (
            <div className='mobile-link'>
                <Link href={'/'}>Login</Link>
                <Link href={''}>LogOut</Link>
                <Link href={''}>Register</Link>

            </div>
        )}

    </div>
  )
}

export default MobileMenu