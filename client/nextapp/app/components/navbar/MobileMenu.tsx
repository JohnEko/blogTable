'use client'

import React, { useState } from 'react'
import "./mobileMenu.css"
import Link from 'next/link'


const MobileMenu = () => {

    const[isOpen, setIsopen] = useState(false)

  return (
    <div className=''>
        
        <div className='mobile-item' 
        onClick={() => setIsopen((prev) =>!prev)}
        > 
        {/* we can use searchModal from previous projects */}
    
         
            <div  className='mobile-menu' />
            <div className='mobile-menu'/>
            <div className='mobile-menu'/>  
        
            {/* <div className={`mobile-menu ${isOpen ? "rotate-45": "" }`}/> */}
        
    
        </div>
        

        {/* now check if its open */}
        {isOpen && (
            <div className='mobile-link'>
                <Link href={'/'}>Home</Link>
                <Link href={''}>News</Link>
                <Link href={''}>Sports</Link>
                <Link href={''}>Entertainment</Link>
                <Link href={''}>History</Link>

            </div>
        )}

    </div>
  )
}

export default MobileMenu