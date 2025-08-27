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
import SingleNews from "./pages/SingleNews";
import SingleCSR from "./pages/SingleCSR";
import CareerSingle from "./pages/CareerSingle";
import Blogs from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Preloader from "./components/Preloader";


function App() {
  return (
    <>
    <Preloader>
      <Router>
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
            <Route path="/news/:id" element={<SingleNews />} /> 
            <Route path="/csr/:id" element={<SingleCSR />} /> 
            <Route path="/career/:id" element={<CareerSingle />} />
            <Route path="/blogs" element={<Blogs />} /> 
            <Route path="/blog/:slug" element={<SingleBlog />} />
            
          </Route>
        </Routes>
      </Router>
      </Preloader>
    </>
  );
}

export default App;
