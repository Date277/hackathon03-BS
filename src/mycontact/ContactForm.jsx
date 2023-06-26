import React, { useState } from "react";
import Form from "./Form";
import "./Style.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Email không hợp lệ");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Số điện thoại không hợp lệ");
      return;
    }

    document.querySelector(".name").textContent = name;
    document.querySelector(".email").textContent = email;
    document.querySelector(".phone").textContent = phone;
    document.querySelector(".message").textContent = message;
  };

  return (
    <div className="container">
      <div className="contact-infor">
        <h2>Contact Infor</h2>
        <div>
          <span>Name:</span>
          <div className="name">?</div>
          <hr />
        </div>
        <div>
          <span>Email:</span>
          <div className="email">?</div>
          <hr />
        </div>
        <div>
          <span>Phone:</span>
          <div className="phone">?</div>
          <hr />
        </div>
        <div>
          <span>Message:</span>
          <div className="message">?</div>
          <hr />
        </div>
      </div>
      <Form
        nameError={nameError}
        emailError={emailError}
        phoneError={phoneError}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setMessage={setMessage}
        setNameError={setNameError}
        setPhoneError={setPhoneError}
        handleSubmit={handleSubmit}
        setEmailError={setEmailError}
        name={name}
        email={email}
        phone={phone}
        message={message}
        messageError={messageError}
        setMessageError={setMessageError}
      />
    </div>
  );
}

export default ContactForm;
