import React from "react";
import slide1 from './images/Slide_1.jpg'
import slide2 from './images/Slide_2.jpg'
import slide3 from './images/Slide_3.jpg'
import slide4 from './images/Slide_4.jpg'
const Carousel = () => {
    return (
        <>
            <div className="container" id="corousel_cont">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slide1} className="d-block w-100" alt="Slide 1" />
                                    <div className="card card-left-bottom">
                                        <div className="card-body">
                                            <h1 className="carousel_heading">Come Fall in Love</h1>
                                            <p>Get your spicy McCrispy Now</p>
                                            <button className="btn btn-primary">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={slide2} className="d-block w-100" alt="Slide 2" />
                                    <div className="card card-left-bottom">
                                        <div className="card-body">
                                            <h1 className="carousel_heading">Collect Points.</h1>
                                            <h1 className="carousel_heading">Get Rewarded.</h1>
                                            <p>The More Points You Collect, the more treats you enjoy.</p>
                                            <button className="btn btn-primary">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={slide3} className="d-block w-100" alt="Slide 3" />
                                    <div className="card card-left-bottom">
                                        <div className="card-body">
                                            <h1 className="carousel_heading">Order Your Favourites Right Now!</h1>
                                            <button className="btn btn-primary">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={slide4} className="d-block w-100" alt="Slide 4" />
                                    <div className="card card-left-bottom">
                                        <div className="card-body">
                                            <h1 className="carousel_heading">Points Zaroori Hai!</h1>
                                            <p>Earn Points On Every Delivery through Our Site.</p>
                                            <button className="btn btn-primary">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );




};
export default Carousel;