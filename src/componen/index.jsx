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
import React, { useState } from "react";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import database from "../config/firebase";
import { ref, get } from "firebase/database";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-firebase-path' with the actual path in your database
        const snapshot = await get(ref(database, "id"));
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();

    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  const buka = () => {
    navigate("/input");
  };

  return (
    <>
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">BATTERY SWAP</h1>
            <h3 className="d-none d-sm-block">
              Tekan Button Dibawah, Untuk Membuka Kunci Loker yang kosong.
            </h3>
            <button
              type="button"
              onClick={buka}
              className="btn-round pp  btn-lg"
            >
              BUKA
            </button>
          </div>
        </Container>
        <Footer></Footer>
      </div>
    </>
  );
}
