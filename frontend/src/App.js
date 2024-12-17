import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/footer/Footer";
import banner_men from "./components/Assets/banner_mens.png"
import banner_woman from "./components/Assets/banner_women.png"
import banner_kid from "./components/Assets/banner_kids.png"

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={banner_men} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={banner_woman} category="women" />} />
          <Route path="/kids" element={<ShopCategory  banner={banner_kid} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
