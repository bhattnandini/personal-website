import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FormattedMessage } from 'react-intl'

const ModalThreeContent = () => {
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
          <h3>Hotfocus</h3>
          <div className="row open-sans-font">
          {/*  <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
               <span className="project-label">Android </span>:{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.appstasy1.hotfocus4"
                target="_blank"
                rel="noreferrer"
              >
                <FormattedMessage
                  description="Modal3Item1"
                  id="Modal3.item1"
                  defaultMessage="Download now on Google Playstore!"
                />
              </a> */}
              {/* <span className="ft-wt-600 uppercase">https://play.google.com/store/apps/details?id=com.appstasy1.hotfocus4</span> */}
            {/* </div> */}
            {/* End .col */}

            {/* <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">iOS </span>:{" "}
              <a
                href="https://apps.apple.com/in/app/hotfocus/id1561748310"
                target="_blank"
                rel="noreferrer"
              >
                 <FormattedMessage
                  description="Modal3Item2"
                  id="Modal3.item2"
                  defaultMessage="Download now on Apple Appstore!"
                />
              </a> */}
              {/* <span className="ft-wt-600 uppercase">Download now on Apple Appstore!</span> */}
            {/* </div> */}
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
        <img src="img/projects/hotfocus.jpg" alt="Nandini Bhatt's freelance project: Hybrid Mobile App development, Ionic framework, React.js, Vue.js, Android, iOS" />
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

export default ModalThreeContent;
