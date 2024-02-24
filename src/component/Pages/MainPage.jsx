import React from "react";
import Home from "./Home/Home";
import Header from "./Header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./services/Services";
import Footer from "./footer/Footer.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Product from "./Project/Product.jsx";
import WorkShop from "./WorkShob/WorkSH";
import "./Main.css";
import Event from "./Event/Event.jsx";
import Project from "./Product/Project.jsx";
const MainPage = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <div
        className="pb-5 pt-5 backImageAbout"
        style={{ backgroundColor: "#eee" }}
      >
        {" "}
        <About />
      </div>
      <div className="m-5">
        {" "}
        <Services />
      </div>
      <div className="">
        <WorkShop />
      </div>
      <div>
    <Project/>
      </div>
      <div className=""
      style={{backgroundColor:"#ececec"}}
      >
        {" "}
        <Product />
      </div>
      <div
       
      >
        <Event />
      </div>
      <div  style={{backgroundColor:"#ececec"}} className="pb-4">
        {" "}
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
