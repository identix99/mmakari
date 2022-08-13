import React from 'react' ;
import { Heading } from '../Components/PropertyPage-Compo/Heading';
import { PropertyPageSection1 } from '../Components/PropertyPage-Compo/PropertyPageSection1';
import Header from "../Components/LandingPage-Compo/Header";
import Footer from "../Components/LandingPage-Compo/Footer";
import Container from "react-bootstrap/Container";
 const PropertyPage = () => {
  return (
    <>
    <Header />
     <div className='main_wrapper'>
     <section className="poster-section">
         <div className="overlay"></div>
        <Container > 
            <div className="poster_text_block" ><h2 className='poster_text'>Available <span className='bold_postertext'>Property</span></h2></div>
        </Container>
     </section>
     <section className="property-section">
            <Heading title1="what’s hot" boldPart=" in dubai" text="Take a sneak pic of new developments in dubai." />
            <PropertyPageSection1 />
         </section>
     </div>
     <Footer/>
    </>
  )
}

export {PropertyPage}