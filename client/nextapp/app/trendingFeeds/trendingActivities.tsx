import React from 'react'
import  "./trending.css"
import Link from 'next/link'

const Trending = () => {
  return (
    <div className= "activities">
      <div className='trending'>
            <Link href={"/trending"} className='trending-link'>TrendingActivities</Link>
              <hr />
            <div className='trending-row'>
              <div className='trending-items'>
                <span>#istrending </span>
                
              </div>
              <span className=''>#Trending today </span>
            </div>
            
       </div>
        
    </div>
  )
}
export default Trending
