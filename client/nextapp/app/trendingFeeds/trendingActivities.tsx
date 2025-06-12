import React from 'react'
import styles from "./trending.module.css"
import Link from 'next/link'

const Trending = () => {
  return (
    <div className={styles.container}>
       <Link href={"/trending"}>trendingActivities</Link>
    </div>
  )
}
export default Trending
