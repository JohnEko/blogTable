import { create } from "zustand"

export type BlogPostModels = {
  id: number;
  title: string;
  body: string;
  views: number;
  userId: number
}

export type PostsDetailsResponse  = {
  posts: BlogPostModels[];

}
