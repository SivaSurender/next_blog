import Head from "next/head";
import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Bala's Blog</title>
        <meta
          name="description"
          content="Programming and web development posts."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
