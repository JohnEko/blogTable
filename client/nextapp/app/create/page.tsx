'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./addForm.css"
import { useRouter } from 'next/navigation'


const CreatePost = () => {

  const router = useRouter()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [postId, setPostId] = useState('')
  const [fullName, setFulName] = useState('')
  const [username, setUserName] = useState('')
  const [likes, setLikes] = useState('')
  const [dislikes, setDislikes] = useState('')
  const [userId, setUserId] = useState('')

//Posting a new article to the frontpage
  const creatForm = async (e:any) => {
    e.preventDefault()
    const posts = {title, postId, username, fullName, likes, dislikes, userId, body}


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
          router.push('/')       
    
  
  }

  return (
    <div className='form-data'>
       <h1> Create new post </h1>
       <form className='addForm'  onSubmit={creatForm}>

        <input type="title"  
              placeholder='Title' 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />

        <input type="postId"  
              placeholder='PostId' 
              value={postId} 
              onChange={(e) => setPostId(e.target.value)}
            />

        <input type="User"  
              placeholder='User' 
              value={username} 
              onChange={(e) => setUserName(e.target.value)}
            />

        <input type="Fullname"  
              placeholder='Fullname' 
              value={fullName} 
              onChange={(e) => setFulName(e.target.value)}
            />
        <input type="Likes"  
              placeholder='Likes' 
              value={likes} 
              onChange={(e) => setLikes(e.target.value)}
            />

          <input type="Dislikes"  
              placeholder='Dislikes' 
              value={dislikes} 
              onChange={(e) => setDislikes(e.target.value)}
            />

          <input type="UserId"  
              placeholder='UserId' 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)}
            />

          <input type="body"  
                placeholder='Body' 
                value={body} 
                onChange={(e) => setBody(e.target.value)}
              />
           <button>Create post</button>
userId
       </form>
    </div>
  )
}

export default CreatePost
