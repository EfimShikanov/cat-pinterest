import React from "react";
import styles from "./Card.module.scss";
import LikeButton from "../likeButton/LikeButton";

interface CardProps {
  id: string;
  isLiked: boolean;
  url: string;
  measureRef?: (node: HTMLDivElement) => void;
}

const Card: React.FC<CardProps> = ({ id, isLiked, url, measureRef }) => {
  return (
    <div className={styles.card} ref={measureRef}>
      <img
        style={{ background: "black" }}
        className={styles.card__image}
        src={url}
        alt=""
        loading={"lazy"}
      />
      <LikeButton isLiked={isLiked} id={id} />
    </div>
  );
};

export default Card;
