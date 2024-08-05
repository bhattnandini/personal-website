import React from "react";
import { FormattedMessage } from 'react-intl'

const achievementsContent = [
  { title: "1", subTitle1: "research paper", subTitle2: "published" },
  { title: "6", subTitle1: "Certification", subTitle2: "Lean Six Sigma, ISTQB, Python" },
  // { title: "1", subTitle1: "Startup", subTitle2: "Appstasy" },
  { title: "1", subTitle1: "Mobile app", subTitle2: "Hotfocus" },
];

const Achievements = () => {
  return (
    <div className="row">

      <div className="col-6" key={0}>
        <div className="box-stats with-margin">
          <h3 className="poppins-font position-relative">{achievementsContent[0].title}</h3>
          <p className="open-sans-font m-0 position-relative text-uppercase">
            <FormattedMessage
              description="AchievementsSubtitle1"
              id="Achievements.obj0.Subtitle1"
              defaultMessage="research paper"
            /> <span className="d-block"><FormattedMessage
              description="AchievementsSubtitle2"
              id="Achievements.obj0.Subtitle2"
              defaultMessage="published"
            /></span>
          </p>
        </div>
      </div>

      <div className="col-6" key={1}>
        <div className="box-stats with-margin">
          <h3 className="poppins-font position-relative">{achievementsContent[1].title}</h3>
          <p className="open-sans-font m-0 position-relative text-uppercase">
            <FormattedMessage
              description="AchievementsSubtitle1"
              id="Achievements.obj1.Subtitle1"
              defaultMessage="Certification"
            /> <span className="d-block"><FormattedMessage
              description="AchievementsSubtitle2"
              id="Achievements.obj1.Subtitle2"
              defaultMessage={achievementsContent[1].subTitle2}
            /></span>
          </p>
        </div>
      </div>

      {/* <div className="col-6" key={2}>
        <div className="box-stats with-margin">
          <h3 className="poppins-font position-relative">{achievementsContent[2].title}</h3>
          <p className="open-sans-font m-0 position-relative text-uppercase">
            <FormattedMessage
              description="AchievementsSubtitle1"
              id="Achievements.obj2.Subtitle1"
              defaultMessage="Startup"
            /> <span className="d-block"><FormattedMessage
              description="AchievementsSubtitle2"
              id="Achievements.obj2.Subtitle2"
              defaultMessage={achievementsContent[2].subTitle2}
            /></span>
          </p>
        </div>
      </div> */}

      <div className="col-6" key={2}>
        <div className="box-stats with-margin">
          <h3 className="poppins-font position-relative">{achievementsContent[2].title}</h3>
          <p className="open-sans-font m-0 position-relative text-uppercase">
            <FormattedMessage
              description="AchievementsSubtitle1"
              id= "Address.portfolioItem2"
              defaultMessage="Mobile apps"
            /> <span className="d-block"><FormattedMessage
              description="AchievementsSubtitle2"
              id="Achievements.obj3.Subtitle2"
              defaultMessage={achievementsContent[2].subTitle2}
            /></span>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Achievements;
