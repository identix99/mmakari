import React, { useState } from 'react';
import { PosterSec } from "../Components/PropertyPage-Compo/PosterSec";
import { Container } from 'react-bootstrap';
import Heading_left_bor from '../Components/LandingPage-Compo/Heading_left_bor';
import Get_in_Touch_icon_1 from '../assets/img/Contact_page/Get_in_Touch_icon_1.png';
import Get_in_Touch_icon_2 from '../assets/img/Contact_page/Get_in_Touch_icon_2.png';
import Get_in_Touch_icon_3 from '../assets/img/Contact_page/Get_in_Touch_icon_3.png';
import Get_in_Touch_icon_4 from '../assets/img/Contact_page/Get_in_Touch_icon_4.png';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ButtonX } from "../Components/PropertyPage-Compo/PropertyPageSection1";

import { useFormik } from 'formik';
import { SignUpSchema } from '../schemas/Contact_form_data';

const initialValues = {
    name: "",
    email: "",
    drop: "",
    message: "",
};

const Contact_page = () => {

    const [toggledrop, settoggledrop] = useState();
    const droptoggle = () => {
        settoggledrop(!toggledrop);
        // document.documentElement.classList.remove("cm_overflow");
        const headermenu = document.querySelector(".main_block");
        headermenu.classList.toggle("sroll_blog");
    };

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: SignUpSchema,
        onSubmit: async (values, action) => {
            const { drop, email, message, name } = values;
            console.log(drop);
            const res = await fetch("https://mmakari-416d1-default-rtdb.firebaseio.com/data.json", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({
                    drop,
                    email,
                    message,
                    name,
                })
            }).then((response) => response.json())
                .then((data) => console.log(data))
                .catch((erorr) => console.log(erorr));
                action.resetForm();
        },
    });


    return (
        <>
            <div>
                <PosterSec lighttext="Contact " boldtext="us" />
                <section className='contact_sec'>
                    <Container>
                        <div className='contact_row'>
                            <div className='form_col'>
                                <form onSubmit={handleSubmit} method="post" >
                                    <div className='form_inputs'>
                                        <label htmlFor="">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder='Full name'

                                            name='name'
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && touched.name ? <p className='form_errors'>{errors.name}</p> : null}
                                    </div>
                                    <div className='form_inputs'>
                                        <label htmlFor="">Email Address</label>
                                        <input
                                            type="Email"
                                            id="Email"
                                            placeholder='xyz@abc.com'

                                            name='email'
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && touched.email ? <p className='form_errors'>{errors.email}</p> : null}
                                    </div>
                                    <div className='form_inputs'>
                                        <label htmlFor="" >Regarding</label>
                                        <div onClick={droptoggle} id="click"> 
                                            <FormControl sx={{ m: 1, minWidth: 120 }}  >
                                                <Select
                                                    name="drop"
                                                    value={values.drop}
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    <MenuItem value="">
                                                        <span>General Enquiry</span>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                                <FormHelperText>Without label</FormHelperText>
                                            </FormControl>
                                        </div>
                                        {errors.drop && touched.drop ? <p className='form_errors'>{errors.drop}</p> : null}
                                    </div>
                                    <div className='form_inputs'>
                                        <label htmlFor="">Message</label>
                                        <textarea
                                            rows="4"
                                            cols="50"
                                            id="Message"
                                            name="message"
                                            form="usrform"

                                            placeholder='Write Your Message Here...'
                                            value={values.message}
                                            onChange={handleChange}
                                        ></textarea>
                                        {errors.message && touched.message ? <p className='form_errors'>{errors.message}</p> : null}
                                    </div>
                                    <ButtonX text="Submit" titlehov="Submit" id="btn00100" type="submit" />
                                </form>
                            </div>
                            <div className='get_in_touch_col'>
                                <div>
                                    <Heading_left_bor Heading_text="Get in " Heading_span="Touch" />
                                    <p className='title_discrepancy'>Holiday Home Rental Apartments & Villas in Dubai</p>
                                </div>
                                <div className='get_in_touch_icons'>
                                    <div className='get_icons_item'>
                                        <div className='get_icon'>
                                            <img src={Get_in_Touch_icon_1} alt="Get_in_Touch_icon" />
                                        </div>
                                        <div>
                                            <h6>Reach Us</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                        </div>
                                    </div>
                                    <div className='get_icons_item'>
                                        <div className='get_icon'>
                                            <img src={Get_in_Touch_icon_2} alt="Get_in_Touch_icon" />
                                        </div>
                                        <div>
                                            <h6>Drop a mail</h6>
                                            <p>abc@xyz.com</p>
                                        </div>
                                    </div>
                                    <div className='get_icons_item'>
                                        <div className='get_icon'>
                                            <img src={Get_in_Touch_icon_3} alt="Get_in_Touch_icon" />
                                        </div>
                                        <div>
                                            <h6>Call Us</h6>
                                            <p>235 258 147 1</p>
                                        </div>
                                    </div>
                                    <div className='get_icons_item'>
                                        <div className='get_icon'>
                                            <img src={Get_in_Touch_icon_4} alt="Get_in_Touch_icon" />
                                        </div>
                                        <div>
                                            <h6>Leave us a message</h6>
                                            <p>2358 254 259</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>

        </>
    )
}

export default Contact_page;