import React from "react";

const skillsContent = [
  { skillClass: "p85", skillPercent: "85", skillName: "Agile" },
  { skillClass: "p80", skillPercent: "80", skillName: "AWS" },
  { skillClass: "p75", skillPercent: "75", skillName: "C/C++/C#/Java/Python" },
  { skillClass: "p85", skillPercent: "85", skillName: "Cypress/Selenium" },
  { skillClass: "p60", skillPercent: "60", skillName: "Containers/Kubernetes" },
  { skillClass: "p90", skillPercent: "90", skillName: "DevOps" },
  { skillClass: "p90", skillPercent: "90", skillName: "GIT" },
  { skillClass: "p70", skillPercent: "70", skillName: "HTML/CSS/JSS/React.js" },
  { skillClass: "p75", skillPercent: "75", skillName: "Linux/SSH" },
  { skillClass: "p60", skillPercent: "60", skillName: "Networking" },
  { skillClass: "p75", skillPercent: "75", skillName: "Postman" },
  { skillClass: "p65", skillPercent: "65", skillName: "SQL/NOSQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
