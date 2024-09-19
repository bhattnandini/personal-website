import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DirectionReveal from "direction-reveal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
import { FormattedMessage } from "react-intl";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalSevenContent from "./modal/ModalSevenContent";
import ModalEightContent from "./modal/ModalEightContent";
import ModalNineContent from "./modal/ModalNineContent";
import ModalTenContent from "./modal/ModalTenContent";
import ModalElevenContent from "./modal/ModalElevenContent";
import ModalTwelveContent from "./modal/ModalTwelveContent";
import ModalThirteenContent from "./modal/ModalThirteenContent";
import ModalFourteenContent from "./modal/ModalFourteenContent";

const PortfolioLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
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
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
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

  useEffect(() => {
    // Init with default setup
    DirectionReveal();

    // Init with all options at default setting
    DirectionReveal({
      selector: ".direction-reveal",
      itemSelector: ".direction-reveal__card",
      animationName: "slide",
      animationPostfixEnter: "enter",
      animationPostfixLeave: "leave",
      touchThreshold: 500,
    });
  }, []);

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>
          <FormattedMessage
            description="portfolioItem7"
            id="Portfolio.item7"
            defaultMessage="YouTube"
          />{" "}
        </Tab>
        <Tab>
          <FormattedMessage
            description="portfolioItem9"
            id="Portfolio.item9"
            defaultMessage="GitHub"
          />{" "}
        </Tab>
        <Tab>
          <FormattedMessage
            description="portfolioItem1"
            id="Portfolio.item1"
            defaultMessage="Research"
          />{" "}
        </Tab>
        <Tab>
          <FormattedMessage
            description="portfolioItem4"
            id="Portfolio.item4"
            defaultMessage="Posters"
          />
        </Tab>
        <Tab>
          <FormattedMessage
            description="portfolioItem3"
            id="Portfolio.item3"
            defaultMessage="Certificates"
          />
        </Tab>
        <Tab>
          <FormattedMessage
            description="portfolioItem2"
            id="Portfolio.item2"
            defaultMessage="Mobile Apps"
          />
        </Tab>
        {/* <Tab>LOGO</Tab>
      <Tab>VIDEO</Tab>
      <Tab>GRAPHIC DESIGN</Tab>
      <Tab>MOCKUP</Tab> */}
      </TabList>
      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalThirteen}
              >
                <img
                  src="img/projects/ISTQB_presentation_cover.jpg"
                  alt="Portolio"
                />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    <FormattedMessage
                      description="PortfolioItem8"
                      id="Portfolio.item8"
                      defaultMessage="ISTQB - PPT Presentation"
                    />
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen13}
                onRequestClose={toggleModalThirteen}
                contentLabel="ISTQB PPT presentation"
                className="custom-modal green"
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
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFourteen}
              >
                <img src="img/projects/unittest.webp" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    <FormattedMessage
                      description="PortfolioItem8"
                      id="Portfolio.item10"
                      defaultMessage="TESTynamo: GAN-based Unit Test Generator"
                    />
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen14}
                onRequestClose={toggleModalFourteen}
                contentLabel="TESTynamo"
                className="custom-modal green"
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
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalOne}
              >
                <img src="img/projects/ICRASTEM_2022.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">ICRASTEM 2022</span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal green"
                overlayClassName="custom-overlay"
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
              <figure
                className="direction-reveal__card"
                onClick={toggleModalTwo}
              >
                <img src="img/projects/paper_presentation.png" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    Paper Presentation
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal green"
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
            {/* <!-- Portfolio Item Starts --> */}
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        {/* End All Project */}

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalEleven}
              >
                <img src="img/projects/istqb.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    <FormattedMessage
                      description="PortfolioItem5"
                      id="Portfolio.item5"
                      defaultMessage="ISTQB - Animated Poster"
                    />
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen11}
                onRequestClose={toggleModalEleven}
                contentLabel="ISTQB Poster Animated"
                className="custom-modal green"
                overlayClassName="custom-overlay"
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
            {/* <!-- Portfolio Item Ends --> */}

            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalTwelve}
              >
                <img src="img/projects/istqb.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    <FormattedMessage
                      description="PortfolioItem6"
                      id="Portfolio.item6"
                      defaultMessage="ISTQB - Static Poster"
                    />
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen12}
                onRequestClose={toggleModalTwelve}
                contentLabel="ISTQB Poster Static"
                className="custom-modal green"
                overlayClassName="custom-overlay"
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
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFour}
              >
                <img src="img/projects/istqb.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">ISTQB</span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="istqb"
                className="custom-modal green"
                overlayClassName="custom-overlay"
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
            {/* <!-- Portfolio Item Ends --> */}

            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFive}
              >
                <img
                  src="https://assets.nandinibhatt.me/certificates/yellow_belt.png"
                  alt="Portolio"
                />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    Lean Six Sigma Yellow Belt
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="yellowbelt"
                className="custom-modal green"
                overlayClassName="custom-overlay"
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
            {/* <!-- Portfolio Item Ends --> */}

            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalSix}
              >
                <img
                  src="https://assets.nandinibhatt.me/certificates/green_belt.png"
                  alt="Portolio"
                />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    Lean Six Sigma Green Belt
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="greenbelt"
                className="custom-modal green"
                overlayClassName="custom-overlay"
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
            {/* <!-- Portfolio Item Ends --> */}

            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalSeven}
              >
                <img
                  src="https://assets.nandinibhatt.me/certificates/black_belt.png"
                  alt="Portolio"
                />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    Lean Six Sigma Black Belt
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="blackbelt"
                className="custom-modal green"
                overlayClassName="custom-overlay"
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
            {/* <!-- Portfolio Item Ends --> */}

            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalEight}
              >
                <img
                  src="https://assets.nandinibhatt.me/certificates/lean_management.png"
                  alt="Portolio"
                />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    Lean Six Sigma Management Expert
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="managementexpert"
                className="custom-modal green"
                overlayClassName="custom-overlay"
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
            {/* <!-- Portfolio Item Ends --> */}

            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalTen}
              >
                <img src="img/projects/python.jpeg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    IBM - Data analysis with Python
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen10}
                onRequestClose={toggleModalTen}
                contentLabel="ibmpython"
                className="custom-modal green"
                overlayClassName="custom-overlay"
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
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalNine}
              >
                <img
                  src="img/projects/paper_presentation.webp"
                  alt="Portolio"
                />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">
                    Best paper presentation award
                  </span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel="bestpaper"
                className="custom-modal green"
                overlayClassName="custom-overlay"
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
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li className="direction-reveal">
              <figure
                className="direction-reveal__card"
                onClick={toggleModalThree}
              >
                <img src="img/projects/hotfocus.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">Hotfocus</span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="Hotfocus"
                className="custom-modal green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
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
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default PortfolioLight;
