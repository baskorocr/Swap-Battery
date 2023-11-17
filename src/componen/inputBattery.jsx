import React from "react";

import Footer from "./footer";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

export default function Input() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  return (
    <div className="page-header d-flex align-items-center justify-content-center">
      <img
        alt="..."
        className="path"
        src={require("../assets/img/path4.png")}
      />
      <div className="content-center text-center">
        <h1 className="title">Masukan Batterai Kedalam Loker</h1>
        <h3 className="title">Lalu Scan Barcode Yang Tersedia, Dibawah Ini.</h3>

        <div className=" people">
          <QRCode
            className="barcode"
            size={256}
            style={{
              height: "auto",
              maxWidth: "47%",
              width: "47%",
            }}
            value={"1"}
            viewBox={`0 0 256 256`}
          />
        </div>

        <button
          type="button"
          onClick={home}
          className="btn-round pp btn-lg bti mt-3"
        >
          KEMBALI
        </button>
      </div>

      <Footer />
    </div>
  );
}
