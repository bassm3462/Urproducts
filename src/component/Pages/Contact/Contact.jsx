import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ColorButton } from "../Config/contact";
function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="contact" className="contact section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
          <div className="d-flex justify-content-center pt-4 mb-4 ">
              <h2><a href="#" className="mb-3">
                  Contact
                </a>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map" />
                <h3>Our Address</h3>
                <p> Iraq , Baghdad , Karadda/alsina'a street</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope" />
                <h3>Email Us</h3>
                <p> info@urproducts.iq</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call" />
                <h3>Call Us</h3>
                <p>+ 9647800009498</p>
                <p>+ 9647700009498</p>

              </div>
            </div>
          </div>
          <div className="displaycontactiframe">
            <div className="widthIframe ">
           
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.060885645877!2d44.44252277527503!3d33.315631819263245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155783a9ab92cdb3%3A0xfdf7a9a52c2c76a9!2sUr%20products!5e0!3m2!1sen!2siq!4v1706353901850!5m2!1sen!2siq"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="iframe"
              />
            </div>
            <div className="borderRedue">
              <form
                action=""
                method="post"
                role="form"
                className="email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                <ColorButton variant="contained">Submit </ColorButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
}

export default Contact;
