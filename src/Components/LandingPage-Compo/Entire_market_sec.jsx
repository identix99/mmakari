import React from 'react';
import { Container } from 'react-bootstrap';
import Heading_left_bor from './Heading_left_bor';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Entire_box_arrow from '../../assets/img/Home_page/Entire_box_arrow.png';
import Entire_market_data from '../../Database/Entire_market_data';
import {ButtonX} from "../PropertyPage-Compo/PropertyPageSection1";
const Entire_market_sec = () => {
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
                            Entire_market_data.map((item, index) => {
                                return (
                                    <Col  md={4} sm={6} key={index} className="spacing_blog">
                                        <div className='Entire_market_box'>
                                           <div className="img_blog">
                                           <img src={item.box_image} alt="Entire_market_img" />
                                           </div>
                                            <div className='Entire_market_box_text'>
                                                <li>{item.item_date}</li>
                                                <span></span>
                                                <h3>{item.item_description}</h3>
                                                <a href={item.item_link} target="/">Read More <img src={Entire_box_arrow} alt="Entire_box_arrow" /></a>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className='btn-bloginhome'>
                    <ButtonX text="View All" titlehov="View All" id="btn005"  />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Entire_market_sec;