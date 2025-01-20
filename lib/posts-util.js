import fs from "fs";
import path from "path";

import matter from "gray-matter";
// join all folder path and look for posts folder
const postDirectory = path.join(process.cwd(), "posts");

function getPostData(filename) {
  const filePath = path.join(postDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = filename.replace(/\.md$/, ""); // removes file extension
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}
export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}
export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featureDPosts = allPosts.filter((post) => post.isFeatured);
  return featureDPosts;
}
