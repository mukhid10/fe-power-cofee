import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./Sreens/navigation/Navigation";
import Home from "./Sreens/homeScreen/Home";
import Cart from "./Sreens/cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cofee from "./Sreens/cofee/Cofee";
import Promo from "./Sreens/promo/Promo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/cofee" element={<Cofee />} />
          <Route path="/discount" element={<Promo />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
