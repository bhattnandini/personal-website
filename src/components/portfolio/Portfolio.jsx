import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalSevenContent from "./modal/ModalSevenContent";
import ModalEightContent from "./modal/ModalEightContent";
import ModalNineContent from "./modal/ModalNineContent";
import ModalTenContent from "./modal/ModalTenContent";
import ModalElevenContent from "./modal/ModalElevenContent";
import { FormattedMessage } from 'react-intl'
import ModalTwelveContent from "./modal/ModalTwelveContent";
import ModalThirteenContent from "./modal/ModalThirteenContent";
import ModalFourteenContent from "./modal/ModalFourteenContent";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  // const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  // function toggleModalThree() {
  //   setIsOpen3(!isOpen3);
  // }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }
  function toggleModalTen() {
    setIsOpen10(!isOpen10);
  }
  function toggleModalEleven() {
    setIsOpen11(!isOpen11);
  }
  function toggleModalTwelve() {
    setIsOpen12(!isOpen12);
  }
  function toggleModalThirteen() {
    setIsOpen13(!isOpen13);
  }
  function toggleModalFourteen() {
    setIsOpen14(!isOpen14);
  }

  const getClassNames = () => {
    let classNames = 'custom-modal'; // Base class

    const darkTheme = document.getElementById('darktheme').classList.contains('visible');
    // Check if the display is 'block' or 'none'
    
    if (darkTheme) {
      classNames += ' dark';
      classNames += ' yellow';
      
    } else {
      classNames += ' green';
    }

    return classNames;
  };

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab data-cy="YouTube"><FormattedMessage
          description="portfolioItem7"
          id="Portfolio.item7"
          defaultMessage="YouTube"
        /> </Tab>
        <Tab><FormattedMessage
          description="portfolioItem9"
          id="Portfolio.item9"
          defaultMessage="GitHub"
        /> </Tab>
        <Tab><FormattedMessage
          description="portfolioItem1"
          id="Portfolio.item1"
          defaultMessage="Research"
        /> </Tab>
        <Tab><FormattedMessage
          description="portfolioItem4"
          id="Portfolio.item4"
          defaultMessage="Posters"
        /></Tab>
        <Tab><FormattedMessage
          description="portfolioItem3"
          id="Portfolio.item3"
          defaultMessage="Certificates"
        /></Tab>
        <Tab><FormattedMessage
          description="portfolioItem2"
          id="Portfolio.item2"
          defaultMessage="Mobile Apps"
        /></Tab>
        {/* <Tab>LOGO</Tab>
        <Tab>VIDEO</Tab>
        <Tab>GRAPHIC DESIGN</Tab>
        <Tab>MOCKUP</Tab> */}
      </TabList>

      <div className="portfolio-tab-content">
        <TabPanel >
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item Ends --> */}
            <li className="direction-reveal">
              <figure onClick={toggleModalThirteen}>
                <img src="img/projects/ISTQB_presentation_cover.webp" alt="Nandini Bhatt's ISTQB certification, Software Tester, QA, Cloud, DevOps, Automation, AWS, Agile" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"><FormattedMessage
                    description="PortfolioItem8"
                    id="Portfolio.item8"
                    defaultMessage="ISTQB PPT Presentation"
                  /></span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen13}
                onRequestClose={toggleModalThirteen}
                contentLabel="My dialog"
                className={getClassNames()}
                // className="custom-modal dark yellow"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThirteen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThirteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThirteenContent */}
            </li>
            {/* <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/project-2.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> Best Paper Presentation Award </span>
                </div>
              </figure>

              {}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {}
            </li> */}
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        {/* End All Project */}

        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item Ends --> */}
            <li className="direction-reveal">
              <figure onClick={toggleModalFourteen}>
                <img src="img/projects/unittest.webp" alt="Nandini Bhatt's project: TESTynamo, QA, Software/Unit Testing, GAN, AI/ML, CI/CD, DevOps, MLOps, Automation, Cloud, AWS, Python, Scripting,
