import React, { useState } from "react";
import styles from "../card/Card.module.scss";
import ButtonActive from "./buttons/ButtonActive";
import ButtonHovered from "./buttons/ButtonHovered";
import ButtonEmpty from "./buttons/ButtonEmpty";
import { useAppDispatch } from "../../app/hooks";
import { addToFavorite, removeFromFavorite } from "../../app/slices/catsSlice";

interface LikeButtonProps {
  isLiked: boolean;
  id: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();

  const renderButton = () => {
    return isLiked ? (
      <ButtonActive />
    ) : isHovered ? (
      <ButtonHovered />
    ) : (
      <ButtonEmpty />
    );
  };

  const clickHandler = () => {
    isLiked ? dispatch(removeFromFavorite(id)) : dispatch(addToFavorite(id));
  };

  return (
    <div
      className={styles.card__button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => clickHandler()}
    >
      {renderButton()}
    </div>
  );
};

export default LikeButton;
