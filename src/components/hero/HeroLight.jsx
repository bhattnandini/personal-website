import React, { useState } from "react";
import Modal from "react-modal";
import Index from "../about/index";
import { FormattedMessage } from 'react-intl';

const heroContent = {
  heroImage: "img/hero/light.jpg",
  heroMobileImage: "img-mobile-light",
  heroTitleName: "Nandini Bhatt",
  heroDesignation: "QA Engineer",
  heroDescriptions: `Experienced software professional with a passion for innovation and problem-solving. Proficient in a diverse range of technologies including Selenium, Java, Python, and cloud computing. Skilled in Agile methodologies, test-driven development, and delivering high-quality results. Adept at collaborating in cross-functional teams and adapting to evolving development practices. Strong background in software testing, development, and quality assurance. I am committed to continuous learning and staying updated with the latest industry trends. I am dedicated to delivering excellence in every project undertaken. I am open to new opportunities to contribute my skills and expertise to impactful projects.`,
  heroBtn: "more about me",
};

const HeroLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  // style={{
  //   backgroundImage: `url(${
  //     process.env.PUBLIC_URL + heroContent.heroImage
  //   })`,
  // }}
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
        >
              <img
                   src="img/nandini-web-dark.webp"
                   // width="82%" height="82%"
                   style={{
                     borderRadius: '20px',
                     // marginLeft: '-5px',
                     marginTop: '3%',
                   }}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
          {/* <iframe title="Video Resume" style={{ margin: 25 }} width="90%" height="90%" data-cy="v"
            src="https://www.youtube.com/embed/wavzkI0Sztc">
          </iframe> */}
        </div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
                    src="img/nandini-mobile-dark.webp"
                    // width="82%" height="82%"
                    style={{
                      borderRadius: '20px',
                      // marginLeft: '-5px',
                      marginTop: '3%',
                    }}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            {/* <div style={{ paddingTop: '50px' }}>
              <iframe title="Video Resume" style={{ borderRadius: 125 }} width="250" height="250"
                className="img-fluid main-img-mobile d-sm-block d-lg-none"
                src="https://www.youtube.com/embed/wavzkI0Sztc">
              </iframe>
            </div> */}
            <h1 className="text-uppercase poppins-font">
              <FormattedMessage
                description="title"
                id="Hero.title"
                defaultMessage="I'm Nandini Bhatt"
              />
              {/* <span>  <FormattedMessage
                description="designation"
                id="Hero.designation"
                defaultMessage="{heroDesignation}"
                values={
                  {
                    heroDesignation: heroContent.heroDesignation,
                  }
                }
              /></span> */}
            </h1>
            <p className="open-sans-font" style={{ textAlign: 'justify' }}> <FormattedMessage
              description="heroDescriptions"
              id="Hero.heroDescriptions"
              defaultMessage="{heroDescriptions}"
              values={
                {
                  heroDescriptions: heroContent.heroDescriptions,
                }
              }
            /></p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text"> <FormattedMessage
                description="heroBtn"
                id="Hero.heroBtn"
                defaultMessage="{heroBtn}"
                values={
                  {
                    heroBtn: heroContent.heroBtn,
                  }
                }
              /></span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark light"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about green">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  <FormattedMessage
                    description="heroAbout"
                    id="Hero.about"
                    defaultMessage="About"
                  /> <span><FormattedMessage
                    description="heroMe"
                    id="Hero.me"
                    defaultMessage="me"
                  /></span>
                </h1>
                <span className="title-bg"><FormattedMessage
                  description="heroResume"
                  id="Hero.resume"
                  defaultMessage="Resume"
                /></span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default HeroLight;
