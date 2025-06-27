import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import "./headers.css"
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar';

const Headers = () => {
  return (
    <header>
        <nav>
            <div className='container'>
                <div className='gist-container' >
                 <Link href={"/"} className='logo'>GIST FORUM</Link>

                   {/* LEFT */}
                 </div>
              
                <div className='home-item'>
                  <div className='link-item'>
                    <Link href={"/"} className='image-link'>
                      <Image 
                        src="/Jerry.jpg" 
                        alt="Home" 
                        className="image-logo"
                        width={16} 
                        height={16}
                        
                      />
                      <span>Home</span>
                    </Link>

                    <Link href={"/"} className='image-link'>
                      <Image 
                        src="/Jerry.jpg" 
                        alt="About"
                        className='image-logo' 
                        width={16} 
                        height={16}
                       
                      />
                      <span>About</span>
                    </Link>

                    <Link href={"/"} className='image-link'>
                      <Image 
                        src="/Jerry.jpg" 
                        alt="News" 
                        className='image-logo'
                        width={16} 
                        height={16}
                        
                      />
                      <span>News</span>
                    </Link>
                 
                  </div>
                    {/* <SearchBar /> */}
                {/* CENTER create Links*/}
                </div>

                <div className='search-menu'>
                      <SearchBar />
                </div>

                <div className='mobile-header'>

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