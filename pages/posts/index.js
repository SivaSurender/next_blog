import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-nextjs",
//     title: "Getting started with next",
//     excerpt:
//       "NextJS is the react framework production which makes building full stack apps at ease",
//     image: "getting-started-nextjs.png",

//     date: "2025-01-20",
//   },
//   {
//     slug: "getting-started-nextjs",
//     title: "Getting started with next",
//     excerpt:
//       "NextJS is the react framework production which makes building full stack apps at ease",
//     image: "getting-started-nextjs.png",

//     date: "2025-02-20",
//   },
//   {
//     slug: "getting-started-nextjs",
//     title: "Getting started with next",
//     excerpt:
//       "NextJS is the react framework production which makes building full stack apps at ease",
//     image: "getting-started-nextjs.png",

//     date: "2025-03-20",
//   },
//   {
//     slug: "getting-started-nextjs",
//     title: "Getting started with next",
//     excerpt:
//       "NextJS is the react framework production which makes building full stack apps at ease",
//     image: "getting-started-nextjs.png",

//     date: "2025-04-20",
//   },
// ];
export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}
export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
