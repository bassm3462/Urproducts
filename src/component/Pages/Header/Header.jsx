import React, { useEffect, useState } from "react";
import "./Header.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconButton } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Sidbar from "./DatailsHader/Sidbar";
import NavBar from "./DatailsHader/NavBar";
function Header() {
  const [mobNVBAr, setMoBNVBAR] = useState(
    window.innerWidth >= 991?true:false

  );

  useEffect(() => {
    AOS.init();
  }, []);

  const HandleButton = () => {
    setMoBNVBAR(false);
  };

  const HandleClose = () => {
    setMoBNVBAR(true);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setMoBNVBAR(window.innerWidth >= 991);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);
 
  // }, []);
  useEffect(() => {
    if (window.innerWidth < 991) {
      setMoBNVBAR(true);
    }
  }, []);
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="#">
            <img
              src="ImageCompany/logo with circle outside.png"
              alt="No Image"
              width={"60px"}
              height={"60px"}
            />
          </a>
        </h1>
        <nav id="navbar" className="navbar  mobile-nav-toggle">
          {mobNVBAr ? (
            <NavBar />
          ) : (
            <div className="me-5">
              <Sidbar />
            </div>
          )}
          <div className="hedinIconBotton">
            {mobNVBAr ? (
              <IconButton
                aria-label="side"
                color="primary"
                onClick={HandleButton}
              >
                <i style={{ color: "white" }}>
                  <DehazeIcon />
                </i>
              </IconButton>
            ) : (
              <IconButton
                aria-label="side"
                color="primary"
                onClick={HandleClose}
              >
                <i style={{ color: "white" }}>
                  <CloseIcon />
                </i>
              </IconButton>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
