import type { NextPage } from "next";
import Post, { PostProps } from "../../components/community/post/Post";

import styles from "./community.module.scss";

const placeholderPosts: PostProps[] = [
  {
    id: "1",
    userImageUrl: "https://picsum.photos/200/200",
    userName: "Jeremy Buendia",
    text: "Short description of the post",
    imageUrl: "https://picsum.photos/500/500",
    likes: 11,
    comments: 3,
  },
  {
    id: "1",
    userImageUrl: "https://picsum.photos/200/200",
    userName: "1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo dolorum voluptatum, saepe adipisci neque cupiditate cumque blanditiis corporis? Eos accusamus soluta aut officiis dicta eaque nemo ad voluptatem facere Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo dolorum voluptatum, saepe adipisci neque cupiditate cumque blanditiis corporis? Eos accusamus soluta aut officiis dicta eaque nemo ad voluptatem facere",
    imageUrl: "https://picsum.photos/500/500",
    likes: 11,
    comments: 3,
  },
  {
    id: "1",
    userImageUrl: "https://picsum.photos/200/200",
    userName: "1",
    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    imageUrl: "https://picsum.photos/500/500",
    likes: 11,
    comments: 3,
  },
  {
    id: "1",
    userImageUrl: "https://picsum.photos/200/200",
    userName: "1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo dolorum voluptatum, saepe adipisci neque cupiditate cumque blanditiis corporis? Eos accusamus soluta aut officiis dicta eaque nemo ad voluptatem facere",
    imageUrl: "https://picsum.photos/500/500",
    likes: 11,
    comments: 3,
  },
  {
    id: "1",
    userImageUrl: "https://picsum.photos/200/200",
    userName: "1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo dolorum voluptatum, saepe adipisci neque cupiditate cumque blanditiis corporis? Eos accusamus soluta aut officiis dicta eaque nemo ad voluptatem facere",
    imageUrl: "https://picsum.photos/500/500",
    likes: 11,
    comments: 3,
  },
];

const Community: NextPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.header}>Recent posts</h1>
      {placeholderPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Community;
