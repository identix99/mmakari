import React ,{useEffect,useState} from "react";
import { PropertyPage } from "./Pages/PropertyPage";
import { ProductPage } from "./Pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import Home_page from "./Pages/Home_page";
import Contact_page from './Pages/Contact_page';
import Latest_news_page from './Pages/Latest_news_page';
import Latest_news_blog from './Pages/Latest_news_blog';
import ErorrPage from "./Pages/ErorrPage";
import Header from "./Components/LandingPage-Compo/Header";
import Footer from "./Components/LandingPage-Compo/Footer";
import { WhatappBtn } from "./Components/LandingPage-Compo/WhatappBtn";
import { BacktoTop } from "./Components/LandingPage-Compo/WhatappBtn";
import { Loader } from "./Components/LandingPage-Compo/WhatappBtn";

function App() {

  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 2500);
  }, []);

  return (
    <>
      <div className="App">
        {isLoading ? (
          <>
          <Header />
        <WhatappBtn />
        <BacktoTop />
        <Routes>
          <Route exact index path="/" element={<Home_page />} />
          <Route exact path="/propertyPage" element={<PropertyPage />} />
          <Route exact path="/product/:pageid" element={<ProductPage />} />
          <Route exact path="/contactpage" element={<Contact_page />} />
          <Route path="/latest_news_page" element={<Latest_news_page />} />
          <Route path="/latest_news_blog/:blogid" element={<Latest_news_blog />} />
          <Route path="*" element={<ErorrPage />} />
        </Routes>
        <Footer />
          </>
        ) :  <Loader /> }
      </div>
    </>
  );
}
export default App;
