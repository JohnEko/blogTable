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
    reactions: string,
    user: string

}

interface UserArticleProps {
    id: string
    title: string
}


const FeedComponent: React.FC<UserArticleProps> =  ({
    id,
    title
}) => {
    
    const [data, setData] = useState<any[]>([])

    useEffect(() =>{
        const fetchUser = async () =>{
        const res = await axios.get('http://localhost:8000');
        setData(res.data)
        }
        fetchUser()
    })
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
                                    {data.map((id, title) =>(
                                        <article key={title}>
                                             » <Link href={`posts/{id}`}>{id.title}</Link> «
                                         <hr />
                                         </article>
                                    ))}
                                   
                                    
                                </td>
                            
                            </tr>

                            {/* <tr>
                                <td>
                                   »  AriseTV Praises Omokri For Proving that 30Km Completed on Lagos-Calabar Highway «
                                </td>
                            </tr>
                            <tr>
                                <td>
                                   »  Your Good Work has killed coalition «
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    » Oshiomhole Vs Air Peace: He Beat Our Staff - Management «
                                </td>
                            </tr>
                            <tr>
                                <td>
                                   »  50% Of Nigerian Minimum Wage Earners Spend All Income On Food – SBM Intelligence «
                                </td>
                            </tr>
                            <tr>
                                <td>
                                » Saudi $5 Billion Loan To Nigeria Hangs In The Balance After Crude Prices Plunge «
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    » Halima Suleiman Zakari Visits Jahun Vesicovaginal Fistula (VVF) Hospital «
                                </td>
                            </tr>
                            <tr>
                                <td>
                                » I Was A Senior Registrar In UNTH But Pushed Barrow In UK - Medical Doctor «
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    » Ngerians Must Rise Against One-Party State «
                                </td>
                            </tr>
                            <tr>
                                <td>
                                » President Tinubu Commissions New Link Roads In Abuja Expanding Urban Network «
                                </td>
                            </tr> */}
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