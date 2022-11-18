import React, { useCallback, useEffect, useState } from "react";
import styles from "./App.module.scss";
import CardsList from "./components/cardsList/CardsList";
import Navbar from "./components/navbar/Navbar";
import { Cat } from "./app/types";
import catsService from "./app/services/catsService";
import { setCats } from "./app/slices/catsSlice";
import { useAppDispatch } from "./app/hooks";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const newCats: Cat[] | void = await catsService.getCats(30);
      if (newCats) {
        dispatch(setCats(newCats));
        setIsLoading(false);
      }
    })();
  }, [dispatch, page]);

  const loadMore = useCallback(() => {
    setPage((page) => page + 1);
    setIsLoading(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <CardsList loadMore={loadMore} isLoading={isLoading}/>
      </div>
    </>
  );
};

export default App;
