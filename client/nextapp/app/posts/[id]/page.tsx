import React from 'react'
import Link from 'next/link'
import "./posts.css"


const BlogPage = () => {
  return (
    <div>
        <table className='posts'>
            <tbody>
                <tr>
                    <td className='bold 1 pu'>
                        <Link href={""}>This is the user message title </Link>
                        <Link href={""}>messageId number: <b>msg136006131</b> </Link>
                        <Link href={""}>author/UserId: <b>8468192.1</b> </Link>

                        <span className='timePosted'>Message posted at: <b>8:00am</b></span>
                    </td>
                </tr>

                 <tr>
                    <td id='userId' className='user_comments'>
                        <div className='post-comment'>
                            <span className='POST-COMMENT'>User comment from the message posted </span>

                        </div>
                        <div className='like'>
                            <b id='userId'>16 Likes{", "}</b>
                            <b id='userId'>5 Shares</b>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default BlogPage