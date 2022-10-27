import React, { useState } from "react";
import styles from "../Card/Card.module.scss";
import ButtonFilled from "./ButtonFilled";
import ButtonHovered from "./ButtonHovered";
import ButtonEmpty from "./ButtonEmpty";
import { useDispatch } from "react-redux";
import { setIsLiked } from "../../slices/catsSlice";

const CardButton = ({ isCardHovered, isLiked, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setIsLiked(id));
  };

  const renderButton = () => {
    return isCardHovered ? (
      isLiked ? (
        <ButtonFilled />
      ) : isHovered ? (
        <ButtonHovered />
      ) : (
        <ButtonEmpty />
      )
    ) : (
      <></>
    );
  };

  return (
    <div
      className={styles.card__button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={clickHandler}
    >
      {renderButton()}
    </div>
  );
};

export default CardButton;
