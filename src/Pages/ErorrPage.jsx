import React from "react";
import { PosterSec } from "../Components/PropertyPage-Compo/PosterSec";
import { ButtonX } from "../Components/PropertyPage-Compo/PropertyPageSection1";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
const ErorrPage = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="main_wrapper erorrpage_wrapper">
        <PosterSec lighttext="page Not" boldtext=" Found" />
        <div class=" erorr property-section">
          <Container>
            <div class="error-container">
              <span>4</span>
              <span>
                <span class="screen-reader-text">0</span>
              </span>
              <span>4</span>
            </div>
            <div className="erorr-btn">
              <span onClick={() => navigate("/", { replace: true })}>
                <ButtonX text="Go to Home" titlehov="Go to Home" id="btn0012" />
              </span>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ErorrPage;
