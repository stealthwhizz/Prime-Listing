import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import buy_banner from "./Components/Assets/allad.jpg";
import Rent_banner from "./Components/Assets/allad.jpg";
import ads_banner from "./Components/Assets/allad.jpg";
import LoginSignup from "./Pages/LoginSignup";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/Buy" element={<ShopCategory banner={buy_banner} category="Buy" />} />
          <Route path="/Rent" element={<ShopCategory banner={Rent_banner} category="Rent" />} />
          <Route path="/Ads" element={<ShopCategory banner={ads_banner} category="Ads" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
