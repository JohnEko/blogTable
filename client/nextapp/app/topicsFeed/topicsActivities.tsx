import React from 'react'
import styles from "./topics.module.css"
import Link from 'next/link'

const Topics = () => {
  return (
    <div className={styles.container}>     
        <Link href={"/trending"}>topicsActivities</Link>
    </div>
  )
}
export default Topics
