import { table } from 'console'
import React from 'react'
import './categories.css'   

const Categories = () => {
  return (
    <div className='categories'>   
        <table>
      
              <thead>
                  <tr>
                      <th>
                        <h3>NigerGist</h3>
                      </th>
                  </tr>
              </thead>
              <tbody>
              <tr>
                <div className='td-items'>
                  <td>Entertainment</td>
                  <td>Sports</td>
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
                  <td>Others</td>
                </div>
                  
              </tr>   
            </tbody>
        </table>
    </div>
  )
}

export default Categories