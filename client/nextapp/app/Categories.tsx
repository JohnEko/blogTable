import { table } from 'console'
import React from 'react'
// import styles from'./categories.module.css'   
import Link from 'next/link'
import "./categories.css"


const Categories = () => {
  return (
    // <div className={styles.main}>   
        <table className='table-boards'>
          <tbody>
              <tr>
                  <th><h3>Wazobia Forum</h3></th>
              </tr>          
              <tr>
                <td className="table-data">
                  <Link href={"/entertainment"} title={'/title'}>
                  <b>Entertainment</b>
                  </Link>
                  /
                  <Link href={"/Sport"} title={'/title'}>
                  <b>Sport</b>
                  </Link>
                </td>
                {/* <td>Sports</td>
                <td><b>Sports</b></td> */}
               </tr> 
              {/* <td>Sports</td>
              <td>Education</td>
              <td>Politics</td>
              <td>Technology</td>
              <td>Technology</td>
              <td>Health</td>
              <td>Business</td>
              <td>History</td>
              <td>News</td>
              <td>Travel</td>
              <td>Food</td>
              <td>Fashion</td>
              <td>Music</td>
              <td>Movies</td>
              <td>Others</td> */}
            
              
            {/* </tr>    */}
        </tbody>
    </table>
    // </div>
  )
}

export default Categories