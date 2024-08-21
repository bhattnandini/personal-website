import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/njbhatt/",
  },
  {
    iconName: "fa fa-github",
    link: "https://github.com/bhattnandini",
  },
  {
    iconName: "fa fa-book",
    link: "https://medium.com/@nandineebhatt07",
  },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/@nandineebhatt9140",
  }
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
