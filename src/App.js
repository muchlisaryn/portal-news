import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Politic, Lifestyle, Tech } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lifestyle" element={<Lifestyle />} />
        <Route path="/Tech" element={<Tech />} />
        <Route path="/Politic" element={<Politic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
