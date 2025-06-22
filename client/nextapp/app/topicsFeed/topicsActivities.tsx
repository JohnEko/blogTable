import React from 'react'
import "./topics.css"
import Link from 'next/link'
import Image from 'next/image'

const Topics = () => {
  return (
      <div className="page-activities">     
          <Link href={"/trending"} className='image-activity'>topicsActivities</Link>
          <div className='image-activiy'
          // onClick={() => ("Image-Advert")}
          >
            <Link href={"facebook.com"} target='_blank'>
                <Image 
                // we can use image url for user to click  
                  src={"/villa.jpg"}
                  alt=''
                  className=''
                  width={200}
                  height={100}
                / >
            </Link>
      </div>
      </div>
    
  )
}
export default Topics
