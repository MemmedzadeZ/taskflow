import React from "react";

const Testimonials = () => {
  return (
    <section
      data-bs-version="5.1"
      className="people04 cid-urdsLHKEo3"
      id="testimonials-4-urdsLHKEo3"
    >
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-12 mb-0 content-head">
            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Contact</strong>
            </h3>
          </div>
        </div>
        <div
          className="row mbr-masonry"
          data-masonry='{"percentPosition": true }'
        >
          <div className="item features-without-image col-12 col-md-6 col-lg-4 active">
            <div className="item-wrapper">
              <div className="card-box align-left">
                <p className="card-text mbr-fonts-style display-7">
                  This platform changed my life! I can finally manage my
                  projects without losing my mind!
                </p>
               
                <h5 className="card-title mbr-fonts-style display-7">
                  <strong>Emily Johnson</strong>
                </h5>
              </div>
            </div>
          </div>
          <div className="item features-without-image col-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
              <div className="card-box align-left">
                <p className="card-text mbr-fonts-style display-7">
                  A game-changer! My team is more productive than ever. Highly
                  recommend!
                </p>
              
                <h5 className="card-title mbr-fonts-style display-7">
                  <strong>Michael Smith</strong>
                </h5>
              </div>
            </div>
          </div>
          <div className="item features-without-image col-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
              <div className="card-box align-left">
                <p className="card-text mbr-fonts-style display-7">
                  I was skeptical, but now I can't imagine working without it!
                </p>
              
                <h5 className="card-title mbr-fonts-style display-7">
                  <strong>Sarah Connor</strong>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
