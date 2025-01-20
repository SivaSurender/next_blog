import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started-nextjs",
  title: "Getting started with next",
  content: "# This is a sample post",
  image: "getting-started-nextjs.png",

  date: "2025-04-20",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
