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
import Contactus from "./pages/Contactus";
import Presence from "./pages/Presence";
import QualityPolicy from "./pages/QualityPolicy";
import Services from "./pages/Services";
import WhatWeAre from "./pages/WhatWeAre";
import WhereWeAre from "./pages/WhereWeAre";
import News from "./pages/News";
import Media from "./pages/Media";
import Video from "./pages/Video";
import Privacy from "./pages/Privacy";
import Career from "./pages/Career";
import AnnualReport from "./pages/AnnualReport";
import CSR from "./pages/CSR";
import KYSB from "./pages/KYSB";
import Events from "./pages/Event";
import WhoWeAre from "./pages/WhoWeAre";
import LatestFromIffcoMCPage from "./pages/LatestFromIffcoMC";


function App() {
  return (
    <>
      <Router basename="iffcoweb">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<Aboutus />} /> 
            <Route path="/products" element={<ProductListing />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/presence" element={<Presence />} /> 
            <Route path="/quality-policy" element={<QualityPolicy />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/whatweare" element={<WhatWeAre />} /> 
            <Route path="/whereweare" element={<WhereWeAre />} /> 
            <Route path="/news" element={<News />} /> 
            <Route path="/media" element={<Media />} /> 
            <Route path="/videos" element={<Video />} /> 
            <Route path="/privacy-policy" element={<Privacy />} /> 
            <Route path="/career" element={<Career />} /> 
            <Route path="/annual-report" element={<AnnualReport />} /> 
            <Route path="/csr" element={<CSR />} /> 
            <Route path="/ksby" element={<KYSB />} /> 
            <Route path="/events" element={<Events />} />
            <Route path="/whoweare" element={<WhoWeAre />} />   
            <Route path="/:categorySlug/:productSlug" element={<ProductSingle />} />
            <Route path="/latestfromiffcomc" element={<LatestFromIffcoMCPage />} />   
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
