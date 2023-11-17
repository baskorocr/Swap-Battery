// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className={"fixed-footer"}>
      <div className={"d-flex justify-content-center mt-3"}>
        <span className="align-top">
          {" "}
          <img
            className="logo "
            src={require("../assets/img/logo.png")}
            alt=""
          />
        </span>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
