import React from 'react'
import Image from 'next/image'
import "./advertpage.css"

const PostAdvert =() => {
  return (
    <div>
        <div className='advert-item'>
            <div className='card-box'>
                {/* <div className='advert-item'> */}
                    <Image 
                        src='/villa.jpg'
                        className="image-villa"
                        alt="Beach"
                        width={200}
                        height={200}
                    />
            
                {/* </div> */}
            </div> 
             <div className='card-box'>
                    <Image 
                        src='/villa.jpg'
                        className="image-villa"
                        alt="Beach"
                        width={200}
                        height={200}
                    />
            </div> 
             <div className='card-box'>
                    <Image 
                        src='/villa.jpg'
                        className="image-villa"
                        alt="Beach"
                        width={200}
                        height={200}
                    />
            </div> 
            <div className='card-box'>
                    <Image 
                        src='/villa.jpg'
                        className="image-villa"
                        alt="Beach"
                        width={200}
                        height={200}
                    />
            </div>  
            <div className='card-box'>
                    <Image 
                        src='/villa.jpg'
                        className="image-villa"
                        alt="Beach"
                        width={200}
                        height={200}
                    />
            </div>   
        
        </div>
    </div>
  )
}

export default PostAdvert