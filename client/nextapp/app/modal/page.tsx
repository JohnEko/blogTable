import React from 'react'

import "./modalPage.css"
import CustomButton from '../form/CustomeButton'

// modal form component to add discussion

const ModalPage = ({closeModal}: any) => {
  return (
    <div 
      className='modal-container' 
      onClick={(e) => {
        if(e.target.className === "modal-container") closeModal(); }}>

        <div className='modal'>
           <form action="">
            <div className='form-group'>
              <label htmlFor="page">Title</label>
              <input name="title" />
            </div>
            <div className='form-group'>
              <label htmlFor="username">Username</label>
              <input name="UserName" />
            </div>
            
            <div className='form-group'>
              <label htmlFor="postId">PostId</label>
              <input name="postId" />
            </div>
            <div className='form-group'>
              <label htmlFor="fullName">FullName</label>
              <input name="fullName" />
            </div>
    
            <div className='form-group'>
              <label htmlFor="userId">UserId</label>
              <input name="userId" />
            </div>
            <div className='form-group'>
              <label htmlFor="body">Body</label>
              <textarea name="body" />
            </div>
            <div className='form-group'>
              <label htmlFor="status">Status</label>
                <select name="status" id="">
                  <option value="likes">Likes</option>
                  <option value="dislikes">Dislikes</option>
                </select>
              </div>
            <button type='submit' className='btn'>Submit</button>

           </form>
        </div>
    </div>
  )
}

export default ModalPage