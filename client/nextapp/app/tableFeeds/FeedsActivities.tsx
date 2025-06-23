import Link from "next/link"
import styles from "./feeds.module.css"
import Topics from "../topicsFeed/topicsActivities"



const FeedComponent = () => {
    return(
        <div className={styles.container}>
            {/* lets style our table on page modules.css*/}
           
            <table>
                <thead>
                    <tr>
                        <td>
                            <b><Link href="/news">Featured Topic</Link></b>
                            /
                            <b><Link href={"/"}>Facbook</Link></b>
                            /
                            <b><Link href={"/"}>Instagram</Link></b>
                        </td>
                        
                    </tr>

                </thead>

                <tbody>
                    <tr>
                        <td>
                            Anambra Man Shocked As Children Surprise Him With Brand New SUV On Birthday
                       
                        </td>
                       
                    </tr>
                    <tr>
                        <td>
                            AriseTV Praises Omokri For Proving that 30Km Completed on Lagos-Calabar Highway
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Your Good Work has killed coalition</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Oshiomhole Vs Air Peace: He Beat Our Staff - Management
                        </td>
                    </tr>
                    <tr>
                        <td>
                            50% Of Nigerian Minimum Wage Earners Spend All Income On Food – SBM Intelligence
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
                           » I Was A Senior Registrar In UNTH But Pushed Barrow In UK - Medical Doctor
                        </td>
                    </tr>
                    <tr>
                        <td>
                            » Ngerians Must Rise Against One-Party State
                        </td>
                    </tr>
                    <tr>
                        <td>
                           » President Tinubu Commissions New Link Roads In Abuja Expanding Urban Network
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
export default FeedComponent