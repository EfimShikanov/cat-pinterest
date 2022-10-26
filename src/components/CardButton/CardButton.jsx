import React, { useState } from "react";
import ButtonFilled from "./ButtonFilled";
import ButtonHovered from "./ButtonHovered";
import ButtonEmpty from "./ButtonEmpty";

const CardButton = ({ isCardHovered, isLiked, id }) => {
  const [isHovered, setIsHovered] = useState(false);

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
      onMouseEnter={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderButton()}
    </div>
  );
};

export default CardButton;
