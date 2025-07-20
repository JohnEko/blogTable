import Link from 'next/link'
import "./posts.css"
import axios from 'axios';
import { UserType } from '@/app/tableFeeds/FeedsActivities';



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
    const id = await params.id
  
  
    const response = await axios.get(`http://localhost:8000/posts/${id}`)
    console.log(response.data)
    // .then((response) => {
    //     console.log(response.data)})
    // .catch(error => console.log(error));
    




//   return (
//     <div>
//         <table className='posts'>
//             <tbody>
//                 <tr>
//                     <td className='bold 1 pu'>        
                        
//                         <Link href={""}><b>{response.title}</b>{", "}</Link>
//                         <Link href={""}>messageId number: <b>{response.id}</b> </Link>
//                         <Link href={""}>author/UserId: <b>{response.userId}</b> </Link>

//                         <span className='timePosted'>Message posted at: <b>8:00am</b></span>
//                     </td>
                    
//                 </tr>

//                  <tr>
//                     <td id='userId' className='user_comments'>
//                         <div className='post-comment'>
//                             <span className='POST-COMMENT'>{response.body}.</span>

//                         </div>
//                         <div className='like'>
//                             <b id='userId'>Likes: {response.reactions.likes}, {" "}</b>
//                             <b id='userId'>Dislikes: {response.reactions.dislikes}</b>
//                             <b id='userId'> Shares: 5</b>
//                         </div>                      
//                     </td>
                    
//                 </tr>

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
                    
//                 </tr> */}
//             </tbody>
//         </table>
//     </div>
//   )
}

export default ConversationPage