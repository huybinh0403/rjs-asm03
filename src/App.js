import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./page/HomePage/HomePage";
import ShopPage from "./page/ShopPage/ShopPage";
import DetailPage from "./page/DetailPage/DetailPage";
import CartPage from "./page/CartPage/CartPage";
import CheckoutPage from "./page/CheckoutPage/CheckoutPage";
import LoginPage from "./page/LoginPage/LoginPage";
import RegisterPage from "./page/RegisterPage/RegisterPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/detail/:productId" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