Containerisation" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"><FormattedMessage
                    description="PortfolioItem8"
                    id="Portfolio.item10"
                    defaultMessage="TESTynamo: An automated end-to-end CI/CD integrated GAN-powered unit test generator"
                  /></span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen14}
                onRequestClose={toggleModalFourteen}
                contentLabel="TESTynamo"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFourteen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFourteenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFourteenContent */}
            </li>
            {/* <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/project-2.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> Best Paper Presentation Award </span>
                </div>
              </figure>

              {}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {}
            </li> */}
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        {/* End All Project */}

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src="img/projects/ICRASTEM_2022.webp" alt="Nandini Bhatt's Research paper, ICRASTEM, research and development, LaTeX" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">ICRASTEM 2022</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="ICRASTEM 2022"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
            <li className="direction-reveal">
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/paper_presentation_loom.webp" alt="Nandini Bhatt's Research paper presentation, ICRASTEM, research and development, public speaking" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"><FormattedMessage
                    description="paperpresent"
                    id="paperpresent"
                    defaultMessage="Paper Presentation"
                  /></span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal

                
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className={getClassNames()}
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/project-2.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> Best Paper Presentation Award </span>
                </div>
              </figure>

              {}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {}
            </li> */}
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        {/* End All Project */}

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalEleven}>
                <img src="img/projects/istqb.webp" alt="Nandini bhatt's ISTQB certification poster gif, Software Tester, QA, Cloud, DevOps, Automation, AWS, Agile" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">
                    <FormattedMessage
                      description="PortfolioItem5"
                      id="Portfolio.item5"
                      defaultMessage="ISTQB - Animated Poster"
                    /></span>
                </div>
              </figure>

              {/* Start ModalElevenContent */}
              <Modal

                
                isOpen={isOpen11}
                onRequestClose={toggleModalEleven}
                contentLabel="ISTQB Poster Animated"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEleven}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalElevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalElevenContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalTwelve}>
                <img src="img/projects/istqb.webp" alt="Nandini bhatt's ISTQB certification poster pdf, Software Tester, QA, Cloud, DevOps, Automation, AWS, Agile" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">
                    <FormattedMessage
                      description="PortfolioItem6"
                      id="Portfolio.item6"
                      defaultMessage="ISTQB - Static Poster"
                    /></span>
                </div>
              </figure>

              {/* Start ModalTwelveContent */}
              <Modal

                
                isOpen={isOpen12}
                onRequestClose={toggleModalTwelve}
                contentLabel="ISTQB Poster Static"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwelve}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwelveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwelveContent */}
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalFour}>
                <img src="img/projects/istqb.webp" alt="Nandini bhatt's ISTQB certification, Software Tester, QA, Cloud, DevOps, Automation, AWS, Agile" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">ISTQB CTFL</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal

                
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="ISTQB"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalFive}>
                <img src="img/projects/yellow_belt.webp" alt="Nandini Bhatt's Lean Six Sigma Yellow Belt certification,Software Tester, QA, Cloud, DevOps, Automation, AWS, Agile" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Lean Six Sigma Yellow Belt</span>
                </div>
              </figure>

              {/* Start ModalFiveContent */}
              <Modal

                
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="yellowbelt"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFiveContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalSix}>
                <img src="img/projects/green_belt.webp" alt="Nandini Bhatt's Lean Six Sigma Green Belt certification, Software Tester, QA, Cloud, DevOps, Automation, AWS, Agile" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Lean Six Sigma Green Belt</span>
                </div>
              </figure>

              {/* Start ModalSixContent */}
              <Modal

                
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="greenbelt"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSixContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSixContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalSeven}>
                <img src="img/projects/black_belt.webp" alt="Nandini Bhatt's Lean Six sigma black belt certification, Software Tester, QA, Cloud, DevOps, Automation, AWS, Agile" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Lean Six Sigma Black Belt</span>
                </div>
              </figure>

              {/* Start ModalSevenContent */}
              <Modal

                
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="blackbelt"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeven}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSevenContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalEight}>
                <img src="img/projects/lean_management.webp" alt="Nandini Bhatt's Six Sigma Lean Management certification, Software Tester, QA, Cloud, DevOps, Automation, AWS, Agile" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Lean Six Sigma Management Expert</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal

                
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="managementexpert"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalEight}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalEightContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalEightContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalTen}>
                <img src="img/projects/python.webp" alt="Nandini Bhatt's Data analysis with Python certification, data science, ML, AI, IBM" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">IBM - Data analysis with Python</span>
                </div>
              </figure>

              {/* Start ModalTenContent */}
              <Modal

                
                isOpen={isOpen10}
                onRequestClose={toggleModalTen}
                contentLabel="ibmpython"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTen}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTenContent */}
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalNine}>
                <img src="img/projects/paper_presentation.webp" alt="Nandini Bhatt's Research paper presentation, ICRASTEM, research and development, public speaking" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">  <FormattedMessage
                    description="bestPaper"
                    id="bestPaper"
                    defaultMessage="Best paper presentation award"
                  /> </span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal

                
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel="bestpaper"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalNine}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalNineContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src="img/projects/hotfocus.jpg" alt="Nandini Bhatt's freelance project: Hybrid Mobile App development, Ionic framework, React.js, Vue.js, Android, iOS" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Hotfocus</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="ICRASTEM 2022"
                className={getClassNames()}
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Portfolio;
