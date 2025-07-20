'use client'
import Link from 'next/link'
import "./posts.css"
import axios from 'axios';
import { UserType } from '@/app/tableFeeds/FeedsActivities';
import React from 'react';
// import { useRouter } from 'next/navigation'
//import { useState } from 'react'



export type ConversationPageTypes = {
    id: string,
    title: string,
    body: string,
    postId: string,
    reactions: string,
    userId: string,
    user: UserType[]

}


const ConversationPage =  async ({params}: {params: {id: string}}) => {
    // const router = useRouter()
    const id = params.id
  
    const response = await axios.get(`http://localhost:8000/posts/${id}`)
    console.log(response.data)
    // .then((response) => {
    //     setItems(response.data)})
    // .catch(error => console.log(error));

    //delete article with specific id
    // const handleDelect =  () =>{
    //     const res = await axios.delete(`http://localhost:8000/posts/${id}`)
    //     .then((response) => {
    //     console.log(response.data)
    //     })
    //     .catch(error => console.log(error));
    //    // router.push("/")
    // }




  return (
    <div>
        <h2>{response.data.title}</h2>
        <table className='posts'>
            
            <tbody>
                
                <tr>
                    {/* Posted mmessage by users */}
                    <td className='bold 1 pu'>        
                        
                        <Link href={""}><b>{response.data.title}</b>{", "}</Link>
                        <Link href={""}>{"messageId number:"} <b>{response.data.likes}</b> </Link>
                        
                        <Link href={""}>author/UserId: {" by "} <b>{response.data.user.username}</b> </Link>

                        <span className='timePosted'>{"Message posted at:"} <b>8:00am</b></span>
                    </td>
                    
                </tr>

                 <tr>
                    <td id='userId' className='user_comments'>
                        <div className='post-comment'>
                            <span className='POST-COMMENT'>{response.data.body}.</span>

                        </div>
                        <div className='like'>
                            <br />
                            <b id='userId'>Likes: {response.data.likes}, {" "}</b>
                            <b id='userId'>Dislikes: {response.data.likes}</b>
                            <b id='userId'> Shares: 5</b>
                        </div>  
                                            
                    </td>               
                </tr>
                {/* <button onClick={handleDelect}>Delete</button> */}

                {/* Commented messages by other user or reply messages by other users */}
                {/* <tr>
                    <td className='bold 1 pu'>        
                        {response.map((item: ConversationPageTypes) =>(
                        <>
                            <Link href={""}><b>{item.title}</b>{", "}</Link>
                            <Link href={""}>messageId number: <b>{item.id}</b> </Link>
                            <Link href={""}>author/UserId: <b>{item.userId}</b> </Link>

                            <span className='timePosted'>Message posted at: <b>8:00am</b></span>
                        </>
                        ))}
                    </td>
                    
                </tr>

                 <tr>
                    <td id='userId' className='user_comments'>
                        <div className='post-comment'>
                            <span className='POST-COMMENT'>{body}.</span>

                        </div>
                        <div className='like'>
                            <b id='userId'>Likes: {reactions.likes}, {" "}</b>
                            <b id='userId'>Dislikes: {reactions.dislikes}</b>
                            <b id='userId'> Shares: 5</b>
                        </div>                      
                    </td>
                    
                </tr> */}

                {/* <tr>
                    <td className='bold 1 pu'>        
                        
                        <Link href={""}><b>{title}</b>{", "}</Link>
                        <Link href={""}>messageId number: <b>{id}</b> </Link>
                        <Link href={""}>author/UserId: <b>{userId}</b> </Link>

                        <span className='timePosted'>Message posted at: <b>8:00am</b></span>
                    </td>
                    
                </tr>

                 <tr>
                    <td id='userId' className='user_comments'>
                        <div className='post-comment'>
                            <span className='POST-COMMENT'>{body}.</span>

                        </div>
                        <div className='like'>
                            <b id='userId'>Likes: {reactions.likes}, {" "}</b>
                            <b id='userId'>Dislikes: {reactions.dislikes}</b>
                            <b id='userId'> Shares: 5</b>
                        </div>                      
                    </td>
                    
                </tr>

                <tr>
                    <td className='bold 1 pu'>        
                        
                        <Link href={""}><b>{title}</b>{", "}</Link>
                        <Link href={""}>messageId number: <b>{id}</b> </Link>
                        <Link href={""}>author/UserId: <b>{userId}</b> </Link>

                        <span className='timePosted'>Message posted at: <b>8:00am</b></span>
                    </td>
                    
                </tr>

                 <tr>
                    <td id='userId' className='user_comments'>
                        <div className='post-comment'>
                            <span className='POST-COMMENT'>{body}.</span>

                        </div>
                        <div className='like'>
                            <b id='userId'>Likes: {reactions.likes}, {" "}</b>
                            <b id='userId'>Dislikes: {reactions.dislikes}</b>
                            <b id='userId'> Shares: 5</b>
                        </div>                      
                    </td>
                    
                 </tr> */}
             </tbody>
         </table>
     </div>
   )
}

export default ConversationPage