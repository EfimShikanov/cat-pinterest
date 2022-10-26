import React, { useState } from "react";
import styles from "./Card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CardButton from "../CardButton/CardButton";

const Card = ({ url, id, isLiked }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.card__content}>
        <div className={styles.content__image}>
          <img src={url} alt="" />
        </div>
      </div>
      <div className={styles.card__button}>
        {<CardButton isCardHovered={isHovered} isLiked={isLiked} id={id} />}
      </div>
    </div>
  );
};

export default Card;
