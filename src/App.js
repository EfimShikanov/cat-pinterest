import "./App.scss";
import CardsList from "./components/CatsList/CardsList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <CardsList />
      </div>
    </>
  );
}

export default App;
