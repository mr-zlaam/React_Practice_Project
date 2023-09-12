import React, { useState } from "react";
import icon from "../../assest/contact.svg";

const FormHome = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <>
      <div className="mainContainer">
        <div className="formSection">
          <form onSubmit={onSubmit}>
            <div className="hero-form">
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="Tex">Text</label>
                <textarea name="Tex" id="Tex" cols="30" rows="3" />
              </div>
              <div className="submit">
                <button>Submit</button>
              </div>
              <div className="hook">{`Name     
            "  ${Name}"
            Email    "${Email} " 
            Text   ' ${Text}' `}</div>
            </div>
          </form>
        </div>
        <div className="formLogo">
          <img src={icon} alt="Logo" />
        </div>
      </div>
    </>
  );
};
export default FormHome;
