import React from "react";
import { FormattedMessage } from 'react-intl'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalFourContent = () => {
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   draggable: false,
  // };

  return (
    <div className="slideshow">
    <figure>
      {/* Project Details Starts */}
      <figcaption>
        <h3>ISTQB Foundation</h3>
        <div className="row open-sans-font">
          <div className="col-12 col-sm-12 mb-2">
            <i className="fa fa-file-text-o pr-2"></i>
            {/* <span className="project-label">Link </span>:{" "} */}
            <a
              href="https://atsqa.org/certified-testers/profile/92007d7a02c74bd2abc44232ba4d53db"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage
                description="Modal3Item1"
                id="Modal4.item1"
                defaultMessage="Verify my certificate"
              />
            </a>
            {/* <span className="ft-wt-600 uppercase">https://play.google.com/store/apps/details?id=com.appstasy1.hotfocus4</span> */}
          </div>
          {/* End .col */}

          {/* <div className="col-12 col-sm-6 mb-2">
            <i className="fa fa-code pr-2"></i>
            <span className="project-label">Langages </span>:{" "}
            <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
          </div> */}
          {/* End .col */}

          {/* <div className="col-12 col-sm-6 mb-2">
            <i className="fa fa-external-link pr-2"></i>
            <span className="project-label">Preview </span>:{" "}
            <span className="ft-wt-600 uppercase">
              <a
                href="https://themeforest.net/item/edina-personal-portfolio-react-template/34082686"
                target="_blank"
                rel="noreferrer"
              >
                www.envato.com
              </a>
            </span>
          </div> */}
          {/* End .col */}
        </div>
        {/* End .row */}
      </figcaption>
      {/* Project Details Ends */}

      {/*  Main Project Content Starts */}
      <img src="img/projects/istqb_cert.webp" alt="Portolio" />
      {/* <Slider {...settings}>
        <div className="slide_item">
          <img src="img/projects/project-3.jpg" alt="slide 1" />
        </div>
        <div className="slide_item">
          <img src="img/projects/project-2.jpg" alt="slide 1" />
        </div>
        <div className="slide_item">
          <img src="img/projects/project-1.jpg" alt="slide 1" />
        </div>
      </Slider> */}
      {/* Main Project Content Ends */}
    </figure>
  </div>
  //  End .slideshow
  );
};

export default ModalFourContent;
