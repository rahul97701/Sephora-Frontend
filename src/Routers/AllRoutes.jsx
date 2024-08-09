import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Navbar/Header";
import Navbar1 from "../components/Navbar/Navbar1";
// import CartPage from "../pages/CartPage";
// import PrivateRoutes from "./PrivateRoutes";
// import Products from "../pages/Products";
// import Product from "../pages/Product";

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/home" element={<Home />} />
      <Route path="/header" element={<Header />} /> */}
      <Route path="/Navbar" element={<Navbar1 />} />
      {/* <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <CartPage />
          </PrivateRoutes>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} /> */}
    </Routes>
  );
};

export default AllRoutes;