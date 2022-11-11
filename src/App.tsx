import React from "react";
import styles from "./App.module.scss";
import CardsList from "./components/cardsList/CardsList";
import Navbar from "./components/navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <CardsList />
      </div>
    </>
  );
};

export default App;
