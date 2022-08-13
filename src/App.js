import React from "react";
import {PropertyPage} from "./Pages/PropertyPage";
import {ProductPage} from "./Pages/ProductPage";
import { Routes, Route} from "react-router-dom";

import Home_page from "./Pages/Home_page";
import Contact_page from './Pages/Contact_page';
import Header from './Components/LandingPage-Compo/Header';
import {WhatappBtn} from './Components/LandingPage-Compo/WhatappBtn';
import {BacktoTop} from './Components/LandingPage-Compo/WhatappBtn';

function App() {
  return (
    <div className="App">
      <Header />
      <WhatappBtn/>
      <BacktoTop />
      <Routes>
        <Route index path="/" element={<Home_page />} />
        <Route path="/propertyPage" element={<PropertyPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contactpage" element={<Contact_page />} />
      </Routes>
    </div>
  );
}
export default App;
