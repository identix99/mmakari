import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ButtonX } from "../PropertyPage-Compo/PropertyPageSection1";
import { Heading } from "../PropertyPage-Compo/Heading";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../PropertyPage-Compo/PropertyPageSection1";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
 
export const Isotop = () => {
  let navigate = useNavigate();
  const pagedata = useSelector((state) => state.layer1.Cards);
  const [items, setitems] = useState(pagedata.slice(3, 6));

  //for class traversing
  const [state, setState] = useState("all");

  const filteritem = (categories) => {
    setState(categories)
    if (categories === "all") {
      return setitems(pagedata);
    }

    const upadateditems = pagedata.filter((elm, index) => {
      return elm.categories === categories;
    });
    setitems(upadateditems);
   
  };

  const allcatvalues = [
    "all",
    ...new Set(pagedata.map((curelm) => curelm.categories)),
  ];




  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    nextArrow: false,
    prevArrow: false ,
  };
  
 

  return (
    <>
      <div className="section_padding isotop_section">
        <Container>
          <div className="isotop_section_head">
            <Heading
              title1="what’s hot"
              boldPart=" in dubai"
              text="Take a sneak pic of new developments in dubai."
            />
          </div>
          <div className="filter_block">
            <div className="filterbtn_block">
              <Slider {...settings}>
                {allcatvalues.map((data, index) => {
                  return (
                    <>
                        <button
                         className={`filterbtn ${state === data ? "active" : "" }`}
                          style={{ width: "auto" }} key={index}
                          onClick={() => filteritem(data)} >
                          {data}
                        </button>
                    </>
                  );
                })}
              </Slider>
            </div>
            <Row>
              {items.map((data, index) => {
                return (
                  <>
                    <Col md={6}	lg={4} className="spacing" key={index}>
                      <Card item={data} />
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
          <div className="isotop_section_btn">
            <span onClick={() => navigate("/propertyPage", { replace: true })}>
              <ButtonX text="VIEW ALL" titlehov="VIEW ALL" id="btn700" />{" "}
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};
