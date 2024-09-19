import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Index from "../../components/about/index";
import { FormattedMessage } from 'react-intl';

const heroContent = {
  heroImage: "img/hero/dark.jpg",
  heroMobileImage: "img-mobile",
  heroTitleName: "Nandini Bhatt",
  heroDesignation: "QA Engineer",
  heroDescriptions: `I, Nandini Bhatt, am an experienced IT professional with a passion for innovation and problem-solving. I am proficient in Automation, Cloud Computing (AWS), DevOps, Full-stack Software Development, Linux Administration, Programming, and SDLC. I have a proven track record of delivering high-quality results using Agile methodologies and Test-Driven Development. Besides, I am an exceptional team player with a charismatic personality. I serve as a source of inspiration for my juniors and never cease to learn from my seniors. My inquisitive nature and drive to push the boundaries of what is possible, help me stay abreast of the state-of-the-art state developments in the industry. I am actively seeking new opportunities to challenge myself. Please feel free to reach out to me!`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  // style={{
  //   backgroundImage: `url(${
  //     process.env.PUBLIC_URL + heroContent.heroImage
  //   })`,
  // }}
  useEffect(() => {
    // Code to be executed when the component is rendered
    console.log('Component has been rendered');

    if (document.body.classList.contains('light')) {
      const web = document.querySelectorAll('.nandini-web');
      web.forEach(element => {
        element.src = "img/nandini-web-light.webp";
      });
  
      const mobile = document.querySelectorAll('.nandini-mobile');
      mobile.forEach(element => {
        element.src = "img/nandini-mobile-light.webp";
      });    
    } else {
      const web = document.querySelectorAll('.nandini-web');
        web.forEach(element => {
          element.src = "img/nandini-web-dark.webp";
        });
    
        const mobile = document.querySelectorAll('.nandini-mobile');
        mobile.forEach(element => {
          element.src = "img/nandini-mobile-dark.webp";
        });
    }
    // Optionally, return a cleanup function (runs when component is unmounted)
    return () => {
      // console.log('Component is being unmounted');
    };
  }, []); // Empty dependency array ensures it runs only on the first render

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block" style={{ position: 'relative' }}
        >
          <img
            src="img/nandini-web-light.webp"
            // width="82%" height="82%"
            style={{
              borderRadius: '30px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            className="img-fluid main-img-mobile nandini-web"
            alt="Nandini Bhatt, Tester, QA, Cloud, DevOps, Automation, AWS"
          />
          {/* <iframe title="Video Resume" style={{ margin: 25 }} width="90%" height="90%" data-cy="v"
            src="https://www.youtube.com/embed/wavzkI0Sztc">
          </iframe> */}
          {/* <video width="400" src="https://www.youtube.com/watch?v=wavzkI0Sztc" controls /> */}
        </div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
          <div>
            <img
              src={"img/nandini-mobile-dark.webp"}
              className="img-fluid main-img-mobile d-sm-block d-lg-none nandini-mobile"
              alt="Nandini Bhatt, Tester, QA, Cloud, DevOps, Automation, AWS"
            />
            {/* <div style={{ paddingTop: '50px' }}>
              <iframe title="Video Resume" style={{ borderRadius: 125 }} width="250" height="250"
                className="d-lg-none img-fluid main-img-mobile d-sm-block "
                src="https://www.youtube.com/embed/wavzkI0Sztc">
              </iframe>
            </div> */}

            <h1 className="text-uppercase poppins-font" data-cy="im">
              <FormattedMessage
                description="title"
                id="Hero.title"
                defaultMessage="I'm Nandini Bhatt"
              />
              {/* <span>
                <FormattedMessage
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
            <p className="open-sans-font" style={{ textAlign: 'justify' }}>
              <FormattedMessage
                description="heroDescriptions"
                id="Hero.heroDescriptions"
                defaultMessage="{heroDescriptions}"
                values={
                  {
                    heroDescriptions: heroContent.heroDescriptions,
                  }
                }
              /></p>
            {/* <button className="button" onClick={toggleModalOne} data-cy="moreabout">
              <span className="button-text">
                <FormattedMessage
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
            </button> */}
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  <FormattedMessage
                    description="heroAbout"
                    id="Hero.about"
                    defaultMessage="About"
                  /> <span> <FormattedMessage
                    description="heroMe"
                    id="Hero.me"
                    defaultMessage="nandini"
                  /> </span>
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

export default Hero;
