import React from "react";
import styles from "./Card.module.scss";
import LikeButton from "../likeButton/LikeButton"

interface CardProps {
  id: string;
  isLiked: boolean;
  url: string;
}

const Card: React.FC<CardProps> = ({ id, isLiked, url }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={url} alt="" />
      <LikeButton isLiked={isLiked} id={id} />
    </div>
  );
};

export default Card;
