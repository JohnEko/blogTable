import React from 'react'
import Link from 'next/link'
import "./posts.css"
import { BlogPostModels, PostsDetailsResponse } from '@/app/hooks/BlogPost';




const ConversationPage =  async ({params}: {params: {id: string}}) => {
  
  
  const response = await fetch(`https://dummyjson.com/posts/1`)
  const{id, title, body, views, userId, reactions} : BlogPostModels = await response.json()


  
//   console.log(title, body)
  return (
    <div>
        <table className='posts'>
            <tbody>
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
                    
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ConversationPage