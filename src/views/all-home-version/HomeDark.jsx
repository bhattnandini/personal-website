import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { Link } from 'react-router-dom';
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import { FormattedMessage } from 'react-intl'
import { useContext } from "react";
import { Context } from "../../components/Wrapper";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLightbulb, faMoon, faBriefcase, faHome, faUser, faEnvelopeOpen, faComments } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

const menuItem = [
  { icon: "fa-home", menuName: "Intro" },
  { icon: "fa-user", menuName: "CV" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  { icon: "fa-comments", menuName: "Blog" },
];

const HomeDark = () => {
  const context = useContext(Context);
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible1, setIsVisible1] = useState(true);

  function switchLight() {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    document.getElementById('maindiv').classList.remove('yellow')
    document.getElementById('maindiv').classList.add('green')

    const web = document.querySelectorAll('.nandini-web');
    web.forEach(element => {
      element.src = "img/nandini-web-light.webp";
    });

    const mobile = document.querySelectorAll('.nandini-mobile');
    mobile.forEach(element => {
      element.src = "img/nandini-mobile-light.webp";
    });

    // Change the --before-bg-color variable
    document.querySelector('.portfolio.professional').style.setProperty('--before-bg-color', '#72b626');
    setIsVisible(false);
  }

  function switchDark() {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    document.getElementById('maindiv').classList.add('yellow')
    document.getElementById('maindiv').classList.remove('green')

    const web = document.querySelectorAll('.nandini-web');
    web.forEach(element => {
      element.src = "img/nandini-web-dark.webp";
    });

    const mobile = document.querySelectorAll('.nandini-mobile');
    mobile.forEach(element => {
      element.src = "img/nandini-mobile-dark.webp";
    });

    // Change the --before-bg-color variable
    document.querySelector('.portfolio.professional').style.setProperty('--before-bg-color', '#ffb400');
    setIsVisible(true);
  }

  useEffect(() => {
    // This will run after the component has completely rendered
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // already dark mode on loading do nothing
    }
    else {
      switchLight()
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const newColorScheme = event.matches ? "dark" : "light";
      if (newColorScheme === 'light') {
        switchLight()
      }
      else {
        switchDark()
      }
    });
  }, []);

  const handleThemeClick = (event) => {
    if (isVisible) {
      switchLight()
    }
    else {
      switchDark()
    }
  };

  const handleLangClick = (language) => {
    setIsVisible1(!isVisible1);
    context.selectLanguage(language);
  };

  // State to keep track of the selected tab index
  const [selectedTabIndex, setSelectedTabIndex] = useState(null);

  // Handle tab selection
  const handleSelect = (index, lastIndex, event) => {
    if (index <= 3) {
      return false;
    }
    setSelectedTabIndex(index);
  };


  // document.body.classList.remove("light");
  return (
    <div id="maindiv" className="yellow">
      <Tabs defaultIndex={4} onSelect={handleSelect}>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            <Tab onClick={handleThemeClick} className="icon-box" key={5} id="lightbulb" style={{ display: isVisible ? 'block' : 'none' }}>
              <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
              {/* <FontAwesomeIcon icon={faHome} size="2x" /> */}
              <h2> <FormattedMessage
                description="HomeTheme"
                id="Home.themeLight"
                defaultMessage="Light"
              />
              </h2>
              <div id="darktheme" className={isVisible ? 'visible' : 'hidden'}></div>
            </Tab>

            <Tab onClick={handleThemeClick} className="icon-box" key={6} id="moon" style={{ display: isVisible ? 'none' : 'block' }}>
              <i className="fa fa-moon-o" aria-hidden="true"></i>
              {/* <FontAwesomeIcon icon={faHome} size="2x" /> */}
              <h2>  <FormattedMessage
                description="HomeTheme"
                id="Home.themeDark"
                defaultMessage="Dark"
              />
              </h2>
            </Tab>


            <Tab onClick={() => handleLangClick('fr')} className="icon-box" key={7} style={{ display: isVisible1 ? 'block' : 'none' }}>
              <i className="fa fa-language" aria-hidden="true"></i>
              <h2>  <FormattedMessage
                description="French"
                id="French"
                defaultMessage="French"
              />
              </h2>
            </Tab>

            <Tab onClick={() => handleLangClick('en')} className="icon-box" key={8} style={{ display: isVisible1 ? 'none' : 'block' }}>
              <i className="fa fa-language" aria-hidden="true"></i>
              <h2>  <FormattedMessage
                description="English"
                id="English"
                defaultMessage="Anglais"
              />
              </h2>
            </Tab>

            <Tab className="icon-box" key={0} >
              <i className={`fa ${menuItem[0].icon}`}></i>
              {/* <FontAwesomeIcon icon={faHome} size="2x" /> */}
              <h2> <FormattedMessage
                description="HomeMenuName"
                id="Home.menuitem0"
                defaultMessage="Introduction"
              />
              </h2>
            </Tab>

            <Tab className="icon-box" key={1} data-cy="cv" >
              {/* <FontAwesomeIcon icon={faUser} size="2x" /> */}
              <i className={`fa ${menuItem[1].icon}`}></i>
              <h2> <FormattedMessage
                description="HomeMenuName"
                id="Home.menuitem1"
                defaultMessage="CV"
              />
              </h2>
            </Tab>

            <Tab className="icon-box" key={2} data-cy="portfolio">
              <i className={`fa ${menuItem[2].icon}`}></i>
              {/* <FontAwesomeIcon icon={faBriefcase} size="2x" /> */}
              <h2> <FormattedMessage
                description="HomeMenuName"
                id="Home.menuitem2"
                defaultMessage="Portfolio"
              />
              </h2>
            </Tab>

            <Tab className="icon-box" key={3} data-cy="blogs">
              <i className={`fa ${menuItem[4].icon}`}></i>
              {/* <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" /> */}
              <h2> Blogs
              </h2>
            </Tab>

            <Tab className="icon-box" key={4} data-cy="contact">
              <i className={`fa ${menuItem[3].icon}`}></i>
              {/* <FontAwesomeIcon icon={faComments} size="2x" /> */}
              <h2> <FormattedMessage
                description="HomeMenuName"
                id="Home.menuitem3"
                defaultMessage="Contact"
              />
              </h2>
            </Tab>
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          <TabPanel id="tabpanel1" className="home ">

          </TabPanel>
          <TabPanel id="tabpanel2" className="home ">

          </TabPanel>
          <TabPanel id="tabpanel2" className="home ">

          </TabPanel>
          <TabPanel id="tabpanel2" className="home ">

          </TabPanel>

          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
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
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                <FormattedMessage
                  description="homeMy"
                  id="Home.me"
                  defaultMessage="nandini's"
                /> <span> <FormattedMessage
                  description="menuitem2"
                  id="Home.menuitem2"
                  defaultMessage="portfolio"
                /> </span>
              </h1>
              <span className="title-bg"><FormattedMessage
                description="homeWorks"
                id="Home.works"
                defaultMessage="works"
              /></span>
            </div>
            {/* End title */}
            <div
              className="container grid-gallery main-content"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Portfolio />
            </div>
            {/* End grid gallery */}
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Blog Content Starts */}
          <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                <FormattedMessage
                  description="Home.menuitem4"
                  id="Home.me"
                  defaultMessage="nandini's"
                />
                <span> Blogs </span>
              </h1>
              <span className="title-bg">posts</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {/* {  Articles Starts  } */}
              <div className="row pb-50">
                <Blog />
              </div>
              {/* { Articles Ends } */}
            </div>
          </TabPanel>
          {/* Blog Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                <FormattedMessage
                  description="homeContact1"
                  id="Home.menuitem3"
                  defaultMessage="Contact"
                /> <span><FormattedMessage
                  description="homeContact2"
                  id="Hero.me"
                  defaultMessage="nandini"
                /> </span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    <FormattedMessage
                      description="homeReach"
                      id="Home.reach"
                      defaultMessage="REACH OUT TO ME!"
                    />
                  </h3>
                  <p className="open-sans-font mb-4">
                    <FormattedMessage
                      description="homePingme"
                      id="Home.pingme"
                      defaultMessage="Please feel free to ping me. I am actively seeking opportunities in the tech industry."
                    />
                  </p>
                  <Address />
                  {/* End Address */}

                  <Social />
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}
        </div>
      </Tabs>



      {/* <div className="lang-selector demo-sticker2">
          <select selected="en" value={context.locale} onChange={context.selectLanguage} data-cy="l">
            <option value='en'>English (C1)</option>
            <option value='fr'>French (B2)</option>
          </select>
      </div> */}



    </div>
  );
};

export default HomeDark;