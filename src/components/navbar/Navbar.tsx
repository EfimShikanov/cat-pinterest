import React from "react";
import styles from "./Navbar.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setPage } from "../../app/slices/routingSlice";
import { Button, Page } from "../../app/types";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.routing.currentPage);
  const buttons: Button[] = useAppSelector((state) => state.routing.buttons);

  const clickHandler = (page: Page) => {
    page !== currentPage && dispatch(setPage(page));
  };

  const renderButtons = (): JSX.Element[] => {
    return buttons.map((button: Button, index: number) => {
      return (
        <div
          className={styles.navbar__item}
          style={
            button.page === currentPage
              ? {
                  background: "#1E88E5",
                  color: "#ffffff",
                  opacity: "1",
                }
              : {}
          }
          key={index}
          onClick={() => clickHandler(button.page)}
        >
          {button.name}
        </div>
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
