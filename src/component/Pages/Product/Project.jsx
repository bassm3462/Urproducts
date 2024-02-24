import React, { useEffect } from "react";
import "../Event/Event.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ColorButton } from "../Config/contact";
import AOS from "aos";
import "aos/dist/aos.css";
function Project() {
  useEffect(() => {
    AOS.init();
  }, []);
  const handLreadMore = () => {
    window.location.href = "/EventDetails";
  };
  return (
    <div>
      <div className="Event" id="Event">
        <div className="d-flex justify-content-center mb-3 ">
          <h2>
            <a href="" className="mb-3">
              {" "}
              Our Project
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
                The General Company for Electronic Systems implemented an
                integrated project to design, equip, install, operate and
                program surveillance cameras for the General Authority of
                Customs, where the company's cadres, through manufacturing and
                assembly lines, implemented an integrated project in terms of
                design, preparation and implementation of the building of the
                General Authority for Customs in the area (Saadoun Park in
                Baghdad) with a system of Ur cameras It is considered the first
                government project with Iraqi protection products and from a
                government institution to a government institution
              </p>
            </div>
            <div className="position-absolute bottom-0 mb-3">
              <ColorButton onClick={handLreadMore}>Read more</ColorButton>
            </div>
          </div>
          <div className="box" data-aos="zoom-in">
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
                The General Company for Electronic Systems implemented an
                integrated project to design, equip, install, operate and
                program surveillance cameras for the General Authority of
                Customs, where the company's cadres, through manufacturing and
                assembly lines, implemented an integrated project in terms of
                design, preparation and implementation of the building of the
                General Authority for Customs in the area (Saadoun Park in
                Baghdad) with a system of Ur cameras It is considered the first
                government project with Iraqi protection products and from a
                government institution to a government institution
              </p>
            </div>
            <div className="position-absolute bottom-0 mb-3 ">
              <ColorButton onClick={handLreadMore}>Read more</ColorButton>
            </div>
          </div>
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
            <div>
              <p>
                The General Company for Electronic Systems implemented an
                integrated project to design, equip, install, operate and
                program surveillance cameras for the General Authority of
                Customs, where the company's cadres, through manufacturing and
                assembly lines, implemented an integrated project in terms of
                design, preparation and implementation of the building of the
                General Authority for Customs in the area (Saadoun Park in
                Baghdad) with a system of Ur cameras It is considered the first
                government project with Iraqi protection products and from a
                government institution to a government institution
              </p>
            </div>
            <div className="position-absolute bottom-0 mb-3">
              <ColorButton onClick={handLreadMore}>Read more</ColorButton>
            </div>
          </div>
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

            <div>
              <p>
                The General Company for Electronic Systems implemented an
                integrated project to design, equip, install, operate and
                program surveillance cameras for the General Authority of
                Customs, where the company's cadres, through manufacturing and
                assembly lines, implemented an integrated project in terms of
                design, preparation and implementation of the building of the
                General Authority for Customs in the area (Saadoun Park in
                Baghdad) with a system of Ur cameras It is considered the first
                government project with Iraqi protection products and from a
                government institution to a government institution
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

export default Project;
