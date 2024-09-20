import React, { useState } from "react";
import Modal from "react-modal";

// import ModalOneBlogContent from "./modal/ModalOneBlogContent";

// Modal.setAppElement("#root");

const Blog = () => {
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
    setIsOpen3(!isOpen3);
  }

  return (
    <>
     {/* Blog 4 Starts */}
     <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalThree}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/journey.webp"
                className="img-fluid"
                alt="Nandini Bhatt's medium.com Blog post, Tester, QA, Cloud, DevOps, Automation, AWS"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3 data-cy="blog-4"> <a target="_blank" rel="noreferrer"
              href="https://blogs.nandinibhatt.me/a-birds-eye-view-of-my-professional-and-educational-journey-2b1bf4601f49">
              Nandini Bhatt's professional and educational career
              </a></h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              As a recent graduate with a master’s degree in Quality Systems Engineering from ... 
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>
      </div>
      {/*  Blog 4 Ends */}

     {/* Blog 3 Starts */}
     <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalThree}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/convocation.webp"
                className="img-fluid"
                alt="Nandini Bhatt's medium.com Blog post, Tester, QA, Cloud, DevOps, Automation, AWS"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3 data-cy="blog-1"> <a target="_blank" rel="noreferrer"
              href="https://blogs.nandinibhatt.me/the-hidden-pearls-of-a-masters-degree-d491566207dd">
              Nandini Bhatt's tips on pursuing Higher Education
              </a></h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              You must have come across hundreds of posts immediately after the Convocation Ceremony. Most of them ...
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
                alt="Nandini Bhatt's medium.com Blog post, Tester, QA, Cloud, DevOps, Automation, AWS"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3> <a target="_blank" rel="noreferrer" href="https://blogs.nandinibhatt.me/a-software-testers-introduction-to-industry-certifications-2705ce398636">Nandini Bhatt’s introduction to pursuing ISTQB certifications</a></h3>
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
                alt="Nandini Bhatt's medium.com Blog post, Tester, QA, Cloud, DevOps, Automation, AWS"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3> <a target="_blank" rel="noreferrer" href="https://blogs.nandinibhatt.me/une-introduction-aux-diplômes-industrielle-par-une-testeuse-des-logiciels-en-herbe-0ada6a2826ef">Une introduction aux diplômes ISTQB par Nandini Bhatt</a></h3>
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



export default Blog;
