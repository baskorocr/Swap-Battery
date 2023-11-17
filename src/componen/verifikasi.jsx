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
import Footer from "./footer";

import { useNavigate } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function PageHeader() {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center section section-signup header brand">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square5 " />

        <Container className="d-flex justify-content-center align-items-center text-center mt-4 mb-5">
          <div className=" justify-content-center align-items-center">
            <h1 className="h1-seo align-content-center">Verifikasi</h1>
            <div className="d-flex justify-content-center align-content-center mt-5 mb-5 ">
              <CountdownCircleTimer
                isPlaying
                duration={15}
                colors={["#007BFF", "#28A745", "#FFA500", "#A30000"]}
                colorsTime={[15, 10, 7, 0]}
              >
                {({ remainingTime }) => (
                  <h3 className="mt-4">
                    {remainingTime === 0 ? navigate("/failed") : remainingTime}
                  </h3>
                )}
              </CountdownCircleTimer>
            </div>
            <h3 className="d-none d-sm-block">
              Silakan Tunggu, Mesin Sedang Memproses Transaksi.
            </h3>
          </div>
        </Container>

        <Footer></Footer>
      </div>
    </>
  );
}
