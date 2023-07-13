import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NewBie1 from "./pages/NewBie1.js";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewBie1" element={<NewBie1 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rotas;
