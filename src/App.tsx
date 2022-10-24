import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Banner from "./common/banner";
import Footer from "./common/footer";
import NavBar from "./common/navbar";
import Services from "./common/services";
import AboutUs from "./pages/aboutus/aboutus";
import Cart from "./pages/cart/cart";
import Catalog from "./pages/catalog/catalog";
import Checkout from "./pages/checkout/checkout";
import ContactUs from "./pages/contactus/contactus";
import FAQ from "./pages/faq/faq";
import Homepage from "./pages/homepage/homepage";
import Login from "./pages/login/login";
import Product from "./pages/product/product";
import { SERVER_ENDPOINT } from "./utils/endpoint";

function App() {
  useEffect(() => {
    // unsleep server
    axios.get(SERVER_ENDPOINT);
  }, []);
  return (
    <>
      <Banner />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog/:category" element={<Catalog />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
      <Services />
      <Footer />
    </>
  );
}

export default App;
