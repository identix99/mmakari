import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

import hero_bg_img from '../../assets/img/Home_page/hero_bg_img.png';
import hero_bg_img_1 from '../../assets/img/Home_page/hero_bg_img_1.png';
import hero_bg_img_2 from '../../assets/img/Home_page/hero_bg_img_2.png';

const Hero_sec = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
         autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        prevArrow: <div className='cm_arrow left_arrow'><WestIcon /></div>,
        nextArrow: <div className='cm_arrow right_arrow'><EastIcon /></div>,
    };
    return (
        <>
            <div className='hero_main_wrapper'>
                <div className='hero_slider_main'>
                    <Slider {...settings}>
                        <div className='hero_slider_img'>
                            <img src={hero_bg_img} alt="hero bg img" />
                        </div>
                        <div>
                            <img src={hero_bg_img_1} alt="hero bg img" />
                        </div>
                        <div>
                            <img src={hero_bg_img_2} alt="hero bg img" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Hero_sec;