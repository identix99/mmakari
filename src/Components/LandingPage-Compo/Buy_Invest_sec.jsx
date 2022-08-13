import React from 'react';
import { Container } from 'react-bootstrap';
import Heading_left_bor from './Heading_left_bor';
import Slider from "react-slick";
import Buy_invest_data from "../../Database/Buy_invest_data";

const SampleNextArrow = (props) => {
    const {onClick } = props;
    return (
        <div className="slick-arrow slick-next" onClick={onClick}>
            <div className='custom_arrow custom_arrow_next'>
                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5027 8.84203L16.2447 2.58245L17.8943 0.932373L26.9687 10.009L17.8943 19.0856L16.2447 17.4355L22.5027 11.1759H15.4023H0.302002V8.84203H22.5027Z" fill="#021540" />
                </svg>
            </div>
        </div>
    );
}
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={"slick-arrow slick-prev"} onClick={onClick}>
            <div className='custom_arrow custom_arrow_prev '>
                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.49733 8.84203L10.7553 2.58245L9.10567 0.932373L0.0313339 10.009L9.10567 19.0856L10.7553 17.4355L4.49733 11.1759H11.5977H26.698V8.84203H4.49733Z" fill="#021540" />
                </svg>
            </div>
        </div>
    );
}

const Buy_Invest_sec = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <>
            <section className='buy_Invest_sec section_padding'>
                <Container>
                    <Heading_left_bor Heading_text="Buy/Invest in Your " Heading_span="Dream Home In Dubai" />
                    <p className='title_discrepancy'>Forever Evolving Nation, And a Rising City.</p>
                    <div className='buy_Invest_slider'>
                        <Slider {...settings}>
                            {
                                Buy_invest_data.map((index) => {
                                    return (
                                        <div className='dream_home_box'>
                                            <img src={index.slider_image} alt="buy slider img" />
                                            <div className='dream_home_box_text'>
                                                <h3>{index.item_heading}</h3>
                                                <p>{index.item_description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Buy_Invest_sec;