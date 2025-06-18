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
        {/* we can use searchModal from previous projects */}
    
         
            <div  className='mobile-menu' />
            <div className='mobile-menu'/>
            <div className='mobile-menu'/>  
        
            {/* <div className={`mobile-menu ${isOpen ? "rotate-45": "" }
             origin-left for 1 first and last menu`}/> for meddle menu "" */}
        
    
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