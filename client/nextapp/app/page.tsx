import Image from "next/image";
import styles from "./page.module.css";
import FeedComponent from "./tableFeeds/FeedsActivities";
import Topics from "./topicsFeed/topicsActivities";
import Trending from "./trendingFeeds/trendingActivities";
import PostAdvert from "./postadvert/advert";
import Categories from "./Categories";

export default function Home() {
  return (
    <div className={styles.page}>
       <PostAdvert />
       <Categories />
      <main className={styles.main}>
        <FeedComponent /> 
      </main>
    </div>
  );
}
