import React, {   useState, useMemo } from "react";
import Star1 from "../assets/img/star1.png";
import Star2 from "../assets/img/star2.png";
import{ PosterSec} from "../Components/PropertyPage-Compo/PosterSec";

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import poster1 from "../assets/img/productPage/poster1.png";
import loc from "../assets/img/productPage/loc.png";
import mail from "../assets/img/productPage/mail.png";
import call from "../assets/img/productPage/phone.png";
import whatapp from "../assets/img/productPage/whatapp.png";
import avtar from "../assets/img/productPage/avtar.png";

import { Heading } from "../Components/PropertyPage-Compo/Heading";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

import item1 from "../assets/img/productPage/1.png";
import item2 from "../assets/img/productPage/2.png";
import item3 from "../assets/img/productPage/3.png";
import item4 from "../assets/img/productPage/4.png";
import item5 from "../assets/img/productPage/5.png";
import item6 from "../assets/img/productPage/6.png";

//lightbox gallary-------------------------------------------------------------------------
import gal1 from "../assets/img/productPage/gal1.png";
import gal2 from "../assets/img/productPage/gal2.png";
import gal3 from "../assets/img/productPage/gal3.png";
import gal4 from "../assets/img/productPage/gal4.png";
import gal5 from "../assets/img/productPage/gal5.png";
import gal6 from "../assets/img/productPage/gal6.png";
import gal7 from "../assets/img/productPage/gal7.png";
import gal8 from "../assets/img/productPage/gal8.png";

import ShakaPlayer from "shaka-player-react";
import { CardData } from "../Database/CardData";
import { Card } from "../Components/PropertyPage-Compo/PropertyPageSection1";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  useLoadScript,
  Autocomplete,
} from "@react-google-maps/api";

import LightBox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const IMAGES = [
  {
    src: gal1 ,
    isSelected: true,
    caption: "Product 1",
  },
  {
    src: gal2 ,
    caption: "Product 2",
  },
  {
    src: gal3 ,
    caption: "Product 3",
  },
  {
    src: gal4 ,
    caption: "Product 4",
  },
  {
    src: gal5 ,
    caption: "Product 5",
  },
  {
    src: gal6 ,
    caption: "Product 6",
  },
  {
    src: gal7 ,
    caption: "Product 7",
  },
  {
    src: gal8 ,
    caption: "Product 8",
  },
];

const Gallery = () => {
  const [showLight, setShowLight] = useState(null);

  const showLightBox = (index) => {
    setShowLight({
      startIndex: index,
    });
  };

  const hideLightBox = () => {
    setShowLight(null);
  };

  return (
    <>
      {IMAGES.map((image, index) => (
        <>
          <Col md={4} className="spacing_gallary_collaps">
            <div className="collaps_gallary">
              <img
                src={image.src}
                alt={"GallaryForCollections"}
                onClick={() => showLightBox(index)}
              />
            </div>
          </Col>
        </>
      ))}
      {showLight ? (
        <LightBox
          images={IMAGES.map((img) => ({ url: img.src, title: img.caption }))}
          startIndex={showLight.startIndex}
          onClose={hideLightBox}
        />
      ) : null}
    </>
  );
};






const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <svg
        width="30"
        height="21"
        viewBox="0 0 30 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7601 9.08463L17.8744 2.2166L19.6895 0.406128L29.6741 10.365L19.6895 20.3239L17.8744 18.5134L24.7601 11.6454H16.9475H0.33252V9.08463H24.7601Z"
          fill="#42A8D4"
        />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={"slick-arrow slick-prev"} onClick={onClick}>
      <svg
        width="30"
        height="21"
        viewBox="0 0 30 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7601 9.08463L17.8744 2.2166L19.6895 0.406128L29.6741 10.365L19.6895 20.3239L17.8744 18.5134L24.7601 11.6454H16.9475H0.33252V9.08463H24.7601Z"
          fill="#42A8D4"
        />
      </svg>
    </div>
  );
};


