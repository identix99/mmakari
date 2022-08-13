import React from 'react';
import { Container } from 'react-bootstrap';
import Heading_left_bor from './Heading_left_bor';
import our_properties_1 from '../../assets/img/Home_page/our_properties_1.png';
import our_properties_2 from '../../assets/img/Home_page/our_properties_2.png';
import our_properties_3 from '../../assets/img/Home_page/our_properties_3.png';
import our_properties_4 from '../../assets/img/Home_page/our_properties_4.png';
import our_properties_5 from '../../assets/img/Home_page/our_properties_5.png';
import our_properties_6 from '../../assets/img/Home_page/our_properties_6.png';
import {ButtonX} from "../PropertyPage-Compo/PropertyPageSection1";
const Our_properties = () => {
    return (
        <>
            <section className='our_properties section_padding' id="triggerSection">
                <Container>
                    <div className='our_properties_heading'>
                        <div>
                            <Heading_left_bor Heading_text="Browse " Heading_span="Our Properties" />
                            <p className='title_discrepancy'>Holiday Home Rental Apartments & Villas in Dubai.</p>
                        </div>
                        <div className='btn-view_more'>
                            <ButtonX text="View All" titlehov="View All" id="btn004"  />
                        </div>
                    </div>
                    <div className='our_properties_images'>
                        <div className='our_img_box'>
                            <div className='our_img_hover'>
                                <img src={our_properties_1} alt="our_properties_image" />
                                <div className='our_main_hover'>
                                    <h4>Downtown Dubai</h4>
                                    <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                    <div className='our_img_text'></div>
                                </div>
                            </div>
                            <div className='our_img_hover'>
                                <img src={our_properties_4} alt="our_properties_image" />
                                <div className='our_main_hover'>
                                    <h4 className='our_h4_1'>Dubai Creek Habour</h4>
                                    <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <div className='our_img_text our_img_text_1'></div>
                                </div>
                            </div>
                        </div>
                        <div className='our_img_box'>
                            <div className='our_img_hover'>
                                <img src={our_properties_2} alt="our_properties_image" />
                                <div className='our_main_hover'>
                                    <h4 className='our_h4_1'>Palm Jumeirah</h4>
                                    <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <div className='our_img_text our_img_text_1'></div>
                                </div>
                            </div>
                            <div className='our_img_hover'>
                                <img src={our_properties_6} alt="our_properties_image" />
                                <div className='our_main_hover'>
                                    <h4>Lagoons</h4>
                                    <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                    <div className='our_img_text'></div>
                                </div>
                            </div>
                        </div>
                        <div className='our_img_box'>
                            <div className='our_img_hover'>
                                <img src={our_properties_3} alt="our_properties_image" />
                                <div className='our_main_hover'>
                                    <h4>Business Bay</h4>
                                    <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                    <div className='our_img_text'></div>
                                </div>
                            </div>
                            <div className='our_img_hover'>
                                <img src={our_properties_5} alt="our_properties_image" />
                                <div className='our_main_hover'>
                                    <h4 className='our_h4_1'>Dubai Hills Estate</h4>
                                    <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <div className='our_img_text our_img_text_1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Our_properties;