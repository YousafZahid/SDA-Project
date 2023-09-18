import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <>
            <footer className="bg-white text-dark">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="mb-3">Our Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mb-3">Contact Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Suggestion</a></li>
                                <li><a href="#">Complains</a></li>
                                
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mb-3">Follow Us</h5>
                            <ul className="list-unstyled social-icons">
                                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p>&copy; 2023 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );




};
export default Footer;