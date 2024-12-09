import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./assets/features/Navigation/Navigation";
import Home from "./assets/components/Home/Home";
import Create from "./assets/features/Create/Create";
import List from "./assets/features/List/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Create />} />
          <Route path="/tasklist" element={<List />} />
          <Route path="/about" element={<p>TEST</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
