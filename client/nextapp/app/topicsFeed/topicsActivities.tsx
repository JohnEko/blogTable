import React from 'react'
import "./topics.css"
import Link from 'next/link'
import Image from 'next/image'



const Topics = () => {
  return (
      <div className="page-activities">     
          <Link href={"/trending"} className='image-activity'>Browse News</Link>
          <div className='image-activiy'
          // onClick={() => ("Image-Advert")}
          >
            <Link href={"facebook.com"} target='_blank'>
            {/* we can use image url for user to click   */}
                <Image 
                  src={'/villa.jpg'}
                  alt=''
                  className='villa-image'
                  width={300}
                  height={150}
                / >
            </Link>
      </div>
      <div className='topic_list'>
        <div>
          <Link href={'/'}>Home</Link>
        </div>
        <div>
          <Link href={'/news'}>News</Link>
        </div>
        <div>
            <Link href={'/sport'}>Sports</Link>
        </div>
        <div>
           <Link href={'/entertainment'}>Entertainment</Link>
        </div>
        <div>
            <Link href={'/history'}>History</Link>
        </div>

      </div>
      </div>
    
  )
}
export default Topics
