import fs from "fs";
import path from "path";

import matter from "gray-matter";
// join all folder path and look for posts folder
const postDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postDirectory);
}
export function getPostData(filename) {
  const postSlug = filename.replace(/\.md$/, ""); // removes file extension

  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}
export function getAllPosts() {
  const postFiles = getPostsFiles();

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
