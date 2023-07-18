import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { Login } from "../pages/Login.jsx";
import { ProductDetail } from "../pages/ProductDetail.jsx";
import { UserInfo } from "../pages/UserInfo.jsx";
import { Register } from "../pages/Register.jsx";
import { AddProduct } from "../pages/AddProduct.jsx";
import { StoreDetail } from "../pages/StoreDetail.jsx";
import { UserDeals } from "../pages/UserDeals.jsx";
import { WishList } from "../pages/WishList.jsx";

export function MainContent() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/StoreDetail" element={<StoreDetail />} />
        <Route path="/UserDeals" element={<UserDeals />} />
        <Route path="/WishList" element={<WishList />} />
      </Routes>
    </main>
  );
}