import React from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage } from 'react-intl'
import { useIntl } from 'react-intl';

const Contact = ({ }) => {
  const intl = useIntl();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    fetch('https://l75iqhfex6.execute-api.us-east-2.amazonaws.com/dev/Myresource12', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name: name,
        toEmail: email,
        message: message,
        subject: subject,
        src: "reach@nandinibhatt.me"
      })
    })
    alert("Message sent successfully!");
    e.target.reset();
  };

  return (
    <>
      <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                placeholder={intl.formatMessage(
                  {
                    description: 'placeholder1',
                    defaultMessage: 'YOUR NAME',
                    id: "Contact.placeholderName"
                  }
                )}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback"><FormattedMessage
                  description="nameError"
                  id="Address.nameError"
                  defaultMessage="Name is required"
                /></span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "email",
                  {
                    required: <FormattedMessage
                      description="emailError"
                      id="Address.emailError"
                      defaultMessage="Email is Required"
                    />,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: <FormattedMessage
                        description="emailPatternError"
                        id="Address.emailPatternError"
                        defaultMessage="Entered value does not match email format"
                      />,
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="email"
                id="email"
                placeholder={intl.formatMessage(
                  {
                    description: 'placeholder2',
                    defaultMessage: 'YOUR EMAIL',
                    id: "Address.placeholderEmail"
                  }
                )}
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                id="subject"
                placeholder={intl.formatMessage(
                  {
                    description: 'placeholder2',
                    defaultMessage: 'YOUR SUBJECT',
                    id: "Address.placeholderSubject"
                  }
                )}
              />
              {errors.subject && (
                <span className="invalid-feedback"> <FormattedMessage
                  description="subjectError"
                  id="Address.subjectError"
                  defaultMessage="Subject is required."
                /> </span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                id="message"
                placeholder={intl.formatMessage(
                  {
                    description: 'placeholder2',
                    defaultMessage: 'YOUR MESSAGE',
                    id: "Address.placeholderMessage"
                  }
                )}
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback"><FormattedMessage
                  description="messageError"
                  id="Address.messageError"
                  defaultMessage="Message is required."
                /></span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text" data-cy="sendmsg"><FormattedMessage
                description="sendMessage"
                id="Address.sendMessage"
                defaultMessage="Send Message"
              /></span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
      {/* End contact */}
    </>
  );
};
export default Contact;
