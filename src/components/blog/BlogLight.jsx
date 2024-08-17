import React, { useState } from "react";
import Modal from "react-modal";

// import ModalOneBlogContent from "./modal/ModalOneBlogContent";

Modal.setAppElement("#root");

const BlogLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen2(!isOpen3);
  }
  return (
    <>
      {/* Blog 3 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalThree}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/convocation.webp"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
            <h3> <a target="_blank" 
            href="https://medium.com/@nandineebhatt07/the-hidden-pearls-of-a-masters-degree-d491566207dd">
              The hidden pearls of a master’s degree
              </a></h3>
            </div>
            <div className="entry-content open-sans-font">
            <p>
            You must have come across hundreds of posts immediately after the Convocation ...
            </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>
      </div>
      {/*  Blog 3 Ends */}

      {/* Blog 1 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalOne}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/projects/istqb.webp"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
            <h3> <a target="_blank" href="https://medium.com/@nandineebhatt07/a-software-testers-introduction-to-industry-certifications-2705ce398636" >A software tester’s introduction to industry certifications</a></h3>
            </div>
            <div className="entry-content open-sans-font">
            <p>
              Generative AI has dominated the industry [1]. It is hard to imagine a sector that AI has not touched. The bots are ...
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>
      </div>
      {/*  Blog 1 Ends */}

      {/* Blog 2 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalTwo}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/projects/istqb.webp"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
            <h3> <a target="_blank" href="https://medium.com/@nandineebhatt07/une-introduction-aux-diplômes-industrielle-par-une-testeuse-des-logiciels-en-herbe-0ada6a2826ef" >Une introduction aux diplômes industrielle par une testeuse des logiciels en herbe</a></h3>
            </div>
            <div className="entry-content open-sans-font">
            <p>
            IA générative a dominé l’industrie [1]. Il est difficile de trouver un secteur qui l’IA n’a ...
            </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>
      </div>
      {/*  Blog 2 Ends */}
    </>
  );
};

export default BlogLight;
