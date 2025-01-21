import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// const DUMMY_POST = {
//   slug: "getting-started-nextjs",
//   title: "Getting started with next",
//   content: "# This is a sample post",
//   image: "getting-started-nextjs.png",

//   date: "2025-04-20",
// };

export default function PostContent({ post }) {
  const customRenderers = {
    // img(image) {
    //   console.log({ s: `${image.src}` }, "fdgdgf");
    //   return (
    //     <Image src={`${image.src}`} alt={image.alt} width={600} height={300} />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            {" "}
            <Image
              src={`${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code({ className, children }) {
      return (
        <SyntaxHighlighter
          language={className.split("-")[1]}
          children={children}
          style={atomDark}
        />
      );
    },
  };
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
