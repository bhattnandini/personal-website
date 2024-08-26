import React, { useState, useEffect, useRef } from 'react';
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import { FormattedMessage } from 'react-intl'

const Index = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    downloadFile(option);
    setIsOpen(false); // Close dropdown after selection
  };

  const downloadFile = (option) => {
    let url = ''

    switch (option) {
      case 'en':
        url = 'https://assets.nandinibhatt.me/cv/cv_en.pdf'
        break;
      case 'fr':
        url = 'https://assets.nandinibhatt.me/cv/cv_fr.pdf' 
        break;
      default:
        return;
    }

    const link = document.createElement('a');
    link.href = url
    link.target = '_blank';
    link.rel = 'noopener noreferrer'
    link.style.color = 'white';
    link.style.textDecoration = 'none';
    link.setAttribute('data-cy', 'cv-link');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);


  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  <FormattedMessage
                    description="modalOneItem1"
                    id="About.personalinfo"
                    defaultMessage="About"
                  />
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block text-center d-sm-none">
                {/* <img
                  src="img/nandini-mobile-dark.webp"
                  className="img-fluid main-img-mobile nandini-mobile"
                  alt="Nandini Bhatt, Tester, QA, Cloud, DevOps, Automation, AWS"
                /> */}
                {/* <iframe title="Video Resume" style={{ borderRadius: 125 }} width="250" height="250" data-cy="v"
                  src="https://www.youtube.com/embed/wavzkI0Sztc">
                </iframe> */}
              </div>
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-1 button" onClick={handleToggle} data-cy="dwnldcvbtn" >
                {/* <a className="button" href="img/cv.pdf" download="cv_nandini_bhatt.pdf"> */}
                <span className="button-text">CV</span>
                <span className="button-icon fa fa-download"></span>
                {/* </a> */}
              </div>
              {/* End download button */}

              {isOpen && (
                <ul ref={dropdownRef} style={{ listStyle: 'none', padding: 0, margin: 0, backgroundColor: 'black', border: '1px solid #ccc' }}>
                  <li onClick={() => handleSelect('en')} style={{ padding: '10px', cursor: 'pointer', textAlign: 'center', color:'white' }} data-cy="dwnldcv_en">
                    {/* <a href="img/cv_en.pdf" download="cv_nandini_bhatt_en.pdf" style={{ color: "white", textDecoration: "none" }}> */}
                      <FormattedMessage
                        description="lang_eng"
                        id="English"
                        defaultMessage="English"
                      />
                    {/* </a> */}
                  </li>
                  <li onClick={() => handleSelect('fr')} style={{ padding: '10px', cursor: 'pointer', textAlign: 'center', color:'white' }}>
                    {/* <a href="img/cv_fr.pdf" download="cv_nandini_bhatt_fr.pdf" style={{ color: "white", textDecoration: "none" }}> */}
                      <FormattedMessage
                        description="lang_fr"
                        id="French"
                        defaultMessage="French"
                      />
                    {/* </a> */}
                  </li>
                </ul>
              )}

            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        {/* <hr className="separator" /> */}

        {/* Skills Starts */}
        <div className="row">
          <div className="col-12" style={{ paddingTop: 15 }}>
            <h3 className="text-uppercase pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center ft-wt-600" data-cy="skills">
              <FormattedMessage
                description="aboutMySkills"
                id="About.myskills"
                defaultMessage="My Skills"
              />
            </h3>
          </div>
          <Skills />
        </div>
        {/* Skills Ends */}

        {/* <hr className="separator mt-1" /> */}

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12" style={{ paddingTop: 15 }}>
            <h3 className="text-uppercase pb-4 mb-0 text-left text-sm-center ft-wt-600">
              <FormattedMessage
                description="aboutExperience"
                id="About.experience"
                defaultMessage="Experience"
              />  <span>&</span>  <FormattedMessage
                description="aboutEducation"
                id="About.education"
                defaultMessage="Education"
              />
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default Index;
