import React from 'react';
import { Container } from 'react-bootstrap';
import Heading_left_bor from './Heading_left_bor';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Entire_market_data from '../../Database/Entire_market_data';
import { ButtonX } from "../PropertyPage-Compo/PropertyPageSection1";
import { useNavigate } from "react-router-dom";
import {  Link } from 'react-router-dom';

const Entire_market_sec = () => {
    let navigate = useNavigate();
    return (
        <>
            <section className='Entire_market_sec'>
                <Container>
                    <div>
                        <Heading_left_bor Heading_text="We’ve Cornered " Heading_span="The Entire Market" />
                        <p className='title_discrepancy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <Row>
                        {
                            Entire_market_data.slice(0, 3).map((data, index) => {
                                return (
                                    <Col md={4} sm={6} key={index} className="spacing_blog">
                                        <Entire_blog_card item={data} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className='btn-bloginhome'>
                       <span onClick={()=>  navigate("/contactpage", { replace: true })} > <ButtonX text="View All" titlehov="View All" id="btn005" /></span>
                    </div>
                </Container>
            </section>
        </>
    )
}

export const Entire_blog_card = ({ item }) => {
    return (
        <>
            <div className='Entire_market_box'>
                <div className="img_blog">
                    <img src={item.box_image} alt="Entire_market_img" />
                </div>
                <div className='Entire_market_box_text'>
                    <li>{item.item_date}</li>
                    <span></span>
                    <h3>{item.item_description}</h3>
                    <Link  to={`/latest_news_blog/${item.id}`}>Read More
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9855 5.22762L10.7613 1.08979L11.8748 -0.000976562L18 5.99902L11.8748 11.999L10.7613 10.9083L14.9855 6.77043H10.1927H0V5.22762H14.9855Z" fill="#42A8D4" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Entire_market_sec;