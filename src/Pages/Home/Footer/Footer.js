import React from "react";
import "./Footer.css";
// import footerBG from "./../../assets/images/footer-bg.png";
import payment from "../../../images/payment.jpg";
// import footerLogo from "./../../assets/images/footer-logo.png";
import footerLogo from "../../../images/logo4.png";
import { Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white my-5">
      <div className="py-4 gradient">
        <Container>
        <Row>
          {/* <Col md={12} lg={4}> */}
          {/* <Col md={12} lg={8}> */}
         
          <Col md={4}>
              <div className="text-center my-2">
                <img width="120px" src={footerLogo} alt="" />
              </div>

              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-1 fs-5">Danmondi,Kolabagan,Dhaka,Bangladesh</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-1 fs-5">
                    Official: anacar.gerez321@gmail.com
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-1 fs-5">
                    Helpline: 0177945232267(Available:10:00AM to 10.00PM)
                  </span>
                </li>
              </ul>
            {/* </Col> */}
            {/* <Col md={6}> */}
            {/* <div className="footer-social-link text-center"> 
                                <h3>Follow us</h3>
                               <ul>
                                    <li>
                                       <Link to="/" className="facebook">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/"  className="twitter">
                                             <FontAwesomeIcon icon={faTwitter} />
                                         </Link>
                                  </li>
                                    <li>
                                    <Link to="/"  className="google">
                                            <FontAwesomeIcon icon={faGooglePlusG} />
                                        </Link>
                                    </li>
                                     <li>
                                         <Link to="/" className="linkedin">                                             <FontAwesomeIcon icon={faLinkedinIn} />
                                        </Link>
                                     </li>
                                    <li>
                                         <Link to="/"className="instagram">
                                             <FontAwesomeIcon icon={faInstagram}/>
                                         </Link>                                    </li>
                               </ul>
                             </div>
                     {/* </Col> */}
            </Col> 
                
            <Col md={2}>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/policy">Products</NavLink>
                </li>
              </ul>
            </Col>

            <Col md={4}>
              <div className="">
                <img
                  className="img-fluid"
                  src={payment}
                  alt="payment methods"
                />
              </div>
              
            </Col>
          </Row> 
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Reserved by Ana-Car-Gerez -- Car Group in
        2021
      </p>
    </div>
  );
};

export default Footer;



// import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faAngleUp, faMapMarkedAlt, faPaperPlane, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import React, { useEffect, useState } from 'react';
// import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Logo from '../../../images/logo4.png';
// import './Footer.css';

// const Footer = () => {
//     // const [scrolled, setScrolled] = useState(false);

//     // const scrollHandler = () => {
//     //     window.scrollTo(500, 0);
//     // }

//     // useEffect(() => {
//     //     window.addEventListener("scroll", () => {
//     //         if (window.scrollY > 50) {
//     //             setScrolled(true)
//     //         } else {
//     //             setScrolled(false)
//     //         }
//     //     })
//     // }, []);

//     return (
//         <footer id="dk-footer" className="dk-footer">
//             <Container>
//                 <Row>
//                     <Col md={12} lg={4}>
//                         <div className="dk-footer-box-info">
//                             <Link to="/"className="footer-logo">
//                                 <div className="d-flex justify-content-center">
//                                     <img src={Logo} alt="footer_logo" height="160" />
//                                 </div>
//                                 <h3 className="text-center text-white mb-0">Ana-Car-Gerez</h3>
//                             </Link>
//                             <p className="footer-info-text">
//                                 Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
//                                 </p>
//                             <div className="footer-social-link">
//                                 <h3>Follow us</h3>
//                                 <ul>
//                                     <li>
//                                         <Link to="/" className="facebook">
//                                             <FontAwesomeIcon icon={faFacebookF} />
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/"  className="twitter">
//                                             <FontAwesomeIcon icon={faTwitter} />
//                                         </Link>
//                                     </li>
//                                     <li>
//                                     <Link to="/"  className="google">
//                                             <FontAwesomeIcon icon={faGooglePlusG} />
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/" className="linkedin">
//                                             <FontAwesomeIcon icon={faLinkedinIn} />
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/"className="instagram">
//                                             <FontAwesomeIcon icon={faInstagram} />
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col md={12} lg={8}>
//                         <Row>
//                             <Col md={6}>
//                                 <div className="contact-us">
//                                     <div className="contact-icon">
//                                         <FontAwesomeIcon icon={faMapMarkedAlt} />
//                                     </div>
//                                     <div className="contact-info">
//                                         <h3>Dhaka, Bangladesh</h3>
//                                         <p>Danmondi32,kolabagan Dhaka-1214</p>
//                                     </div>
//                                 </div>
//                             </Col>
//                             <Col md={6}>
//                                 <div className="contact-us contact-us-last">
//                                     <div className="contact-icon">
//                                         <FontAwesomeIcon icon={faPhoneVolume} />
//                                     </div>
//                                     <div className="contact-info">
//                                         <h3>+880-1910-820976</h3>
//                                         <p>Give us a call</p>
//                                     </div>
//                                 </div>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md={12} lg={6}>
//                                 <div className="footer-widget footer-left-widget">
//                                     <div className="section-heading">
//                                         <h3>Useful Links</h3>
//                                         <span className="animate-border border-black"></span>
//                                     </div>
//                                     <ul>
//                                         <li>
//                                             <Link to="/" >About us</Link>
//                                         </li>
//                                         <li>
//                                             <Link to="/">Services</Link>
//                                         </li>
//                                         <li>
//                                             <Link to="/">Products</Link>
//                                         </li>
//                                         <li>
//                                             <Link to="/">Our Team</Link>
//                                         </li>
//                                     </ul>
//                                     <ul>
//                                         <li>
//                                             <Link to="/">Contact us</Link>
//                                         </li>
//                                         <li>
//                                             <Link to="/" >Blog</Link>
//                                         </li>
//                                         <li>
//                                             <Link to="/">Reviews</Link>
//                                         </li>
//                                         <li>
//                                             <Link to="/">Faq</Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </Col>
//                             <Col md={12} lg={6}>
//                                 <div className="footer-widget">
//                                     <div className="section-heading">
//                                         <h3>Subscribe</h3>
//                                         <span className="animate-border border-black"></span>
//                                     </div>
//                                     <p>
//                                         Reference site about Lorem Ipsum, giving information on its origins, as well.
//                                         </p>
//                                     <Form>
//                                         <Form.Row>
//                                             <Col className="dk-footer-form">
//                                                 <Form.Control type="email" placeholder="Email Address" />
//                                                 <button type="submit">
//                                                     <FontAwesomeIcon icon={faPaperPlane} />
//                                                 </button>
//                                             </Col>
//                                         </Form.Row>
//                                     </Form>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Col>
//                 </Row>
//             </Container>
//             <div className="copyright">
//                 <Container>
//                     <Row>
//                         <Col md={6} className="order-2 order-md-1">
//                             <span>Copyright ©, All Rights Reserved Gerez</span>
//                         </Col>
//                         <Col md={6} className="order-1 order-md-2">
//                             <div className="copyright-menu">
//                                 <ul>
//                                     <li>
//                                         <Link to="/" >Home</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/" >Terms</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/" >Privacy Policy</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/" >Contact</Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//             <div className="back-to-top">
//                 <Button variant="dark"title="Back to Top">
//                     <FontAwesomeIcon icon={faAngleUp} />
//                 </Button>
//             </div>
//         </footer>
//     );
// };

// export default Footer;