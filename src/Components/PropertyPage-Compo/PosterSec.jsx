import React from "react";
import Container from "react-bootstrap/Container";
export const PosterSec = (props) => {
  return (
    <>
      <section className="poster-section">
        <div className="overlay"></div>
        <Container>
          <div className="poster_text_block">
            <h2 className="poster_text">
              {props.lighttext}
              <span className="bold_postertext">{props.boldtext}</span>
            </h2>
          </div>
        </Container>
      </section>
    </>
  );
};
