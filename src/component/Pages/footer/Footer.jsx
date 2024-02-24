import React from "react";
import "./footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <>
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Techie</h3>
            <p>
              A108 Adam Street <br />
              New York, NY 535022
              <br />
              United States <br />
              <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Web Development</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright-wrap d-md-flex py-4">
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="https://twitter.com/ur_products1" className="twitter">
            <i><TwitterIcon/></i>
          </a>
          <a href="https://www.facebook.com/Ur.company12" className="facebook">
           <i><FacebookIcon/> </i>
          </a>
          <a href="https://www.linkedin.com/in/ur-products-66b475258/" className="instagram">
            
            <i><LinkedInIcon/></i>
          </a>
          <a href="https://www.instagram.com/ur_products__/" className="google-plus">
            <InstagramIcon/>
          </a>
          <a href="https://www.tiktok.com/@ur_products._?lang=en" className="">
          <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.youtube.com/channel/UCqxvnDwzJC6x0coluorZf2g" className="">
          <FontAwesomeIcon icon={faYoutube} />

          </a>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
</>

  );
}

export default Footer;
