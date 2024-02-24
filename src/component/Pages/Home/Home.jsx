import React, { useEffect } from 'react'
import "./home.css"
import AOS from "aos";
import 'aos/dist/aos.css';
function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
<section id="hero" className="d-flex align-items-center">
    <video autoPlay muted loop id="myVideo">
      <source src="Video/video.mp4" type="video/mp4" />
    </video>
  <div className="container-fluid" data-aos="fade-up">
    <div className="row justify-content-center">
    <center data-aos="fade-right" className=" d-flex flex-column justify-content-center align-item-center">
      <h1>Bettter Digital Experience With Techie</h1>
      <h2>
        We are team of talented designers making websites with Bootstrap
      </h2>
      <div className=' dispalyButtonHomPAGE d-flex justify-content-center'>
        <a href="#about" className="btn-get-started scrollto">
          Get Started
        </a>
        <a href="#about" className="btn-get-started scrollto">
         Our Project
        </a>
      </div>
    </center>
    <div
    data-aos="fade-left"
      className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
      data-aos-delay={150}
    >
    </div>
  </div>
</div>
</section>
  )
}

export default Home
