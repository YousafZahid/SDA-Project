import React from "react";
import website_logo from './images/website_logo.jpg'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navigation-wrap">

                <div className="container">
                   <img className="img_adj" decoding="async" src={website_logo } />

                    <div id="div2">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">

                                <NavLink className="nav-link" to="about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="explore-food">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="reviews">Reviews</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#faq">FAQ</NavLink>
                            </li>


                        </ul>
                    </div>

                    <div className="left">

                        <NavLink className="right">Contact us</NavLink>


                        <NavLink to="/login">
                            <button className="but_style">Log In</button>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );




};
export default Navbar;