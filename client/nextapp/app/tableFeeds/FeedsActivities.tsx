 'use client'

import Link from "next/link"
// import { useState, useEffect } from "react"
import styles from "./feeds.module.css"
import Topics from "../topicsFeed/topicsActivities"
import Trending from "../trendingFeeds/trendingActivities"
import apiService from "../api/apiService"
import {PostsDetailsResponse} from "../hooks/BlogPost"
import React, { useEffect, useState } from "react"
import axios from 'axios'


export type UserType = {
    id: string,
    title: string,
    body: string,
    postId: string,
    likes: number,
    dislikes: number

}

interface UserArticleProps {
    id: string
    title: string
}


const FeedComponent: React.FC<UserArticleProps> =  ({
    id,
    title
}) => {
    
    const [data, setData] = useState<UserType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    //the aborted function is when user click a link and before 
    // it response the user click another link very fast
    useEffect(() =>{
         const abortCount = new AbortController()
         const fetchUser = async () => {
            try {
                const res = await axios.get('http://localhost:8000/');
                if(!res.data){
                    throw Error("could not fetch data from the resources")
                }
                setData(res.data);
                setIsLoading(false);
                
            } catch (err) {
                if(err === 'AbortError'){
                    console.log('fetch aborted')
                } else {
                console.log(err);
                //setError(err)
                }
            }
        };
        fetchUser();
        return () => abortCount.abort()
    }, []);

    return(
         
        <div className={styles.main}>
            
            {/* lets style our table on page modules.css*/}
            <div className="item-1">
                <Topics />
            </div>
            <div className={styles.container}>
                <div className="item-2">
                    <table className="table-bords">
                         <tbody>
                            <tr>
                                <td>
                                    {/* <div className="feature"> */}
                                        <b><Link href="/news">Featured Topic {"/"} </Link></b>
                                        
                                        <b><Link href={"/"}>Facbook {"/"} </Link></b>
                                        
                                        <b><Link href={"/"}>Instagram</Link></b>
                                    {/* </div> */}
                                </td>
                                
                            </tr>

                            <tr>
                                {/* loop or map through all the post and title */}
                                <td className="feed-component">
                                    {isLoading && <div>...isLoading</div>}
                                    {data.map((item) =>(
                                        <article key={item.id}>
                                             » <Link href={`/posts/${item.id}`}>{item.title}</Link> «
                                         <hr />
                                         </article>
                                    ))}
                                   
                                    
                                </td>
                            
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="item-3">
                 <Trending />
            </div>
        </div>

    )
}
export default FeedComponent