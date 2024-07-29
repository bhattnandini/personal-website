import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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

const menuItem = [
  { icon: "fa-home", menuName: "Intro" },
  { icon: "fa-user", menuName: "CV" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  { icon: "fa-comments", menuName: "Blog" },
];

const HomeDark = () => {
  const context = useContext(Context);
  // document.body.classList.remove("light");
  return (
    <div className="yellow">
      <div className="demo-sticker">
        <a href="/home-light">
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
        </a>
      </div>
      <div className="lang-selector demo-sticker2">
        <select selected="en" value={context.locale} onChange={context.selectLanguage}>
          <option value='en'>English (C1)</option>
          <option value='fr'>French (B2)</option>
        </select>
      </div>
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            <Tab className="icon-box" key={0}>
              <i className={`fa ${menuItem[0].icon}`}></i>
              <h2> <FormattedMessage
                description="HomeMenuName"
                id="Home.menuitem0"
                defaultMessage="Introduction"
              />
              </h2>
            </Tab>

            <Tab className="icon-box" key={1}>
              <i className={`fa ${menuItem[1].icon}`}></i>
              <h2> <FormattedMessage
                description="HomeMenuName"
                id="Home.menuitem1"
                defaultMessage="CV"
              />
              </h2>
            </Tab>

            <Tab className="icon-box" key={2}>
              <i className={`fa ${menuItem[2].icon}`}></i>
              <h2> <FormattedMessage
                description="HomeMenuName"
                id="Home.menuitem2"
                defaultMessage="Portfolio"
              />
              </h2>
            </Tab>

            <Tab className="icon-box" key={4}>
              <i className={`fa ${menuItem[4].icon}`}></i>
              <h2> <FormattedMessage
                description="HomeMenuName"
                id="Home.menuitem4"
                defaultMessage="Blogs"
              />
              </h2>
            </Tab>

            <Tab className="icon-box" key={3}>
              <i className={`fa ${menuItem[3].icon}`}></i>
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
          {/* Hero Content Starts */}
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
                    defaultMessage="me"
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
                  id="Home.my"
                  defaultMessage="my"
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
                my <span>blog</span>
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
                  id="Home.contact1"
                  defaultMessage="get in"
                /> <span><FormattedMessage
                  description="homeContact2"
                  id="Home.contact2"
                  defaultMessage="touch"
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
    </div>
  );
};

export default HomeDark;
