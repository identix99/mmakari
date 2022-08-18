import React from 'react';
import { PosterSec } from "../Components/PropertyPage-Compo/PosterSec";
import { Heading } from '../Components/PropertyPage-Compo/Heading';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonX } from "../Components/PropertyPage-Compo/PropertyPageSection1";
import Entire_market_data from '../Database/Entire_market_data';
import { Entire_blog_card } from '../Components/LandingPage-Compo/Entire_market_sec';
import { Container } from 'react-bootstrap';


const Latest_news_page = () => {
    return (
        <>
            <div className='main_wrapper latest_news_page_wrapper'>
                <PosterSec lighttext="Latest " boldtext="news" />
                <section className='latest_news_sec'>
                    <Container>
                        <Heading title1="We’ve Cornered" boldPart=" The Entire Market" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        <div>
                            <Row>
                                {
                                    Entire_market_data.slice(0, 6).map((data, index) => {
                                        return (
                                            <Col md={4} sm={6} key={index} className="spacing_blog">
                                                <Entire_blog_card item={data} />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                            <div className='btn-bloginhome'>
                                <ButtonX text="View All" titlehov="View All" id="btn005" />
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Latest_news_page;