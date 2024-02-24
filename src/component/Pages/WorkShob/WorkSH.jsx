import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import {slideImages,spanStyle,divStyle,slidimage,slideContaner} from "../Config/contact"
import { Zoom } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Aos from"aos"
import "aos/dist/aos"
import "./WorkShopStyle.css"
const images = [
  'slider/1.jpg',
  'slider/3.jpg',
  'slider/3.jpg',
  'slider/5.jpg',
  'slider/2.jpg',
  'slider/1.jpg'
];
const WorkShop = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return (
    <div style={slideContaner}>
    <Zoom scale={0.4}
     overlayBgColorEnd="rgba(0, 0, 0, 0.8)"
     transitionDuration={600}
    >
    {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span  data-aos="zoom-in-down"style={spanStyle} className='mediPhone'>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Zoom>
    </div>
  );
};

export default WorkShop;