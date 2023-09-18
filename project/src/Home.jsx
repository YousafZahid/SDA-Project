import React from "react";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Cravings from "./Cravings";
import BackgroundWithIcons from './BackGroundWithIcons';
const Home = () => {
    return (
        <>
            <Carousel />
            <Cravings />
            <Cards />
            <BackgroundWithIcons/>
        </>
    );




};
export default Home;