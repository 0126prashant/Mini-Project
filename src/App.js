import "./App.css";
import { BookCard } from "./Components/BookCard";
import { Navbar } from "./Components/Navbar";
import { Homepage } from "./Pages/Homepage";
import { MainRoutes } from "./Pages/MainRoutes";

function App() {
  //Do not modify anything in this file
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
