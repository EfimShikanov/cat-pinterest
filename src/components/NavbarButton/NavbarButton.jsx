import React from "react";
import styles from "./NavbarButton.module.scss";
import { useDispatch } from "react-redux";
import { setPage } from "../../slices/routingSlice";

const NavbarButton = ({ name, page, currentPage }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setPage(page));
  };

  return (
    <div
      className={styles.navbar__button}
      onClick={clickHandler}
      style={{
        background: currentPage === page && "#1E88E5",
        color: currentPage === page && "#ffffff",
        opacity: currentPage === page && "1",
      }}
    >
      {name}
    </div>
  );
};

export default NavbarButton;
