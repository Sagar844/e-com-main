import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Productpage from "./Productpage";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Contact from "./Contactpage/Contact";
import CartPage from "./CartPage";
import Profile from "./Profile/Profile";
import Forgot from "./Forgot";
import Productsingle from "./Productsingle";
import Login from "./AuthRoute/Login";
import UserProvider from "./providers/UserProvider";
import AlertProvider from "./providers/AlertProvider";
import AuthRoute from "./AuthRoute";
import CartProvider from "./providers/CartProvider";
import Signup from "./AuthRoute/Signup";
import Alert from "./Alerts/Alert";
import DataNotFound from "./DataNotFound";

function App() {
  return (
    <div className="bg-gray-200  lg:bg-gray-200 h-screen container mx-auto  flex flex-col space-y-5">
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Navbar />
            <Alert />
            <Routes>
              <Route index element={<Productpage />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/product/:_id" element={<Productsingle />} />
              <Route
                path="login"
                element={
                  <AuthRoute>
                    <Login />
                  </AuthRoute>
                }
              />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Forgot" element={<Forgot />}></Route>
              <Route path="/Profile" element={<Profile />} />
              <Route path="*" element={<DataNotFound />} />

            </Routes>
            <Footer />
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}
export default App;
