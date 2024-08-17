import React from "react";
import { FormattedMessage } from 'react-intl'

const ModalOneContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>ICRASTEM 2022</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label"> <FormattedMessage
                description="modalOneItem1"
                id="Modalone.item1"
                defaultMessage="Paper Title"
              /></span>:{" "}
              <span className="ft-wt-600 uppercase">A Modern tech-driven approach to prognosis powered by real-time health care record updates from the patients</span>
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

            <div className="col-12 col-sm-12 mb-2">
              <a
                href="https://sciencescholar.us/journal/index.php/ijhs/article/view/13487"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-external-link pr-2"></i>
                <span className="project-label"><FormattedMessage
                  description="modalOneItem2"
                  id="Modalone.item2"
                  defaultMessage="Publication Link"
                /> </span>
              </a>
            </div>

            <div className="col-12 mt-1" style={{ textAlign: 'center' }}>
              <a className="button" href="https://assets.appstasy.in/nandinee/research/fulltext.pdf" download="fulltext.pdf">
                <span className="project-label"><FormattedMessage
                  description="modalOneItem3"
                  id="Modalone.item3"
                  defaultMessage="Full text"
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
          <iframe title="Paper Presentation" src="https://www.loom.com/embed/9871257224e849cfa096361389f8fae9"
            webkitallowfullscreen="true" mozallowfullscreen="true"
            allowFullScreen className="position-absolute frame-border" style={{ top: 0, left: 0, width: '100%', height: '100%' }}>
          </iframe>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalOneContent;
