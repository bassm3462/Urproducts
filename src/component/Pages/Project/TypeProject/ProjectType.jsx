import React, { useEffect } from "react";
import "../StyleProject/Project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
function ProjectType() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="Project" id="Project">
        <div className="d-flex justify-content-center mb-3 ">
          <h2>
            <a href="#" className="mb-3">
              {" "}
              Our Project
            </a>
          </h2>
        </div>
        <div className="container">
          <div className="box" data-aos="zoom-in">
            <div className="image">
              <div className="displayLink"></div>
              <NavLink to={"/project"}>
                {" "}
                <img
                  src="https://urproducts.iq/media/products_img/msg162191912-140_wTEeIzy.jpg"
                  alt=""
                />
              </NavLink>
            </div>
            <Typography className="displayNameCamera">camera name</Typography>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="image">
              <NavLink to={"/project"}>
                <img
                  src="https://urproducts.iq/media/products_img/msg162191912-140_wTEeIzy.jpg"
                  alt=""
                />
              </NavLink>
            </div>
            <Typography className="displayNameCamera">camera name</Typography>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="image">
              <NavLink to={"/project"}>
                {" "}
                <img
                  src="https://urproducts.iq/media/products_img/msg162191912-140_wTEeIzy.jpg"
                  alt=""
                />
              </NavLink>
            </div>
            <Typography className="displayNameCamera">camera name</Typography>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="image">
              <NavLink to={"/project"}>
                {" "}
                <img
                  src="https://urproducts.iq/media/products_img/msg162191912-140_wTEeIzy.jpg"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="displayNameCamera">
              {" "}
              <Typography className="displayNameCamera">camera name</Typography>
            </div>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="image">
              <NavLink to={"/project"}>
                {" "}
                <img
                  src="https://urproducts.iq/media/products_img/msg162191912-140_wTEeIzy.jpg"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="displayNameCamera">
              {" "}
              <Typography className="displayNameCamera">camera name</Typography>
            </div>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="image">
              <NavLink to={"/project"}>
                {" "}
                <img
                  src="https://urproducts.iq/media/products_img/msg162191912-140_wTEeIzy.jpg"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="hidentext" style={{ overflow: "hidden" }}>
              {" "}
              <Typography className="displayNameCamera">camera name</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectType;
