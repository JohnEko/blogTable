'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import CustomButton from '../form/CustomeButton'
import "./edithPage.css"
import axios from 'axios'

const EdithPage = ({params}: {params: {id: string}}) => {

  const [edithPost, setEdithPost] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [postId, setPostId] = useState('')
  const [reaction, setReaction] = useState('')
  const [user, setUser] = useState('')
    
  const creatForm = async (e:any) => {
    e.preventDefault()
    const posts = {title, postId, reaction, user, body}


    console.log(posts)
     await axios.post('http://localhost:8000/posts', posts, 
      {headers: {
          'Content-type': 'application/json',
          
        }}, 
      )
      //console.log(res.data)
          .then(res =>{
            console.log(res.data)
            console.log("New article added!")
          })
          .catch(error => {
            console.log(error)
          })     
    
  
  }

    const handleEdith = async () => {
      await axios.delete(`http://localhost:8000/posts/${params.id}`)
      console.log("delete successfully")
      
      
    }

  return (
    <div>
      <h1>Delete</h1>

      <table className='posts'>
            
            <tbody>
                
                    <tr>

                        

                        {/* Posted mmessage by users */}
                        <td className='bold 1 pu'>        
                            
                            <Link href={""}><b>{}</b>{", "}</Link>
                            <Link href={""}>{"messageId number:"} <b>{}</b> </Link>
                            
                            <Link href={""}>author/UserId: {" by "} <b>{}</b> </Link>

                            <span className='timePosted'>{"Message posted at:"} <b>8:00am</b></span>
                        </td>
                        
                    </tr>
                       
                    <tr>
                        <td id='userId' className='user_comments'>
                            <div className='post-comment'>
                                <span className='POST-COMMENT'>{}.</span>

                            </div>
                            <div className='like'>
                                <br />
                                <b id='userId'>Likes: {}, {" "}</b>
                                <b id='userId'>Dislikes: {}</b>
                                <b id='userId'> Shares: 5</b>
                            </div>
                            <div>
                                <CustomButton 
                                label='Edith'
                                onClick={handleEdith}
                                className='handleDelete'
                            />
                            <span>Edith your article</span>
                            </div>
                        </td>
                        
                        </tr>
                
             </tbody>
            
         </table>

    </div>
  )
}

export default EdithPage