import React from "react";
import { FormattedMessage } from 'react-intl'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalElevenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>ISTQB</h3>
          <div className="row open-sans-font">
            <div className="col-6 col-sm-6 col-xs-12 mb-2" style={{textAlign: 'center'}}>
              <a className="button" href="https://assets.nandinibhatt.me/posters/dynamic/istqb/page1.gif" download="page1.gif">
                <span className="project-label"><FormattedMessage
                  description="modalElevenItem1"
                  id="Modaleleven.item1"
                  defaultMessage="1/2"
                /></span>{" "}
                <span className="button-icon fa fa-download"></span>
              </a>
            </div>

            <div className="col-6 col-sm-6 col-xs-12 mb-2" style={{textAlign: 'center'}}>
              <a className="button" href="https://assets.nandinibhatt.me/posters/dynamic/istqb/page2.gif" download="page2.gif">
                <span className="project-label"><FormattedMessage
                  description="modalElevenItem2"
                  id="Modaleleven.item2"
                  defaultMessage="2/2"
                /></span>{" "}
                <span className="button-icon fa fa-download"></span>
              </a>
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
        <div className="row">
          <div className="col-6 col-sm-6 mb-2">
            <img src="https://assets.nandinibhatt.me/posters/dynamic/istqb/page1.gif" alt="Nandini bhatt's ISTQB certification poster gif, Software Tester, QA, Cloud, DevOps, Automation, AWS, Agile" />
          </div>
          <div className="col-6 col-sm-6 mb-2">
            <img src="https://assets.nandinibhatt.me/posters/dynamic/istqb/page2.gif" alt="Nandini bhatt's ISTQB certification poster gif, Software Tester, QA, Cloud, DevOps, Automation, AWS, Agile" />
          </div>
        </div>
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

export default ModalElevenContent;
