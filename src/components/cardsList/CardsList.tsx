import React, { useEffect, useState } from "react";
import styles from "./CardsList.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Cat } from "../../app/types";
import Card from "../card/Card";
import catsService from "../../app/services/catsService";
import { setCats } from "../../app/slices/catsSlice";

const CardsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const cats = useAppSelector((state) => state.cats);
  const currentPage = useAppSelector((state) => state.routing.currentPage);

  useEffect(() => {
    catsService.getCats(30, dispatch, setCats);
  }, []);

  const renderCards = (cats: Cat[]): JSX.Element[] => {
    return cats.map((cat: Cat) => {
      return (
        <Card key={cat.id} id={cat.id} isLiked={cat.isLiked} url={cat.url} />
      );
    });
  };

  return (
    <div className={styles.content}>
      {!cats.catsList.length ? (
        <div>Loading</div>
      ) : currentPage === "all" ? (
        renderCards(cats.catsList)
      ) : (
        renderCards(cats.favoriteCatsList)
      )}
    </div>
  );
};

export default CardsList;
