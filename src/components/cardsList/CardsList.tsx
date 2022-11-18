import React, { useEffect } from "react";
import styles from "./CardsList.module.scss";
import { useAppSelector, useOnScreen } from "../../app/hooks";
import { Cat } from "../../app/types";
import Card from "../card/Card";

interface CardsListProps {
  loadMore: () => void;
  isLoading: boolean;
}

const CardsList: React.FC<CardsListProps> = ({ loadMore, isLoading }) => {
  const cats = useAppSelector((state) => state.cats);
  const currentPage = useAppSelector((state) => state.routing.currentPage);

  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting) {
      loadMore();
      observer?.disconnect();
    }
  }, [isIntersecting, loadMore, observer]);

  const renderCards = (cats: Cat[]): JSX.Element[] => {
    return cats.map((cat: Cat, index: number) => {
      if (index === cats.length - 1 && currentPage !== "favorite") {
        return (
          <Card
            key={index}
            id={cat.id}
            isLiked={cat.isLiked}
            url={cat.url}
            measureRef={measureRef}
          />
        );
      }
      return (
        <Card key={index} id={cat.id} isLiked={cat.isLiked} url={cat.url} />
      );
    });
  };

  return (
    <>
      <div id={"content"} className={styles.content}>
        {currentPage === "all"
          ? renderCards(cats.catsList)
          : renderCards(cats.favoriteCatsList)}
      </div>
      {isLoading && currentPage !== "favorite" && (
        <div className={styles.spinner__container}>
          <div className={styles.spinner}>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardsList;
