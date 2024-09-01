import React from "react";
import { FormattedMessage } from 'react-intl'

const educationContent = [
  // {
  //   year: "2015",
  //   degree: "ENGINEERING DEGREE",
  //   institute: "OXFORD UNIVERSITY",
  //   details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
  //       adipisicing elit`,
  // },
  {
    year: "2022 - 2024",
    degree: "MASTER'S in Quality Systems Engineering",
    institute: "Concordia UNIVERSITY, Montreal",
    details: `CGPA: 3.65/4.30`,
  },
  {
    year: "2017 - 2020",
    degree: "BACHELOR'S in Computer Engineering",
    institute: "Gujarat Technological University",
    details: `CGPA: 8.69/10.00`,
  },
  {
    year: "2014 - 2017",
    degree: "DIPLOMA in Computer Engineering",
    institute: "Gujarat Technological University",
    details: `GTU first / Gold medalist with a CGPA of 9.69/10.00`,
  }
  // {
  //   year: "2013 - 2014",
  //   degree: "Secondary school certification",
  //   institute: "GUJARAT SECONDARY AND HIGHER SECONDARY BOARD",
  //   details: `Percentage: 89.90`,
  // },
];

const Education = () => {
  return (
    <ul>
      <li key={0}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase">{educationContent[0].year}</span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="EducationDegree0"
            id="Education.degree0"
            defaultMessage="MASTER'S in Quality Systems Engineering"
          />
          <span className="place open-sans-font"> <FormattedMessage
            description="EducationInstitute0"
            id="Education.institute0"
            defaultMessage="Concordia UNIVERSITY, Montreal"
          /></span>
        </h5>
        <p className="open-sans-font"><FormattedMessage
            description="EducationDetails0"
            id="Education.details0"
            defaultMessage="CGPA: 3.65/4.30"
          /></p>
      </li>

      <li key={1}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase">{educationContent[1].year}</span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="EducationDegree1"
            id="Education.degree1"
            defaultMessage="BACHELOR'S in Computer Engineering"
          />
          <span className="place open-sans-font"> <FormattedMessage
            description="EducationInstitute1"
            id="Education.institute1"
            defaultMessage="Gujarat Technological University"
          /></span>
        </h5>
        <p className="open-sans-font"><FormattedMessage
            description="EducationDetails1"
            id="Education.details1"
            defaultMessage="CGPA: 8.69/10.00"
          /></p>
      </li>
      
      <li key={2}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase">{educationContent[2].year}</span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="EducationDegree2"
            id="Education.degree2"
            defaultMessage="DIPLOMA in Computer Engineering"
          />
          <span className="place open-sans-font"> <FormattedMessage
            description="EducationInstitute2"
            id="Education.institute1"
            defaultMessage="Gujarat Technological University"
          /></span>
        </h5>
        <p className="open-sans-font"><FormattedMessage
            description="EducationDetails"
            id="Education.details2"
            defaultMessage="GTU first / Gold medalist with a CGPA of 9.69/10.00"
          /></p>
      </li>
{/* 
      <li key={3}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase">{educationContent[3].year}</span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="EducationDegree3"
            id="Education.degree3"
            defaultMessage="Secondary school certification"
          />
          <span className="place open-sans-font"> <FormattedMessage
            description="EducationInstitute3"
            id="Education.institute3"
            defaultMessage="GUJARAT SECONDARY AND HIGHER SECONDARY BOARD"
          /></span>
        </h5>
        <p className="open-sans-font"><FormattedMessage
            description="EducationDetails"
            id="Education.details3"
            defaultMessage="Percentage: 89.90"
          /></p>
      </li> */}
    </ul>
  );
};

export default Education;
