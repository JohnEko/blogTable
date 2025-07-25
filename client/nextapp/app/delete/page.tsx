'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import "./deletePost.css"
import CustomButton from '../form/CustomeButton';
import Link from 'next/link';


// dont parse asyn on your home function
const DeleteArticle =  ({params}: {params: {id: string}}) => {
    const router = useRouter()
    
   
  
    const handleDelete = async () => {
      await axios.delete(`http://localhost:8000/posts/${params.id}`)
      console.log("delete successfully")
      
       router.push("/")
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
                            label='Delete'
                            onClick={handleDelete}
                            className='handleDelete'
                          />
                          <span>Do you really want to delete this post</span>
                          </div>
                      </td>
                      
                    </tr>
                    
             </tbody>
         </table>

    </div>
)
}
export default DeleteArticle