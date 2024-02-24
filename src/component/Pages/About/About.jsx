import React, { useEffect } from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ColorButton } from "../Config/contact";
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleAbout = () => {
    window.location.href = "/AboutDetails";
  };
  return (
    <>
      <section id="about" className="about">
        <div className="d-flex justify-content-center mb-3 ">
          <h2><a href="#" className="mb-3"> About us</a></h2>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <img src="8.jpg" className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
            >
              <h3>About Ur Product</h3>
              <p className="fst-italic ">
                The General Company for Electronic Systems one of the formations
                of the Ministry of Industry and minerlas.. we work on
                manufacturing and assembling commercial products with reputable
                international companies.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" /> Our letter is : To rise
                  the iraqi electronic industries up to the top with the best
                  countries, and to plant the seed of trust in our clients
                  hearts to bring the iraqi production to life throught
                  believing in our qualified staff, to fulfill the needs in the
                  private and public markets in iraq.
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Our values : 1- Trust 2-
                  Quality 3- create professional environment to inspire the
                  employee and rise the confidences.
                </li>
              </ul>
              <ColorButton onClick={handleAbout} variant="outlined" startIcon={<ArrowForwardIcon />}>
              Read More
              </ColorButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
