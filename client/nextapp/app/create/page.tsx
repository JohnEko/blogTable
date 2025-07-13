'use client'

import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const CreatePost = () => {


  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [postId, setPostId] = useState('')
  const [reaction, setReaction] = useState('')
  const [user, setUser] = useState('')


  const setRections = (reaction : string) => {
    setRections(reaction)
  }

   const setUsers = (user : string) => {
    setUser(user)
  }

  const creatForm = async () => {
    if (
        title &&
        body &&
        postId &&
        reaction &&
        user
    ){
      const formData = new FormData()
      formData.append('title', title)
      formData.append('body', body)
      formData.append('postId', postId)
      formData.append('reactions', reaction)
      formData.append('user', user)

      const res = await axios.post('http://localhost:8000/api/posts', formData)
                      .then(res =>{
                        console.log(res.data)

                      })
                      .catch(error => {
                        console.log(error)
                      })        
    }
  }

  return (
    <div className='form-data'>
       <h1> Create new post </h1>
       <form onSubmit={creatForm}>

        <input type="title"  
              placeholder='Title' 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />

        <input type="postId"  
              placeholder='Post' 
              value={postId} 
              onChange={(e) => setPostId(e.target.value)}
            />

        <input type="User"  
              placeholder='User' 
              value={user} 
              onChange={(e) => setUser(e.target.value)}
            />

        <input type="Reaction"  
              placeholder='Reaction' 
              value={reaction} 
              onChange={(e) => setReaction(e.target.value)}
            />

        <input type="body"  
              placeholder='Body' 
              value={body} 
              onChange={(e) => setBody(e.target.value)}
            />

           <button style={{marginTop:'5px'}}>Create post</button>

       </form>
    </div>
  )
}

export default CreatePost
