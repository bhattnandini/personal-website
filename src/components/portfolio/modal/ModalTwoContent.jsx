import React from "react";
import { FormattedMessage } from 'react-intl'

const ModalTwoContent = () => {
  return (
    <div className="slideshow">
        <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Paper Presentation</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label"> <FormattedMessage
                description="modalOneItem1"
                id="Modalone.item1"
                defaultMessage="About"
              /></span>:{" "}
              <span className="ft-wt-600 uppercase">Mitigating Demographic Bias in AI-based Resume Filtering</span>
            </div>
            {/* End .col */}

            {/* <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Envato</span>
            </div> */}
            {/* End .col */}

            {/* <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
            </div> */}
            {/* End .col */}

            {/* <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label"><FormattedMessage
                description="modalOneItem2"
                id="Modalone.item2"
                defaultMessage="Link"
              /> </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://themeforest.net/item/edina-personal-portfolio-react-template/34082686"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.google.com
                </a>
              </span>
            </div> */}
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        {/* <img src="img/projects/project-1.jpg" alt="Portolio" /> */}
        <div className="position-relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe title="Paper Presentation" src="https://www.loom.com/embed/2523695a84354f1bbfe89ac2cd5074c1" 
                  frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" 
                  allowFullScreen className="position-absolute" style={{top: 0, left: 0, width: '100%', height: '100%'}}>
                  </iframe>
                </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
