'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./addForm.css"
import { useRouter } from 'next/navigation'
import Link from 'next/link'


interface CreatePostProps {
  closeModal: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({
  closeModal
}) => {

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

    <div className="modal-container"
      // onClick={(e:any) => {
      //   if(e.target.className === "modal-container") closeModal}}
    >
      <div className='form-data'>
        <h1> Create new post </h1>
        <form className='addForm'  onSubmit={creatForm}>
          <div className='form-group'>
            <label htmlFor="Title"></label>
            <input type="title"  
                  placeholder='Title' 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                />
          </div>

          <div className='form-group'>
            <label htmlFor="PostId"></label>
              <input type="postId"  
                    placeholder='PostId' 
                    value={postId} 
                    onChange={(e) => setPostId(e.target.value)}
                  />
          </div>


          <div className='form-group'>
              <label htmlFor="User"></label>
                <input type="User"  
                      placeholder='User' 
                      value={username} 
                      onChange={(e) => setUserName(e.target.value)}
                    />
          </div>

          <div className='form-group'>
            <label htmlFor="FullName"></label>
                <input type="Fullname"  
                      placeholder='Fullname' 
                      value={fullName} 
                      onChange={(e) => setFulName(e.target.value)}
                    />
            </div>

            <div className='form-group'>
              <label htmlFor="Like"></label>
                <input type="Likes"  
                      placeholder='Likes' 
                      value={likes} 
                      onChange={(e) => setLikes(e.target.value)}
                    />
            </div>


            <div className='form-group'>
              <label htmlFor="Title"></label>
                <input type="Dislikes"  
                    placeholder='Dislikes' 
                    value={dislikes} 
                    onChange={(e) => setDislikes(e.target.value)}
                  />
            </div>

            <div className='form-group'>
            <label htmlFor="UserId"></label>
            <input type="UserId"  
                placeholder='UserId' 
                value={userId} 
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor="Body"></label>
                <textarea name="body"  
                      placeholder='Body' 
                      value={body} 
                      onChange={(e) => setBody(e.target.value)}
                    />
            </div>
            <div className='form-button'>
              <Link href={'/'}>Cancel</Link>
              <button>Create post</button>
            </div>

        </form>
      </div>
  </div>
  )
}

export default CreatePost
