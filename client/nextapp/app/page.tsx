import Image from "next/image";
import styles from "./page.module.css";
import FeedComponent from "./tableFeeds/FeedsActivities";
import Topics from "./topicsFeed/topicsActivities";
import Trending from "./trendingFeeds/trendingActivities";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Topics />
        <FeedComponent /> 
        <Trending />
      </main>
    </div>
  );
}
