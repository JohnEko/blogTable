import { create } from "zustand"

export type BlogPostModels = {
  id: number;
  title: string;
  body: string;
  views: number;
  userId: number
  reactions: {"likes": number, "dislikes":25}
}

export type PostsDetailsResponse  = {
  posts: BlogPostModels[];

}
