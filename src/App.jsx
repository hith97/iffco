import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListing from "./pages/ProductListing"
import AppLayout from "./layouts/Applayout";
import ProductSingle from "./pages/ProductSingle";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<Aboutus />} /> 
            <Route path="/products" element={<ProductListing />} />
            <Route path="/:categorySlug/:productSlug" element={<ProductSingle />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
