'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import CustomButton from '../form/CustomeButton';


// dont parse asyn on your home function
const DeleteArticle =  ({params}: {params: {id: string}}) => {
    const router = useRouter()
    
   
  
    const handleDelete = async () => {
      const res = await axios.delete(`http://localhost:8000/posts/${params.id}`)
      console.log("delete successfully")
      
       router.push("/")
    }
   



return (
    <div>delete

      <CustomButton 
        label='Delete'
        onClick={handleDelete}
      />
    </div>
)
}
export default DeleteArticle