import React, { useEffect } from "react";
import "./StyleProject/Project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LinkIcon from "@mui/icons-material/Link";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Product() {
  const Navigate=useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);
const handlRout =()=>{
Navigate("/projecttype")
}
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
          <div className="box"data-aos="zoom-in">
            <div className="image">
              <div className="displayLink">
              </div>
              <img
                src="https://urproducts.iq/media/products_img/msg162191912-140_wTEeIzy.jpg"
                alt=""
              />
            </div>
            <IconButton aria-label="product" className="displayName" onClick={handlRout}>camera</IconButton>{" "}
          </div>
          <div className="box"data-aos="zoom-in">
            <div className="image">
              <img
                src="https://urproducts.iq/media/products_img/addressable_bell-01.png"
                alt=""
              />
            </div>
            <IconButton aria-label="product" className="displayName">camera</IconButton>{" "}
          </div>
          <div className="box"data-aos="zoom-in">
            <div className="image">
              <img
                src="https://urproducts.iq/media/products_img/UR-HNB86R.jpg"
                alt=""
              />
            </div>
            <IconButton aria-label="product" className="displayName">camera</IconButton>{" "}
          </div>
          <div className="box"data-aos="zoom-in">
            <div className="image">
              <img
                src="https://urproducts.iq/media/products_img/PLC2.png"
                alt=""
              />
            </div>
            <div className="displayName">
              {" "}
              <IconButton aria-label="product" className="displayName" >camera</IconButton>{" "}
            </div>
          </div>
          <div className="box"data-aos="zoom-in">
            <div className="image">
              <img
                src="https://urproducts.iq/media/products_img/UR_Sip-VTA.jpg"
                alt=""
              />
            </div>
            <div className="displayName">
              {" "}
              <IconButton aria-label="product" className="displayName" >camera</IconButton>{" "}
            </div>
          </div>
          <div className="box"data-aos="zoom-in">
            <div className="image">
              <img
                src="https://urproducts.iq/media/products_img/1_clebYd8_QOueYKt.png"
                alt=""
              />
            </div>
            <div className="hidentext" style={{overflow:"hidden"}}>
              {" "}
              <IconButton aria-label="product" className="displayName">camera</IconButton>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
