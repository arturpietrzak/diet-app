import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faComments,
} from "@fortawesome/free-regular-svg-icons";

import styles from "./Post.module.scss";
import { useState } from "react";

import { rgbDataURL } from "../../../utils/rgbDataUrl";

export type PostProps = {
  id: string;
  userImageUrl: string;
  userName: string;
  text: string;
  imageUrl: string;
  likes: number;
  comments: number;
  isLiked: boolean;
};

const imageLoader = (src: string, height: number, width: number) => {
  return `https://picsum.photos/${width}/${height}`;
};

const Post = ({
  id,
  userImageUrl,
  userName,
  text,
  imageUrl,
  likes,
  comments,
  isLiked,
}: PostProps) => {
  const [isLikedByUser, setIsLikedByUser] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLikeClick = () => {
    if (isLikedByUser) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLikedByUser(!isLikedByUser);
  };

  return (
    <div className={styles.post}>
      <div className={styles.userInfo}>
        <div className={styles.imageContainer}>
          <Image
            loader={() => imageLoader(userImageUrl, 50, 50)}
            className={styles.image}
            layout="responsive"
            height={100}
            width={100}
            src={userImageUrl}
            alt="user"
          />
        </div>
        <div className={styles.userName}>{userName}</div>
      </div>
      <Link href={`/community/${id}`}>
        <div className={styles.content}>
          <div className={styles.postText}>{text}</div>
          <div className={styles.postImage}>
            <Image
              loader={() => imageLoader(userImageUrl, 500, 500)}
              height="100"
              width="100%"
              layout="responsive"
              src={imageUrl}
              alt="post"
              placeholder="blur"
              blurDataURL={rgbDataURL(111, 111, 111)}
            />
          </div>
        </div>
      </Link>
      <div className={styles.ratings}>
        <span className={styles.likes} onClick={handleLikeClick}>
          <FontAwesomeIcon
            className={`${styles.icon} ${
              isLikedByUser ? styles.iconLiked : ""
            }`}
            icon={isLikedByUser ? faHeart : farHeart}
          />
          <span>{likesCount}</span>
        </span>
        <span className={styles.comments}>
          <FontAwesomeIcon className={styles.icon} icon={faComments} />
          <span>{comments}</span>
        </span>
      </div>
    </div>
  );
};
export default Post;
