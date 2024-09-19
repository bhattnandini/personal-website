import React from "react";
import { FormattedMessage } from 'react-intl'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalNineContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3> <FormattedMessage
                    description="bestPaper"
                    id="bestPaper"
                    defaultMessage="Best paper presentation award"
                  /> </h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-12 mb-2">
                <i className="fa fa-file-text-o pr-2"></i>
                <a
                    href="https://sciencescholar.us/journal/index.php/ijhs/article/view/13487"
                    target="_blank"
                    rel="noreferrer"
                  >
                <span className="project-label"><FormattedMessage
                  description="Modal9Item1"
                  id="Modalone.item2"
                  defaultMessage="Research paper"
                /> </span> </a>
                {/* :{" "}
                <span className="ft-wt-600 uppercase">
                 
                    https://sciencescholar.us/journal/index.php/ijhs/article/view/13487
                  
                </span> */}
            </div>

            <div className="col-12 mt-1" style={{ textAlign: 'center' }}>
              <a className="button" href="https://assets.nandinibhatt.me/research/fulltext.pdf" download="fulltext.pdf">
                <span className="project-label"><FormattedMessage
                  description="modalOneItem3"
                  id="Modalone.item3"
                  defaultMessage="Full text"
                /></span>
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
        <img src="https://assets.nandinibhatt.me/certificates/best_paper.jpg" alt="Nandini Bhatt's Research paper presentation, ICRASTEM, research and development, public speaking"/>
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

export default ModalNineContent;
