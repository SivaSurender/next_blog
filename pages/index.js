import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/Hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-nextjs",
    title: "Getting started with next",
    excerpt:
      "NextJS is the react framework production which makes building full stack apps at ease",
    image: "getting-started-nextjs.png",

    date: "2025-01-20",
  },
  {
    slug: "getting-started-nextjs",
    title: "Getting started with next",
    excerpt:
      "NextJS is the react framework production which makes building full stack apps at ease",
    image: "getting-started-nextjs.png",

    date: "2025-02-20",
  },
  {
    slug: "getting-started-nextjs",
    title: "Getting started with next",
    excerpt:
      "NextJS is the react framework production which makes building full stack apps at ease",
    image: "getting-started-nextjs.png",

    date: "2025-03-20",
  },
  {
    slug: "getting-started-nextjs",
    title: "Getting started with next",
    excerpt:
      "NextJS is the react framework production which makes building full stack apps at ease",
    image: "getting-started-nextjs.png",

    date: "2025-04-20",
  },
];
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
