import React, { useEffect } from "react";
import styles from "./CardsList.module.scss";
import { setCats } from "../../slices/catsSlice";
import { useSelector, useDispatch } from "react-redux";
import CatsService from "../../services/catsService";
import Card from "../Card/Card";

const CardsList = () => {
  const catsService = new CatsService();
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.cats.data);
  const currentPage = useSelector((state) => state.routing.currentPage);

  useEffect(() => {
    catsService.getCats(20, setCats).then((response) => {
      dispatch(setCats(response));
    });
  }, []);

  const renderCards = () => {
    return cats.map((cat, index) => {
      if (currentPage === "all") {
        return (
          <Card key={index} id={cat.id} url={cat.url} isLiked={cat.isLiked} />
        );
      }
      if (currentPage === "favourite" && cat.isLiked) {
        return (
          <Card key={index} id={cat.id} url={cat.url} isLiked={cat.isLiked} />
        );
      }
    });
  };

  return (
    <div className={styles.list}>
      {cats.length > 0 && renderCards()}
      {cats.length === 0 && "loading"}
    </div>
  );
};

export default CardsList;