//-----------------------------------------------------------------------------
const ProductPage = () => {
  const [first, setfirst] = useState(CardData.Cards);

  //like
  const [givelike, setlike] = useState(false);
  const like = () => {
    setlike(!givelike);
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    pauseOnDotsHover: true,
  };
  const settings2 = {
    dots: false,
    infinite : false ,
    peed: 500,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: false,
    prevArrow:false ,
    autoplay: true ,
    pauseOnDotsHover: true,
    slidesToShow :6 ,
    swipeToSlide : true ,
    focusOnSelect : true ,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
         
        }
      }
    ]
  };


  //lightbox gallary-------------------------------------------------------------------------

  return (
    <>
      <div className="main_wrapper productpage_wrapper" >
      <PosterSec lighttext="Available" boldtext="Property" />
      <section className="ProductPage-section1">
        <div className="container ">
          <div className="topCard">
            <div className="top-1">
              <h2 className="theme_product">lifestyle Location</h2>
              <h2 className="price_tag">231622.93 AED</h2>
            </div>
            <div className="top-2">
              <div className="top-2_left">
                <ul className="rating_star">
                  <li>
                    <img src={Star1} alt="star1" />
                  </li>
                  <li>
                    <img src={Star1} alt="star1" />
                  </li>
                  <li>
                    <img src={Star1} alt="star1" />
                  </li>
                  <li>
                    <img src={Star1} alt="star1" />
                  </li>
                  <li className="me-0">
                    <img src={Star2} alt="star1" />
                  </li>
                </ul>
                <div className="rating_text">32 Review</div>
              </div>
              <ul className="top-2_right">
                <li>Bad 3</li>
                <li>SQ.FT 3500</li>
                <li>Garage 1</li>
                <li className="me-0">Garage 2</li>
              </ul>
            </div>
          </div>
          <div className="Property_Slider">
            <Slider
              {...settings}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
              <div className="slider_photo">
                <img src={poster1} alt="poster1" />
              </div>
              <div className="slider_photo">
                <img src={"https://picsum.photos/1135/670"} alt="poster1" />
              </div>
              <div className="slider_photo">
                <img src={poster1} alt="poster1" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="Property-Page-section-2">
        <Container>
          <div className="target_slider margin_spacing_row">
            <Slider
             {...settings2}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
            >
              <div className="slider_img_spacing">
                <img
                  src="https://picsum.photos/200/165?random=1"
                  alt="img_details_bg1"
                  className="img_detailsx"
                />
              </div>
              <div className="slider_img_spacing">
                <img
                  src="https://picsum.photos/200/165?random=2"
                  alt="img_details_bg1"
                  className="img_detailsx"
                />
              </div>
              <div className="slider_img_spacing">
                <img
                  src="https://picsum.photos/200/165"
                  alt="img_details_bg1"
                  className="img_detailsx"
                />
              </div>
              <div className="slider_img_spacing">
                <img
                  src="https://picsum.photos/200/165"
                  alt="img_details_bg1"
                  className="img_detailsx"
                />
              </div>
              <div className="slider_img_spacing">
                <img
                  src="https://picsum.photos/200/165"
                  alt="img_details_bg1"
                  className="img_detailsx"
                />
              </div>
              <div className="slider_img_spacing">
                <img
                  src="https://picsum.photos/200/165"
                  alt="img_details_bg1"
                  className="img_detailsx"
                />
              </div>
              <div className="slider_img_spacing">
                <img
                  src="https://picsum.photos/200/165"
                  alt="img_details_bg1"
                  className="img_detailsx"
                />
              </div>
              <div className="slider_img_spacing">
                <img
                  src="https://picsum.photos/200/165"
                  alt="img_details_bg1"
                  className="img_detailsx"
                />
              </div>
              <div className="slider_img_spacing">
                <img
                  src="https://picsum.photos/200/165"
                  alt="img_details_bg1"
                  className="img_detailsx"
                />
              </div>
            </Slider>
          </div>
          <div className="Property_info">
            <div className="Property_info_head">
              <h2>lifestyle Location</h2>
              <div className="location_info">
                <div className="location_logo_info">
                  <img src={loc} alt="location" className="location_info" />
                </div>
                <h3>Downtown Dubai </h3>
              </div>
            </div>
            <div className="Description">
              <h3 className="title_info">Description</h3>
              <p className="Description_text">
                Type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.Type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularise. <br /> <br /> Type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularise.
              </p>
            </div>
            <div className="Pro_details_Cardx">
              <Row className="flex_props">
                <div className="left_info">
                  <h3 className="title_info">Property Detail</h3>
                  <div className="details_info_card">
                    <ul className="details_part1">
                      <li>
                        <p>Property ID </p> <p>HZ29</p>
                      </li>
                      <li>
                        <p>Home Area </p> <p>120 sqft</p>
                      </li>
                      <li>
                        <p>Rooms </p> <p>7</p>
                      </li>
                      <li>
                        <p>Baths </p> <p>2</p>
                      </li>
                      <li className="mb-0">
                        <p>Year built </p> <p>1992</p>
                      </li>
                    </ul>
                    <ul className="details_part2">
                      <li>
                        <p>Lot Area </p> <p>HZ29</p>
                      </li>
                      <li>
                        <p>Lot dimensions</p> <p>120 sqft</p>
                      </li>
                      <li>
                        <p>Beds </p> <p>7</p>
                      </li>
                      <li>
                        <p>Price </p> <p>231622.93 AED</p>
                      </li>
                      <li className="mb-0">
                        <p>Property Status</p> <p>1992</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="right_info">
                  <div className="property_contact_card">
                    <ul>
                      <li>
                        <a href="#0" className="left_logo">
                          <img src={mail} alt="mail" />
                        </a>
                        <a href="#0" className="sub_details">
                          <p className="title_contact">Drop a mail</p>
                          <p className="title_contact_sub">abc@xyz.com</p>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="left_logo">
                          <img src={call} alt="call" />
                        </a>
                        <a href="#0" className="sub_details">
                          <p className="title_contact">Call Us</p>
                          <p className="title_contact_sub">235 258 147 1</p>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="left_logo">
                          <img src={whatapp} alt="whatapp" />
                        </a>
                        <a href="#0" className="sub_details">
                          <p className="title_contact">Leave us a message</p>
                          <p className="title_contact_sub">2358 254 259</p>
                        </a>
                      </li>
                      <li className="mb-0">
                        <a href="#0" className="left_logo">
                          <img src={avtar} alt="avtar" />
                        </a>
                        <a href="#0" className="sub_details">
                          <a href="#0" className="avtar_text">
                            Christian Gibson usually responds within 5 minutes
                          </a>
                        </a>
                        <a href="#0" className="like" onClick={like}>
                          {givelike ? (
                            <FavoriteIcon className="filled" />
                          ) : (
                            <FavoriteBorderIcon className="outline" />
                          )}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Row>
            </div>
            <div className="extra_stuff">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header >Property Video</Accordion.Header>
                  <Accordion.Body>
                    <div className="Property_video">
                      <ShakaPlayer
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        muted={true}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Location</Accordion.Header>
                  <Accordion.Body>
                    <div className="Property_map">
                      <Mymap />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Gallery</Accordion.Header>
                  <Accordion.Body>
                    <div className="Property_Galllay">
                      <Row>
                        <Gallery />
                      </Row>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Write Review</Accordion.Header>
                  <Accordion.Body>
                    <div className="WriteReview"></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Container>
      </section>
      <section className="Property-Page-section-3">
        <Container>
          <div className="Property-Page-section-3_head">
            <Heading
              title1="Photo"
              boldPart="gallery"
              text="Holiday Home Rental Apartments & Villas in Dubai."
            />
          </div>
          <div className="gallary">
            <div className="top_gallary">
              <div className="top_left_gallary">
                <img src={item3} alt="item1" />
              </div>
              <div class="top_right_gallery">
                <img src={item2} alt="item2" />
                <div class="inner_gallery">
                  <div class="left_inner">
                    <img src={item5} alt="item5" />
                  </div>
                  <div class="right_inner">
                    <img src={item6} alt="item6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="Bottom_gallary">
              <div className="bottom_left_block">
                <img src={item4} alt="item4" />
                ``
              </div>
              <div className="bottom_right_block">
                <img src={item1} alt="item1" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="Property-Page-section-4">
        <Container>
          <div className="Property-Page-section-4_head">
            <Heading title1="Featured" boldPart="Property" />
          </div>
          <Row>
            {first.slice(0, 3).map((data, index) => {
              return (
                <>
                  <Col xs={4} className="spacing" key={data.id}>
                    <Card item={data} />
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>
      </div>
    </>
  );
};

const Mymap = () => {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBp0sW--COqJGmaKOlj6_reRQW619tvRmA",
    libraries: ["places"],
  });

  if (!isLoaded) return <p>loading....................................</p>;
  return <Map />;
};

const Map = () => {
  const center = useMemo(() => {
    return { lat: 21.181434914123617, lng: 72.82473262835249 };
  }, []);

  const [map, setmap] = useState(/**@type google.maps.GoogleMap */ (null));
  const marker1 = { lat: 21.143388136907262, lng: 72.84305370914159 };

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <GoogleMap zoom={12} center={center} mapContainerStyle={containerStyle}>
        <Marker position={marker1} />
      </GoogleMap>
    </>
  );
};

export { ProductPage };
