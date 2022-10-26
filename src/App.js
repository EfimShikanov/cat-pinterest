import "./App.scss";
import CatsList from "./components/CatsList/CatsList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <CatsList />
      </div>
    </>
  );
}

export default App;
