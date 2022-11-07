import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardButton from "../CardButton/CardButton";

const Card = ({ url, id, isLiked }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      style={{
        boxShadow:
          isHovered &&
          "0 6px 5px rgba(0, 0, 0, 0.24), 0 9px 18px rgba(0, 0, 0, 0.18)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.card__content}>
        <div className={styles.content__image}>
          <img src={url} alt="" />
        </div>
      </div>
      {<CardButton isCardHovered={isHovered} isLiked={isLiked} id={id} />}
    </div>
  );
};

export default Card;
