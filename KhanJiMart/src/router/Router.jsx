import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Account = lazy(() => import("../pages/Account"));
const About  = lazy(()=> import("../pages/About"));
const ForgotPassword  = lazy(()=> import("../pages/ForgotPassword"));
const NewPassword  = lazy(()=> import("../pages/NewPassword"));


const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Routes>
          {/* Pages Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/new-password" element={<NewPassword />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
