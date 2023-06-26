import React from "react";
import { MDBInput, MDBTextArea, MDBBtn } from "mdb-react-ui-kit";
import "./Style.css";

function Form({
  nameError,
  emailError,
  phoneError,
  setName,
  setEmail,
  setPhone,
  setMessage,
  setNameError,
  handleSubmit,
  setPhoneError,
  setEmailError,
  name,
  email,
  phone,
  message,
  messageError,
  setMessageError,
}) {
  return (
    <form
      id="form"
      className="text-center contact-form"
      style={{ width: "100%", maxWidth: "300px" }}
      onSubmit={handleSubmit}
    >
      <h2>Contact us</h2>

      <MDBInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => setNameError(name ? "" : "Vui lòng nhập tên")}
        className={nameError ? "is-invalid" : ""}
        wrapperClass="mb-4"
      />
      {nameError && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {nameError}
        </div>
      )}
      <br />
      <MDBInput
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setEmailError(email ? "" : "Vui lòng nhập địa chỉ email")}
        className={emailError ? "is-invalid" : ""}
        wrapperClass="mb-4"
      />
      {emailError && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {emailError}
        </div>
      )}
      <br />
      <MDBInput
        type="phone"
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        onBlur={() => setPhoneError(phone ? "" : "Vui lòng nhập số điện thoại")}
        className={phoneError ? "is-invalid" : ""}
        wrapperClass="mb-4"
      />
      {phoneError && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {phoneError}
        </div>
      )}
      <br />
      <MDBTextArea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={() => setMessageError(message ? "" : "Vui lòng nhập tin nhắn")}
        className={messageError ? "is-invalid" : ""}
        wrapperClass="mb-4"
        label="Message"
      />
      {messageError && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {messageError}
        </div>
      )}
      <MDBBtn color="primary" block className="my-4" type="submit">
        Submit
      </MDBBtn>
    </form>
  );
}

export default Form;
