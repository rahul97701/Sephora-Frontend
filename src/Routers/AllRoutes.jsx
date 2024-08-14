  import { Route, Routes } from "react-router-dom";
  import Home from "../pages/Home";
  import CartPage from "../pages/CartPage";
  import PrivateRoutes from "./PrivateRoutes";
  import Products from "../pages/Products";
  import Product from "../pages/Product";

  const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <CartPage />
            </PrivateRoutes>
          }
        />
        <Route path="/product" element={<Product />} /> 
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    );
  };

  export default AllRoutes;