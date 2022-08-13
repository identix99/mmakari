import React from 'react';

import Hero_sec from '../Components/LandingPage-Compo/Hero_sec';
import Hero_sec_text from '../Components/LandingPage-Compo/Hero_sec_text';
import Who_we_are_sec from '../Components/LandingPage-Compo/Who_we_are_sec';
import Meet_our_team from '../Components/LandingPage-Compo/Meet_our_team';
import Buy_Invest_sec from '../Components/LandingPage-Compo/Buy_Invest_sec';
import Our_properties from '../Components/LandingPage-Compo/Our_properties';
import Entire_market_sec from '../Components/LandingPage-Compo/Entire_market_sec';
import Footer from '../Components/LandingPage-Compo/Footer';
import {Backto_bottom} from "../Components/LandingPage-Compo/Backto_bottom";
 
const Home_page = () => {
    return (
        <>
            
            <div className='main_wrapper'>
                <div className='hero_section'>
                    <Hero_sec />
                    <Hero_sec_text />
                    <Backto_bottom />
                </div>
                <Who_we_are_sec />
                <Meet_our_team />
                <Buy_Invest_sec />
                <Our_properties />
                <Entire_market_sec />
                <Footer />
            </div>
        </>
    )
}

export default Home_page;