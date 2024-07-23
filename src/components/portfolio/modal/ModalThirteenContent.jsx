import React from "react";
import { FormattedMessage } from 'react-intl'

const ModalThirteenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3><FormattedMessage
                description="Portfolio.item8"
                id="Portfolio.item8"
                defaultMessage="ISTQB - PPT Presentation"
              /></h3>
          <div className="row open-sans-font">
             <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label"><FormattedMessage
                description="modalOneItem2"
                id="Modalone.item2"
                defaultMessage="Link"
              /> </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://www.youtube.com/watch?v=fMHHBhp0ooM"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=fMHHBhp0ooM
                </a>
              </span>
            </div>

            <div className="col-12 col-sm-12 col-xs-12 mb-2" style={{textAlign: 'center'}}>
                <a className="button" href="https://assets.appstasy.in/nandinee/handouts/istqb_en.pdf" download="handouts_en.pdf">
                <span className="project-label"><FormattedMessage
                description="modalThirteenItem1"
                id="ModalThirteen.Item1"
                defaultMessage="Handouts"
              /></span>{" "}
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        {/* <img src="img/projects/project-1.jpg" alt="Portolio" /> */}
        <div className="position-relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  {/* <iframe title="ISTQB PPT Presentation" src="https://www.youtube.com/watch?v=fMHHBhp0ooM" 
                  frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" 
                  allowFullScreen className="position-absolute" style={{top: 0, left: 0, width: '100%', height: '100%'}}>
                  </iframe> */}

                  <iframe className="position-absolute" style={{top: 0, left: 0, width: '100%', height: '100%'}}
                  src="https://www.youtube.com/embed/fMHHBhp0ooM?si=nkQ6S0hi66QIaDHk" 
                  title="ISTQB PPT Presentation" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalThirteenContent;
