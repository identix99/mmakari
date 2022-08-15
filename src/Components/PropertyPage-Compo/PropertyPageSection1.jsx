import React, { useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import plus from "../../assets/img/Vectorb.png";
import minus from "../../assets/img/Vectorx.png";
import leftaroww from "../../assets/img/leftaroww.png";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { styled } from '@mui/material/styles';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";

// ---------------------------------------------------
import bed from "../../assets/img/bed.png";
import bath from "../../assets/img/bath.png";
import area from "../../assets/img/area.png";
import location from "../../assets/img/location.png";
import blackleft from "../../assets/img/blackleft.png";
import { CardData } from "../../Database/CardData";
import { Link } from "react-router-dom";
 



const PropertyPageSection1 = () => {
  const [first, setfirst] = useState(CardData.Cards)
   const [currnum, setnum] = useState(6)
   
  const Filter_main_tabs1 = [
    { idAndFor: "radio1", name: "check1", label: "Dubai" },
    { idAndFor: "radio2", name: "check2", label: "Abudhabi" },
    { idAndFor: "radio3", name: "check3", label: "Al Arab" }
  ]
  const Filter_main_tabs2 = [
    { idAndFor: "radio4", name: "check4", label: "Studio Location" },
    { idAndFor: "radio5", name: "check5", label: "Residencial Location" },
    { idAndFor: "radio6", name: "check6", label: "lifestyle Location" }
  ]
  const Filter_main_tabs3 = [
    { idAndFor: "radio7", name: "check7", label: "buy" },
    { idAndFor: "radio8", name: "check8", label: "rent" },
    { idAndFor: "radio9", name: "check9", label: "sell" }
  ]
  const Filter_main_tabs4 = [
    { idAndFor: "radio10", name: "check10", label: "Baths" },
    { idAndFor: "radio11", name: "check11", label: "lawns" },
    { idAndFor: "radio12", name: "check12", label: "Prime Property" },
    { idAndFor: "radio13", name: "check13", label: "Beach Property" },
    { idAndFor: "radio14", name: "check14", label: "farm property" }
  ]

const loadmore1 =()=>{
  const addRest = first.length - 6
  setnum(currnum + addRest )
}
const loadmore2 =()=>{
   setnum( 6 )
}
  return (
  <>
      <div className="Property-Page-section-1">
      <Container>
        <Row>
          <aside className="left-col">
            <div className="Left-Block">
              <div className="filter_Search">
                <input
                  type="search"
                  name="search"
                  className="search_filter"
                  id="search_property"
                  placeholder="Keywords..."
                />
              </div>
              <div className="Filter_block">
                <Filter_main_tabs title="Where" data={Filter_main_tabs1} />
                <Filter_main_tabs title="PROPERTY TYPES" data={Filter_main_tabs2} />
                <Filter_main_tabs title="PROPERTY STATUS" data={Filter_main_tabs3} />
                <Filter_main_tabs title="FEATURES" data={Filter_main_tabs4} />
              </div>
              <div className="btn-block">
                <ButtonX text="Search" titlehov="Filter" id="btn001" />
              </div>
            </div>
          </aside>
          <div className="right-col">
            <div className="results">
              <p> Showing {currnum} of {first.length} Results  </p>
            </div>
            <Row>
              {first.slice(0, currnum).map((data , index) => {
                return (
                  <>
                     <Col md={6}  className="spacing" key={index} >
                       <Card item={data} />
                     </Col>
                </>
                )
              })}
            </Row>
            <div className="Load_more_btn_block " >
              {currnum === first.length ?  <ButtonX text="Show Less" titlehov="Show Less" id="btn003"   eventclick={loadmore2} />    :   <ButtonX text="Load More" titlehov="Show More" id="btn002"   eventclick={loadmore1} />  }
              </div>
          </div>
        </Row>
      </Container>
    </div>
  </>
  );
};



const Card = ({ item }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: true,
    focusOnSelect: true,
    draggable: true 
  };
 
  return (
    <>
        <div className="Property_Card"  key={item.id} >
        <div className="Slider_card">
              <Slider {...settings}>
                <div className="cardtop">
                  <img src={item.CardTopimg[0]} alt="property_img" className="property_img" />
                </div> 
                <div className="cardtop">
                  <img src={item.CardTopimg[1]} alt="property_img" className="property_img" />
                </div> 
                <div className="cardtop">
                  <img src={item.CardTopimg[2]} alt="property_img" className="property_img" />
                </div> 
               </Slider>
        </div>
          <div className="Card_bottom">
            <button className="property_status">{item.propertystatus}</button>
            <h3 className="proerty_theme"> {item.properttheme}</h3>
            <div className="details_parent">
              <div className="details_tab">
                <div className="img_details">
                  <img src={bed} alt="bed" className="iconx" /> <span >{item.bedrooms}</span>
                </div>
                <div className="img_details">
                  <img src={bath} alt="bath" className="iconx" /> <span >{item.bathtubs}</span>
                </div>
                <div className="img_details">
                  <img src={area} alt="area" className="iconx" /> <span >{item.area}Sqft</span>
                </div>
              </div>
              <p className="price">{item.price}ADE</p>
            </div>
            <div className="location_block">
              <div className="find_spot">
                <img src={location} alt="location" />
                <p className="location_text"> {item.location}</p>
              </div>
               <Link className="more_btn" to="/" ><img src={blackleft} alt="blackleft" /> </Link>
            </div>
          </div>
        </div>
    </>
  )
}


// to={`/EditContactpage/${props.data.id}`}
const Filter_main_tabs = (props) => {
  const [show, setshow] = useState(false);

  const collaps = () => {
    setshow(!show)
  }

  const data = props.data;
  return (
    <>
      <div className="filter_main_tabs">
        <div className="filterHeadtab  " onClick={collaps} style={{ borderBottom: show ? "unset" : " 2px solid #E0E6F2" }} >
          <p>{props.title}</p> <span className="icon_plus">{show ? <img src={plus} alt="plus" /> : <img src={minus} alt="minus" />}</span>
        </div>
        <div className="subtab_wrapper" style={{ height: show ? "auto" : "0px" }} >
          {data.map((item, index) => {
            return (
              <Subtabs idAndFor={item.idAndFor} name={item.name} label={item.label} key={index} />
            )
          })}
        </div>
      </div>
    </>
  )
}


const Subtabs = (props) => {
  return (
    <>
      <div className="subFiltertab">
        <input type="checkbox" name="check1" id={props.idAndFor} />
        <label htmlFor={props.idAndFor} className="label_text">
          {props.label}
        </label>
      </div>
    </>
  )
}

const ButtonX = (props) => {
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: "12px",
      fontWeight: 700
    },
  }));


  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);
  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <>
      <BootstrapTooltip
        title={props.titlehov}
        placement="top"
        arrow
        TransitionComponent={Zoom}
        PopperProps={{
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                positionRef.current.x,
                areaRef.current.getBoundingClientRect().y,
                0,
                0,
              );
            },
          },
        }}
      >
        <button className="btn-skeleton"  id={props.id} ref={areaRef} onClick={props.eventclick} onMouseMove={handleMouseMove}  > <span>{props.text}</span> <img src={leftaroww} className="leftaroww" alt="leftaroww" /> </button>
      </BootstrapTooltip>
    </>
  )
}

export { Subtabs, PropertyPageSection1, ButtonX, Filter_main_tabs , Card }