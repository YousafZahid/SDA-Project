import React from "react";
import lines from './images/line.png'
const Cravings = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src={lines} alt="Image lines" />
                    </div>
                    <div className="col-md-4" >
                        <h1 id="Craving_text">Latest Cravings</h1>
                    </div>
                    <div className="col-md-4">
                        <img src={lines} alt="Image lines" />
                    </div>
                </div>
            </div>
        </>
    );




};
export default Cravings;