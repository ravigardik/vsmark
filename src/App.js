import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./Website/Master";
import Index from "./Website/MainComponent/Index";
import Shop from "./Website/Pages/Shop";
import SubcatagorisProduct from "./Website/Pages/SubcatagorisProduct";
import Register from "./Website/Aauthentication/Register";
import Login from "./Website/Aauthentication/Login";
import Cartview from "./Website/Pages/Cartview";
import Wishlist from "./Website/Pages/Wishlish";
import Search from "./Website/Pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master Comp={Index} />} />
          <Route path="/shop" element={<Master Comp={Shop} />} />
          <Route
            path="/product-shop/:cat_id/:sub_id"
            element={<Master Comp={SubcatagorisProduct} />}
          />
          <Route path="/register" element={<Master Comp={Register} />} />
          <Route path="/login" element={<Master Comp={Login} />} />
          <Route path="/viewcart" element={<Master Comp={Cartview} />} />
          <Route path="/wishlist" element={<Master Comp={Wishlist} />} />
          <Route path="/search" element={<Master Comp={Search} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
