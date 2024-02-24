import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRotate,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section
        id="services"
        className="services section-bg d-flex justify-content-center align-item-center"
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title mb-3">
            <div className="d-flex justify-content-center mb-3 ">
              <h2>
                <a href="#" className="mb-3">
                  {" "}
                  Services
                </a>
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box iconbox-blue">
                <div className="icon">
                  <i>
                    <FontAwesomeIcon
                      icon={faGear}
                      style={{ color: "#450061fe" }}
                    />{" "}
                  </i>
                </div>
                <h4>
                  <a href="">Maintenance</a>
                </h4>
                <p>
                  We have a full staff with complete devices and equipment that
                  work to rehabilitate idle devices.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box iconbox-orange ">
                <div className="icon">
                  <i>
                    <FontAwesomeIcon
                      icon={faWandMagicSparkles}
                      style={{ color: "#450061fe" }}
                    />{" "}
                  </i>
                </div>
                <h4>
                  <a href="">Installation</a>
                </h4>
                <p>
                  We have staff working on installing and programming the
                  electronic devices of our products.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box iconbox-pink">
                <div className="icon">
                  <i>
                    <FontAwesomeIcon
                      icon={faRotate}
                      style={{ color: "#450061fe" }}
                    />
                  </i>
                </div>
                <h4>
                  <a href="">Supplying</a>
                </h4>
                <p>
                  Our products work on supplying electronic materials and
                  devices such as surveillance cameras of all kinds, alarm and
                  firefighting systems, as well as solar energy devices and
                  systems and tablets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
