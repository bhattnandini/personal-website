import React from "react";
import { FormattedMessage } from 'react-intl'

const experienceContent = [
  {
    year: "2020 - Present",
    position: "Co-Founder",
    compnayName: "Appstasy LLP",
    details: `Responsibilities: Find and manage projects and clients, analyze projects, plan, architect, develop, deploy and maintain solutions`,
  },
  {
    year: "2020",
    position: "Software Developer",
    compnayName: "QTONZ INFOSOFT PVT. LTD",
    details: `Responsibilities: Find and manage Android based projects and clients, deploy and maintain solutions.`,
  },
  {
    year: "2019-2020",
    position: "Software Developer (Internship)",
    compnayName: "Hitech Transpower",
    details: `Responsibilities: Front-end development using JS, backend development and ML using Python, DBMS using SQL, code optimisation`,
  },
  {
    year: "2021 - 2022",
    position: "Junior Software Tester",
    compnayName: "Bhaktee Software PVT LTD",
    details: `Responsibilities: Performed comprehensive software testing and test planning using tools like Selenium, JIRA and Postman.`,
  },
  {
    year: "2022-2023",
    position: "Service Assistant",
    compnayName: "Concordia University",
    details: `Responsibilities: Performed administrative tasks including data entry, file management, and document preparation. Improved data management system.`,
  },
  {
    year: "2023",
    position: "Junior Internal Auditor",
    compnayName: "Concordia University",
    details: `Responsibilities: Implemented four new audit procedures, identified risks, collected and analysed data, communicated findings to leaders`,
  },
];

const Experience = () => {
  return (
    <ul>
      {/* <li key={4}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase"> <FormattedMessage
            description="ExperienceYear5"
            id="Experience.year5"
            defaultMessage="2023"
          /></span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="ExperiencePos5"
            id="Experience.pos5"
            defaultMessage="Junior Internal Auditor"
          />
          <span className="place open-sans-font">{experienceContent[5].compnayName}</span>
        </h5>
        <p className="open-sans-font"> <FormattedMessage
            description="ExperienceDetails5"
            id="Experience.details5"
            defaultMessage="Responsibilities:  Implemented four new audit procedures, identified risks, collected and analysed data, communicated findings to leaders"
            value= {
              {
                details:experienceContent[0].details
              }
            }
          /></p>
      </li> */}

      {/* <li key={3}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase"> <FormattedMessage
            description="ExperienceYear4"
           id="Experience.year4"
            defaultMessage="2022 - 2023"
          /></span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="ExperiencePos4"
            id="Experience.pos4"
            defaultMessage="Service Assistant"
          />
          <span className="place open-sans-font">{experienceContent[4].compnayName}</span>
        </h5>
        <p className="open-sans-font"> <FormattedMessage
            description="ExperienceDetails4"
            id="Experience.details4"
            defaultMessage="Responsibilities: Performed administrative tasks including data entry, file management, and document preparation. Improved data management system."
            value= {
              {
                details:experienceContent[0].details
              }
            }
          /></p>
      </li> */}

      {/* <li key={0}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase"> <FormattedMessage
            description="ExperienceYear0"
            id="Experience.year0"
            defaultMessage="2020 - Present"
          /></span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="ExperiencePos0"
            id="Experience.pos0"
            defaultMessage="Co-Founder"
          />
          <span className="place open-sans-font">{experienceContent[0].compnayName}</span>
        </h5>
        <p className="open-sans-font"> <FormattedMessage
            description="ExperienceDetails0"
            id="Experience.details0"
            defaultMessage="Responsibilities: Find and manage projects and clients, analyze projects, plan, architect, develop, deploy and maintain solutions"
            // value= {
            //   {
            //     details:experienceContent[0].details
            //   }
            // }
          /></p>
      </li> */}

      <li key={2}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase"> {experienceContent[3].year} </span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="ExperiencePos3"
            id="Experience.pos3"
            defaultMessage="Junior Software Tester"
          />
          <span className="place open-sans-font">{experienceContent[3].compnayName}</span>
        </h5>
        <p className="open-sans-font"> <FormattedMessage
            description="ExperienceDetails3"
            id="Experience.details3"
            defaultMessage="Responsibilities: Performed comprehensive software testing and test planning using tools like Selenium, JIRA and Postman."
          /></p>
      </li>

      <li key={0}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase"> {experienceContent[1].year} </span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="ExperiencePos1"
            id="Experience.pos1"
            defaultMessage="Software Developer"
          />
          <span className="place open-sans-font">{experienceContent[1].compnayName}</span>
        </h5>
        <p className="open-sans-font"> <FormattedMessage
            description="ExperienceDetails1"
            id="Experience.details1"
            defaultMessage="Responsibilities: Front-end and android development, process optimisation using Agile methodology, DevOps with AWS."
          /></p>
      </li>
      
      <li key={1}>
        <div className="icon">
          <i className="fa fa-briefcase"></i>
        </div>
        <span className="time open-sans-font text-uppercase"> {experienceContent[2].year} </span>
        <h5 className="poppins-font text-uppercase">
          <FormattedMessage
            description="ExperiencePos2"
            id="Experience.pos2"
            defaultMessage="Software Developer (Internship)"
          />
          <span className="place open-sans-font">{experienceContent[2].compnayName}</span>
        </h5>
        <p className="open-sans-font"> <FormattedMessage
            description="ExperienceDetails2"
            id="Experience.details2"
            defaultMessage="Responsibilities: Front-end development using JS, backend development and ML using Python, DBMS using SQL, code optimisation"
          /></p>
      </li>
    </ul>
  );
};

export default Experience;
