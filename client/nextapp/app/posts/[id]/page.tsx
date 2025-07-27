 //'use client'

import Link from 'next/link'
import "./posts.css"
import axios from 'axios';
import CustomButton from '@/app/form/CustomeButton';
import {BsFillPencilFill} from "react-icons/bs"
import ModalPage from '@/app/modal/page';



const ConversationPage = async ({params}: {params: {id: string}}) => {

      
    const res = await axios.get(`http://localhost:8000/posts/${params.id}`)
    console.log(res.data)
       
    

  return (
    <div>
        <h2>{res.data.title}</h2>
        <table className='posts'>
            
            <tbody>
                
                <tr>
                    {/* Posted mmessage by users */}
                    <td className='bold 1 pu'>        
                        
                        <Link href={""}><b>{res.data.title}</b>{", "}</Link>
                        <Link href={""}>{"messageId number:"} <b>{res.data.likes}</b> </Link>
                        
                        <Link href={""}>author/UserId: {" by "} <b>{res.data.username}</b> </Link>

                        <span className='timePosted'>{"Message posted at:"} <b>8:00am</b></span>
                    </td>
                    
                </tr>

                 <tr>
                    <td id='userId' className='user_comments'>
                        <div className='post-comment'>
                            <span className='POST-COMMENT'>{res.data.body}.</span>
                            <span><BsFillPencilFill /></span>
                            
                            {/* when user click the edith opencil the box will open */}
                            {/* <div>
                                
                                {modalOpen && ( 
                                    <ModalPage 
                                        closeModal={() => {
                                            setModalOpen(false)
                                        }}
                                    />)}
                            </div> */}
                        </div>
                        <div className='like'>
                            <br />
                            <b id='userId'>Likes: {res.data.likes}, {" "}</b>
                            <b id='userId'>Dislikes: {res.data.likes}</b>
                            <b id='userId'> Shares: 5</b>
                        </div>

                        <div className='article-post'>
                            <Link 
                                href={"/delete"} className='handleDelete'>
                                    Delete
                            </Link>
                         {/* //edit post can be news.id */}
                             {/* <Link 
                                href={"/edith"}  className='handleEdith'>
                                    
                            </Link> */}
                            {/* <CustomButton 
                                label='Add'
                                className='btn'
                                 onClick={() => setModalOpen(true)}

                            /> */}
                            
                             <button className='btn'>Add</button> 

                        </div>
                        {/* <div className='handleEdith'>
                            <Link 
                                href={"/edith"}  className='handleEdith'>
                                    Edith
                            </Link>
                        </div> */}
                        {/* <div>
                            <CustomButton
                            label='Delete'
                            onClick=""
                            className='handleDelect'
                            
                        />
                        </div>  */}
                        {/* <div className='btn-component'>
                         <button >Home</button> 
                         <button>Edith</button>   
                         <button onClick={handleDelect}>Delete</button> 
                        </div>                     */}
                    </td> 
                    
                                
                </tr>
                

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