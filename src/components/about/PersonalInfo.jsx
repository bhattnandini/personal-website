import React from "react";
import { FormattedMessage } from 'react-intl'

const personalInfoContent = [
  { meta: "first name", metaInfo: "Nandini" },
  { meta: "last name", metaInfo: "Bhatt" },
  { meta: "Age", metaInfo: "26" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Freelance", metaInfo: "Available" },
  // { meta: "Address", metaInfo: "404-1160 Rue Saint-Mathieu, Montreal, Quebec, Canada - H3H 2P4" },
  { meta: "phone", metaInfo: "+1 (438) 722-3706" },
  { meta: "Email", metaInfo: "reach@nandinibhatt.me" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "English (C1), French (B2), Hindi (Bilingual), Gujarati (Native)" },
];

const PersonalInfo = ({ }) => {
  return (
    <>
      <ul className="about-list list-unstyled open-sans-font">
        <li key={0}>
          <span className="title"> <FormattedMessage
            description="PIMeta0"
            id="PI.Meta0"
            defaultMessage="first name"
          />: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            <FormattedMessage
              description="PIValue1"
              id="PI.Value1"
              defaultMessage={personalInfoContent[0].metaInfo}
            />
          </span>
        </li>

        <li key={1}>
          <span className="title"> <FormattedMessage
            description="PIMeta1"
            id="PI.Meta1"
            defaultMessage="last name"
          />: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            <FormattedMessage
              description="PIValue1"
              id="PI.Value1"
              defaultMessage={personalInfoContent[1].metaInfo}
            />
          </span>
        </li>

        <li key={2}>
          <span className="title"> <FormattedMessage
            description="PIMeta2"
            id="PI.Meta2"
            defaultMessage="Age"
          />: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            <FormattedMessage
              description="PIValue2"
              id="PI.Value2"
              defaultMessage={personalInfoContent[2].metaInfo}
            />
            <FormattedMessage
              description="PIYears"
              id="PI.years"
              defaultMessage=" years"
            />
          </span>
        </li>

        <li key={3}>
          <span className="title"> <FormattedMessage
            description="PIMeta3"
            id="PI.Meta3"
            defaultMessage="Nationality"
          />: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            <FormattedMessage
              description="PIValue3"
              id="PI.Value3"
              defaultMessage={personalInfoContent[3].metaInfo}
            />
          </span>
        </li>

        <li key={4}>
          <span className="title"> <FormattedMessage
            description="PIMeta4"
            id="PI.Meta4"
            defaultMessage="Freelance"
          />: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            <FormattedMessage
              description="PIValue4"
              id="PI.Value4"
              defaultMessage={personalInfoContent[4].metaInfo}
            />
          </span>
        </li>
        {/* 
        <li key={5}>
          <span className="title"> <FormattedMessage
                description="PIMeta5"
                id="Address.address"
                defaultMessage="Address"
              />: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          <FormattedMessage
                description="PIValue5"
                id="PI.Value5"
                defaultMessage={personalInfoContent[5].metaInfo}
              />
          </span>
        </li> */}

        <li key={5}>
          <span className="title"> <FormattedMessage
            description="PIMeta6"
            id="Address.call"
            defaultMessage="phone"
          />: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            <a href="tel:14387223706">
              <FormattedMessage
                description="PIValue6"
                id="PI.Value6"
                defaultMessage={personalInfoContent[5].metaInfo}
              />
            </a>

          </span>
        </li>

        <li key={6}>
          <span className="title"> <FormattedMessage
            description="PIMeta7"
            id="Address.email"
            defaultMessage="Email"
          />: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            <a href="mailto:reach@nandinibhatt.me" data-cy="email">
              <FormattedMessage
                description="PIValue7"
                id="PI.Value7"
                defaultMessage={personalInfoContent[6].metaInfo}
              />
            </a>

          </span>
        </li>

        <li key={7}>
          <span className="title"> <FormattedMessage
            description="PIMeta8"
            id="PI.Meta8"
            defaultMessage="languages"
          />: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            <FormattedMessage
              description="PIValue8"
              id="PI.Value8"
              defaultMessage={personalInfoContent[7].metaInfo}
            />
          </span>
        </li>
      </ul>
    </>
  );
};

export default PersonalInfo;
