import React, { useEffect } from "react";
import "./Event.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ColorButton } from "../Config/contact";
import AOS from "aos";
import "aos/dist/aos.css";
function Event() {
  useEffect(() => {
    AOS.init();
  }, []);
  const handLreadMore=()=>{
    window.location.href="/EventDetails"
  };
  return (
    <div>
      <div className="Event" id="Event">
      <div className="d-flex justify-content-center mb-3 ">
              <h2>
                <a href="" className="mb-3">
                  {" "}
                 Our Events
                </a>
              </h2>
            </div>
        <div className="container">
          <div className="box" data-aos="zoom-in">
            <Button
            onClick={handLreadMore}
              variant="text"
              color="secondary"
              endIcon={<ArrowForwardIosIcon fontSize="medium" />}
              sx={{ fontSize: "20px" }}
            >
              header text
            </Button>
            <div className="overflow-hidden">
              <p>
                Last year, the General Company for Electronic Systems witnessed
                a wonderful participation in the Baghdad International Security
                and Defense Exhibition, where the General Company for Electronic
                Systems (UR Products) participated in the exhibition and
                displayed many high-quality, Iraqi-made products according to
                international specifications in manufacturing and services, in
                the presence of government and economic figures.
              </p>
            </div>
            <div className="position-absolute bottom-0 mb-3">
             <ColorButton onClick={handLreadMore}>Read more</ColorButton>
            </div>
          </div>
          <div className="box"  data-aos="zoom-in" >
            {" "}
            <div>
              <Button
              onClick={handLreadMore}
                variant="text"
                color="secondary"
                endIcon={<ArrowForwardIosIcon fontSize="medium" />}
                sx={{ fontSize: "20px" }}
              >
                header text
              </Button>
              <p>
                Last year, the General Company for Electronic Systems witnessed
                a wonderful participation in the Baghdad International Security
                and Defense Exhibition, where the General Company for Electronic
                Systems (UR Products) participated in the exhibition and
                displayed many high-quality, Iraqi-made products according to
                international specifications in manufacturing and services, in
                the presence of government and economic figures.
              </p>
            </div>
            <div className="position-absolute bottom-0 mb-3 ">
             <ColorButton onClick={handLreadMore}>Read more</ColorButton>
            </div>
          </div>
          <div className="box" data-aos="zoom-in" >
            <Button
            onClick={handLreadMore}
              variant="text"
              color="secondary"
              endIcon={<ArrowForwardIosIcon fontSize="medium" />}
              sx={{ fontSize: "20px" }}
            >
              header text
            </Button>

            <div>
              <p>
                Last year, the General Company for Electronic Systems witnessed
                a wonderful participation in the Baghdad International Security
                and Defense Exhibition, where the General Company for Electronic
                Systems (UR Products) participated in the exhibition and
                displayed many high-quality, Iraqi-made products according to
                international specifications in manufacturing and services, in
                the presence of government and economic figures.
              </p>
            </div>
            <div className="position-absolute bottom-0 mb-3">
             <ColorButton onClick={handLreadMore}>Read more</ColorButton>
            </div>
          </div>
          <div className="box" data-aos="zoom-in" >
            <Button
            onClick={handLreadMore}
              variant="text"
              color="secondary"
              endIcon={<ArrowForwardIosIcon fontSize="medium" />}
              sx={{ fontSize: "20px" }}
            >
              header text
            </Button>

            <div>
              <p>
                Last year, the General Company for Electronic Systems witnessed
                a wonderful participation in the Baghdad International Security
                and Defense Exhibition, where the General Company for Electronic
                Systems (UR Products) participated in the exhibition and
                displayed many high-quality, Iraqi-made products according to
                international specifications in manufacturing and services, in
                the presence of government and economic figures.
              </p>
            </div>
            <div className="position-absolute bottom-0 mb-3">
             <ColorButton onClick={handLreadMore}>Read more</ColorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
