/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Row } from "reactstrap";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

export default function Input() {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  return (
    <div className="page-header ">
      <img
        alt="..."
        className="path"
        src={require("../assets/img/path4.png")}
      />
      <div className="d-flex justify-content-center">
        <div className="content-center brand ">
          <h1 className="title mb-3">Verifikasi Gagal</h1>
          <h3 className="title mb-3">
            Tidak Ada Batterai Masuk yang Terdeteksi.
          </h3>

          <div className=" mb-5">
            <Row className="Row justify-content-center align-content-center mb-3 ">
              <img
                className="battery"
                src={require("../assets/img/battery.png")}
                alt=""
              />
            </Row>
            <Row className="Row justify-content-center align-content-center">
              <button
                type="button"
                onClick={home}
                className="btn-round pp btn-lg mb-5 mt-3"
              >
                KEMBALI
              </button>
            </Row>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
