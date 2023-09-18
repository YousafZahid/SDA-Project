import React from "react";
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import { NavLink } from "react-router-dom";
const Cards = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-white bg-dark mb-3">
                            <img src={card1} alt="Image 1" />
                            <div className="card-body">
                                <h1 className="card-title" id="Card_heading">Ingredients</h1>
                                <p className="card-text">Discover the finest ingredients carefully selected for perfection.</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-dark mb-3">
                            <img src={card2} alt="Image 2" />
                            <div className="card-body">
                                <h1 className="card-title" id="Card_heading">Sign Up</h1>
                                <p className="card-text">Join us today! Sign up now and unlock exclusive benefits..</p>
                                <NavLink to="/signup">
                                    <button className="btn btn-primary">Sign Up</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-dark mb-3">
                            <img src={card3} alt="Image 3" />
                            <div className="card-body">
                                <h1 className="card-title" id="Card_heading">Order Now</h1>
                                <p className="card-text">Hungry? Order now and savor a delightful meal at your doorstep.</p>
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );




};
export default Cards;