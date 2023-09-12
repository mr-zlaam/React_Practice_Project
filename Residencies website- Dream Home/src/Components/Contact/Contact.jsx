import { useRef } from "react";

import emailjs from "@emailjs/browser";

import "../Contact/Contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_vj5dt5l",
        "template_pm8jp08",
        form.current,
        "3GiCw6VvqPwjpoZUi"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("Message Send Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="Contact-wrap">
        <div className="txt-contact">
          <h1>Contact Us</h1>
          <p>We always ready to help by providing the best services for you.</p>
        </div>
        <form className="main-form" ref={form} onSubmit={sendEmail}>
          <div className="form-controller">
            <div className="fcus">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="user_name"
                id="name"
                autoComplete="off"
              />
            </div>
            <div className="form bg-transparent">
              <div className="fcus">
                <label htmlFor="mail">Email</label>
                <input
                  type="email"
                  name="user_mail"
                  id="mail"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="form bg-transparent">
              <label htmlFor="textarea">Message</label>
              <textarea
                className=" px-3 py-3 font-semibold"
                name="message"
                id="textarea"
                cols="90"
                rows="7"
                autoComplete="off"
              />
            </div>
            <div className="button w-fit m-auto hover: opacity-80 mt-3 active:opacity-80 cursor-pointer">
              <button className="active:text-green-500  " value="send">
                Send
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
