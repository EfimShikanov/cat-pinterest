import React from "react";
import styles from "./Navbar.module.scss";
import NavbarButton from "../NavbarButton/NavbarButton";
import { useSelector } from "react-redux";

const Navbar = () => {
  const routing = useSelector((state) => ({ ...state.routing }));

  const renderButtons = () => {
    return routing.buttons.map((button, index) => {
      return (
        <NavbarButton
          key={index}
          name={button.name}
          page={button.page}
          currentPage={routing.currentPage}
        />
      );
    });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>{renderButtons()}</div>
    </div>
  );
};

export default Navbar;
